import React, { useState } from 'react';
import { headers } from '../../Global';
import { useNavigate } from 'react-router-dom';
import Mountain from '../../img/mountains.png';
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
  };

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
  };

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

  const handleChange = (e) => {
    const key = e.target.id
    const value = e.target.value
    setFormData({
      ...formData,
      [key]: value,
    })
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   fetch(serverUrl + "/signup", {
  //     method: "POST",
  //     headers,
  //   })
  // }

  return (
    <body>
      <div className='container-home-div'>
        <img src={Mountain} className="bg-image" alt="background" />
        <form onSubmit={handleSubmit} className='main-form-log' action='#!' id='main-form'>
          <h2 className='log-h2'>Please Create An Account</h2>
          <div className='input-parent'>
            <label className='lbl-cn' htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              placeholder="Create Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input-parent'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              id='email'
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='input-parent'>
            <label htmlFor='password'>Password</label>
            <input
              placeholder="Create Password"
              id='password'
              value={formData.password}
              onChange={handleChange}
              type={passwordShown ? "text" : "password"}
              required
            />
          </div>
          <button onClick={togglePassword}>Show Password</button>
          <button type="submit" value="Submit" className="form-button">Submit</button>
        </form>
        {/* <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember me
          </label> */}
      </div>
    </body>
  )
}

export default Signup;