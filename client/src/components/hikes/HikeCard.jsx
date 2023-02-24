import React, { useState } from 'react';
import Location from '../../img/locationicon.png'
import Reviews from './Reviews';
// import { Link } from 'react-router-dom';

const HikeCard = ({ hike }) => {
  const { id, location } = hike
  const { trail_name, city, state, image_url, difficulty, length, elevation_gain, route_type } = location
  const [showReview, setShowReview] = useState(false); //toggle to show reviews 
  const reviewOnClick = () => {
    (showReview === false) ? setShowReview(true) :
      setShowReview(false);
  };

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
          {/* <Link to="/hike_trails/new"><button className='button2' type="add">Add</button></Link>
            <Link to={`/hike_trails/${id}/edit`}><button className='button2' type="edit">Edit</button></Link>
            <button className='button2' onClick={() => handleDelete(ht.id)} type="delete">Remove</button> */}
    </div>
  )
}

export default HikeCard;