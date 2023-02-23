import React, { useState, useContext   } from 'react';
// import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import Location from '../../img/locationicon.png';
import { HikeContext } from '../context/HikeContext';
import { LocationContext } from '../context/LocationContext';
import HikesReviews from './HikesReviews';
// import { headers } from '../../Global';

// [x] delete review
// [] patch review
// [] edit review
// [] authentication review only user is able to edit
// [] add review if (logged in) 

const LocationCard = ({ location }) => {
  const { trail_name, city_state, image_url, difficulty, length, elevation_gain, route_type } = location;
  const hikes = useContext(HikeContext);
  const [showReview, setShowReview] = useState(false);
  const {locations, setLocations} = useContext(LocationContext);
  // const [edit, setEdit] = useState([]);
  // const [newReview, setNewReview] = useState([]);
  // const { id } = useParams();

  console.log(hikes, "LocationCard")
  const toggleSeeReviews = () => {
    (showReview === false) ? setShowReview(true) :
      setShowReview(false);
    };  
    
  // DELETE REVIEW
  const handleDelete = (id) => {
    fetch(`/hike_trails/${id}`, {
      method: 'DELETE',
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data, "deleted!")
        const updatedState = locations.map(l => {
          // eslint-disable-next-line 
          if(data.location_id == l.id) {
            return {
              ...l,
              hike_trails: l.hike_trails.filter(ht => ht.id !== data.id)
            }
          } else {
            return l;
          }
        })
        setLocations(updatedState);
      })
  }

  // useEffect(() => {
  //   // const fetchReview = () => {
  //     fetch("/hike_trails")
  //       .then((res) => res.json())
  //       .then((rData) => {
  //         console.log(rData, "Hike Data for Reviews")
  //         setNewReview(rData)
  //       })
  //       .catch((error) => console.log("Review"))
  //   // };
  //   // fetchReview();
  // }, [])
 
  // const handleAddNewReview = (newReview) => {
  //   setNewReview([...newReview, newReview])
  // }


  // const handleEditReview = () => {
  //   const updatedReview = locations.reviews.map((r) => (r.id === updatedReview.id ? updatedReview : newReview))
  //   setNewReview(updatedReview)
  // }

  // const handleReview = () => {
  //   fetch('/hike_trails')
  //     .then((resp) => resp.json())
  //     .then(rData => {
  //       console.log(rData, "reviewData")
  //     })
  // }

  // PATCH REVIEW
  // const handleUpdateReview = (id) => {
  //   // e.preventDefault();
  //   fetch(`/hike_trails/${id}`, {
  //     method: 'PATCH',
  //     headers,
  //     body: JSON.stringify({

  //     })

  //   })
  // }

  // EDIT REVIEW 
  // const editReview = () => {
  //   fetch()
  // }


  return (
    <div>
      <hr /><br />
      <h2 className='trail-name'>{trail_name}</h2><br />
      <img src={image_url} alt="hike-img" className='pic' />
      <ul><img src={Location} className="location-image" alt="background" />
        <b>&nbsp;{city_state}</b>
      </ul><br />
      <p>
        difficulty: <b>{difficulty} &nbsp;</b>
        length: <b>{length} &nbsp;</b>
        elevation_gain: <b>{elevation_gain} &nbsp;</b>
        route_type: <b>{route_type} &nbsp;</b>
      </p><br /><hr />
      <div className='testimonial-box-container'>
        <div className='testimonial-box'>
          <button className='location-btn' onClick={toggleSeeReviews}>Reviews</button>
          {showReview ? <HikesReviews location={location} handleDelete={handleDelete} /> : null}
          <hr /><br />
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
