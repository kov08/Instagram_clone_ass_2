import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../img/Logo-Instagram.png'
import './styles.css'

export default function SignIn() {
  return (
    <div className='signIn'>
      <div className="form-container">
        <div className="form">
          <img className='signinLogo' src={logo} alt=''/>
          <div><input type='email' name='email' placeholder='Email' /></div> 
          <div><input type='password' name='password' placeholder='Password' /></div>               
          <input type='submit' id='submit-btn' value='Sign in' />
        </div>
        <div className='form2'>
          Don't have an account ? <Link to='/signup'> <span style={{color: 'blue', cursor: 'pointer'}}> Sign Up </span> </Link>
        </div>
      </div>      
    </div>
  )
}
