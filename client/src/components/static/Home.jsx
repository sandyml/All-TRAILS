import React from 'react'
import Background from '../../img/hike.png'


const Home = () => {
  return (
    <div className="container-home-div">
      <h1 className='text-home-h1'>Welcome to All tRAILS</h1>
      <img src={Background} className="bg-image" alt="background" />
      <ul className="text-home">
        <li>HIKE</li>
        <li>EXPLORE</li>
        <li>VIEWS</li>
      </ul>
    </div>
  )
}

export default Home;