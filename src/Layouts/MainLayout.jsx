import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';

function MainLayout() {

  return (
    <>
      <Helmet>
        <title>Glomil Portal</title>
        <meta name='description' content='homepage'></meta>
      </Helmet>
      <Header />
      <Outlet />
      <Footer />
    </>

  )
}

export default MainLayout;