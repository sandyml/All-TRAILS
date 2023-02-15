import React, { useState } from 'react';
import { HikeProvider } from "../context/HikeContext";
import Location from '../../img/locationicon.png'

const HikeCard = ({ hike }) => {
  const { id, review, format_date, location, user_id, account_name } = hike
  const { trail_name, city, state, image_url, difficulty, length, elevation_gain, route_type } = location
  const [showReview, setShowReview] = useState(false);

  const reviewOnClick = () => {
    (showReview === false) ? setShowReview(true) :
      setShowReview(false);
  };

  const Review = () =>
    <div className='hike-cr-review'>
      <ul>{format_date}</ul>
      <ul><b>user id:</b> {user_id}</ul>
      <ul>{account_name}</ul>
      <ul>{review}</ul>
    </div>;

  return (
    <HikeProvider>
        <ul className="card-wrapper" key={id}>
          <li className="card" key={id}>
            <h3 className='hike-cr-title'>{trail_name}</h3>
            <img src={image_url} alt="hike-img" className='hike-item-img' />

            <div className='hike-card-desc'>
              <ul>
                <img src={Location}
                  className="location-image"
                  alt="background" />
                <b> {city}, {state}</b>
              </ul>

              <ul>
                difficulty: <b>{difficulty} &nbsp;</b>
                length: <b>{length} &nbsp;</b>
                elevation_gain: <b>{elevation_gain} &nbsp;</b>
                route_type: <b>{route_type} &nbsp;</b>
              </ul>

            </div>
            <div>
              <button onClick={reviewOnClick}>Reviews</button>
              {showReview ? <Review /> : null}
            </div>
          </li>
        </ul>
    </HikeProvider>
  )
}

export default HikeCard;