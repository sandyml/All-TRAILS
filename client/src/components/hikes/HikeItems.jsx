import React from 'react';
import { HikeContextProvider } from "../context/HikeContext";

// [] check seeds for attributes
// trail_name, :city, :state, :image_url, :difficulty, :length, :elevation_gain, :route_type

const HikeItems = ({
  hikes: { id, review, date },
  location: { trail_name, city, state, image_url, difficulty, length, elevation_gain, route_type
  } }) => {


  return (
    <HikeContextProvider>
      <div className="hike-item-div">
        <h1>{trail_name}</h1>
        <img src={image_url} className="hike-img" alt={review} />
        <div className="item-body-div" key={id}>
          <h4>trail_name: {trail_name}</h4>
          <h4>city: {city}</h4>
          <h4>state: {state} </h4>
          <h4>difficulty: {difficulty} </h4>
          <h4>length: {length} </h4>
          <h4>elevation_gain: {elevation_gain} </h4>
          <h4>route_type: {route_type} </h4>
        </div>
      </div>
    </HikeContextProvider>
  )
}

export default HikeItems;