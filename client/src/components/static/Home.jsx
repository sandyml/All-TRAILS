import React, { useContext } from 'react'
import Background from '../../img/winter_hike.jpg'
import { UserContext } from '../context/UserContext'


const Home = () => {
  const { user } = useContext(UserContext);

  if (user) {
    return (
      <div className="container-home-div">
        <img src={Background} className="bg-image-home" alt="background" />
        <div className='content-home'>
          <h1 className="li-home-explore">Welcome, {user.account_name}!</h1>
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
          <h1 li-home-explore>Please Login or Sign Up</h1>
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
      </div>);
  }
}

export default Home;