import React, { createContext, useState, useEffect } from 'react';

export const HikeContext = createContext(null);

// const backend = 'http://localhost:3000'

const HikeContextProvider = ({ children }) => {
  const [hikes, setHikes] = useState([])

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

  return (
     <HikeContext.Provider value={hikes}>
      {children}
     </HikeContext.Provider>
  )
}

export default HikeContextProvider;
