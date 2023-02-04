import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar-div'>
      <ul className='navbar-ul'>
       <Link to='/'>HOME</Link>
       <Link to='/about'>ABOUT</Link>
       <Link to='/hike_trails'>HIKE DASHBOARD</Link>
       <Link to='/hike_trails/new'>+ ADD REVIEW</Link>

       <Link to='/authentication'>SIGNIN/SIGNOUT(AUTHENTICATION</Link>
      </ul>
    </div>
  )
}

export default Navbar;