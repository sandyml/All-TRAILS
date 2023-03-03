import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { headers } from '../../Global';
import { HikeContext } from '../context/HikeContext';
// import { UserContext } from '../context/UserContext';
import { LocationContext } from '../context/LocationContext';


const EditForm = ({ location, ht }) => {

  const [review, setReview] = useState(ht.review);
  const [date, setDate] = useState(ht.date);
  const [isLoading, setIsLoading] = useState(false);

  const { user_id } = useContext(HikeContext);
  const { editLReview } = useContext(LocationContext);
  // const { editReview, user_id } = useContext(HikeContext);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true); 
    fetch(`/hike_trails/${ht.id}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({
        review,
        date,
        location_id: location.id,
        user_id,
      }),
    })
      .then((r) => r.json())
      .then(editReview => {
        setIsLoading(false);
        // editReview(editReview)
        editLReview(editReview)
        console.log(editReview, "review has been updated(edited)!")
      });
      navigate(`/home`)
  }

  // useEffect(() => {
  //   if(handleSubmit) {
  //     navigate('/locations')
  //   }
  // }, [])

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
        <button type="submit" value="Update Review">{isLoading ? "Loading..." : "Submit"}</button>
      </form>
    </section>
  )
}


export default EditForm;