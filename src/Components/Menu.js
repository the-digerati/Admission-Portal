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
import { Link } from 'react-router-dom'


const Menu = () => {
  return (
    <div className='container hero-section'>
      {/* Aside Menu */}
      <div className='aside-menu'>
        <ul className='menu-nav'>
          <li><img title='Minimize' src={chevron} id='minimize' /></li>
          <li><img title='Profile' src={broadcast} /></li>
          <li>
            <Link to='/quiz'>
              <img title='Quiz' src={Vector} />
            </Link>
          </li>
          <li>
            <Link to='/apply'>
              <img title='Enrol' src={Pen} />
            </Link>
          </li>
          <li>
            <Link to='/pay-fees'>
              <img title='Fees' src={cash} />
            </Link>
          </li>
          <li><img title='Settings' src={settings1} /></li>
          <li><img title='Status' src={settings} /></li>
          <li>
            <Link to='/home'>
              <img title='Broadcast' src={radio} />
            </Link>
          </li>
          <li><img title='Inbox' src={mail} /></li>
          <li>
            <Link to='/'>
              <img title='Logout' src={logout} />
            </Link>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Menu