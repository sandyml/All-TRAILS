import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { headers } from "../../Global";

const AddForm = () => {
 const [newReview, setNewReview] = useState("");
 const [errors, setErrors] = useState([]);
 const navigate = useNavigate();
 const { id } = useParams

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log("submit clicked");
  fetch(`/hike_trails/${id}`, {
   headers,
   body: JSON.stringify({}),
  })
   .then((resp) => {
    if (resp.ok) {
     resp.json()
     console.log(resp.json())
     // .then((newReview) => handleAddNewReview(newReview)); // update state
    //  navigate("/locations");
    } else {
     resp.json().then((err) => setErrors(err.errors));
    }
   })
   setNewReview("")
 };

 const handleNewReview = (e) => {
  setNewReview(e.target.value)
 }

 return (
  <div>
   <div className="testimonial-heading">
   <span>Add New Review</span>
    <form onSubmit={handleSubmit}>
     <div>
      <label htmlFor="review">Review:</label>
      <input
       type="text"
       name="review"
       id="reviews"
       value={newReview}
       onChange={handleNewReview}
      />
     </div>
     <button type='submit'>Add Review</button>
    </form>
   </div>
   {errors}
  </div>
 );
};

export default AddForm;