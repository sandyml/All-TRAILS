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


  useEffect(() => {
    if(!loading && !loggedIn) {
      navigate('/locations')
    }
  }, [loading, loggedIn, navigate])

  return (
    <div className="testimonial-heading">
        <span>Hikes</span>
      {reviewCards}
    </div>
  )
}

export default ReviewList;
