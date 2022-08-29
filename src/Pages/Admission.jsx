import React from 'react'
import Header from '../Components/Header'
import Menu from '../Components/Menu'
import './NewStyles.css'

const Admission = () => {
  return (
    <div className='main-page'>
      <Header/>
      <span className = 'seperator' style={{height: '20px', width: '100%', backgroundColor: '#BF9F62'}}></span>
      <Menu/>
      <div className='form-container'>
        <h3 className='title'>COMPLETE THE FORM BELOW</h3>
       

      </div>

        
    </div>
  )
}

export default Admission