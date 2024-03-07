import React from 'react';

function SidebarProps({ serviceIcon, serviceTitle }) {
  return (
    <>
      <div className='sidebar-info'>
        <div>{serviceIcon}</div>
        <div className='service-title'>{serviceTitle}</div>
      </div>

    </>
  )
}

export default SidebarProps;