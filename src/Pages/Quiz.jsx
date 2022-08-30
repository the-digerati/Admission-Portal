import React from "react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
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
            <span className="circle"></span>
            <p>English</p>
          </div>
    
          <div className="quiz-card">
            <span className="circle"></span>
            <p>Mathematics</p>
          </div>
    
          <div className="quiz-card">
            <span className="circle"></span>
            <p>Science</p>
          </div>
    
          <div className="quiz-card">
            <span className="circle"></span>
            <p>Social Studies</p>
          </div>
    
          <div className="quiz-card">
            <span className="circle"></span>
            <p>ICT</p>
          </div>
    
          <div className="quiz-card">
            <span className="circle"></span>
            <p>French</p>
          </div>
    
         
        </div>
      </div>
    </div>
  );
};

export default Quiz;
