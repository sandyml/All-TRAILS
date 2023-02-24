import React from 'react';
import Background from '../../img/icelake.jpg'
import Footer from '../static/Footer';
import LogoFooter from '../static/LogoFooter';

const Logout = () => {

  return (
    <body className='body-logout'>
    <div className="container-signout-div">
      <img src={Background} className="bg-image" alt="background" />
      <h1 className='text-home-h1'>YOU ARE NOW SIGNED OUT!</h1><br />
      <ul className="text-signout">
        <li>HAPPY HIKING!</li>
      </ul>
      <LogoFooter />
      <Footer className="Footer-Logout" />
    </div>
    </body>
  )
}

export default Logout;
