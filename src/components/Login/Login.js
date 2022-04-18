import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='d-flex flex-column align-items-center justify-content-center login'>
            <h2>Login</h2>
            <label htmlFor="email"></label>
            <input type="email" placeholder='Enter your email'/>
            <label htmlFor="pass"></label>
            <input type="password" placeholder='Enter password'/>
            <button>Login</button>
        </div>
    );
};

export default Login;