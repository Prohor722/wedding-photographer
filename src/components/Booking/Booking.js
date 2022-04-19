import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
    const navigate = useNavigate();
    const handleSubmit = (event) =>{
        event.preventDefault();
        alert("Booking Done!");
        navigate('/');
    }
    return (
        <Form onSubmit={handleSubmit} className='d-flex flex-column align-items-center justify-content-center login'>
                <Form.Group className="mb-3" controlId="formBasicDate">
                    <Form.Label>Event Date</Form.Label>
                    <Form.Control type="date" placeholder="Enter date" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDays">
                    <Form.Label>Number of Days</Form.Label>
                    <Form.Control type="number" placeholder="Enter number of days" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter Event Location" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required/>
                </Form.Group>
            
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
    );
};

export default Booking;