import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Hiking from '../../img/hiking.png'
import { UserContext } from '../context/UserContext';

const Navigation = () => {
  const { currentUser, handleOnLogout } = useContext(UserContext);

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE"
    }).then((r) => {
      if (r.ok) {
        handleOnLogout()
      }
    });
  }

  return (
    <div className='topnav'>
      <Link to="/locations"><img src={Hiking} className="hike-image-nav" alt="background" /></Link>
      <Link to="/locations" className='topnav-nav-p'><h1 className='h1-nav'>AlltRAILS</h1></Link>
      <Link to="/locations" className='mouse-cursor-gradient-tracking'><span>Reviews</span></Link>
      <Link to="/about" className='mouse-cursor-gradient-tracking'><span>About</span></Link>
      <div>
        {currentUser && currentUser.id ? (
          <div>
            <Link to="/logout" className='topnav-nav-sign' onClick={handleLogout}>Logout</Link>
            <span className='welcome-h1'>Welcome, {currentUser.account_name}!</span>
          </div>
        ) : (
          <div>
            <Link to="/" className='topnav-nav'>Home</Link>
            <Link to="/signup" className='topnav-nav-sign'>Signup</Link>
            <Link to="/login" className='topnav-nav-sign'>Login</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navigation;