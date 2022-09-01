import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import "./NewStyles.css";

const Admission = () => {
  return (
    <div className="main-page">
      <Header userName="Mark" />
      <Menu />
      <h3 className="title">COMPLETE THE FORM BELOW</h3>
      <span className="sperator">
        <p>STUDENT'S DETAILS</p>
      </span>
      <div className="form-container">
        <form action="" id="admissionForm">
          {/* Personal Information Section */}
          <p>Personal Information</p>
          <span></span>

          <div className="fieldset-container">
            <div>
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm"
                placeholder="MARK"
              ></input>
            </div>

            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm "
                required
                placeholder="MENSAH"
              ></input>
            </div>
          </div>

          <div className="fieldset-container">
            <div>
              <label>Date Of Birth</label>
              <input
                type="text" //date_of_birth
                name="date_of_birth"
                id="date_of_birth"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm"
                placeholder="5/03/2002"
              ></input>
            </div>

            <div>
              <label>Place Of Birth</label>
              <input
                type="text"
                name="place_of_birth"
                id="place_of_birth"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm "
                required
                placeholder="KOFORIDUA"
              ></input>
            </div>
          </div>

          <div className="fieldset-container">
            <div>
              <label>Class or Level</label>
              <input
                type="text"
                name="level"
                id="level"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm"
                placeholder="PRIMARY 5"
              ></input>
            </div>

            <div>
              <label>Denomination</label>
              <input
                type="text"
                name="denomination"
                id="denomination"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm "
                required
                placeholder="METHODIST"
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
                name="firstNameGuard"
                id="firstNameGuard"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm"
                placeholder="LUCY"
              ></input>
            </div>

            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="lastNameGuard"
                id="lastNameGuard"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm "
                required
                placeholder="MENSAH"
              ></input>
            </div>
          </div>

          <div className="fieldset-container">
            <div>
              <label>Place of Residence</label>
              <input
                type="text"
                name="residence"
                id="residence"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm"
                placeholder="DANSOMAN"
              ></input>
            </div>

            <div>
              <label>Occupation</label>
              <input
                type="text"
                name="occupation"
                id="occupation"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm "
                required
                placeholder="TRADER"
              ></input>
            </div>
          </div>

          <div className="fieldset-container">
            <div>
              <label>Marital Status</label>
              <input
                type="text"
                name="marital_status"
                id="marital_status"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm"
                placeholder="SINGLE"
              ></input>
            </div>

            <div>
              <label>Telephone</label>
              <input
                type="text" //telephone
                name="telephone"
                id="telephone"
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm "
                required
                placeholder="+233-509-578-9927"
              ></input>
            </div>
          </div>

          {/* Grouped Buttons Here */}

          <div className="form-btn-group">
            <Link to="/home">
              <button className="btn-primary-back">Abort</button>
            </Link>

            <button className="submit" type="submit ">
              Submit
            </button>
          </div>
        </form>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/firebase/7.14.1-0/firebase.js"></script>
      <script src="./storage.js"></script>
    </div>
  );
};

export default Admission;
