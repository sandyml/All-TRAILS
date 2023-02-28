import React, { useState } from 'react';
import { headers } from '../../Global';
import { Link, useNavigate } from 'react-router-dom';
import Background from '../../img/winter_hike.jpg'
// import Mountain from '../../img/mountains.png';
// import View from '../../img/green.png'


const Signup = ({ setCurrentUser }) => {
  const [account_name, setAccount_Name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [errors, setErrors] = useState([]);
  // const { signup, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/signup', {
      method: "POST",
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
        if (!user.errors) {
          console.log(user)
          setCurrentUser(user)
          // setUser(user)
          // signup(user)
          navigate("/home")
        } else {
          console.log(user, "error thrown in signup")
          const displayErrors = user.errors.map((err) => <div key={err}>{err}</div>);
          setErrors(displayErrors);
        }
      });
    // console.log("Registered/Sigup");
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  };

  const handleAccountName = (e) => {
    setAccount_Name(e.target.value)
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
            onChange={handleAccountName}
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
            onChange={handleEmail}
            // required={true}
          />
        </div>
        <div className='input-parent'>
          <span>Password</span>
          <input
            placeholder="Create Password"
            id='password'
            autoComplete="current-password"
            value={password}
            onChange={handlePassword}
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
            onChange={handleConfirmPassword}
            type={passwordShown ? "text" : "password"}
            // required={true}
          />
        </div>

        <input className='checkbox' onClick={togglePassword} type="checkbox" id="showPassword" />
        <label className='checkbox' htmlFor="showPassword">&nbsp;Show password</label>
        <br/><br/>
        {/* <button onClick={togglePassword}>Show Password</button> */}
        <p>By creating an account you agree to our
          <Link to="/termsandconditions">&nbsp;Terms & Privacy</Link>
        </p><br />

        <button type="submit" value="Submit" className="form-button">
          Register
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