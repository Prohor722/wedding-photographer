import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const ResetPassword = () => {
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
      const [email, setEmail] = useState("");

      const getEmail = (e) =>{
        setEmail(e.target.value);
        console.log("email:",email);
    }
    const handleReset = (event) => {
        event.preventDefault();
        sendPasswordResetEmail(email);
        alert("Mail has been sent!!");
    }
    return (
        <div>
            <Form className='d-flex flex-column align-items-center justify-content-center login'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" onBlur={getEmail} placeholder="Enter email" required/>
                </Form.Group>
                
                <Button variant="primary" onClick={async () => 
                    {
                        await sendPasswordResetEmail(email); 
                        alert('Sent email');
                        }
                    }>
                    Reset
                </Button>
            </Form>
        </div>
    );
};

export default ResetPassword;