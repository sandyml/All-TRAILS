import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext, UserProvider } from '../context/UserContext';
import Hiking from '../../img/hiking.png'

const Navigation = () => {
 const { logout, loggedIn } = useContext(UserContext);

 const handleLogout = () => {
  console.log("Logout clicked!")
   fetch('/logout', {
     method: "DELETE"
   })
     .then(() => {
       logout()
     })
 }

 return (
  <div>
  <UserProvider>
   <nav className='topnav'>
    <Link to="/locations"><img src={Hiking} className="hike-image-nav" alt="background" /></Link>
    <Link to="/locations" className='topnav-nav'><h1>AlltRAILS</h1></Link>
    <Link to="/locations" className='topnav-nav'>Reviews</Link>
    <Link to="/about" className='topnav-nav'>About</Link>
    <Link to="/home" className='topnav-nav'>Home</Link>
    <Link to="/signup" className='topnav-nav-sign'>Signup</Link>
    <div>
     {
     loggedIn ?
     <Link to="/logout" className='topnav-nav-sign' onClick={handleLogout}>Logout</Link> 
      :
     <Link to="/login" className='topnav-nav-sign'>Login</Link> 
     }
    </div>
   </nav>
  </UserProvider>
  </div>
 );
}

export default Navigation;