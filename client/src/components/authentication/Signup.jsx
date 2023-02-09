import React, { useState } from 'react'
import { headers } from '../../Global'
import { useNavigate } from 'react-router-dom';
import Mountain from '../../img/mountains.png'
// import { UserContext } from '../context/UserContext';

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
      <h2 className='signup-h2'>Please Create An Account</h2>


      <div>
        <form action="/action_page.php" method="post" onClick={handleSubmit}>

          <div className='imgcontainer'>
            <img src={Mountain} alt="Avatar" className="avatar" />
          </div>

          <div className="container"></div>
            
            <label htmlFor='username'><b>Username</b></label>
            <input
              type='password'
              id='username'
              name="username"
              placeholder="Enter Username"
              value={formData.username}
              onChange={handleChange}
              required
            />

            <label htmlFor='email'><b>Email</b></label>
            <input
              type='password'
              id='email'
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          

          <label htmlFor='password'><b>Password</b></label>
            <input
              type={passwordShown ? "text" : "password"}
              id='password'
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            
          </form>
            
          
          <button onClick={togglePassword}>Show Password</button>
          <button type="submit" value="Submit" className="form-button">Submit</button>
          {/* <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember me
          </label> */}
      </div>
    </div>
  )
}

export default Signup