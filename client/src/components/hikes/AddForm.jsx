import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HikeContext } from '../context/HikeContext';
import { header } from '../../Global';

const AddForm = ({ location, ht }) => {
  const navigate = useNavigate();
  // const [errors, setErrors] = useState([]);
  const [review, setReview] = useState("");
  const [date, setDate] = useState(ht.date);
  const { handleAddReview } = useContext(HikeContext);
  // const { format_date } = location
  const { format_date } = ht
  // const { handleAddReviews } = useContext(LocationContext);
  // cont [ userId, setUserId] = useState("")
  // const { handleAddReview } = useContext(HikeContext);
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Add Form Clicked!")
    // debugger
    fetch("/hike_trails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        review,
        date,
        location_id: location.id,
        user_id: ht.id
      }),
    })
      .then((r) => r.json())
      .then((newReview) => {
        console.log(newReview, "Added New Review")
        // setReview("")
        // setDate("")
        // setErrors([]);
        handleAddReview(newReview);
        navigate('/locations')
      });
  }


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Add Clicked!")
  //   fetch(`/hike_trails`, {
  //     method: "POST",
  //     headers,
  //     body: JSON.stringify({
  //       review,
  //       date,
  //       location_id: location.id,
  //       user_id, //: ht.id
  //     }),
  //   }).then((resp) => {
  //     if (resp.ok) {
  //       // console.log(resp.json())
  //       handleAddReview(resp.json());
  //       navigate("/locations");
  //     } else {
  //       resp.json().then((err) => setErrors(err.errors));
  //     }
  //   });
  // }

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
            placeholder='MM/DD/YYYY'
            defaultValue={format_date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>


        {/* <div>{errors}</div> */}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddForm;