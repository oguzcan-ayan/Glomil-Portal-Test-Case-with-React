import React from 'react';
import ServiceCards from './ServiceCards';
import { MdGTranslate } from "react-icons/md";
import { BsDisplay } from "react-icons/bs";
import { ImStatsDots } from "react-icons/im";
import { CgMenuGridR } from "react-icons/cg";
import { NavLink } from 'react-router-dom';

function PortalServices() {

  const sentimentAnalyze = 'Sentiment Analiz Sorgu Hizmeti';
  const bots = 'Bots Sorgu Hizmeti';
  const translateService = 'Translate Hizmeti';
  const aspectBase = 'Aspect Base Sentiment';
  const serviceMessage = 'Our mission is to unleash the potential in every team.';
  const serviceButton = 'Ücretsiz Başlat';

  const backgroundColor = {
    backgroundColor: 'white',
  }

  const width = {
    width: '15rem',
  }

  const height = {
    height: '25rem',
  }

  const backgroundColorforIcon = {
    backgroundColor: '#0252CC',
  }

  return (
    <>
      <div className='portal-services-content'>

        <div className='portal-services'>

          <h2>Portal Live Products</h2>

          <p>Basit, sezgisel ve güzel deneyimler oluşturmak için Portal'ın evrensel yazılım dilini kullanın.</p>

          <div className='service-cards-content'>
            <NavLink className="sentiment-live" to="/services/text-analysis/sentiment"><ServiceCards serviceImage={<ImStatsDots />} serviceHeader={sentimentAnalyze} serviceMessage={serviceMessage} serviceButton={serviceButton} backgroundColor={backgroundColor} width={width} height={height} backgroundColorforIcon={backgroundColorforIcon} /></NavLink>
            <NavLink className="bots-live" to="/services/bots"><ServiceCards serviceImage={<BsDisplay />} serviceHeader={bots} serviceMessage={serviceMessage} serviceButton={serviceButton} backgroundColor={backgroundColor} width={width} height={height} backgroundColorforIcon={backgroundColorforIcon} /></NavLink>
            <ServiceCards serviceImage={<MdGTranslate />} serviceHeader={translateService} serviceMessage={serviceMessage} serviceButton={serviceButton} backgroundColor={backgroundColor} width={width} height={height} backgroundColorforIcon={backgroundColorforIcon} />
            <ServiceCards serviceImage={<CgMenuGridR />} serviceHeader={aspectBase} serviceMessage={serviceMessage} serviceButton={serviceButton} backgroundColor={backgroundColor} width={width} height={height} backgroundColorforIcon={backgroundColorforIcon} />

          </div>

        </div>
      </div>
    </>
  )
}

export default PortalServices;