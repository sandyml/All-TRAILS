import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../../img/icelake.jpg'
import LogoutNav from '../navigation/LogoutNav';
import Footer from '../static/Footer';
import LogoFooter from '../static/LogoFooter';

const Logout = () => {
  return (
    <div className="container-signout-div">
      <LogoutNav />
      <img src={Background} className="bg-image" alt="background" />
      <Link to="/login" className='text-home-link'> Return to login!</Link>
      <LogoFooter />
      <Footer/>
    </div>
  )
}

export default Logout;
