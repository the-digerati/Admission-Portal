import React from 'react'
import Header from '../Components/Header'
import Menu from '../Components/Menu'
import './NewStyles.css'

const Admission = () => {
  return (
    <div className='main-page'>
      <Header/>
      <Menu/>
        <h3 className='title'>COMPLETE THE FORM BELOW</h3>
        <span className='sperator'>
          <p>STUDENT'S DETAILS</p>
        </span>
      <div className='form-container'>
        <p >Personal Information 
        <span></span>
        </p>
       
       

      </div>

        
    </div>
  )
}

export default Admission