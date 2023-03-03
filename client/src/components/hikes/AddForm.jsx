import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { headers } from '../../Global';
// import { HikeContext } from '../context/HikeContext';
// import { UserContext } from '../context/UserContext';

// const intialState = {
//   review: ""
// }

const AddForm = () => {
  const navigate = useNavigate();
  const [account_name, setAccount_Name] = useState("");
  const [errors, setErrors] = useState([]);
  const [locationId, setLocationId] = useState("");
  const [review, setReview] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Add Clicked!")
    // setIsLoading(true);
    fetch(`/hike_trails/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        account_name,
        review,
        location_id: locationId,
        // date, 
      }),
    }).then((resp) => {
      // setIsLoading(false);
      if (resp.ok) {
        navigate("/locations");
      } else {
        resp.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
      <h3>Create New Review</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Review</label>
          <input
            type="text"
            name="title"
            id="title"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        {errors}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddForm;