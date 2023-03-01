import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { HikeContext } from '../context/HikeContext';
import { UserContext } from '../context/UserContext';
import { headers } from '../../Global';

// SET ERRORS HERE TOO? 

const EditForm = ({ location, ht, loading, loggedIn, currentUser }) => {
  const [review, setReview] = useState(ht.review);
  const [date, setDate] = useState(ht.date);
  const [isLoading, setIsLoading] = useState(false);
  // const [errors, setErrors] = useState([])
  
  const { user_id } = useContext(UserContext);
  const { hike_trails } = useContext(HikeContext);
  const { editReview } = useContext(HikeContext);

  const navigate = useNavigate();
  // const { id } = useParams();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    // debugger practice 
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
        console.log(data, "review has been updated(edited)!")
        editReview(data)
        navigate('/locations') // can't post it with out refreshing the page..
        // setErrors([]);
      });
  }

  console.log(hike_trails, "EditForm")

  // useEffect(() => {
  //   if(!loading && !loggedIn) {
  //     navigate('/login')
  //   }
  //     const hike = hike_trails.find(hike => hike.id === parseInt(id, 10))
  //     if(!loading && currentUser.id !== hike.user.id) {
  //       navigate('/')
  //     }
  //     console.log('hike', hike)
  // }, [hike_trails, loading, loggedIn, currentUser, navigate, id])

  console.log(currentUser, 'currentUser in EditForm')

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
          placeholder="YYYY-MM-DD"
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