import React from 'react'
import "./Css/LoginSignUp.css"

function LoginSignUp() {
  return (
    <div className='LoginSignUp'>
      <div className="LoginSignUp-container">
        <h1>Sign Up</h1>
        <div className="LoginSignUp-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Email address' />
          <input type="password" placeholder='password' />
        </div>
        <button>Continue</button>
        <p className="LoginSignUp-login">Already Have an Account? <span>Login here</span></p>
        <div className='LoginSignUp-Agree'>
          <input type="checkbox" name='' id='' />
          <p>By Continue, i agree to the terms of use & privacy policy </p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp