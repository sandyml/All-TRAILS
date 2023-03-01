import React from 'react'
import { Link } from 'react-router-dom';
import Background from '../../img/winter_hike.jpg'

const Home = ({ currentUser }) => {

  if (currentUser) {
    return (
      <div className="container-home-div">
        <img src={Background} className="bg-image-home" alt="background" />
        <div className='content-home'>
          <h1 className="li-home-explore">Hello {currentUser.account_name}! Ready to write a review?! </h1>
          <ul className="text-home">
            <ul className='ul-home-hike'>HIKE</ul>
            <ul className='ul-home-explore'>
              <a href="http://localhost:4000/locations">
                EXPLORE
              </a>
            </ul>
            <ul className='li-home-views'>VIEWS</ul>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container-home-div">
        <img src={Background} className="bg-image-home" alt="background" />
        <div className='content-home'>
          <h1>Please <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link></h1>
          <ul className="text-home">
            <ul className='li-home-hike'>HIKE</ul>
            <ul className='li-home-explore'>

              {currentUser ? (
                <a href="http://localhost:4000/locations">
                  EXPLORE
                </a>) : (<ul className='li-home-hike'>EXPLORE</ul>)}

            </ul>
            <ul className='li-home-views'>VIEWS</ul>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;