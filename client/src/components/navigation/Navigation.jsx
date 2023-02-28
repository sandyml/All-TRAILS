import React from 'react';
import { Link } from 'react-router-dom';
import Hiking from '../../img/hiking.png'
// import { UserContext } from '../context/UserContext';
// import React, { useContext } from 'react';

const Navigation = ({ setCurrentUser, currentUser }) => {
  // const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE"
    }).then((r) => {
      if (r.ok) {
        setCurrentUser(null)
        // setUser(null);
      }
    });
  }

  return (
    <nav className='topnav'>
      <div>
        <Link to="/locations"><img src={Hiking} className="hike-image-nav" alt="background" /></Link>
        <Link to="/locations" className='topnav-nav'><h1 className='h1-nav'>AlltRAILS</h1></Link>
        <Link to="/" className='topnav-nav'>Home</Link>
        <Link to="/locations" className='topnav-nav'>Reviews</Link>
        <Link to="/about" className='topnav-nav'>About</Link>
        <div>
          {currentUser ? (
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
    </nav>
  );
}

export default Navigation;