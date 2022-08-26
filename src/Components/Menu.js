import React from 'react'
import './Menu.css'
import chevron from '../Icons/chevron.svg'
import broadcast from '../Icons/broadcast.svg'
import cash from '../Icons/cash.svg'
import logout from '../Icons/logout.svg'
import profile from '../Icons/profile.svg'
import settings1 from '../Icons/settings1.svg'
import Vector from '../Icons/Vector.svg'


const Menu = () => {
  return (
    <div className='container hero-section'>
      {/* Aside Menu */}
      <div className='aside-menu'>
        <ul className='menu-nav'>
          <li><img src={chevron}/>Less</li>
          <li><img src={chevron} />Ghana</li>
          <li><img src={chevron} />Ghana</li>
          <li><img src={chevron} />Ghana</li>
          <li><img src={chevron} />Ghana</li>
          <li><img src={chevron} />Ghana</li>
          <li><img src={chevron} />Ghana</li>

        </ul>
      </div>

    </div>
  )
}

export default Menu