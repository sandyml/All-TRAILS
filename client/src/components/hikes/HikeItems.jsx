import React from 'react';
import { HikeProvider } from "../context/HikeContext";

// [] check seeds for attributes
// - :trail_name, :city, :state, :image_url, :difficulty, :length, :elevation_gain, :route_type

const HikeItems = ({ hike }) => {
  const { id, review, date, location } = hike
  const { trail_name, city, state, image_url, difficulty, length, elevation_gain, route_type } = location

  console.log("HikeItem", location)

  return (
    // <UserProvider>
      <HikeProvider>
        <div className="hike-item-div" key={id}>
          <h3>Hikers Reviews</h3> <br />
          <div className="item-body-div" key={id}>
            <ul>{review}</ul>
            <ul>Date: {date}</ul>
            <img src={image_url} className="hike-img" alt='hike-img' />
            <ul>name: {trail_name}</ul>
            <ul>difficulty: {difficulty}</ul>
            <ul>city: {city}</ul>
            <ul>state: {state}</ul>
            <ul>difficulty: {difficulty} </ul>
            <ul>length: {length} </ul>
            <ul>elevation_gain: {elevation_gain} </ul>
            <ul>route_type: {route_type} </ul>
          </div>
        </div>
      </HikeProvider>
    // </UserProvider>
  )
}

export default HikeItems;