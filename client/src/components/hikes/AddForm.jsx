import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HikeContext } from '../context/HikeContext';

const AddForm = ({ location, ht }) => {
  const navigate = useNavigate();
  // const [errors, setErrors] = useState([]);
  const [review, setReview] = useState("");
  const [date, setDate] = useState(ht.date);
  const { handleAddReview } = useContext(HikeContext);
  const { format_date } = ht
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    console.log("Add Form Clicked!")
    fetch("/hike_trails", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        review,
        date,
        location_id: location.id,
        user_id: ht.id
      }),
    })
      .then((r) => r.json())
      .then((newReview) => {
        setIsLoading(false);
        console.log(newReview, "Added New Review")
        handleAddReview(newReview);
        navigate('/locations')
      });
  }
// initially had current user conitional rendering for user to enable add and edit 
  return (
    <>
      <span>Create New Review</span>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="hikes"
            defaultValue={location.trail_name}
            // onChange={(e) => setTrail_Name(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="title">Review</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder='how was the hike?'
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="title">Date</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder='MM/DD/YYYY'
            defaultValue={format_date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        {/* <div>{errors}</div> */}
        {/* {errors.map((err) => (
              <div key={err}>{err}</div>
            ))} */}
        {/* {isLoading ? "Loading..." : "Submit"} */}
        {/* <button type='submit'>Submit</button> */}
        <button type='submit'>{isLoading ? "Loading..." : "Submit"}</button>
      </form>
    </>
  )
}

export default AddForm;