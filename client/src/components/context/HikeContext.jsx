import React, { createContext, useState, useEffect } from 'react';

// http://localhost:9292/hike_trails
// create the context object (default value)
const HikeContext = createContext();

// create the context provider (component)
const HikeProvider = ({ children }) => {
  const [hikes, setHikes] = useState([]);
  // const [reviews, setReviews] = useState([])
  // const [createReviews, setCreateReviews] = useState([]); // if I want to create edit for more reviews 

  useEffect(() => {
    const fetchHikes = () => {
      fetch("/hike_trails")
        .then((resp) => resp.json())
        .then((hikeData) => { 
          console.log(hikeData, "HikeContext")
          setHikes(hikeData)
          // setReviews(hikeData)
        })
        .catch((error) => console.log(error, "An error occurred.")
        );
    };
    fetchHikes();
  }, []);


 

  // DELETE REQUEST 
  // const addReview = (review) => {
  //   // setQuotes([...quotes, review])
  //   setReviews([review, ...reviews])
  // }

  // const onDeleteReview = (delR) => {
  //   const updateReview = reviews.filter(review => review.id !== delR.id)
  //   setReviews(updateReview)
  // }

  return (
    <HikeContext.Provider 
    value={hikes}
    // value={{ hikes, onDeleteReview, addQuote }}
    >
      {children}
    </HikeContext.Provider>
  )
}

export { HikeContext, HikeProvider };
