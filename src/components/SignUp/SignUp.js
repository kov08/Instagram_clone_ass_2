import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../img/Logo-Instagram.png'
import './styles.css'

export default function SignUp() {
  return (
    <div className='signUp'>
      <div className="form-container">
        <div className="form">
            <img className='signUpLogo' src={logo} alt=''/>
            <p className='logInPara'>
              Sign up to share and explore <br /> photos and videos
            </p>
            <div> <input type='text' name='name' id='name' placeholder='Full Name' /> </div>
            <div> <input type='text' name='username' id='username' placeholder='Username' /> </div>
            <div> <input type='email' name='email' id='email' placeholder='Email' /> </div>
            <div> <input type='password' name='password' id='password' placeholder='Password' /> </div>
            <p className='logInPara' style={{fontSize:'12px', margin:'3px 0px'}}>
              By signing up you agree to our terms <br /> and policy policy and cookies policy
            </p>
            <input type='submit' id='submit-btn' value='Sign Up'/>      
          </div>
          <div className="form2">
            Already have an account ? <Link to='/signin'> <span style={{color:'blue', cursor: 'pointer'}}> Sign In </span> </Link>
          </div>
        </div>
    </div>
  )
}
