import React, { createContext, useState, useEffect } from 'react';

const HikeContext = createContext(null);

// const backend = 'http://localhost:3000'

const HikeContextProvider = ({ children }) => {
  const [hikes, setHikes] = useState([])
  const [location, setLocation] = useState([])

  useEffect(() => {
    fetch('/hike_trails')
      .then(resp => resp.json())
      .then(hikeData => {
        console.log(hikeData, "Hikes fetch in useEffect")
        setHikes(hikeData)
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [])

  useEffect(() => {
    fetch('/locate')
      .then(resp => resp.json())
      .then(locateData => {
        console.log(locateData, "Hikes Location fetch in useEffect")
        setLocation(locateData)
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [])

  return (
    <HikeContext.Provider value={{ hikes, location }}>
      {children}
    </HikeContext.Provider>
  )
}

export { HikeContext, HikeContextProvider};
