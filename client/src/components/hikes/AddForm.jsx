import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LocationContext } from '../context/LocationContext';
// import { HikeContext } from '../context/HikeContext';
import { headers } from '../../Global';

const AddForm = ({ location, ht }) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [date, setDate] = useState("");
  const [review, setReview] = useState("");
  const { user_id } = useContext(LocationContext);
  const { format_date } = location
  // cont [ userId, setUserId] = useState("")
  // const { handleAddReview } = useContext(HikeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Add Clicked!")
    fetch(`/hike_trails`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        review,
        date,
        location_id: location.id,
        user_id,
      }),
    }).then((resp) => {
      if (resp.ok) {
        // handleAddReview([]);
        navigate("/locations");
      } else {
        resp.json().then((err) => setErrors(err.errors));
      }
    });
    // setReview("");
    // setDate("");
  }

  return (
    <div>
      <h3>Create New Review</h3>

      <form onSubmit={handleSubmit}>
        <div>
          {/* <label htmlFor="hikes">Select Trail Name</label> */}
          {/* <span>Trail Name</span> */}
          <input
            type="text"
            id="hikes"
            defaultValue={location.trail_name}
            // onChange={(e) => setTrail_Name(e.target.value)}
          />
            {/* <option value="">input trail name...</option>
            {locations.map((location) => (
              <option key={location.id} defaultValue={location.id}>
                {location.trail_name}
              </option> */}
            {/* ))} */}
        </div>

        <div>
          <label htmlFor="title">Review</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder='how was the hike?'
            value={review}
            // defaultValue={location.review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="title">Date</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder='MM-DD-YYYY'
            value={format_date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>


        <div>{errors}</div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddForm;