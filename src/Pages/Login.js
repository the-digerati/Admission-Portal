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
          <input type="radio" class="default:ring-2" id='student' />
          <span class="block text-sm font-medium text-slate-700" id='admin' style={{ color: 'white' }}>Student</span>
        </div>
        <div className='admin-status'>
          <input type="radio" class="default:ring-1" />
          <span class="block text-sm font-medium text-slate-700" style={{ color: 'white' }}>Admin</span>
        </div>
      </div>

      {/* Login Form */}
      <label class="block">
        <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          Email
        </span>
        <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
      </label>
    </div>
  )
}

export default Login