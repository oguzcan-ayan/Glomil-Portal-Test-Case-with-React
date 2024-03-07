import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

function WelcomePortal() {

    const scrollTo = () => {
        scroll.scrollTo(450);
    }

    return (
        <>
            <div className='welcome-to-portal-content'>

                <div className='welcome-to-portal-image'>

                </div>

                <div className='portal-entry'>

                    <h2 className='welcome-to-portal'>Portala Hoşgeldiniz</h2>

                    <div className='portal-info'>Basit, sezgisel ve güzel deneyimler oluşturmak için Portal'ın evrensel yazılım dilini kullanın.</div>

                    <div className='welcome-button-content'>
                        <button onClick={scrollTo}>Hadi başlayalım</button>
                    </div>

                </div>

            </div>


        </>
    )
}

export default WelcomePortal;