import React from 'react';
import LoadingImage from '../Images/loading.gif';
import './Loading.css'

const Loading = () => {
    return (
        <div className='loading-page d-flex align-items-center justify-content-center'>
            <img className='loading' src={LoadingImage} alt="loading" />
        </div>
    );
};

export default Loading;