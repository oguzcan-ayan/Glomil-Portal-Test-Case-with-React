import React from 'react';
import ServiceProps from './ServiceProps';
import { TiTick } from "react-icons/ti";
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from '../Tools/Breadcrumbs/Breadcrumb';

function SentimentPage() {

  const serviceData =
  {
    serviceTitle: "Sentiment",
    serviceMessage: "Her algoritma farklı değer sonuçları vermektedir. İlgili alana istenilen bilgileri girerek sorgulama yapabilirsiniz.",
  }

  const notifyQuery = () => toast("Sorgulama Başarıyla Yapıldı!");

  return (
    <>

      <Helmet>
        <title>Glomil Portal | Sentiment</title>
        <meta name='description' content='sentiment page'></meta>
      </Helmet>

      <Breadcrumb />


      <div className='sentiment-container'>
        <ServiceProps serviceTitle={serviceData.serviceTitle} serviceMessage={serviceData.serviceMessage} />
      </div>
      <div className='query-field'>
        <h1>Sorgulama Alanı</h1>

        <div className='text-query-field'>
          <input type="text" placeholder='Enter long form text here' />
          <button type='button' className='query-btn' onClick={notifyQuery}>Sorgulama Yap</button>
        </div>

        <ToastContainer
          className="toastify-container"
          toastStyle={{ 'width': '100%', 'height': '20%' }}
          bodyStyle={{ 'fontSize': '1.5rem', 'color': 'black' }}
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="light"
          transition:Slide
        />

        <div className='query-result'>

          <div className='query-true-field'>
            <TiTick className='true-icon' />
          </div>

        </div>

      </div>

    </>
  )
}

export default SentimentPage;