import React from 'react'
import './Login.css'
import STS from '../sts-logo.png'

const Login = () => {
  return (
    <div className='main'>
      <img src={STS}></img>

      {/* User Status Selector */}
      <div className='user-status-selector'>
        <div className='student-status'>
          <input type="radio" class="default:ring-2" id='student'/>
          <span class="block text-sm font-medium text-slate-700" id='admin' style={{color: 'white'}}>Student</span>
        </div>
        <div className='admin-status'>
          <input type="radio" class="default:ring-1" />
          <span class="block text-sm font-medium text-slate-700" style={{color: 'white'}}>Admin</span>
        </div>
      </div>


    </div>
  )
}

export default Login