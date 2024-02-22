import React from 'react'

function PasswordReset() {
  return (
    <>
    <form className='passwordreset-container'>
    <center><h4>Password Reset</h4></center>
    <label>Enter New Password</label>
    <input type='text' placeholder='Enter New Password' required/>
    <label>Confirm password</label>
    <input type='password' placeholder='Confirm Password' required/>
    <button className='btn btn-primary'>Done</button>
    </form>
    </>
  )
}

export default PasswordReset