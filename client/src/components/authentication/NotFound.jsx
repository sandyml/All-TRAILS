import React from 'react'

const NotFound = () => {
  return (
    <form className='main-form' action='#!' id='main-form'>
      <h2 className='log-h2'>Login to your account</h2>

      <div className='input-parent'>
        <label className='lbl-cn' htmlFor='username'>Username</label>
        <input className='inpt-cn' type='text' id='username' />
      </div>

      <div className='input-parent'>
        <label className='lbl-cn' htmlFor='email'>Email</label>
        <input className='inpt-cn' type='text' id='email' />
      </div>

      <div className='input-parent'>
        <label className='lbl-cn' htmlFor='password'>Password</label>
        <input className='inpt-cn' type='password' id='password' />
      </div>


      <button type='submit' className='login-btn'>Login</button>
    </form>
  )
}

export default NotFound