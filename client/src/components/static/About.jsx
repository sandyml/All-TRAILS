import React from 'react';
import HikeViews from '../../img/hikeviews.jpg'
// import backgroundVideo from '../../video/SandraYunsVideo.mp4'

const About = () => {
  return (
    <div className="about-div" >
      <div className='overlay'></div>
      <img src={HikeViews} alt='background' className='bg-image-about' />
      {/* <video autoPlay loop muted id='video'>
        <source src={backgroundVideo} type='video/mp4' />
      </video> */}
      <div className='content'>
        <p className='about-p'>
          All tRAILS was inspired by AllTrails Website. Completely fictional with real and fake reviews from friends
        </p>
      </div>
    </div>
  )
}

export default About;