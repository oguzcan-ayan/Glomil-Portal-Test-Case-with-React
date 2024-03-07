import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className='footer-content'>

        <NavLink to="/">@ 2024 Glomil Portal</NavLink>

        <span>Careers</span>

        <span>Trademark</span>

        <span>Privacy</span>

        <span>License</span>

      </div>

    </>
  )
}

export default Footer;