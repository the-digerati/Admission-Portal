import React from 'react'
import './Home.css'
import Header from '../Components/Header'
import Menu from '../Components/Menu'

const Home = () => {
    return (
    <div className='container'>
      <Header />    
      <Menu />
      <div className='form-container'>
        <h3 className='title'>COMPLETE THE FORM BELOW</h3>
        <span className = 'seperator'></span>

      </div>

    </div>
  )
}

export default Home