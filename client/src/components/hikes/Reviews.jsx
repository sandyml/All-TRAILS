import React, { useContext } from 'react';
import { HikeContext } from "../context/HikeContext";
import { UserContext } from '../context/UserContext';

const Reviews = ({ hike }) => {
  const hikes = useContext(HikeContext)
  const users = useContext(UserContext)
  const {  review, format_date, user_id } = hike
  console.log(hike, "Review JSX")
  return (
    <div className='hike-cr-review'>
      <ul>{format_date}</ul>
      <ul><b>user id:</b> {user_id}</ul>
      <ul className='review-list-card'>{review}</ul>
      {hikes.map((hk) => <div key={hk.id}>{hk.user_id}: {hk.review}
        <hr /></div>)}
      {/* {users.user.map((user) => <div key={user.id}>{user.user_id}: {user.review} </div>)} */}
    </div>
  )
}

export default Reviews