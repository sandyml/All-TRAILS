import React, { useState } from 'react';
import { HikeProvider } from "../context/HikeContext";

const HikeItems = ({ hike }) => {
  const { id, review, date, location } = hike
  const { account_name, trail_name, city, state, image_url, difficulty, length, elevation_gain, route_type } = location 
  const [showText, setShowText] = useState(false);
  // const [showReview, setShowReview] = useState(false);

  // const handleDisplayReview = () => {
  //   showReview === false ? setShowReview(true) : setShowReview(false);
  //  }

   const onClick = () => {
   (showText === false) ? setShowText(true) : 
     setShowText(false);
  };

  //  const onClick = () => {
  //   if (showText === false) setShowText(true);
  //   else setShowText(false);
  // };

  const Text = () => 
    <div>
      <ul>{date}</ul>
      <ul>{account_name}</ul>
      <ul>{review}</ul>
    </div>;

  return (
    <HikeProvider>
      <ul className="card-wrapper" key={id}>
        <li className="card" key={id}>
          <img src={image_url} alt="hike-img" className='hike-item-img' />
          <h3>{trail_name}</h3>
          <ul>difficulty: {difficulty}</ul>
          <ul>city: {city}</ul>
          <ul>state: {state}</ul>
          <ul>difficulty: {difficulty} </ul>
          <ul>length: {length} </ul>
          <ul>elevation_gain: {elevation_gain} </ul>
          <ul>route_type: {route_type} </ul>
          <div>
          <button onClick={onClick}>Reviews</button>
          {showText ? <Text /> : null }
          </div>
        </li>
      </ul>
    </HikeProvider>
  )
}

export default HikeItems;