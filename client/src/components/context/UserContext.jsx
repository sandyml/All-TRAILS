import React, { createContext, useState, useEffect } from 'react';

// create the context object (default value)  // initial
const UserContext = createContext(); 

// create the context provider (component)
const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  // const [user, setUser] = useState({});
  // const [allUsers, setAllUsers] = useState({})
  const [loggedIn, setLoggedIn] = useState(false);
  const [errors, setErrors] = useState([])
  //  const [favorites, setFavorites] = useState([]);
  
 useEffect(() => {
  fetch("/me")
  .then(resp => resp.json())
  .then(data => {
    console.log(data);
    // setAllUsers(data)
    setUser(data);
  })
}, []);

 const login = (user) => {
  setUser(user)
  setLoggedIn(true)
 }

 const logout = () => {
  setUser({})
  setLoggedIn(false)
 }

 const signup = (user) => {
  setUser(user);
  setLoggedIn(true);
 }

//  console.log(user.account_name, "usercontext")
//  const addFavorites = (hike) => {
//   const prevFavorites = [...favorites];
//   const newFavorites = prevFavorites.concat(hike);
//   setFavorites(newFavorites, ...favorites);
//  };

//  const removeFavorites = (id) => {
//   const prevFavorites = [...favorites];
//   const newFavorites = prevFavorites.filter((hike) => hike.id !== id);
//   setFavorites(newFavorites, ...favorites);
//  };

 return (
  <UserContext.Provider value={{ user, login, logout, signup, loggedIn, setErrors, errors }}>
   {children}
  </UserContext.Provider>
 );
};

export { UserContext, UserProvider  };