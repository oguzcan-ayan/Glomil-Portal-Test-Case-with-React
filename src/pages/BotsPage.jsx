import React from 'react';
import ServiceProps from './ServiceProps';
import { TiTick } from "react-icons/ti";
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from '../Tools/Breadcrumbs/Breadcrumb';

function BotsPage() {

  const serviceData =
  {
    serviceTitle: "Bots",
    serviceMessage: "Her algoritma farklı değer sonuçları vermektedir. İlgili alana istenilen bilgileri girerek sorgulama yapabilirsiniz.",
  }

  const notifyQuery = () => toast("Sorgulama Başarıyla Yapıldı!");

  return (
    <>

      <Helmet>
        <title>Glomil Portal | Bots</title>
        <meta name='description' content='bots page'></meta>
      </Helmet>

      <Breadcrumb />

      <div className='bots-container'>
        <ServiceProps serviceTitle={serviceData.serviceTitle} serviceMessage={serviceData.serviceMessage} />
      </div>

      <div className='algorithm-field-info'>
        <h1>Algoritma Seçiniz</h1>
        <label>Algoritma Tipini Seçiniz *</label>
      </div>

      <div className='algorithm-field'>
        <div>
          <div className='user-algorithm'>
            <div className='bot-user-algorithm'>
              <select>
                <option value="default">Bot Kullanıcı Algoritması</option>
                <option value="user1">User1</option>
                <option value="user2">User2</option>
                <option value="user3">User3</option>
                <option value="user4">User4</option>
              </select>
            </div>

            <div className='user-count-container'>

              <div>
                <input type="text" placeholder='UserCount' />
              </div>

              <div>
                <input type="text" placeholder='UserCount' />
              </div>

              <div>
                <input type="text" placeholder='UserCount' />
              </div>

              <div>
                <input type="text" placeholder='UserCount' />
              </div>

              <div className='algorithm-btn-content'>
                <button className='algorithm-btn' onClick={notifyQuery}>Sorgulama Yap</button>
              </div>

            </div>

          </div>

          <div className='algorithm-result'>
            <h1>Bot Kullanıcı Algoritması Sonucu</h1>

            <div className='algorithm-result-box'>

              <div className='algorithm-true-field'>
                <TiTick className='true-icon' />
              </div>

              <div className='algorithm-result-text-box'>
                <p className='algorithm-result-text'>This text is positive</p>
                <span className='algorithm-ratio'>%96 Bots.</span>
              </div>

            </div>
          </div>
        </div>
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
    </>
  )
}
export default BotsPage;