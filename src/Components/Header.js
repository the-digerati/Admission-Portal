import React from 'react'
import './Header.css'
import Logo from '../logo.png'
import { BiUserCircle } from 'react-icons/bi'

const Header = (props) => {
  return (
    <div className='md:container md:mx-auto'>
      <header>
        <div className='user-header'>
          {/* <FaUserGraduate/> */}
        
          <p className='userName'>Welcome, <span id='userName'>{props.userName}</span></p>
        </div>
        <img className='logo' src={Logo} alt='Logo' />
        <div id='schoolName'>
          <p>DEUTSCHE INTERNATIONAL SCHOOL</p>
        </div>
      </header>
    </div>
  )
}

export default Header