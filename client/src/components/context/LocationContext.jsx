import React, { createContext, useEffect, useState } from 'react'

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  const [locations, setLocations] = useState([]);
  const [addReviews, setAddReviews] = useState([]);

  useEffect(() => {
    fetch('/locations')
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data, "LocationContext")
        setLocations(data)
        setAddReviews(data)
        // setEditReview(data)
      })
      .catch((error) => console.log(error, "An error occurred.")
      );
  }, []);
  
  // grab location id that matches another location id 
  // return new edited review once both location id matches

  // WORKING FUNCTION!
  // edit reviews
  const editReview = ht => {
    console.log("edit Review!")
    const updatedReviews = locations.map(location => {
      // check location id === ht id {} <- obj
      console.log(ht, "LocationContext")
      if(ht.location_id === location.id) {
        // construct new clone
        return {
           ...location, 
           // what location do we need to update
           hike_trails: location.hike_trails.map(t => {
            if(ht.id === t.id) {
              return ht;
            } else {
              return t;
            }
          })
        }
      } else {
        return location;
      }
    })
    setLocations(updatedReviews);
  }

  // added review
  const handleAddReview = ht => {
    const updatedAddedReviews = locations.map(location => {
      console.log(ht, "LocationContext")
      if(ht.location_id === location.id) {
        // construct new clone
        return {
           ...location, 
           // what location do we need to update
           hike_trails: [...location.hike_trails, ht] // map over location .hiketrails 
        }
      } else {
        return location;
      }
    })
    setLocations(updatedAddedReviews);
  }

  return (
    <LocationContext.Provider value={{ addReviews, locations, setLocations, editReview, handleAddReview }}>
      {children}
    </LocationContext.Provider>
  )
}

export { LocationContext, LocationProvider };