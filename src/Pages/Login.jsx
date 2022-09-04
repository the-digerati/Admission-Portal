import { useRef, useState, useEffect } from "react";
import "./Login.css";
import STS from "../sts-logo.png";
import Padlock from "../padlock.svg";
import { Link } from "react-router-dom";

const Login = () => {
  

  return (
    <div className="main">
      <img src={STS}></img>

      {/* User Status Selector   For */}
      <form>
        <div className="user-status-selector">
          <div className="student-status">
            <input type="radio" class="default:ring-2" id="student" />
            <span
              class="block text-sm font-medium text-slate-700"
              id="admin"
              style={{ color: "white" }}
            >
              Student
            </span>
          </div>
          <div className="admin-status">
            <input type="radio" class="default:ring-1" />
            <span
              class="block text-sm font-medium text-slate-700"
              style={{ color: "white" }}
            >
              Admin
            </span>
          </div>
        </div>

        {/* Login Form */}
        <label class="block">
          <input
            type="text"
            name="USER-ID"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm"
            maxLength={8}
            placeholder="USER ID"
          ></input>

          <input
            type="password"
            name="PIN"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm "
            maxLength={5}
            required
            placeholder="PIN"
          ></input>
        </label>

        <Link to="/home">
          <button class=" focus:outline-none " onSubmit={console.log('Home')}>LOGIN</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
