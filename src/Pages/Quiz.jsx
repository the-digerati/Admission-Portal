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
          <div className="quiz-card"></div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
