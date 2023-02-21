import React, { useState } from 'react';
import Location from '../../img/locationicon.png'

const LocationCard = ({ location }) => {
 const { trail_name, city_state, city, state, image_url, difficulty, length, elevation_gain, route_type, hike_trails, users } = location;
 const [showReview, setShowReview] = useState(false);

 const reviewOnClick = () => {
   (showReview === false) ? setShowReview(true) :
     setShowReview(false);
 };
   
   const allReviews = hike_trails.map(
    (ht) => <div>{ht.format_date}<br />{ht.user.account_name}{ht.user_id}:&nbsp;{ht.review}</div>
    )
  // Need to add account_name

 return (
  <div className='location-card'>

   <h2>{trail_name}</h2>
   <img src={image_url} alt="hike-img" className='hike-item-img' />

   <ul><img src={Location} className="location-image" alt="background" />
    {/* <b> {city}, {state}</b> */}
    <b> {city_state} </b>
   </ul>

   <p> difficulty: <b>{difficulty} &nbsp;</b></p>
   <p> length: <b>{length} &nbsp;</b></p>
   <p> elevation_gain: <b>{elevation_gain} &nbsp;</b></p>
   <p> route_type: <b>{route_type} &nbsp;</b></p>

   <div>
    <button className='location-btn' onClick={reviewOnClick}>Reviews</button>
    {showReview ? allReviews : null}
   </div><hr /><br />
  </div>
 )
}

export default LocationCard
