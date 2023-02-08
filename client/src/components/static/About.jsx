import React from 'react';
import backgroundVideo from '../../video/SandraYunsVideo.mp4'

const About = () => {
  return (
    <div className="about-div" >
      <div className='overlay'></div>
      <video autoPlay loop muted id='video'>
        <source src={backgroundVideo} type='video/mp4' />
      </video>
      <div className='content'>
      <h2>About Hike tRAILS</h2>
      <p>All tRAILS was inspired by AllTrails Website. Completely fictional with real and fake reviews from friends</p>
      </div>
    </div>
  )
}

export default About;