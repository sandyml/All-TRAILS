import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { headers } from '../../Global';

const Signin = () => {
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
      <h2>Please login to continue..</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username:
          <input
            type="textarea"
            id='username'
            placeholder="enter username"
            value={account_name}
            onChange={handleUsername} />
        </label>
        <label htmlFor='email'>Email:
          <input
            type="email"
            id='email'
            placeholder="enter username"
            value={email}
            onChange={handleEmail} />
        </label>
        <div>
          <label htmlFor='password'>Password:
            <input
              type={passwordShown ? "text" : "password"}
              placeholder="enter password"
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

export default Signin;

