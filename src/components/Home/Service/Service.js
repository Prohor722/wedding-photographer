import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {  title, price, des, img } = service;
    return (
        <div className='service shadow'>
            <img src={img} alt="serviceImage" className='img-fluid' />
            <h3 className='my-3'>${price}</h3>
            <h4>{title}</h4>
            <p>{des}</p>
            <Link to='/booking' type='button' className='book-now'>Book Now</Link>
        </div>
    );
};

export default Service;