import React from 'react';
import PortalBoxes from './PortalBoxes';

function PortalLiveProducts() {

    const blockExplorer = "Block Explorer";
    const dataIndex = "Data Index";
    const bridge = "Bridge";
    const portalSentiment = "Portal Sentiment";
    const portalNetwork = "Portal Network";
    const botsExplorer = "Bots Explorer";
    const translateEv = "Translate EV";
    const messagePortal = "Search for real-time and historical information about the blockchain.";
    const servicesPortal = "Hizmetleri Keşfedin";
    const borderRight = {
        borderRight: '2px solid black',
    }
    const borderBottom = {
        borderBottom: '2px solid black',
    }
    const borderBottom2 = {
        borderBottom: '1px solid black',
    }

    return (
        <>
            <div className='portal-live-products-content'>

                <h2 className='portal-live-products-header'>Portal Live Products</h2>

                <div className='portal-live-products-info'>Basit, sezgisel ve güzel deneyimler oluşturmak için Portal'ın evrensel yazılım dilini kullanın.</div>

                <div className='portal-live-boxes'>

                    <PortalBoxes boxname={blockExplorer} message={messagePortal} services={servicesPortal} />
                    <PortalBoxes boxname={dataIndex} message={messagePortal} services={servicesPortal} />
                    <PortalBoxes boxname={bridge} message={messagePortal} services={servicesPortal} borderRight={borderRight} />
                    <PortalBoxes boxname={portalSentiment} message={messagePortal} services={servicesPortal} borderBottom={borderBottom} />
                    <PortalBoxes boxname={portalNetwork} message={messagePortal} services={servicesPortal} borderBottom2={borderBottom2} />
                    <PortalBoxes boxname={botsExplorer} message={messagePortal} services={servicesPortal} borderRight={borderRight} borderBottom={borderBottom} />
                    <PortalBoxes boxname={translateEv} message={messagePortal} services={servicesPortal} borderRight={borderRight} borderBottom={borderBottom} />

                </div>

            </div>
        </>
    )
}

export default PortalLiveProducts;