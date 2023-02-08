import React, { createContext, UseContext, useState, useEffect } from 'react';
// import { serverUrl } from '../../Global';

export const UserContext = createContext(null); // initial 

export const userAppContext = () => {
 const context = UseContext(UserContext);
 if (context === undefined || null) {
  throw new Error("UserContext must be within userContextProvider!");
 }
 return context;
};

export const UserProvider = ({ children }) => {
 const [favorites, setFavorites] = useState([]);
 const [user, setUser] = useState([]);
 const [loggedIn, setLoggedIn] = useState(false);

   // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch(backendUrl, {
  //    method: 'POST',
  //    headers,
  //    body: JSON.stringify({
  //     hike_trail: {
  //       user_id,
  //       locate_id,
  //       review,
  //       date
  //     },
  //     user: {
  //       account_name,
  //       email,
  //       password
  //     },
  //     locate: {
  //       trail_name,
  //       city,
  //       state, 
  //       image_url,
  //       difficulty,
  //       legnth,
  //       elevation_gain,
  //       route_type
  //     }
  //    })
  //   })
  //    .then(resp => resp.json())
  //    .then(data => {
  //     console.log(data)
  //     // set(data)
  //     navigate("/hike_trails");
  //    })
  //  }
  

 console.log("Inside UserContext")
 useEffect(() => {
  console.log("Inside UserContext")
  // fetch(serverUrl + "/me")
  fetch("/me")
   .then(resp => resp.json())
   .then(data => {
    console.log(data, "Inside UserContext fetch")
    setUser(data)
   })
 }, [])

//  const handleSubmit = (e) => {
//   e.preventDefault()
//   fetch(serverUrl + "/signup", {
//     method: "POST",
//     headers,
//   })
//   JSON.stringify()
// }

 const login = (user) => {
  setUser(user)
  setLoggedIn(true)
 }

 const logout = () => {
  setUser([])
  setLoggedIn(false)
 }

 const signup = (user) => {
  setUser(user);
  setLoggedIn(true);
 }

 const addFavorites = (hike) => {
  const prevFavorites = [...favorites];
  const newFavorites = prevFavorites.concat(hike);
  setFavorites(newFavorites, ...favorites);
 };

 const removeFavorites = (id) => {
  const prevFavorites = [...favorites];
  const newFavorites = prevFavorites.filter((hike) => hike.id !== id);
  setFavorites(newFavorites, ...favorites);
 };

 // const handleDelete = () => {
 //   fetch(`http://localhost:3000/hike_trails/1`, {
 //     method: "DELETE"
 //   })
 // }

 return (
  <UserContext.Provider value={{ user, login, logout, signup, loggedIn, removeFavorites, addFavorites }}>
   {children}
  </UserContext.Provider>
 );
};

export default UserProvider;