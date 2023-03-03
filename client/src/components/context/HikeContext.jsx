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

  // debugger
  const editReview = newReview => {
    const updatedReviews = reviews.map(review => {
      if (newReview.id === review.id) {
        return newReview;
      } else {
        return review;
      }
    })
    setReviews(updatedReviews);
  }

  return (
    <HikeContext.Provider value={{ hikes, setHikes, setReviews, reviews, handleAddReview, addReviews, editReview }} >
    {/* <HikeContext.Provider value={{ hikes, setHikes, setReviews, reviews, handleAddReview, addReviews, editReview }} > */}
      {children}
    </HikeContext.Provider>
  );
};

export { HikeContext, HikeProvider };
