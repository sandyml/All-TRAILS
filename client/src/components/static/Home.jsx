import React from 'react'
import Background from '../../img/winter_hike.jpg'


const Home = () => {
  return (
    <div className="container-home-div">
      <img src={Background} className="bg-image-home" alt="background" />
      <div className='content-home'>
      <ul className="text-home">
        <li className='li-home-hike'>HIKE</li>
        <li className='li-home-explore'>
          <a href="http://localhost:4000/locations">
            EXPLORE
          </a>
          </li>
        <li className='li-home-views'>VIEWS</li>
      </ul>
      </div>
    </div>
  )
}

export default Home;