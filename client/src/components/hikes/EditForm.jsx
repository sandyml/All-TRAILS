import React, { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { HikeContext } from '../context/HikeContext';
import { UserContext } from '../context/UserContext';
import { headers } from '../../Global';

// SET ERRORS HERE TOO? 

const EditForm = ({ location, ht }) => {
  const [review, setReview] = useState(ht.review);
  const [date, setDate] = useState(ht.date);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([])

  // useContext
  const { loading, loggedIn, currentUser } = useContext(UserContext);
  const { editReview, user_id } = useContext(HikeContext);

  const navigate = useNavigate();
  const { id } = useParams();

  // useEffect(() => {
  //   if(!loading && !loggedIn) {
  //     navigate('/login')
  //   }
  //     if(!loading && currentUser.id !== hike_trails.user.id) {
  //       navigate('/')
  //     }
  //     console.log('hike', hike_trails)
  // }, [hike_trails, loading, loggedIn, currentUser, navigate, id])

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
      .then((resp) => resp.json())
      .then(data => {
        setIsLoading(false);
        editReview(data)
        navigate('/locations') // can't post it with out refreshing the page..
        console.log(data, "review has been updated(edited)!")
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
        <button type="submit">{isLoading ? "Loading..." : "Submit"}</button>
      </form>
    </section>
  )
}


export default EditForm;