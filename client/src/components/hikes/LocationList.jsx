import React, { useContext } from 'react';
import { LocationContext } from '../context/LocationContext';
import LocationCard from './LocationCard';

const LocationList = () => {
  const {locations} = useContext(LocationContext);

  const locationCards = locations.map(
    location =>
      <LocationCard
        key={location.id}
        location={location}
      />
  )

  return (
    <div>
      <div className="testimonial-heading">
        <span>Hikes & Reviews</span>
      </div>
      {locationCards}
    </div>
  )
}

export default LocationList;
