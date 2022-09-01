import React from "react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import "./NewStyles.css";
import Pic from '../boy.jpg'

const AdminDashboard = () => {
  return (
    <div className="main-page">
      <Header userName="Administrator" />
      <Menu />
      <div className="dashboard">
        <div className="top-chart">
          <div className="chart" style={{ backgroundColor: "#fff" }}>
            <div className="chart-main">
              <p className="applicant">744</p>
              <p className="msg-chart">Monthly Applicant</p>
            </div>
          </div>
          <div className="chart" style={{ backgroundColor: "#fff" }}>
            <div className="chart-main">
              <p className="applicant">8</p>
              <p className="msg-chart">Available Quizzes</p>
            </div>
          </div>
          <div className="chart" style={{ backgroundColor: "#fff" }}>
            <div className="chart-main">
              <p className="applicant">4</p>
              <p className="msg-chart">Students Enrolled</p>
            </div>
          </div>
          <div className="chart" style={{ backgroundColor: "#fff" }}>
            <div className="chart-main">
              <p className="applicant">96</p>
              <p className="msg-chart">Pending Admission</p>
            </div>
          </div>
        </div>

        <div className="active-user-details" id="appliedUsers">
          <h2 className="dashboard-title"> Enrolled Students</h2>
          <div id="appliedUser">
            <img src={Pic} alt="" />
            <p>H</p>
            <p>H</p>
          </div>
          <div id="appliedUser"></div>
          <div id="appliedUser"></div>
          <div id="appliedUser"></div>
          <div id="appliedUser"></div>
          <div id="appliedUser"></div>
          <div id="appliedUser"></div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
