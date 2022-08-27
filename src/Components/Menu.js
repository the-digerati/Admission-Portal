import React from 'react'
import './Menu.css'
import chevron from '../Icons/chevron.svg'
import broadcast from '../Icons/broadcast.svg'
import cash from '../Icons/cash.svg'
import logout from '../Icons/logout.svg'
import profile from '../Icons/profile.svg'
import settings1 from '../Icons/settings1.svg'
import settings from '../Icons/settings.svg'
import Pen from '../Icons/Pen.svg'
import mail from '../Icons/mail.svg'
import Vector from '../Icons/Vector.svg'
import radio from '../Icons/codicon_broadcast.svg'


const Menu = () => 
  const minimize = () => {
    let min = document.querySelector('#minimize');
    min.addEventListener('click', minimize);
  }
  return (
    <div className='container hero-section'>
      {/* Aside Menu */}
      <div className='aside-menu'>
        <ul className='menu-nav'>
          <li><img src={chevron} id = 'minimize'/>Less</li>
          <li><img src={Pen} />Enrol</li>
          <li><img src={mail} />Inbox</li>
          <li><img src={broadcast} />Profile</li>
          <li><img src={cash} />Fees</li>
          <li><img src={settings} />Status</li>
          <li><img src={Vector} />Quiz</li>
          <li><img src={settings1} />Settings</li>
          <li><img src={radio} />Broadcast</li>
          <li><img src={logout} />Logout</li>


        </ul>
      </div>

    </div>
  )
}

export default Menu