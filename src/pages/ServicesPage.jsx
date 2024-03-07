import React from 'react';
import ServiceCards from '../components/ServiceCards';
import { MdGTranslate } from "react-icons/md";
import { BsDisplay } from "react-icons/bs";
import { ImStatsDots } from "react-icons/im";
import { CgMenuGridR } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { animateScroll as scroll } from 'react-scroll';
import Breadcrumb from '../Tools/Breadcrumbs/Breadcrumb';

function ServicesPage() {


  const sentimentAnalyze = 'Sentiment Analiz Sorgu Hizmeti';
  const bots = 'Bots Sorgu Hizmeti';
  const translateService = 'Translate Hizmeti';
  const aspectBase = 'Aspect Base Sentiment';
  const serviceMessage = 'Our mission is to unleash the potential in every team.';
  const serviceButton = 'Ücretsiz Başlat';
  const servicesPortal = "Hizmetleri Keşfedin";

  const backgroundColor = {
    backgroundColor: 'white',
  }

  const width = {
    width: '20rem',
  }

  const height = {
    height: '25rem',
  }

  const backgroundColorforIcon = {
    backgroundColor: '#0252CC',
  }

  const scrollTo = () => {
    scroll.scrollTo(100);
  }

  return (
    <>
      <Helmet>
        <title>Glomil Portal | Hizmetler</title>
        <meta name='description' content='services page'></meta>
      </Helmet>

      <div className='services-container'>
        <Breadcrumb />
        <h1>Ücretsiz Paketlere Göz Atın</h1>
        <p>Temeller, ilgi çekici düzenler ve uçtan uca kullanıcı deneyimleri oluşturmak için gereken yazılımsal öğelerdir.</p>
        <div>
          <a onClick={scrollTo}>{servicesPortal}</a>
          <span><FaArrowRight className='service-arrow' /></span>
        </div>
      </div>

      <div className='services-content'>
        <div className='service-cards-content'>
          <NavLink className="sentiment-card" to="/services/text-analysis/sentiment"><ServiceCards serviceImage={<ImStatsDots />} serviceHeader={sentimentAnalyze} serviceMessage={serviceMessage} serviceButton={serviceButton} backgroundColor={backgroundColor} width={width} height={height} backgroundColorforIcon={backgroundColorforIcon} /></NavLink>
          <NavLink className="bots-card" to="/services/bots"><ServiceCards serviceImage={<BsDisplay />} serviceHeader={bots} serviceMessage={serviceMessage} serviceButton={serviceButton} backgroundColor={backgroundColor} width={width} height={height} backgroundColorforIcon={backgroundColorforIcon} /></NavLink>
          <ServiceCards serviceImage={<MdGTranslate />} serviceHeader={translateService} serviceMessage={serviceMessage} serviceButton={serviceButton} backgroundColor={backgroundColor} width={width} height={height} backgroundColorforIcon={backgroundColorforIcon} />
          <ServiceCards serviceImage={<CgMenuGridR />} serviceHeader={aspectBase} serviceMessage={serviceMessage} serviceButton={serviceButton} backgroundColor={backgroundColor} width={width} height={height} backgroundColorforIcon={backgroundColorforIcon} />

        </div>
      </div>

    </>
  )
}

export default ServicesPage;