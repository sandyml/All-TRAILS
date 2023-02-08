import React from 'react';
import Background from '../../img/switzerland.png'

const Signout = () => {
  return (
    <div className="container-signout-div">
      <h1 className='text-home-h1'>YOU ARE NOT SIGNED OUT!</h1>
      <img src={Background} className="bg-image" alt="background" />
      <ul className="text-signout">
        <li>HAPPY</li>
        <li>HIKING!</li>
      </ul>
    </div>
  )
}

export default Signout;
