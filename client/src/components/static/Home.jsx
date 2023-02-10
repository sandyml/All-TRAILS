import React from 'react'
import Background from '../../img/hike.png'


const Home = () => {
  return (
    <div className="container-home-div">
      {/* <h1 className='text-home-h1'>Welcome to AlltRAILS</h1> */}
      <img src={Background} className="bg-image" alt="background" />
      <div className='content-home'>
      <ul className="text-home">
        <li className='li-home-hike'>HIKE</li>
        <li className='li-home-explore'>
          <a href="http://localhost:4000/hike_trails">
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