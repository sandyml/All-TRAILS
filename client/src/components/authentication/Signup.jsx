import React, { useState } from 'react'
import { serverUrl, headers } from '../../Global'
import { useNavigate } from 'react-router-dom';
// import { UserContext } from '../context/UserContext'

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: 0,
    username: "",
    email: "",
    password: ""
  });

  console.log("Inside form")

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(serverUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(formData)
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data))
      navigate("/hike_trails");
  }

  console.log("Inside under")

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
        <div className='form-sub-border'>
          <label htmlFor='username'>Username:
            <input 
            type='textarea' 
            id='username' 
            placeholder='Username must be at least 5 characters' 
            value={formData.username} 
            onChange={handleChange}
            />
          </label>
          <label htmlFor='email'>Email:
            <input 
            type='textarea' 
            id='email' 
            placeholder='Enter email here' 
            value={formData.email} 
            onChange={handleChange}
            />
          </label>
          <label htmlFor='password'>Password:
            <input 
            type='textarea' 
            id='password' 
            placeholder='Password must be at least 5 characters' 
            value={formData.password} 
            onChange={handleChange}
            />
          </label>
          <button type="submit" value="Submit" className="form-button">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Signup