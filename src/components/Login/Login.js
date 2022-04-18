import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import './Login.css'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    if(user){
        navigate('/');
    }
    const getEmail = (e) =>{
        setEmail(e.target.value);
        console.log("email:",email);
    }
    const getPassword = (e) =>{
        setPassword(e.target.value)
        console.log("password:",password);}

    const handleLogin = (event) =>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
    }

    // const handleLoginWithGoogle = () =>{
    //     const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    //     signInWithGoogle();
    // }

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
                        Submit
                    </Button>
                    <img type="button" className='google-icon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4mqpyZlsPfnmFCjSux93QSWqnSFuuIgcfHDD8-1V6pfqoxw6om3CycNnuttpIt40aYQ0&usqp=CAU" alt="googleIcon"/>
                </div>
            </Form>
    );
}

export default Login;