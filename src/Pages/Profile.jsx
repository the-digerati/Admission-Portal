import React, { useState } from "react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import "./NewStyles.css";
import "./Home.css";
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'

const Profile = () => {
  return (
    <div className="main-page">
      <Header />
      <Menu />

      <div className="profile-main">
        <div className="user-profile">
            
        
        </div>
        <div className="user-qualification">
            <span id="score" className="quiz-marks">--</span>
            <span className="quiz-statement">is your score for the entrance quiz.</span>
            <p>Check your status below.</p>

            <span id="admission-status">
                <span className= "status-image">
                    <IoMdCheckmarkCircleOutline className="span-icon"/>
                </span>
                <p>Enrollment Status</p>
            </span>
        
            <span id="admission-status">
                <span className= "status-image">
                    <IoMdCheckmarkCircleOutline className="span-icon"/>
                </span>
                <p>Fees Payment</p>
            </span>
        
            <span id="admission-status">
                <span className= "status-image">
                    <IoMdCheckmarkCircleOutline className="span-icon"/>
                </span>
                <p>Student Qualification</p>
            </span>
        
        </div>
      </div>
    </div>
  );
};

export default Profile;
