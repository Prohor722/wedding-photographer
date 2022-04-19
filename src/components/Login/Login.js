import { hover } from '@testing-library/user-event/dist/hover';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    console.log(from);
    // redirect to home or previous location after login
    if(user){
        navigate(from, {replace: true});
    }
    // getting email address
    const getEmail = (e) =>{
        setEmail(e.target.value);
        console.log("email:",email);
    }
    // getting password
    const getPassword = (e) =>{
        setPassword(e.target.value)
        console.log("password:",password);}

    //login process
    const handleLogin = (event) =>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
    }

    //google sign in option 
    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
    if(googleUser) 
    {
        navigate(from, {replace:true});
    }
    
    const googleLogin = () =>{
        signInWithGoogle();
        console.log(googleUser);
    }

    return (
            <Form onSubmit={handleLogin} className='d-flex flex-column align-items-center justify-content-center login'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" onBlur={getEmail} placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onBlur={getPassword} placeholder="Password" required/>
                </Form.Group>
                <p className='text-danger'>{error?.message}</p>
                {loading && <p>Loading...</p>}
                <div>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>

                    {/* google login button  */}
                    <img type="button" onClick={googleLogin} className='google-icon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4mqpyZlsPfnmFCjSux93QSWqnSFuuIgcfHDD8-1V6pfqoxw6om3CycNnuttpIt40aYQ0&usqp=CAU" alt="googleIcon"/>

                    
                    <Link to="/reset">Reset Password?</Link>
                    <br/>
                    <Link to="/register">Register</Link>
                </div>
            </Form>
    );
}

export default Login;