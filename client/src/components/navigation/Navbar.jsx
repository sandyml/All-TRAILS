import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserContext, UserProvider } from '../context/UserContext';
import { headers } from '../../Global';
import Home from '../static/Home';

//CHANGE PROXY REQUEST WHEN DONE 

const Navbar = () => {
  const navigate = useNavigate()
  const { login, logout, loggedIn, signup } = useContext(UserContext)

  const logoutUser = () => {
    fetch('/logout', {
      method: 'DELETE',
      headers,
    })
      .then(() => {
        logout()
        navigate('/home')
      })
  }
  if (loggedIn) {
    return (
      <UserProvider>
        <div className="navbar-container">
          <Link to="/signup" onClick={signup}><Home /></Link>
          <Link to="/logout" onClick={logoutUser}>Log Out</Link>
        </div>
      </UserProvider>
    )
  } else {
    return (
      <UserProvider>
        <div className="navbar-container">
          <Link to="/home">Home</Link>
          <Link to="/signup" onClick={signup}><Home />Sign Up</Link>
          <Link to="/login" onClick={login}>Login</Link>
        </div>
      </UserProvider>
    )
  }
}

export default Navbar;