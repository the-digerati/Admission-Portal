import React from "react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import "./NewStyles.css";
import "./Home.css";

// Images
import Airtel from "../airtelTigo.png"

const Fees = () => {
  return (
    <div className="main-page">
      <Header />
      <Menu />
      {/* Payment Card */}
      <div className="fees-page">
        <h1>Pay  Your Fees Now</h1>
        <p>Kindly choose the payment mode below for further assistance</p>

        <div className="teleco-main">
          <div className="teleco">
            <img src={Airtel}/>
          </div>
          <div className="teleco"></div>
          <div className="teleco"></div>
          <div className="teleco"></div>

        </div>

      </div>
    </div>
  );
};

export default Fees;
