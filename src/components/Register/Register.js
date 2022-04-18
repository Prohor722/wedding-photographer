import React from 'react';

const Register = () => {
    return (
        <div>
            <div className='d-flex flex-column align-items-center justify-content-center login'>
                <h2>Register Please</h2>
                <label htmlFor="name"></label>
                <input type="text" placeholder='Enter your name'/>
                <label htmlFor="email"></label>
                <input type="email" placeholder='Enter your email'/>
                <label htmlFor="pass"></label>
                <input type="password" placeholder='Enter password'/>
                <label htmlFor="cpass"></label>
                <input type="password" placeholder='Enter password again'/>
                <button>Register</button>
            </div>
        </div>
    );
};

export default Register;