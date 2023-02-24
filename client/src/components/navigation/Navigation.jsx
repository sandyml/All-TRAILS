import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext, UserProvider } from '../context/UserContext';
import Hiking from '../../img/hiking.png'

const Navigation = () => {
  const { logout, loggedIn, user, setUser } = useContext(UserContext);

  //  const handleLogout = () => {
  //   console.log("Logout clicked!")
  //    fetch('/logout', {
  //      method: "DELETE"
  //    })
  //      .then(() => {
  //        logout()
  //      })
  //  }

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE"
    }).then((r) => {
      if (r.ok) {
        setUser(null);
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
        <Link to="/hike_trails/new" className='topnav-nav'>AddForm</Link>
        <Link to="/hike_trails/:id/edit" className='topnav-nav'>EditForm</Link>
        <div>
          {user ? (
            <Link to="/logout" className='topnav-nav-sign' onClick={handleLogout}>Logout</Link>
            // <button onClick={handleLogout}>Logout</button>
          ) : (
            <div>
              {/* <nav className='topnav'> */}
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