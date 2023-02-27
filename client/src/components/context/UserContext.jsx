import React, { createContext, useState, useEffect } from 'react';

// create the context object (default value)  // initial
const UserContext = createContext();

// create the context provider (component)
const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]); // preferred 
  const [loggedIn, setLoggedIn] = useState(false);
  const [errors, setErrors] = useState([]);
  // const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me")
    .then((resp) => {
      if (resp.ok) {
        resp.json()
        .then((user) => {
          console.log(user, "User Context")
          setCurrentUser(user)
          setUser(user)
        });
      }
    });
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

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, user, setUser, login, logout, signup, loggedIn, setErrors, errors }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };