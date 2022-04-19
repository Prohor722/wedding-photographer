import React from 'react';
import './Home.css'
import Service from './Service/Service';

const Home = () => {

    //sample data for services
    const services= [ 
                        {id: 1, title: "Oneday Photography", price:300, des:"A full day photography with 250+ photos and a event slider video.", img: "https://www.zowed.com/blog/wp-content/uploads/2020/05/vt2.jpg"},

                        {id: 2, title: "Oneday Photography and Videography",price:500, des:"A full day photography with 250+ photos and videography of 1hour edited video.", img: "https://www.shaadidukaan.com/vogue/wp-content/uploads/2020/02/Feature-Image.jpeg"},

                        {id: 3, title: "Full event Photography and Videography",price:1200, des:"Full event photography with 500+ photos and videography of 2hour plus edited", img: "https://www.shaadidukaan.com/vogue/wp-content/uploads/2020/04/ajphotography-feature.jpeg"}
                    ]
    return (
        <div>
            {/* header part of banner and text */}
            <div className='banner-area row g-0'>
                <div className='col-md-8 d-flex flex-column align-items-center justify-content-center banner-text-area'>
                    <h1 className='banner-header display-1'>PhotoGallery</h1>
                    <p>making your dream wedding into reality...</p>
                </div>
                <div className='banner col-md-4'>
                    <img className='img-fluid' src="https://sanskritiweddings.com/storage/couple/6HDBMCosf3Vg0565pnGxTkgHmhyUY9y5yFg3HYcU.jpg" alt="weddingImage"/>
                </div>
            </div>

            {/* Services Section */}
            <div className='row g-0 mt-5'>
                <div className='col-md-5'>
                    <hr />
                </div>
                <div className='col-md-2'>
                    <h3>Services</h3>
                </div>
                <div className='col-md-5'>
                    <hr />
                </div>
            </div>
            <div className="services d-flex justify-content-center row row-cols-md-3 g-0 mt-3">
                {services.map(service=><Service key={service.id} service={service}></Service>)}
            </div>

            {/* Custom Section  */}
            <div className='row g-0 mt-5'>
                <div className='col-md-5'>
                    <hr />
                </div>
                <div className='col-md-2'>
                    <h3>Contact US</h3>
                </div>
                <div className='col-md-5'>
                    <hr />
                </div>
            </div>
            <div className='shadow text-center p-5 my-5'>
                <div className="images row row-cols-md-4 d-flex justify-content-center align-items-center">
                    <img src="https://ritabrata.com/wordpress/wp-content/uploads/2016/08/MG_0076.jpg" alt=""/>
                    <img src="https://cdn0.weddingwire.in/articles/images/9/0/8/6/img_16809/t30_creative-wedding-photography-avinash-dhoundhiyal-photography-lead-image.jpg" alt=""/>
                    <img src="https://1.bp.blogspot.com/-NclPuAAJSv8/XT_WAQWqLhI/AAAAAAAABuQ/L7XjkojIsrwl74zvdVU3kN5Si13612dZwCLcBGAs/s1600/professional-wedding%2B-photography.jpg" alt=""/>
                </div>
                <p className='mt-5'>Email: prohor.b722@gmail.com</p>
                <p>facebook : Prohor Banik</p>
            </div>

        </div>
    );
};

export default Home;