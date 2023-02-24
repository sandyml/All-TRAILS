import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { headers } from '../../Global';
import { HikeContext } from '../context/HikeContext';
import { UserContext } from '../context/UserContext';

// const intialState = {
//   review: ""
// }

const AddForm = () => {
  // const [formData, setFormData] = useState(intialState);
  // const [formData, setFormData] = useState(review[{}]); //need nested state instead of form
  const navigate = useNavigate();
  const [account_name, setAccount_Name] = useState("");
  const [reviews, setReviews] = useState({hike_trails: []});
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [locationId, setLocationId] = useState("");
  const { addReview } = useContext(HikeContext);
  const { id } = useParams();
  const [review, setReview] = useState("")
  // const { hike_trails } = UserContext(HikeContext)

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   })
  // }

  // const handleSubmit = (e, id) => {
  //   e.preventDefault();
  //   fetch(`/hike_trails`, {
  //     method: "POST",
  //     headers,
  //     body: JSON.stringify({
  //       review,
  //     })
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => addReview(data));
  //   // navigate('/locations');
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch(`/hike_trails/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        account_name,
        review,
        location_id: locationId,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        navigate("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
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
        {/* Might use this instead of input form */}
        {/* <div>
          <label htmlFor="content">Review</label>
          <textarea
            type="text"
            name="content"
            id="content"
            value={formData.review}
            onChange={handleChange}
          />
        </div> */}
        {/* <input type="submit" value="Create Review" /> */}
        { isLoading ? "Loading..." : "Try Again..." }
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddForm;