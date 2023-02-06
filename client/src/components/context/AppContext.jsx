import React, { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext(null);
// const MyContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const context = useContext(MyContext);
  if (context === undefined || null) {
    throw new Error("MyContext must be within appContextProvider!");
  }
  return context;
};

useEffect(() => {
  fetch("/me")
    .then((resp) => resp.json())
    .then((data) => {
      setUser(data);
    });
}, []);

const login = (user) => {
  setUser(user);
  setLoggedIn(true);
};

const logout = () => {
  setUser([]);
  setLoggedIn(false);
};

const signup = (user) => {
  setUser(user);
  setLoggedIn(true);
};

// function for add favorites
const addFavorites = (park) => {
  const prevFavorites = [...favorites];
  const newFavorites = prevFavorites.concat(park);
  // const newFavorites = prevFavorites.include(park);
  setFavorites(newFavorites, ...favorites);
  // setFavorites(newFavorites);
};

// function for remove favorites
const removeFavorites = (id) => {
  const prevFavorites = [...favorites];
  // const prevFavorites = [...favorites];
  const newFavorites = prevFavorites.filter((park) => park.id !== id);
  setFavorites(newFavorites, ...favorites);
  // setFavorites(newFavorites);
};

return (
  <AppContext.Provider value={{ user, login, logout, signup, loggedIn, removeFavorites, addFavorites}}>
    {children}
  </AppContext.Provider>
);

export { UserContext, AppContextProvider };