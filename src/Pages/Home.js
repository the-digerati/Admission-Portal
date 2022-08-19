import React from 'react'
import './Home.css'


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