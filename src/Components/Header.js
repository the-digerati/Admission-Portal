import React from 'react'

const Header = () => {
  return (
    <div className='md:container md:mx-auto'>
        <header>
        <div className='user'>
          <p className='userName'>Mark</p>
        </div>
        <img className='logo' alt='Logo'/>
        <div id='schoolName'>
          <p>DEUTSCHE INTERNATIONAL SCHOOL</p>
        </div>
      </header>
    </div>
  )
}

export default Header