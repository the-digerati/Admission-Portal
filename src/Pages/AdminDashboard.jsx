import React from "react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import "./NewStyles.css";

const AdminDashboard = () => {
  return (
    <div className="main-page">
      <Header userName="Administrator" />
      <Menu />
      <div className="dashboard">
        <div className="top-chart">
            <div className="chart"></div>
            <div className="chart"></div>
            <div className="chart"></div>
            <div className="chart"></div>

        </div>
        
        <div className="active-user-details" id="appliedUsers">
            <h2 className = 'dashboard-title'> Enrolled Students</h2>
            <div id="appliedUser"></div>
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
