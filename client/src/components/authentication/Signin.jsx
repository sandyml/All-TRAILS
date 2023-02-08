import React from 'react'
// Welcome to All tRAILS! You are now signed in! 

const Signin = () => {

  return (
    <div className='login-container'>
      <form className='signin-form'>
        <label htmlFor='username'>Username:
          <input
            type='textarea'
            id='username'
          />
        </label><br />
        <label htmlFor='email'>Email:
          <input
            type='textarea'
            id='email'
          />
        </label><br />
        <label htmlFor='password'>Password:
          <input
            type='password'
            id='password'
          />
        </label><br />
        <button type="submit" value="Submit" className="signin-button">Submit</button>
      </form>
    </div>
  )
}

export default Signin
