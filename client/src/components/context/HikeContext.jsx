import React, { createContext, useState, useEffect } from 'react';

const HikeContext = createContext();

// const backend = 'http://localhost:3000'

const HikeProvider = ({ children }) => {
  const [hikes, setHikes] = useState([])
  // const [location, setLocation] = useState([])

  useEffect(() => {
    // const fetchHikes = () => {
    fetch('/hike_trails')
      .then(resp => resp.json())
      .then(hikeData => {
        console.log(hikeData, "Hikes fetch in useEffect")
        setHikes(hikeData)
      })
      .catch((error) => {
        console.log(error.message);
      });
    // }
    // fetchHikes();
  }, [])

  // useEffect(() => {
  //   fetch('/locate')
  //     .then(resp => resp.json())
  //     .then(locateData => {
  //       console.log(locateData, "Hikes Location fetch in useEffect")
  //       setLocation(locateData)
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // }, [])

  return (
    <HikeContext.Provider value={ hikes }>
      {children}
    </HikeContext.Provider>
  )
}

export { HikeContext, HikeProvider};
