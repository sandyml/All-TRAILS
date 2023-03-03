import React, { createContext, useEffect, useState } from 'react'

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  const [locations, setLocations] = useState([]);
  // const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/locations')
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data, "LocationContext")
        setLocations(data)
        // setReviews(data)
      })
      .catch((error) => console.log(error, "An error occurred.")
      );
  }, []);
  
  // debugger
  const editLReview = newReview => {
    const updatedReviews = locations.map(lReview => {
      if (newReview.id === lReview.id) {
        return newReview;
      } else {
        return lReview;
      }
    })
    setLocations(updatedReviews);
  }
  // const editLReview = newReview => {
  //   const updatedReviews = reviews.map(review => {
  //     if (newReview.id === review.id) {
  //       return newReview;
  //     } else {
  //       return review;
  //     }
  //   })
  //   setReviews(updatedReviews);
  // }
  
   // function handleAddReviews(newRev){
  //   setReviews([...reviews, newRev])
  // }

  return (
    <LocationContext.Provider value={{ locations, setLocations, editLReview }}>
      {children}
    </LocationContext.Provider>
  )
}

export { LocationContext, LocationProvider };