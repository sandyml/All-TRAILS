import React, { createContext, useEffect, useState } from 'react'

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("/locations")
      .then((resp) => resp.json())
      .then((data) => {
        setLocations(data)
      })
      .catch((error) => console.log(error, "An error occurred.")
      );
  }, []);

  return (
    <LocationContext.Provider value={{locations, setLocations}}>
      {children}
    </LocationContext.Provider>
  )
}

export { LocationContext, LocationProvider };