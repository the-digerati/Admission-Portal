import React from "react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import "./NewStyles.css";
// import

const Quiz = () => {
  return (
    <div className="main-page">
      <Header />
      <Menu />
      <div className="quiz-page">
        <div className="quiz-pane">
          <h2>Available Subjects</h2>
          <div className="quiz-section">
            <div className="quiz-card">
              <span className="circle"></span>
              <p>English Language</p>
            </div>

            <div className="quiz-card">
              <span className="circle"></span>
              <p>Mathematics</p>
            </div>

            <div className="quiz-card">
              <span className="circle"></span>
              <p>Integrated Science</p>
            </div>

            <div className="quiz-card">
              <span className="circle"></span>
              <p>Social Studies</p>
            </div>
          </div>
        </div>

        <div className="quiz-screen">
          <h2>Quizzes</h2>
          <div className="quiz">
            
          </div>
          <div className="quiz">

          </div>
          <div className="quiz">

          </div>
          <div className="quiz">

          </div>
          <div className="quiz">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
