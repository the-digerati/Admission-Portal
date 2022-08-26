import React from 'react'
import './Menu.css'
import chevron from '../Icons/chevron.svg'


const Menu = () => {
  return (
    <div className='container hero-section'>
      {/* Aside Menu */}
      <div className='aside-menu'>
        <ul className='menu-nav'>
          <li><img src={chevron} /></li>
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