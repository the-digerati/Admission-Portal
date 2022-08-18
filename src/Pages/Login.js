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
        <input type="text" name="USER-ID" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm" placeholder="USER ID" >

        </input>

        <input type="password" name="PIN" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm " placeholder="PIN"></input>
      </label>
      <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
        Save changes
      </button>
    </div>
  )
}

export default Login