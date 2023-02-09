import React from 'react';
// import React, { useContext } from 'react';
import { HikeContext } from '../context/HikeContext';
import HikeItems from './HikeItems';

// [] key for map
// [] grab from UserContext / HikeContext
// [] binding.pry debug ask for help 

const HikeList = () => {
  // const hikes = useContext(HikeContext);
  const { hikes, locations } = HikeContext;

  const hikeCard = hikes.map(
    hike => <HikeItems key={hike.id} hike={hike} />
  )

  return (
    <div className='hike-list-div'>
      {locations}
      {hikeCard}
    </div>
  )
}

export default HikeList;