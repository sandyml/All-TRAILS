import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { headers } from "../../Global";

const EditForm = () => {
 const [editReview, setEditReview] = useState("");
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

     // .then((newReview) => handleAddNewReview(newReview)); // update state
    //  navigate("/locations");
    } else {
     resp.json().then((err) => setErrors(err.errors));
    }
   })
   setEditReview("")
 };

 const handleEditReview = (e) => {
  console.log("edit review has been clicked!")
  // {value of previous review ...review?}
  setEditReview(e.target.value)
 }

 const handleEdit = () => {
  console.log("Edit Button Clicked!")
  fetch(`/hike_trails/${id}/edit`)
    .then(resp => resp.json())
    .then(data => {
      console.log(data, "edit")
    })
    navigate('/locations')
}


 return (
  <div>
   <div className="testimonial-heading">
   <span>Edit Review</span>
    <form onSubmit={handleSubmit}>
     <div>
      <label htmlFor="review">Review:</label>
      <input
       type="text"
       name="review"
       id="reviews"
      //  defaultValue={}
       value={editReview}
       placeholder="enter previous review using state"
       onChange={handleEditReview}
      />
     </div>
     <button type='submit' onClick={handleEdit}>Add Review</button>
    </form>
   </div>
   {errors}
  </div>
 );
};

export default EditForm;