import React from 'react';
import './Home.css'
import Service from './Service/Service';

const Home = () => {
    const services= [ 
                        {id: 1, title: "Oneday Photography", price:300, des:"A full day photography with 250+ photos and a event slider video.", img: "https://www.zowed.com/blog/wp-content/uploads/2020/05/vt2.jpg"},

                        {id: 2, title: "Oneday Photography and Videography",price:500, des:"A full day photography with 250+ photos and videography of 1hour edited video.", img: "https://www.shaadidukaan.com/vogue/wp-content/uploads/2020/02/Feature-Image.jpeg"},

                        {id: 3, title: "Full event Photography and Videography",price:1200, des:"Full event photography with 500+ photos and videography of 2hour plus edited", img: "https://www.shaadidukaan.com/vogue/wp-content/uploads/2020/04/ajphotography-feature.jpeg"}
                    ]
    return (
        <div>
            <div className='banner-area row g-0'>
                <div className='col-md-8 d-flex flex-column align-items-center justify-content-center'>
                    <h1>PhotoGallery</h1>
                    <p>making your dream wedding into reality...</p>
                </div>
                <div className='banner col-md-4'>
                    <img className='img-fluid shadow' src="https://sanskritiweddings.com/storage/couple/6HDBMCosf3Vg0565pnGxTkgHmhyUY9y5yFg3HYcU.jpg" alt="weddingImage"/>
                </div>
            </div>

            <h3 className='mt-5'>Services</h3>
            <div className="services d-flex justify-content-center row row-cols-md-3 g-0 mt-3">
                {services.map(service=><Service key={service.id} service={service}></Service>)}
                {/* <Service></Service>
                <Service></Service>
                <Service></Service> */}
            </div>


        </div>
    );
};

export default Home;