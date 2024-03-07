import React from 'react';

function ServiceCards({ serviceImage, serviceHeader, serviceMessage, serviceButton, backgroundColor, width, height, backgroundColorforIcon }) {

    const styles = {
        ...backgroundColor,
        ...width,
        ...height,
    }

    const backgroundColorforIcons = {
        ...backgroundColorforIcon,
    }

    return (
        <>
            <div className='service-cards' style={styles}>

                <div className='service-cards-image' style={backgroundColorforIcons}>{serviceImage}</div>

                <h2 className='service-cards-header'>{serviceHeader}</h2>

                <p className='service-cards-message'>{serviceMessage}</p>

                <button className='service-cards-btn'>{serviceButton}</button>

            </div>



        </>
    )
}

export default ServiceCards;