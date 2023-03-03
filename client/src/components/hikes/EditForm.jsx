import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { HikeContext } from '../context/HikeContext';
import { UserContext } from '../context/UserContext';
import { headers } from '../../Global';
import { LocationContext } from '../context/LocationContext';

// SET ERRORS HERE TOO? 

const EditForm = ({ location, ht }) => {
  const [review, setReview] = useState(ht.review);
  const [date, setDate] = useState(ht.date);
  const [isLoading, setIsLoading] = useState(false);
  // const [errors, setErrors] = useState([])

  // useContext
  const { loading, loggedIn, currentUser } = useContext(UserContext);
  const { editReview, user_id } = useContext(HikeContext);
  const { editLReview } = useContext(LocationContext);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true); 
    fetch(`/hike_trails/${ht.id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({
        review,
        date,
        location_id: location.id,
        user_id,
      }),
    })
      .then((r) => r.json())
      .then(data => {
        setIsLoading(false);
        // editReview(data)
        editLReview(data)
        console.log(data, "review has been updated(edited)!")
        navigate('/locations') // can't post it with out refreshing the page..
        // setErrors([]);
      });
  }

  console.log(currentUser, 'currentUser in EditForm!')

  return (
    <section>
      <h3> Edit Your Previous Review </h3>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="hikes"
            defaultValue={location.trail_name}
          />
        </div>
        <div>
          <input
            type="text"
            id="review"
            defaultValue={ht.review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            id="date"
            placeholder="DD-MM-YYYY"
            defaultValue={ht.format_date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* <div>{errors}</div> */}
        <button type="submit" >{isLoading ? "Loading..." : "Submit"}</button>
        {/* <input type="submit" value="Update Review">{isLoading ? "Loading..." : "Submit"}</input> */}
      </form>
    </section>
  )
}


export default EditForm;