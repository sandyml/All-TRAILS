import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { headers } from '../../Global';
import View from '../../img/green.png'

const Login = () => {
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const [account_name, setAccount_name] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { login } = useContext(UserContext);

  // const [siginForm, setSigninForm] = useState({
  //   account_name: "",
  //   email: "",
  //   password: ""
  // });


  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      account_name,
      email,
      password
    }
    fetch('/login', {
      method: "POST",
      headers,
      body: JSON.stringify(user),
    })
      .then(resp => {
        if (resp.ok) {
          resp.json()
            .then((user) =>
              login(user));
          navigate('/');
        } else {
          resp.json()
            .then(() =>
              // .catch((error) => console.log(error))
              setError(error))
        }
      });
  }

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

  const handleNavigate = () => {
    navigate('/me')
  }

  return (
    <div className="container-signin">
      <h2 className='signin-h2'><b>Please login</b></h2><br />
      <form onSubmit={handleSubmit}>

        <div className='imgcontainer'>
          <img src={View} alt="Avatar" className="avatar" />
        </div>

        <label htmlFor='username'>
          <input
            type="password"
            id='username'
            placeholder="Enter Username"
            value={account_name}
            onChange={handleUsername} />
        </label>
        <label htmlFor='email'>
          <input
            type="password"
            id='email'
            placeholder="Enter Email"
            value={email}
            onChange={handleEmail} />
        </label>
        <div>
          <label htmlFor='password'>
            <input
              type={passwordShown ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={handlePassword}
            />
            <button onClick={togglePassword}>Show Password</button>
          </label>
        </div>
        <br /><br />
        <button type="submit" className="signin-button" onClick={handleNavigate}>Signin</button>
      </form>
    </div>
  )
}

export default Login;

