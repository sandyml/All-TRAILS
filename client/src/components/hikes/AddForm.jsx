import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { HikeContext } from '../context/HikeContext';
// import { UserContext } from '../context/UserContext';
import { headers } from '../../Global';
import { LocationContext } from '../context/LocationContext';

const AddForm = ({ location, ht }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [review, setReview] = useState("");
  const [errors, setErrors] = useState([])
  const [date, setDate] = useState("DD/MM/YYYY");
  // const [date, setDate] = useState(ht.date); 
  const navigate = useNavigate();
  // const { format_date } = ht

  // context
  const { handleAddReview } = useContext(HikeContext);
  // const { handleAddReview } = useContext(LocationContext);
  // const { loading, loggedIn } = useContext(UserContext);
  // console.log(format_date, "FORMAT", date, "DATE", ht.date, "HT.DATE")

  // const { id } = useParams();
  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    fetch('/hike_trails', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        review,
        date,
        location_id: location.id,
        user_id: ht.user_id
      })
    })
      .then((r) => r.json())
      .then(newReview => {
        if (newReview.errors) {
          setErrors(newReview.errors)
        } else {
          setIsLoading(false);
          console.log(newReview, "Added New Review")
          handleAddReview(newReview)
          navigate('/locations');
        }
      });
  }

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
            placeholder='DD/MM/YYYY'
            value={date}
            // defaultValue={ht.format_date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        {errors.map((err) => (
          <div key={err}>{err}</div>
        ))}
        <button type='submit'>{isLoading ? "Loading..." : "Submit"}</button>
      </form>
    </>
  )
}

export default AddForm;