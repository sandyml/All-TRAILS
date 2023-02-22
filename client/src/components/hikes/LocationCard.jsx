import React, { useState } from 'react';
import Location from '../../img/locationicon.png';

const LocationCard = ({ location }) => {
  const { trail_name, city_state, image_url, difficulty, length, elevation_gain, route_type, hike_trails } = location;
  const [showReview, setShowReview] = useState(false);

  const reviewOnClick = () => {
    (showReview === false) ? setShowReview(true) :
      setShowReview(false);
  };

  const allReviews = hike_trails.map(
    (ht) => <div key={ht}>{ht.format_date}<br />{ht.user.account_name}{ht.user_id}:&nbsp;{ht.review}<hr /></div>
  );

  return (
    <div className='location-card-container'>
      <div className='location-card'>
        <h2>{trail_name}</h2>
        <img src={image_url} alt="hike-img" className='pic' />
        <div className='info'>
          <ul><img src={Location} className="location-image" alt="background" />
            <b>&nbsp;{city_state}</b>
          </ul>
          <p>
            difficulty: <b>{difficulty} &nbsp;</b>
            length: <b>{length} &nbsp;</b>
            elevation_gain: <b>{elevation_gain} &nbsp;</b>
            route_type: <b>{route_type} &nbsp;</b>
          </p>
        </div>
        <div>
          <button className='location-btn' onClick={reviewOnClick}>Reviews</button>
          {showReview ? allReviews : null}
        </div>
        <hr /><br />
      </div>
    </div>
  );
};

export default LocationCard;
