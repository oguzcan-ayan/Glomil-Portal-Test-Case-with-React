import React from 'react';

function ServiceProps({ serviceTitle, serviceMessage }) {
  return (
    <>
      <div className='sentiment-bots-info'>
        <h1>{serviceTitle}</h1>
        <p>{serviceMessage}</p>
      </div>
    </>
  )
}

export default ServiceProps;