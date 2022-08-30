import React from 'react'
import Header from '../Components/Header'
import Menu from '../Components/Menu'
import './NewStyles.css'

const Quiz = () => {
  return (
    <div className='main-page'>
      <Header/>
      <Menu/>
      <div  className='quiz-pane'>
        <h2></h2>
      </div>

    </div>
  )
}

export default Quiz