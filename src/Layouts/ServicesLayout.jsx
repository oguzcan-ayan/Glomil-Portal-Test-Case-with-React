import React from 'react';
import Sidebar from '../pages/Sidebar';
import { Outlet } from 'react-router-dom';

function ServicesLayout() {
  return (
    <>
      <div className='services-layout'>
        <Sidebar />
        <div className='services-outlet-container'>
          <Outlet />
        </div>
      </div>

    </>
  )
}

export default ServicesLayout;