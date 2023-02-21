import React, { useContext, useState } from 'react';
import Location from '../../img/locationicon.png'
import { HikeContext } from '../context/HikeContext';
import { UserContext } from '../context/UserContext';
// import { HikeContext } from '../context/HikeContext';
// import { UserContext } from '../context/UserContext';
import Reviews from './Reviews';

const HikeCard = ({ hike }) => {
  const { id, location } = hike
  const { trail_name, city, state, image_url, difficulty, length, elevation_gain, route_type } = location
  const hikes = useContext(HikeContext)
  const user = useContext(UserContext)
  const [showReview, setShowReview] = useState(false); //toggle to show reviews 
  // const [displayReview, setDisplayReviews] = useState([])
  const reviewOnClick = () => {
    (showReview === false) ? setShowReview(true) :
      setShowReview(false);
  };


  // const handleDelete = () => {
  //   fetch(`/hike_trails/${review.id}`, {
  //     method: 'DELETE',
  //   })
  //     .then(resp => resp.json())
  //     .then(data => {
  //       console.log(data, "review deleted")
  //       onDeleteReview(data, "deleted!")
  //     })
  // }
  // console.log(user, "User Card")
  // debugger

  return (
    <div className="card-wrapper" key={id}>
          <h2 className='hike-cr-title'>{trail_name}</h2>
          <img src={image_url} alt="hike-img" className='hike-item-img' />
          
            <ul>
              <img src={Location}
                className="location-image"
                alt="background" />
              <b> {city}, {state}</b>
            </ul>

            <p> difficulty: <b>{difficulty} &nbsp;</b></p>
            <p> length: <b>{length} &nbsp;</b></p>
            <p> elevation_gain: <b>{elevation_gain} &nbsp;</b></p>
            <p> route_type: <b>{route_type} &nbsp;</b></p>

          <div>
            <button onClick={reviewOnClick}>Reviews</button>
            {showReview ? <Reviews hike={hike} /> : null}
          </div>
    </div>
  )
}

export default HikeCard;