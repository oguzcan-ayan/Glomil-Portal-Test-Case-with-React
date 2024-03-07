import React from 'react';
import PortalLiveProducts from '../components/PortalLiveProducts';
import PortalServices from '../components/PortalServices';
import WelcomePortal from '../components/WelcomePortal';

function HomePageLayout() {
  return (
    <>
      <WelcomePortal />
      <PortalLiveProducts />
      <PortalServices />
    </>
  )
}

export default HomePageLayout;