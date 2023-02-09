import React from 'react';
import { HikeContextProvider } from "../context/HikeContext";

// [] check seeds for attributes
// trail_name, :city, :state, :image_url, :difficulty, :length, :elevation_gain, :route_type

const HikeItems = ({ hikeTrail: { id, review, date, trail_name, city, state, image_url, difficulty, length, elevation_gain, route_type } }) => {


  return (
    <HikeContextProvider>
      <div className="hike-item-div">
        <h1>{trail_name}</h1>
        <img src={image_url} className="hike-img" alt={review} />
        <div className="item-body-div" key={id}>
        <h4>trail_name: </h4>
        <h4>city: </h4>
        <h4>state: </h4>
        <h4>difficulty: </h4>
        <h4>length: </h4>
        <h4>elevation_gain: </h4>
        <h4>route_type: </h4>
          {/* <h5 className="item-title"></h5> */}
          {/* <p className="item-text"></p> */}
          <a href="/hike_trails/:id">More Trails...</a>
        </div>
      </div>
    </HikeContextProvider>
  )
}

export default HikeItems;