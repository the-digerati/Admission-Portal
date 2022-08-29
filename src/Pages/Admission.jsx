import React from "react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import "./NewStyles.css";

const Admission = () => {
  return (
    <div className="main-page">
      <Header />
      <Menu />
      <h3 className="title">COMPLETE THE FORM BELOW</h3>
      <span className="sperator">
        <p>STUDENT'S DETAILS</p>
      </span>
      <div className="form-container">
        {/* Personal Information Section */}
        <p>Personal Information</p>
        <span></span>

        <div className="fieldset-container">
          <div>
            <label>First Name</label>
          <input
            type="text"
            name="firstName"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm"
            placeholder="MARK"
          ></input>
          </div>

        <div>
          <label>Last Name</label>
        <input
            type="text"
            name="lastName"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm "
            required
            placeholder="MENSAH"
          ></input>
        </div>
        </div>

        <div className="fieldset-container">
          <div>
            <label>First Name</label>
          <input
            type="text"
            name="firstName"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm"
            placeholder="MARK"
          ></input>
          </div>

        <div>
          <label>Last Name</label>
        <input
            type="text"
            name="lastName"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm "
            required
            placeholder="MENSAH"
          ></input>
        </div>
        </div>

        <div className="fieldset-container">
          <div>
            <label>First Name</label>
          <input
            type="text"
            name="firstName"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm"
            placeholder="MARK"
          ></input>
          </div>

        <div>
          <label>Last Name</label>
        <input
            type="text"
            name="lastName"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm "
            required
            placeholder="MENSAH"
          ></input>
        </div>
        </div>
        
      

        {/* Guardian Information Section */}
        <p>Guardian Information</p>
        <span></span>
       

        <div className="fieldset-container">
          <div>
            <label>First Name</label>
          <input
            type="text"
            name="firstName"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm"
            placeholder="MARK"
          ></input>
          </div>

        <div>
          <label>Last Name</label>
        <input
            type="text"
            name="lastName"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm "
            required
            placeholder="MENSAH"
          ></input>
        </div>
        </div>

        <div className="fieldset-container">
          <div>
            <label>First Name</label>
          <input
            type="text"
            name="firstName"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm"
            placeholder="MARK"
          ></input>
          </div>

        <div>
          <label>Last Name</label>
        <input
            type="text"
            name="lastName"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm "
            required
            placeholder="MENSAH"
          ></input>
        </div>
        </div>

        <div className="fieldset-container">
          <div>
            <label>First Name</label>
          <input
            type="text"
            name="firstName"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm"
            placeholder="MARK"
          ></input>
          </div>

        <div>
          <label>Last Name</label>
        <input
            type="text"
            name="lastName"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm "
            required
            placeholder="MENSAH"
          ></input>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
