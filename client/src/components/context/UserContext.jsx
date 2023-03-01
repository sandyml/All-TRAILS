import React, { createContext, useState, useEffect } from 'react';

// create the context object (default value)  // initial
const UserContext = createContext();

// create the context provider (component)
const UserProvider = ({ children }) => {
  // const [user, setUser] = useState([]); // preferred 
  // const [loggedIn, setLoggedIn] = useState(false);
  // const [errors, setErrors] = useState([]);
  // const [user, setUser] = useState(null);
  // const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   // auto-login
  //   fetch("/me")
  //   .then((resp) => {
  //     if (resp.ok) {
  //       resp.json()
  //       .then((user) => {
  //         // console.log(user, "User Context")
  //         setCurrentUser(user)
  //         setUser(user)
  //       });
  //     }
  //   });
  // }, []);

  // const login = (user) => {
  //   setUser(user)
  //   setLoggedIn(true)
  // }

  // const logout = () => {
  //   setUser({})
  //   setLoggedIn(false)
  // }

  // const signup = (user) => {
  //   setUser(user);
  //   setLoggedIn(true);
  // }

  // const [user, setUser] = useState([]); // preferred 
  const [loggedIn, setLoggedIn] = useState(false);
  const [current_User, setCurrent_User] = useState({});
  const [loading, setLoading] = useState(true);
  // const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // auto-login
    fetch("/me")
      .then((resp) => {
        if (resp.ok) {
          resp.json()
            .then((userData) => {
              console.log(userData, "User Context Fetch")
              setCurrent_User(userData)
            });
          } 
        });
        setLoading(false)
  }, []);

  console.log(current_User, "UserContext")
  
  const handleLogin = (user) => {
    setCurrent_User(user);
    setLoggedIn(true)
  }

  const handleLogout = () => {
    setCurrent_User(null);
    setLoggedIn(false)
  }


  return (
    <UserContext.Provider value={{ loading, current_User, setCurrent_User, handleLogin, handleLogout, loggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };