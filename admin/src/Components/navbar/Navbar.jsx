import React from 'react'
import "./Navbar.css"
import nav_log from "../../assets/nav-logo.svg"
import nav_profile from "../../assets/nav-profile.svg"


function Navbar() {
  return (
    <div className='navbar'>
        <img className='nav-logo' src={nav_log} alt="" />
        <img className='nav-profile' src={nav_profile} alt="" />
    </div>
  )
}

export default Navbar