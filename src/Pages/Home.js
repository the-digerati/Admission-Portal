import React from 'react'
import './Home.css'
import Profile from '../profile.svg'


const Home = () => {
  return (
    <div className='container'>
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

export default Home