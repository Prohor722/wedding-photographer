import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='nav d-flex justify-content-center align-items-center'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
};

export default Header;