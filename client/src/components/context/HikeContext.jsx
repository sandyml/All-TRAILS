import React, { createContext, useState, useEffect } from 'react';

// create the context object (default value)
const HikeContext = createContext();

// create the context provider (component)
const HikeProvider = ({ children }) => {
  const [hikes, setHikes] = useState([])

  useEffect(() => {
    const fetchHikes = () => {
      fetch('/hike_trails')
        .then(resp => resp.json())
        .then(hikeData => {
          console.log(hikeData, "Hikes fetch in useEffect")
          setHikes(hikeData)
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
    fetchHikes();
  }, [])

  return (
    <HikeContext.Provider value={ hikes }>
      {children}
    </HikeContext.Provider>
  )
}

export { HikeContext, HikeProvider };
