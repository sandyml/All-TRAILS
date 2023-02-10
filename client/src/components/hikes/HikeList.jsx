// import React from 'react';
import React, { useContext } from 'react';
import { HikeContext } from '../context/HikeContext';
import HikeItems from './HikeItems';

const HikeList = () => {
  const hikes = useContext(HikeContext);

  const hikeCards = hikes.map(
    hike => 
    <HikeItems 
    key={hike.id} 
    hike={hike}/>
    )

  return (
    <div className='hike-list-div'>
      {hikeCards}
    </div>
  )
}

export default HikeList;