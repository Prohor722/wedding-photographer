import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='row g-0'>
                <div className='col-md-8 d-flex flex-column align-items-center justify-content-center'>
                    <h1>PhotoGallery</h1>
                    <p>making your dream wedding into reality...</p>
                </div>
                <div className='banner col-md-4'>
                    <img className='img-fluid' src="https://sanskritiweddings.com/storage/couple/6HDBMCosf3Vg0565pnGxTkgHmhyUY9y5yFg3HYcU.jpg" alt="weddingImage"/>
                </div>
            </div>
        </div>
    );
};

export default Home;