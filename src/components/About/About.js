import React from 'react';
import './About.css'
import Image from '../../Images/CYMERA_20210318_160801.jpg'

const About = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className='about'>
                <img src={Image} alt="user_image" className='user_img'/>
                <h4>About my Goals and Strategy</h4>
                <hr />
                <p>My first goal is to complete this course including SCIC. Get the expertise about all topics showen in this course. After completing the course i will look for job or an internship. While looking for jobs i will work on bigger projects to gain expertise. </p>
            </div>
        </div>
    );
};

export default About;