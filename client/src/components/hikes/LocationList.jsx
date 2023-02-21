import React, { useContext } from 'react'
import { LocationContext } from '../context/LocationContext'
import LocationCard from './LocationCard';

const LocationList = () => {
 const locations = useContext(LocationContext);

 // debugger

 const locationCards = locations.map(
  location => 
  <LocationCard 
  key={location.id}
  location={location}
  />
 )


  return (
    <div className='location-card'>
     <h1 className='h1-location'>Hikes & Reviews</h1><br />
      {locationCards}
    </div>
  )
}

export default LocationList
