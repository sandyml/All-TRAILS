import React, { createContext, useState, useEffect } from 'react';

// create the context object (default value)
const HikeContext = createContext();

// create the context provider (component)
const HikeProvider = ({ children }) => {
  const [hikes, setHikes] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // const fetchHikes = () => {
    fetch("/hike_trails")
      .then((resp) => resp.json())
      .then((hikeData) => {
        console.log(hikeData, "HikeContext")
        setReviews(hikeData)
        setHikes(hikeData)
      })
      .catch((error) => console.log(error, "An error occurred.")
      );
    // };
    // fetchHikes();
  }, []);

  const handleAddReview = (newRev) => {
    setReviews([...reviews, newRev])
   }

  return (
    <HikeContext.Provider value={{ hikes, handleAddReview, setReviews }} >
      {children}
    </HikeContext.Provider>
  );
};

export { HikeContext, HikeProvider };
