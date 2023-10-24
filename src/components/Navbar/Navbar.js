import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/Logo-Instagram.png'

import './styles.css'


export default function Navbar() {
  return (
    <div className='navbar'>
        <img src ={logo} alt=''/>
        <ul className='nav-menu'>
            <Link to="SignIn"><li>Sign In</li></Link>
            <Link to="SignUp"><li>Sign Up</li></Link>
            <Link to="Profile"><li>Profile</li></Link>
            <Link to="Createpost"><li>Create Post</li></Link>
        </ul>        
    </div>
  )
}
