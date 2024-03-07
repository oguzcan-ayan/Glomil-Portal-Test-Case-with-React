import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { animateScroll as scroll } from 'react-scroll';

function PortalBoxes({ boxname, message, services, borderRight, borderBottom, borderBottom2 }) {

    const borders = {
        ...borderRight,
        ...borderBottom,
        ...borderBottom2,
    }

    const scrollTo = () => {
        scroll.scrollTo(1000);
    }

    return (
        <>
            <div className='portal-live-box' style={borders}>

                <h3>{boxname}</h3>

                <div className='portal-live-messages'>
                    {message}

                    <div>
                        <a onClick={scrollTo}>{services}</a>
                        <span className='service-arrow-content'><FaArrowRight className='service-arrow' /></span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PortalBoxes;