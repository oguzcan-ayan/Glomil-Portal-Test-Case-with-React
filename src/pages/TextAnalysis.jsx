import React from 'react';
import ServiceCards from '../components/ServiceCards';
import { ImStatsDots } from "react-icons/im";
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../Tools/Breadcrumbs/Breadcrumb';

function TextAnalysis() {

    const sentimentAnalyze = 'Sentiment Analiz Sorgu Hizmeti';
    const serviceMessage = 'Our mission is to unleash the potential in every team.';
    const serviceButton = 'Ücretsiz Başlat';
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


    return (
        <>
            <Helmet>
                <title>Glomil Portal | Text Analizi</title>
                <meta name='description' content='text analysis page' />
            </Helmet>

            <Breadcrumb />

            <div className='sentiment-analyze-card'>
                <NavLink to="/services/text-analysis/sentiment">
                    <ServiceCards
                        serviceImage={<ImStatsDots />}
                        serviceHeader={sentimentAnalyze}
                        serviceMessage={serviceMessage}
                        serviceButton={serviceButton}
                        backgroundColor={backgroundColor}
                        width={width} height={height}
                        backgroundColorforIcon={backgroundColorforIcon}
                    />
                </NavLink>
            </div>

        </>
    )
}

export default TextAnalysis;