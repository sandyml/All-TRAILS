import React from 'react';
// import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserProvider } from '../context/UserContext';
// import { useNavigate, Link } from 'react-router-dom';
// import { UserContext, UserProvider } from '../context/UserContext';
// import { headers } from '../../Global';
// import Home from '../static/Home';
// import Signup from '../authentication/Signup';


const Navigation = () => {
 // const navigate = useNavigate()
 // const { logout } = useContext(UserContext)
 // const { login, logout, loggedIn, signup } = useContext(UserContext)

 // const logoutUser = () => {
 //  fetch('/logout', {
 //   method: 'DELETE',
 //   headers,
 //  })
 //   .then(() => {
 //    logout()
 //    navigate('/home')
 //   })
 // }

 return (
  <UserProvider>
   <nav className='topnav'>
    <Link to="/home" className='topnav-nav'>Home</Link>
    <Link to="/about" className='topnav-nav'>About</Link>
    <Link to="/hike_trails" className='topnav-nav'>Hikes</Link>
    <Link to="/signup" className='topnav-nav'>Signup</Link>
    <Link to="/login" className='topnav-nav'>Login</Link>
    <Link to="/logout" className='topnav-nav'>Logout</Link>
    {/* <button className="loginBtn" onClick={handleLogin}>{login ? "Logout" : "Login"} */}
    {/* </button> */}
   </nav>
  </UserProvider>
 );
}

export default Navigation;