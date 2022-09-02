  import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import { addDoc,collection } from "firebase/firestore";
import { db } from "./firebase";

import "./NewStyles.css";

const Admission = () => {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [date_of_birth, setDate_of_birth] = useState();
  const [place_of_birth, setPlace_of_birth] = useState();
  const [level, setLevel] = useState();
  const [denomination, setDenomination] = useState();
  const [firstNameGuard, setFirstNameGuard] = useState();
  const [lastNameGuard, setLastNameGuard] = useState();
  const [residence, setResidence] = useState();
  const [occupation, setOccupation] = useState();
  const [marital_status, setMarital_status] = useState();
  const [telephone, setTelephone] = useState();


  const userCollectionRef = collection(db, "contactdata")





  const handleSubmit = (e) => {
    addDoc(userCollectionRef,{
      firstname: firstname,
        lastname: lastname,
        date_of_birth: date_of_birth,
        place_of_birth: place_of_birth,
        level: level,
        denomination: denomination,
        firstNameGuard: firstNameGuard,
        lastNameGuard: lastNameGuard,
        residence: residence,
        occupation: occupation,
        marital_status: marital_status,
        telephone: telephone,

    })
    e.preventDefault();

    // db.collection("FormDetails")
    //   .add({
        
    //   })
    //   .then(() => {
    //     alert("Forms submitted");
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //   });
  };
  return (
    <div className="main-page">
      <Header userName="Mark" />
      <Menu />
      <h3 className="title">COMPLETE THE FORM BELOW</h3>
      <span className="sperator">
        <p>STUDENT'S DETAILS</p>
      </span>
      <div className="form-container">
        <form className="admissionForm" onSubmit={handleSubmit}>
          {/* Personal Information Section */}
          <p>Personal Information</p>
          <span className="span"></span>

          <div className="fieldset-container">
            <div>
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
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
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
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
                type="date_of_birth"
                name="date_of_birth"
                id="date_of_birth"
                value={date_of_birth}
                onChange={(e) => setDate_of_birth(e.target.value)}
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
                value={place_of_birth}
                onChange={(e) => setPlace_of_birth(e.target.value)}
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
                value={level}
                onChange={(e) => setLevel(e.target.value)}
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
                value={denomination}
                onChange={(e) => setDenomination(e.target.value)}
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
                value={firstNameGuard}
                onChange={(e) => setFirstNameGuard(e.target.value)}
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
                value={lastNameGuard}
                onChange={(e) => setLastNameGuard(e.target.value)}
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
                value={residence}
                onChange={(e) => setResidence(e.target.value)}
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
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
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
                value={marital_status}
                onChange={(e) => setMarital_status(e.target.value)}
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-sky-500 block w-full rounded-md sm:text-sm"
                placeholder="SINGLE"
              ></input>
            </div>

            <div>
              <label>Telephone</label>
              <input
                type="telephone"
                name="telephone"
                id="telephone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
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

            <button className="submit" type="submit " onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admission;
