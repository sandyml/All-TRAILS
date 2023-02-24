import { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { headers } from '../../Global';
import { HikeContext } from '../context/HikeContext';

const intialState = {
  review: ""
}

const AddReviewForm = () => {
  const [formData, setFormData] = useState(intialState);
  // const [formData, setFormData] = useState(review[{}]); //need nested state instead of form
  const navigate = useNavigate();
  const { addReview } = useContext(HikeContext);
  const { id } = useParams();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`/hike_trails/${id}`, {
      method: "POST",
      headers,
      body: JSON.stringify(formData)
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
          <label htmlFor="title">Review</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.review}
            onChange={handleChange}
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