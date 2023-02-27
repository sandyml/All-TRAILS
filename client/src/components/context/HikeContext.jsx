import React, { createContext, useState, useEffect } from 'react';

// const [users, setUsers] = useState([]);
// create the context object (default value)
const HikeContext = createContext();

// create the context provider (component)
const HikeProvider = ({ children }) => {
  const [hikes, setHikes] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/hike_trails")
      .then((resp) => resp.json())
      .then((hikeData) => {
        console.log(hikeData, "HikeContext")
        setReviews(hikeData)
        setHikes(hikeData)
      })
      .catch((error) => console.log(error, "An error occurred.")
      );
  }, []);

   const handleAddReview = (newReview) => {
    setReviews((reviews) => [...reviews, newReview])
  }

  
  // ==== FETCH BOTH hike_trails && users routes ==== \\
  // const [errors, setErrors] = useState([]);
  // useEffect(() => {
  //   fetch('/hike_trails')
  //     .then(resp => resp.json())
  //     .then(data => {
  //       setReviews(data)
  //       fetch("/users")
  //         .then(resp => resp.json())
  //         .then(data => setUsers(data))
  //     })
  // }, [])

  // const addReview = review => {
  //   setReviews([...reviews, review]);
  // }

  // const editReview = newReview => {
  //   const updatedReviews = reviews.map(review => {
  //     if (newReview.id === review.id) {
  //       return newReview;
  //     } else {
  //       return review;
  //     }
  //   })
  //   setReviews(updatedReviews);
  // }

  // debugger

  // const deleteReview = deletedReview => {
  //   const updatedReviews = reviews.filter(review => review.id !== deletedReview.id)
  //   setReviews(updatedReviews)
  // }

  // const [ users, setUsers ] = useState([])
  // const addUser = user => {
  //   setUsers([...users, user])
  // }


  return (
    <HikeContext.Provider value={{ hikes, setHikes, setReviews, reviews, handleAddReview }} >
      {children}
    </HikeContext.Provider>
  );
};

export { HikeContext, HikeProvider };
