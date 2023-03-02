import React, { createContext, useState, useEffect } from 'react';

// create the context object (default value)  // initial
const UserContext = createContext();

// create the context provider (component)
const UserProvider = ({ children }) => {
 const [currentUser, setCurrentUser] = useState(null);
 const [loggedIn, setLoggedIn] = useState(false);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  // auto-login
  fetch('/me')
   .then(resp => resp.json())
   .then(data => {
    console.log(data, "UserContext FETCH")
    if (!data.errors) {
     handleLogin(data)
    }
    setLoading(false)
   })
 }, [])

 console.log(currentUser, "UserContext OUTSIDE")

 const handleLogin = (user) => {
  setCurrentUser(user);
  setLoggedIn(true)
 }

 const handleOnLogout = () => {
  setCurrentUser(null);
  setLoggedIn(false)
 }

 return (
  <UserContext.Provider value={{ loading, currentUser, setCurrentUser, handleLogin, handleOnLogout, loggedIn }}>
   {children}
  </UserContext.Provider>
 );
};

export { UserContext, UserProvider };