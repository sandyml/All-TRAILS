import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { headers } from '../../Global';
import { HikeContext } from '../context/HikeContext';

// :user_id, :location_id, :account_name, :review, :date
// const intialState = {
//   account_name: "",
//   review: "",
//   date: ""
// }

const AddReviewForm = () => {
  // const [formData, setFormData] = useState(review[{}]); //need nested state instead of form
  // const [formData, setFormData] = useState(intialState);
  const [account_name, setAccount_Name] = useState("");
  const [review, setReview] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  const { addReview } = useContext(HikeContext);
  const { id } = useParams();

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`/hike_trails/${id}`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        account_name,
        review,
        date
      })
    })
      .then((resp) => resp.json())
      .then((data) => addReview(data));
    navigate('/locations');
  }

  return (
    <div>
      <h3>Create New Review</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Account Name</label>
          <input
            type="text"
            name="account_name"
            id="account_name"
            value={account_name}
            onChange={(e) => setAccount_Name(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="title">Review</label>
          <input
            type="text"
            name="review"
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="title">Date</label>
          <input
            type="text"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddReviewForm;