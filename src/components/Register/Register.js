import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'

const Register = () => {

    //create or register function
    const [createUserWithEmailAndPassword,user,loading ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const navigate =  useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [ error, setError ] = useState({});

    if(user){
        navigate('/');
    }

    //function to get email 
    const getEmail = (e) =>{
        setEmail(e.target.value);
        console.log("email:",email);
    }
    //function to get password 
    const getPassword = (e) =>{
        setPassword(e.target.value)
        console.log("password:",password);
    }
    //function to get confirm password 
    const getConfirmPassword = (e) =>{
        setConfirmPassword(e.target.value)
        console.log("confirm password:",confirmPassword);
    }
    //register function
    const handleRegister = event =>{
        event.preventDefault();
        const e = {};
        if(password && password.length<6){
            e.password = "Password must be at least 6 digit.";
        }
        if(password!==confirmPassword){
            e.cpass = "Password and Confirm password did not match.";
        }
        setError(e);
        if(!error.password && !error.cpass){
            createUserWithEmailAndPassword(email,password);
        }
    }
    return (
        <div>
            <Form onSubmit={handleRegister} className='d-flex flex-column align-items-center justify-content-center login'>
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
                <p className='text-danger'>{error.password}</p>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" onBlur={getConfirmPassword} placeholder="Enter Password Again" required/>
                </Form.Group>
                <p className='text-danger'>{error.cpass}</p>
                {loading && <p>Loading....</p>}
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                
                <Link to="/reset">Reset Password?</Link>
                <br/>
                <Link to="/login">Login</Link>
            </Form>
        </div>
    );
};

export default Register;