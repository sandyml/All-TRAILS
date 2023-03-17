import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Background from '../../img/winter_hike.jpg';
import { headers } from '../../Global';

const Login = () => {
  const [account_name, setAccount_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [passwordShown, setPasswordShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { handleLogin } = useContext(UserContext);

  const navigate = useNavigate();;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const user = {
      account_name,
      email,
      password,
    }
    fetch("/login", {
      method: "POST",
      headers,
      body: JSON.stringify(user)
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          handleLogin(data)
          setErrors([])
          navigate("/locations")
        }
      })
  }

  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }

  return (
    <div className='container-home-div' >
      <img src={Background} className="bg-image" alt="background" />
      <form onSubmit={handleSubmit} className='main-form-log' id='main-form'>
        <h2 className='log-h2'>Login to your account</h2>

        <div className='input-parent'>
          <label className='lbl-cn' htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            placeholder="Enter Username"
            autoComplete="off"
            value={account_name}
            onChange={(e) => setAccount_name(e.target.value)}
            required={true}
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
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
        </div>

        <div className='input-parent'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            type={passwordShown ? "text" : "password"}
          />
        </div>

        <input className='checkbox' onClick={togglePassword} type="checkbox" id="showPassword" />
        <label className='checkbox' htmlFor="showPassword">&nbsp;Show password</label>
        <br /><br />

        <button type='submit'>
          {isLoading ? "Loading..." : "Login"}
        </button>

        <p>
          Don't have an account?  &nbsp;
          <Link to="/signup" className='signup'>
            Signup
          </Link>
        </p><br />

        <div>{errors}</div>

      </form>
    </div>
  )
}

export default Login;