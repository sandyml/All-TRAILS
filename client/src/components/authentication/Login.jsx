import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { headers } from '../../Global';
import View from '../../img/green.png'

const Login = () => {
  const navigate = useNavigate();
  const [account_name, setAccount_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  // const [errors, setErrors] = useState([])
  const { login, setErrors, errors } = useContext(UserContext);

  const handleSubmit = (e) => {
    console.log("clicked login")
    e.preventDefault();
    const user = {
      account_name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    }
    fetch('/login', {
      method: "POST",
      headers,
      body: JSON.stringify(user)
    })
      .then((resp) => {
        if (resp.ok) {
          // debugger
          resp.json().then((user) => {
          login(user);
          navigate('/home')
        })
        } else {
          // resp.json().then((data) => {
          //   console.log("hello", data)
          //   setErrors(data)
          // })
          resp.json().then(
            // (err) => console.log(err.errors, "working!!!")
            (errors) => console.log(errors)
            );
          }
      })
  }

  // console.log("Login under component")

  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }

  const handleUsername = (e) => {
    setAccount_name(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleConfirmPassword = (e) => {
    setPasswordConfirmation(e.target.value)
  }

  return (
      <div className='container-home-div' >
        <img src={View} className="bg-image" alt="background" />

        <form onSubmit={handleSubmit} className='main-form-log' action='#!' id='main-form'>
          <h2 className='log-h2'>Login to your account</h2>

          <div className='input-parent'>
            <label className='lbl-cn' htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              placeholder="Enter Username"
              autoComplete="off"
              value={account_name}
              onChange={handleUsername}
            />
          </div>

          <div className='input-parent'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              id='email'
              placeholder="Enter Email"
              autoComplete="current-password"
              value={email}
              onChange={handleEmail}
            />
          </div>

          <div className='input-parent'>
            <label htmlFor='password'>Password</label>
            <input
              placeholder="Enter Password"
              id='password'
              value={password}
              onChange={handlePassword}
              type={passwordShown ? "text" : "password"}
            />
          </div>

          <div className='input-parent'>
            <label htmlFor='confirm-password'>Confirm Password</label>
            <input
              placeholder="Confirm Password"
              id='confirm-password'
              value={passwordConfirmation}
              onChange={handleConfirmPassword}
              type={passwordShown ? "text" : "password"}
            />
          </div>
          <button onClick={togglePassword}>Show Password</button>
          <button type='submit'>Login</button>
        </form>
      </div>
  )
}

export default Login;

