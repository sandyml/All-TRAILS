import React, { useContext, useState } from 'react';
import { headers } from '../../Global';
import { Link, useNavigate } from 'react-router-dom';
import Background from '../../img/winter_hike.jpg'
import { UserContext } from '../context/UserContext';

const Signup = () => {
  const [account_name, setAccount_Name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  const { setCurrentUser, handleLogin, loggedIn, loading } = useContext(UserContext);

  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch('/signup', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        account_name,
        email,
        password,
        password_confirmation: passwordConfirmation
      })
    })
      .then((resp) => resp.json())
      .then((user) => {
        setIsLoading(false);
        if (!user.errors) {
          console.log(user)
          setCurrentUser(user)
          handleLogin(user)
          navigate("/home")
        } else {
          console.log(user, "error thrown in signup")
          const displayErrors = user.errors.map((err) => <div key={err}>{err}</div>);
          setErrors(displayErrors);
        }
      });
    console.log("Registered/Sigup");
  };

  return (
    <div className='container-home-div'>
      <img src={Background} className="bg-image" alt="background" />
      <form onSubmit={handleSubmit} className='main-form-log' action='#!' id='main-form'>

        <h2 className='log-h2'>Please Create An Account</h2>
        <div className='input-parent'>
          <span className='lbl-cn'>Username</span>
          <input
            type='text'
            id='account_name'
            autoComplete="off"
            placeholder="Create Username"
            value={account_name}
            onChange={(e) => setAccount_Name(e.target.value)}
          // required={ true}
          />
        </div>
        <div className='input-parent'>
          <span>Email</span>
          <input
            type='text'
            id='email'
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          // required={true}
          />
        </div>
        <div className='input-parent'>
          <span>Password</span>
          <input
            placeholder="Create Password"
            id='password'
            value={password}
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            type={passwordShown ? "text" : "password"}
          // required={true}
          />
        </div>
        <div className='input-parent'>
          <span>Confirm Password</span>
          <input
            placeholder="Confirm Password"
            id='password_confirmation'
            autoComplete="current-password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            type={passwordShown ? "text" : "password"}
          // required={true}
          />
        </div>

        <input className='checkbox' onClick={togglePassword} type="checkbox" id="showPassword" />
        <label className='checkbox' htmlFor="showPassword">&nbsp;Show password</label>
        <br /><br />
        {/* <button onClick={togglePassword}>Show Password</button> */}
        <p>By creating an account you agree to our
          <Link to="/termsandconditions">&nbsp;Terms & Privacy</Link>
        </p><br />

        <button type="submit" value="Submit" className="form-button">
          {isLoading ? "Loading..." : "Register"}

        </button>

        <p>
          Already have an account? &nbsp;
          <Link to="/login" className='signup'>
            Login
          </Link>
        </p>

        <br />
        <div>{errors}</div>

      </form>
    </div>
  )
}

export default Signup;