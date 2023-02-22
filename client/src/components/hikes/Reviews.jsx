import React, { useContext } from 'react';
import { HikeContext } from "../context/HikeContext";

const Reviews = ({ hike }) => {
  const hikes = useContext(HikeContext)
  const {  review, format_date, user_id } = hike

  return (
    <div className='hike-cr-review'>
      <ul>{format_date}</ul>
      <ul><b>user id:</b> {user_id}</ul>
      <ul className='review-list-card'>{review}</ul>
      {hikes.map((hk) => <div key={hk.id}>{hk.user_id}: {hk.review}
        </div>)}
    </div>
  )
}

export default Reviews