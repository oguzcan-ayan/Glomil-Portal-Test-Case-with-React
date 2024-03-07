import React from 'react';
import ResponsiveHeader from './ResponsiveHeader';
import { NavLink } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { IoArrowUp } from "react-icons/io5";

function Header() {

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <div className='portal-header'>
                <NavLink to="/">
                    <img className='glomil-logo' src="src\assets\img\glomil-logo.png" alt="glomil-site-logo" />
                </NavLink>

                <ResponsiveHeader />

                <a className='scroll-to-top-btn' onClick={scrollToTop}><IoArrowUp className='arrow-up' /></a>
            </div>
        </>
    )
}

export default Header;