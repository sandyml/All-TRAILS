// import React from 'react';
import React, { useContext } from 'react';
import { HikeContext } from '../context/HikeContext';
import HikeCard from './HikeCard';

const HikeList = () => {
  const hikes = useContext(HikeContext);

  // debugger

  const hikeCards = hikes.map(
    hike =>
      <HikeCard
        key={hike.id}
        hike={hike}
      />
  )

  return (
      <div>
        {hikeCards}
      </div>
  )
}

export default HikeList;