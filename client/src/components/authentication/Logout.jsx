import React from 'react';
import Background from '../../img/icelake.jpg'

const Logout = () => {

  return (
    <div className="container-signout-div">
      <img src={Background} className="bg-image" alt="background" />
      <h1 className='text-home-h1'>YOU ARE NOW SIGNED OUT!</h1><br />
      <ul className="text-signout">
        <li>HAPPY HIKING!</li>
      </ul>
    </div>
  )
}

export default Logout;
