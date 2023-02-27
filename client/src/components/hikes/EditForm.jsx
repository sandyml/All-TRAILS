import React, { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { HikeContext } from '../context/HikeContext';
import { UserContext } from '../context/UserContext';
import { headers } from '../../Global';

// SET ERRORS HERE TOO? 

const EditForm = ({ location, ht }) => {
  const { user_id } = useContext(UserContext);
  const [errors, setErrors] = useState([])
  const [review, setReview] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { editReview } = useContext(HikeContext);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/hike_trails/${id}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({ 
        review,
        date,
        location_id: location.id,
        user_id, // ht.id // map through? 
      }),
    })
      .then((resp) => resp.json())
      .then(data => {
        editReview(data)
        navigate('/locations') // can't post it with out refreshing the page..
        console.log(data, "edit review")
      });
      setReview("") 
      setDate("")
      // setErrors([])
  }

return (
  <section>
    <h3> Edit Your Previous Review </h3>

    <form onSubmit={handleSubmit}>
      <div>
        {/* <label htmlFor="hikes">Select Trail Name</label> */}
        {/* <span>Trail Name</span> */}
        <input
          type="text"
          id="hikes"
          defaultValue={location.trail_name}
        />
      </div>

      {/* <label htmlFor="review">Review:</label> */}
      <div>
        <input
          type="text"
          id="review"
          defaultValue={ht.review}
          onChange={(e) => setReview(e.target.value)}
        />
      </div>

      {/* <label htmlFor="date">Date:</label> */}
      <div>
        <input
          type="text"
          id="date"
          placeholder="YYYY-MM-DD"
          defaultValue={ht.format_date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div>{errors}</div>
      <button type="submit">Submit</button>
    </form>
  </section>
)
}


export default EditForm;