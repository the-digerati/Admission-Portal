import React from 'react'
import './Header.css'
import Logo from '../logo.png'
import Profile from '../profile.svg'

const Header = () => {
  return (
    <div className='md:container md:mx-auto'>
        <header>
        <div className='user-header'>
            {/* <FaUserGraduate/> */}
          <img src={Profile} alt ='user-avatar' />  
          <p className='userName'>Mark</p>
        </div>
        <img className='logo' src={Logo} alt='Logo'/>
        <div id='schoolName'>
          <p>DEUTSCHE INTERNATIONAL SCHOOL</p>
        </div>
      </header>
    </div>
  )
}

export default Header