import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const { id, title, price, des, img } = service;
    console.log(id);
    return (
        <div className='service shadow'>
            <img src={img} alt="serviceImage" className='img-fluid' />
            <h3 className='my-3'>${price}</h3>
            <h4>{title}</h4>
            <p>{des}</p>
            <button className='book-now'>Book Now</button>
        </div>
    );
};

export default Service;