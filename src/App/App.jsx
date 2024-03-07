import React from 'react';
import '../App/App.scss';
import '../Responsive/Large Laptop-Large Desktop/Desktop.scss';
import '../Responsive/Laptop-Desktop/Laptop.scss';
import '../Responsive/Tablet-Large Tablet/Tablet.scss';
import '../Responsive/Large Mobile-Tablet/LMobile.scss';
import '../Responsive/Mobile/Mobile.scss';
import MainLayout from '../Layouts/MainLayout';
import { RouterProvider } from 'react-router-dom';
import router from '../Tools/Router/Router';

function App() {


  return (
    <>
      <RouterProvider router={router}>
        <MainLayout />
      </RouterProvider>
    </>
  )
}

export default App;
