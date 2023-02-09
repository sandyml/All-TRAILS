import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { UserContext, UserProvider } from '../context/UserContext';
import { headers } from '../../Global';
import Home from '../static/Home';
import Signup from '../authentication/Signup';

//CHANGE PROXY REQUEST WHEN DONE 
// [] redo 

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
        <div className="topnav">
          <Link to="/home" onClick={login}><Home /></Link>
          <Link to="/" onClick={login}><Home /></Link>
          <Link to="/signup" onClick={login}><Signup /></Link>
          <Link to="/logout" onClick={logoutUser}>Log Out</Link>
        </div>
      </UserProvider>
    )
  } else {
    return (
      <UserProvider>
        <div className="topnav">
          <Link to="/home">Home</Link>
          <Link to="/login" onClick={login}>Login</Link>
          <Link to="/signup" onClick={signup}><Signup /> Sign Up </Link>
        </div>
      </UserProvider>
    )
  }
}

export default Navbar;