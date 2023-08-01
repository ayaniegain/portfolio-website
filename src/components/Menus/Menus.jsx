import React from 'react'
import "./Menus.css"
import profilepic from "../../assets/img/profile_pic.png"


function Menus() {
  return (

    <div className='navbar-profile-pic'>
        <img src={profilepic} alt="profile pic" />
    </div>
  )
}

export default Menus