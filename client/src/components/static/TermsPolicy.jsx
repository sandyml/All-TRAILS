import React from 'react'
import { Link } from 'react-router-dom';

const TermsPolicy = () => {
 return (
  <div><br/>
   <h1>Terms and Conditions of Use</h1><br />
   <h5>All Pretend</h5><br />
   <span>
    By using this RAILS fake website, you (pretend) agree to the following terms, conditions and privacy policy.
   </span><br/>
   <br/>
   <h3>General Provisions</h3>
   <p>
    Thsi website is owned and operated by Sandra Yun TRAILS, a New York company. Our principal place of business is located at 2222 Waverly Place, Pretent St, New York, New York 88888.
    You must be at least eighteen years of age to use our website. Use of this website is at your own risk. We host our site on a reputable platform and take reasonable efforts to maintain and host the site. However, we make no explicit representations or warranties as to the safety or vour individual use of the website. The terms, conditions and privacy policy contained on this page is subject to change at any time.
   </p><br/>
   <h3>Intellectual Property Notice</h3>
   <p>
    All images, text, designs, graphics, trademarks and service marks are owned by and property of Sandra Yun TRAILS, or the properly attributed party. It is a violation of federal law to use any of our intellectual property in whole or in part, and modification of any materials contained on this site is illegal and may be prosecuted to the fullest extent permissible should we choose to do so, including asking for financial penalties (damages) and/or an injunction forcing you to stop using our intellectual property immediately.
   </p><br/>
   <h4>Choose between (1) or (2);</h4>
   <p>
   (1) You may use our intellectual property with clear and obvious credit back to our site, as well links back to the page where the materials, designs, images, text, quote or post is located when it is appropriate to do so. However, you may never claim any of our intellectual property as your
own or your unique creation, even with attribution.
   </p><br/>
   <p>
   (2) You may NOT use our intellectual property in any way, which includes republishing any text, image, design or other property on another website, or posting a quote or image from our site to any third party website including social media. We have spent lots of time and money building the intellectual property located on this site and in order to maintain the integrity of it, we cannot allow any third party use.
   </p><br/><br/>
   <Link to="/signup">&nbsp; <h5>If Agree, please return to signup (click here)</h5></Link>
  </div>
 )
}

export default TermsPolicy;