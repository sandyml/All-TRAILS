import React from 'react'
import FooterLogo from '../../img/github-mark.png'
import LinkedinLogo from '../../img/linkedinlogo.png'

const LogoFooter = () => {
 return (
  <div>
   <a href="https://www.linkedin.com/in/sandra-y-2b672119b/">
    <img src={LinkedinLogo} alt='footer-logo' className='footer-logo' /> &nbsp;
   </a>&nbsp;
   <a href='https://github.com/sandyml' >
    <img src={FooterLogo} alt='footer-logo' className='footer-logo' />
   </a>
  </div>
 )
}

export default LogoFooter