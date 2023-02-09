import React from 'react';
import { Link } from 'react-router-dom';
import { UserProvider } from '../context/UserContext';


const Navigation = () => {

 return (
  <UserProvider>
   <nav className='topnav'>
    <Link to="/home" className='topnav-nav'>Home</Link>
    <Link to="/about" className='topnav-nav'>About</Link>
    <Link to="/hike_trails" className='topnav-nav'>tRAILS</Link>
    <Link to="/signup" className='topnav-nav-sign'>Signup</Link>
    <Link to="/login" className='topnav-nav-sign'>Login</Link>
    <Link to="/logout" className='topnav-nav-sign'>Logout</Link>
    {/* <button className="loginBtn" onClick={handleLogin}>{login ? "Logout" : "Login"} /* </button> */}
   </nav>
  </UserProvider>
 );
}

export default Navigation;