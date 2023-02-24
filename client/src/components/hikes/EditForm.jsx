import React, { useContext, useState } from 'react';
import { headers } from '../../Global';
// import { LocationContext } from '../context/LocationContext';
import { useNavigate, useParams } from 'react-router-dom';
import { HikeContext } from '../context/HikeContext';

// function EditForm({ onReviewRequest, hikeReview = {
//       account_name: "",
//       review: "",
//       date: ""
//     },
//     edit }) {

const EditForm = ({ edit }) => {
  // const [formData, setFormData] = useState(hikeReview);
  const [account_name, setAccount_Name] = useState("");
  const [review, setReview] = useState("");
  const [date, setDate] = useState("");
  // const [errors, setErrors] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();
  const { handleAddReview } = useContext(HikeContext)

  const handleReview = () => {
    fetch(`hike_trails/${id}`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        account_name,
        review,
        date
      })
    })
      .then((resp) => resp.json())
      .then(data => {
        console.log(data, 'Edit Form')
        handleAddReview(data)
      })
      navigate('/locations')
  }

  const handleUpdateReview = () => {
    fetch(`/hike_trails/${id}/edit`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({
        account_name,
        review,
        date,
      })
    })
      .then((resp) => resp.json())
      .then(updateData => {
        console.log(updateData, "Updated Data")
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (edit) {
      handleUpdateReview()
    } else {
      handleReview()
    }
  }

  // const handleChange = (e) => {
  //   const key = e.target.id
  //   const value = e.target.value
  //   setFormData({
  //     ...formData,
  //     [key]: value
  //   })
  // };

  // const errorsArr = errors.map((err) => <p key={err}>{err}</p>) // might not need 

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h2> Edit Form</h2>
        {/* <h2>{account_name ? "Edit Review" : "Add New Review"}</h2> */}
        <div>
          <label htmlFor="name">Name:</label>
        </div>

        <div>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            value={account_name}
            onChange={(e) => setAccount_Name(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="review">Review:</label>
        </div>

        <div>
          <input
            type="text"
            id="review"
            placeholder="Enter review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="date">Date:</label>
        </div>
        <div>
          <input
            type="text"
            id="date"
            placeholder="YYYY-MM-DD"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* {errorsArr} */}
        <button type="submit">Submit</button>
      </form>
    </section>
  )
}


export default EditForm;