import React, { useContext, useState } from 'react';
import { HikeContext, HikeProvider } from "../context/HikeContext";
import Location from '../../img/locationicon.png'
import { UserContext, UserProvider } from '../context/UserContext';
// import { useParams } from 'react-router-dom';

const HikeCard = ({ hike, user }) => {
  const hikes = useContext(HikeContext)
  const users = useContext(UserContext)
  // const { user } = username
  // const params = useParams()
  const { id, review, format_date, location, user_id, account_name } = hike
  const { trail_name, city, state, image_url, difficulty, length, elevation_gain, route_type } = location
  const [showReview, setShowReview] = useState(false); //toggle to show reviews 
  // const [displayReview, setDisplayReviews] = useState([])

  // debugger
  const reviewOnClick = () => {
    (showReview === false) ? setShowReview(true) :
      setShowReview(false);
  };

  // console.log(hikes, "Card")

  // const allReviews = () => {
  //   console.log(hikes)
  //   // hikes.map((hk) => <div key={hk.id} hk={hk}></div>)
  // }

  // const displayUsers = () => {
  //   console.log(users, "inside displayed")
  // }
  // debugger
  // console.log(users, "inside displayed")
  const Review = () =>
    <div className='hike-cr-review'>
      <ul>{format_date}</ul>
      <ul><b>user id:</b> {user_id}</ul>
      <ul>{account_name}</ul>
      {/* <ul>{review}</ul> */}
      {hikes.map((hk) => <div key={hk.id}>{hk.user_id}: {hk.review}</div>)}
    </div>

  // debugger
  // console.log({review}, "reviewsss")

  return (
    <UserProvider>
      <HikeProvider>

        <ul className="card-wrapper" key={id}>
          <li className="card" key={id}>
            <h3 className='hike-cr-title'>{trail_name}</h3>
            <img src={image_url} alt="hike-img" className='hike-item-img' />

            <div className='hike-card-desc'>
              <ul>
                <img src={Location}
                  className="location-image"
                  alt="background" />
                <b> {city}, {state}</b>
              </ul>

              <ul>
                difficulty: <b>{difficulty} &nbsp;</b>
                length: <b>{length} &nbsp;</b>
                elevation_gain: <b>{elevation_gain} &nbsp;</b>
                route_type: <b>{route_type} &nbsp;</b>
              </ul>

              {/* <div> */}
                {/* { */}
                  {/* // hikes.map((hk) => <div key={hk.id}>{hk.user_id}: {hk.review}</div>) */}
                {/* // } */}
                {/* {users.user.account_name} */}
              {/* </div> */}

            </div>
            <div>
              <button onClick={reviewOnClick}>Reviews</button>
              {showReview ? <Review /> : null}
            </div>
          </li>
        </ul>

      </HikeProvider>
    </UserProvider>
  )
}

export default HikeCard;