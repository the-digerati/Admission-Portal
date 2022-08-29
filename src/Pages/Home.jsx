import React from "react";
import "./Home.css";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import megaphone from "../Icons/megaphone.svg";
import { Link } from "react-router-dom";
import chat from "../Icons/chat.svg"

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Menu />
      <div className="broadcast-pane">
        <h2>Notification: Broadcast by Administrator</h2>
        <p>
          Welcome to the official admission portal for the{" "}
          <strong>DEUTSHCE INTERNATIONAL SCHOOL</strong>. We bid you a smooth
          enrollment process as we have provided a platfrom to suit the
          preferences of our valued users including you. Feel free to scout our
          portal and also seek more enquiries where the need be. <br /> Best
          Regards, Administration Panel.
        </p>

        <div className="broadcast-time">
          <img src={megaphone} />
          <span className="timestamp">3mins ago</span>
        </div>
      </div>

      <div className="main-hero-container">
        <h2>Here for Student Enrollment?</h2>
        <p>
          You are at the best institution for your wards. We offer diverse
          tution for students who fall within pre-school, lower and upper
          primary as well as Junior High School. We have the most advanced
          teaching staff who are ever ready to impact your ward. Kindly use the
          button below to start the enrollment proccess.
        </p>
        <Link to="/apply">
          <button>Enroll Now</button>
        </Link>

        <br />

        <h2>Request to undertake the available quiz?</h2>
        <p>
          You are at the best institution for your wards. We offer diverse
          tution for students who fall within pre-school, lower and upper
          primary as well as Junior High School. We have the most advanced
          teaching staff who are ever ready to impact your ward. Kindly use the
          button below to start the enrollment proccess.
        </p>
        <Link to="/quiz">
          <button className="quiz-cta">Start Quiz</button>
        </Link>

        <br />

        <h2>In Need of School’s Prospectus?</h2>
        <p>
        You are at the best institution for your wards. We offer diverse tution for students who fall within pre-school, lower and upper primary as well as Junior High School. We have the most advanced teaching staff who are ever ready to impact your ward. Kindly use the button below to start the enrollment proccess.
        </p>
        <Link to="/pay-fees">
          <button className="prospectus-cta">View Prospetus</button>
        </Link>

        <br />
      </div>

      <div className="chat-section">
        <img src={chat}></img>
      </div>
    </div>
  );
};

export default Home;
