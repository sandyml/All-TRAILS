import React, { createContext, useEffect, useState } from 'react'

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  const [locations, setLocations] = useState([]);
  const [addReviews, setAddReviews] = useState([]);
  const [editReview, setEditReview] = useState([]);

  useEffect(() => {
    fetch('/locations')
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data, "LocationContext")
        setLocations(data)
        setAddReviews(data)
        setEditReview(data)
      })
      .catch((error) => console.log(error, "An error occurred.")
      );
  }, []);
  
  // grab location id that matches another location id 
  // return new edited review once both location id matches

  // DONT TOUCH!!!
  // const editLReview = ht => {
  //   const updatedReviews = locations.map(location => {
  //     // check locaction id === ht id {}
  //     console.log(ht, "LocationContext")
  //     if(ht.location_id === location.id) {
  //       // construct new clone
  //       return {
  //          ...location, 
  //          // what location do we need to update
  //          hike_trails: [...location.hike_trails, ht] // map over location .hiketrails 
  //       }
  //     } else {
  //       return location;
  //     }
  //   })
  //   setLocations(updatedReviews);
  // }

  const editLReview = ht => {
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

  // DESTROY REVIEW
  const handleAddReview = (newReview) => {
    setAddReviews((addReviews) => [...addReviews, newReview])
  }
  return (
    <LocationContext.Provider value={{ locations, setLocations, editLReview, handleAddReview }}>
      {children}
    </LocationContext.Provider>
  )
}

export { LocationContext, LocationProvider };