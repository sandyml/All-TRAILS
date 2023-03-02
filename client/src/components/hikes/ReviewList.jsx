import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LocationContext } from '../context/LocationContext';
import { UserContext } from '../context/UserContext';
import ReviewCard from './ReviewCard';

const ReviewList = () => {
  const { locations } = useContext(LocationContext);
  const { currentUser, loading, loggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const reviewCards = locations.map(
    location =>
      <ReviewCard
        key={location.id}
        location={location}
        currentUser={currentUser}
      />
  )

  console.log(currentUser, "currentUser in ReviewList")
  console.log(!loading, "!loading", !loggedIn, "!loggedIn")
  console.log(loading, "loading", loggedIn, "loggedIn")
  useEffect(() => {
    if (!loading && !loggedIn) {
      navigate('/')
    }
  }, [loading, loggedIn])

  return (
    <div className="testimonial-heading">
      <span>Hikes | Reviews <hr /></span>
      {reviewCards}
    </div>
  )
}

export default ReviewList;
