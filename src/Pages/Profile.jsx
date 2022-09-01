import React, { useState } from "react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import "./NewStyles.css";
import "./Home.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Boy from "../boy.jpg";

const Profile = () => {
  return (
    <div className="main-page">
      <Header userName = "Mark"/>
      <Menu />

      <div className="profile-main">
        <div className="user-profile">
          <img src={Boy}></img>
          <p className="user-fullname">Mark Taylor</p>
          <div className="user-table-details">
            <div className="headings">
              <p>FullName</p>
              <p>Sex</p>
              <p>Date of Birth</p>
              <p>Boarding Status</p>
              <p>Class</p>

              <br />
              {/* <br /> */}

              <p>Guardian Name</p>
              <p>Occupation</p>
              <p>Place of Residence</p>
              <p>Marital Status</p>
              <p>Contact</p>
            </div>
            <div className="details">
              <p className="student-fullname">MARK TAYLOR</p>
              <p className="sex">Male</p>
              <p className="date_of_birth">05/03/1999</p>
              <p className="boarding_status">Boarder</p>
              <p className = "studentClass">Primary 6</p>

              <br />
              {/* <br /> */}

              <p>JONES E TAYLOR</p>
              <p>Teacher</p>
              <p>Koforidua</p>
              <p>Married</p>
              <p>0504545879</p>
            </div>
          </div>
        </div>
        <div className="user-qualification">
          <span id="score" className="quiz-marks">
            --
          </span>
          <span className="quiz-statement">
            is your score for the entrance quiz.
          </span>
          <p>Check your status below.</p>

          <span id="admission-status">
            <span className="status-image">
              <IoMdCheckmarkCircleOutline className="span-icon" />
            </span>
            <p>Enrollment Status</p>
          </span>

          <span id="admission-status">
            <span className="status-image">
              <IoMdCheckmarkCircleOutline className="span-icon" />
            </span>
            <p>Fees Payment</p>
          </span>

          <span id="admission-status">
            <span className="status-image">
              <IoMdCheckmarkCircleOutline className="span-icon" />
            </span>
            <p>Student Qualification</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
