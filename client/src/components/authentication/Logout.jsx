import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../../img/icelake.jpg'
import Footer from '../static/Footer';
import LogoFooter from '../static/LogoFooter';

const Logout = () => {
  return (
    <div className="container-signout-div">
      <img src={Background} className="bg-image" alt="background" />
      <h1 className='text-home-h1'>YOU ARE NOW SIGNED OUT!</h1><br />
      <ul className="text-signout">
        <li>HAPPY HIKING!</li>
        <Link to="/login" className='text-logout'>Return to login!</Link>
      </ul>
      <LogoFooter />
      <Footer className="Footer-Logout" />
    </div>
  )
}

export default Logout;
