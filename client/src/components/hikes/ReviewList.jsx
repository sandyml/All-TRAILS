import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LocationContext } from '../context/LocationContext';
import ReviewCard from './ReviewCard';

const ReviewList = ({ currentUser, loading, loggedIn }) => {
  const { locations } = useContext(LocationContext);
  const navigate = useNavigate();
  console.log(currentUser, "currentUser in ReviewList")

  const reviewCards = locations.map(
    location =>
      <ReviewCard
        key={location.id}
        location={location}
        currentUser={currentUser}
      />
  )

  // automatically happen when load 
  // loggedIn false as default 
  // if loading is false !loading and login in false !logged in reroute to /login (extra condition)
  console.log(!loading, "!loading", !loggedIn, "!loggedIn")
  console.log(loading, "loading", loggedIn, "loggedIn")
  useEffect(() => {
    if(!loggedIn) {
      navigate('/')
    }
  }, [loggedIn])

  // useEffect(() => {
  //   console.log(!loading, "!loading", !loggedIn, "!loggedIn")
  //   console.log(loading, "loading", loggedIn, "loggedIn")
  //   if(!loading && !loggedIn) {
  //     navigate('/')
  //   }
  // }, [loading, loggedIn, navigate])

  return (
    <div className="testimonial-heading">
        <span>Hikes</span>
      {reviewCards}
    </div>
  )
}

export default ReviewList;
