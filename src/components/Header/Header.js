import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init'
import './Header.css'

const Header = () => {
    const [user] =useAuthState(auth);

    const logout = () => {
        signOut(auth);
      };
    return (
        <div className='nav d-flex justify-content-center align-items-center'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            {(user)? 
                <button className='logout' onClick={logout}>Logout</button>:
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            }
        </div>
    );
};

export default Header;