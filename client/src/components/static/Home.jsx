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
    );
  } else {
    return (
      <div className="container-home-div">
        <img src={Background} className="bg-image-home" alt="background" />
        <div className='content-home'>
          <h1>Please <Link to="/login">Login</Link> or <Link to="/signup">Signup</Link></h1>
          <ul className="text-home">
            <li className='li-home-hike'>HIKE</li>
            <li className='li-home-explore'>

              {currentUser ? (
                <a href="http://localhost:4000/locations">
                  EXPLORE
                </a>) : (<li className='li-home-hike'>EXPLORE</li>)}

            </li>
            <li className='li-home-views'>VIEWS</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;