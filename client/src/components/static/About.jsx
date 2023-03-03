import React, { useContext, useEffect } from 'react';
import HikeViews from '../../img/hikeviews.jpg';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const About = () => {
  const navigate = useNavigate();
  const { loading, loggedIn } = useContext(UserContext);

  // extra authentication / authorization
  useEffect(() => {
    if(!loading && !loggedIn) {
      navigate('/')
    }
     // eslint-disable-next-line
  },[loading, loggedIn])

  return (
    <div className="about-div" >
      <div className='overlay'></div>
      <img src={HikeViews} alt='background' className='bg-image-about' />
      <div className='content'>
          <div className="testimonial-heading-a">
            <span className='about-text'>This Hike T<b>RAILS</b> Application is completely fictional with fictional reviews. <hr /></span>
            <p className='about-text'>Review page with Hike Trails. Inside the Review page, you'll have access to add, edit, or delete your review(s).</p>
            <p className='about-text'>Add more content in about page!!!</p>
          </div>
      </div>
    </div>
  )
}

export default About;