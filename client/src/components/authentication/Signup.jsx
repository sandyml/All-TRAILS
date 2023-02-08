import React, { useState } from 'react'
import { headers } from '../../Global'
import { useNavigate } from 'react-router-dom';
// import { UserContext } from '../context/UserContext'

const Signup = () => {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const [formData, setFormData] = useState({
    id: 0,
    username: "",
    email: "",
    password: ""
  });

  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }

  console.log("Inside signup component")

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/signup', {
      method: "POST",
      headers,
      body: JSON.stringify(formData)
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data))
    navigate("/hike_trails");
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch(backendUrl, {
  //    method: 'POST',
  //    headers,
  //    body: JSON.stringify({
  //     hike_trail: {
  //       user_id,
  //       locate_id,
  //       review,
  //       date
  //     },
  //     user: {
  //       account_name,
  //       email,
  //       password
  //     },
  //     locate: {
  //       trail_name,
  //       city,
  //       state, 
  //       image_url,
  //       difficulty,
  //       legnth,
  //       elevation_gain,
  //       route_type
  //     }
  //    })
  //   })
  //    .then(resp => resp.json())
  //    .then(data => {
  //     console.log(data)
  //     // set(data)
  //     navigate("/hike_trails");
  //    })
  //  }
  

  console.log("Inside signup under handlesubmit fetch")

  const handleChange = (e) => {
    const key = e.target.id
    const value = e.target.value
    setFormData({
      ...formData,
      [key]: value,
    })
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   fetch(serverUrl + "/signup", {
  //     method: "POST",
  //     headers,
  //   })
  // }

  return (
    <div className='signup-div'>
      <h2>Please Create An Account</h2>
      <form className='form-sub' onClick={handleSubmit}>
        {/* <div className='form-sub-border'> */}
          <label htmlFor='username'>Username:
            <input
              type='textarea'
              id='username'
              placeholder='Username must be at least 5 characters'
              value={formData.username}
              onChange={handleChange}
            />
          </label><br />
          <br />
          <label htmlFor='email'>Email:
            <input
              type='email'
              id='email'
              placeholder='Enter email here'
              value={formData.email}
              onChange={handleChange}
            />
          </label><br />
          <br />
          <label htmlFor='password'>Password:
            <input
              type={passwordShown ? "text" : "password"}
              id='password'
              placeholder='Password must be at least 5 characters'
              value={formData.password}
              onChange={handleChange}
            />
            <button onClick={togglePassword}>Show Password</button>
          </label><br />
          <br />
          <button type="submit" value="Submit" className="form-button">Submit</button>
        {/* </div> */}
      </form>
    </div>
  )
}

export default Signup