import React, { createContext, useEffect, useState } from 'react'

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  const [locations, setLocations] = useState([]);
  // const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch("/locations")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data, "Location")
        setLocations(data)
        // setReviews(data)
      })
      .catch((error) => console.log(error, "An error occurred.")
      );
  }, []);

  // function handleAddReviews(newRev){
  //   setReviews([...reviews, newRev])
  // }

  return (
    <LocationContext.Provider value={{ locations, setLocations }}>
      {children}
    </LocationContext.Provider>
  )
}

export { LocationContext, LocationProvider };