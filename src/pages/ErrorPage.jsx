import React from 'react';
import { TbError404 } from "react-icons/tb";
import { BiSolidError } from "react-icons/bi";
import { IoArrowBack } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function ErrorPage() {

    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title>Portal Error</title>
                <meta name='description' content='error page'></meta>
            </Helmet>
            <div className='error-container'>

                <div className='error-image'>
                    <img className='glomil-logo' src='assets/img/glomil-logo.png' alt="glomil-site-logo" />
                </div>
                <div className='error-content-first'>
                    <h1>ERROR</h1>
                    <div className='error-404-content'>
                        <TbError404 className='error-404' />
                    </div>
                    <div className='page-not-found'>
                        ERROR REASON : PAGE NOT FOUND
                    </div>
                </div>

                <div className='error-content-second'>
                    <div className='exclamation-content'>
                        <BiSolidError className='error-exclamation' />
                    </div>
                    <h2>Error Type</h2>
                    <span className='error-reason'>
                        The content you requested cannot be found or may have been removed.
                    </span>

                    <div className='exit-btns-from-error-page'>
                        <button onClick={() => navigate(-1)} className='go-back-btn'><IoArrowBack className='go-back-icon' />Go Back</button>
                        <button onClick={() => navigate("/")} className='go-to-home-page-btn'><FaHome className='go-to-home-page-icon' />Homepage</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorPage;