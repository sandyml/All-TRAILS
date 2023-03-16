import React, { createContext, useState, useEffect } from 'react';

// create the context object (default value)
const HikeContext = createContext();

// create the context provider (component)
const HikeProvider = ({ children }) => {
  const [hikes, setHikes] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [addReviews, setAddReviews] = useState([]);

  useEffect(() => {
    fetch("/hike_trails")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data, "HikeContext")
        setAddReviews(data)
        // setReviews(data)
        setHikes(data)
      })
      .catch((error) => console.log(error, "An error occurred.")
      );
  }, []);

   const handleAddReview = (newReview) => {
    setAddReviews((addReviews) => [...addReviews, newReview])
  }

  return (
    <HikeContext.Provider value={{ hikes, setHikes, setReviews, reviews, handleAddReview, addReviews }} >
      {children}
    </HikeContext.Provider>
  );
};

export { HikeContext, HikeProvider };
