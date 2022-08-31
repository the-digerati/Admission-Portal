import React from "react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import "./NewStyles.css";
import {GrHpeLabs} from 'react-icons/gr';
import {SiReactos} from 'react-icons/si'
import {FcGlobe} from 'react-icons/fc';
import {GiBookshelf} from 'react-icons/gi'
import {TbMathSymbols} from 'react-icons/tb'



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
              <span className="circle">
                <GiBookshelf className="icon"/>
              </span>
              <p>English Language</p>
            </div>

            <div className="quiz-card">
              <span className="circle">
                <TbMathSymbols className="icon"/>
              </span>
              <p>Mathematics</p>
            </div>

            <div className="quiz-card">
              <span className="circle">
                <SiReactos className="icon" style={{fill: 'purple'}} />
              </span>
              <p>Integrated Science</p>
            </div>

            <div className="quiz-card">
              <span className="circle">
                <FcGlobe className="icon"/>
              </span>
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
