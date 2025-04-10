import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import{ Link }from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
       <div className='outerlogo'>
       <div>
      <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
      </div>

      <h3 className='title'>Foodie<span>.</span></h3>
      </div>
      <img className='profile' src={assets.profile_image} alt="" />
    
    </div>
  )
}

export default Navbar
