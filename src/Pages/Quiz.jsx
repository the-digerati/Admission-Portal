import React from "react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import { FcGlobe, FcCalculator, FcBiotech, FcReading } from "react-icons/fc";

import "./NewStyles.css";

const Quiz = () => {
  return (
    <div className="main-page">
      <Header />
      <Menu />
      <div className="quiz-pane">
        <h2>Available Quizzes</h2>
        <div className="quiz-section">
          <div className="quiz-card">
            <span className="circle">
              <FcReading className="icon"></FcReading>
            </span>
            <p>English Language</p>
          </div>
          <div className="quiz-card">
            <span className="circle">
              <FcCalculator className="icon" />
            </span>
            <p>Mathematics</p>
          </div>
          <div className="quiz-card">
            <span className="circle">
              <FcBiotech className="icon" />
            </span>
            <p>Integrated Science</p>
          </div>
          <div className="quiz-card">
            <span className="circle">
              <FcGlobe className="icon" />
            </span>
            <p>Social Studies</p>
          </div>
        </div>
      </div>

      <div className="questionaire"></div>
    </div>
  );
};

export default Quiz;
