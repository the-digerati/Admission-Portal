import React from "react";
import Header from "../Components/Header";
import Menu from "../Components/Menu";
import "./NewStyles.css";
import "./Home.css";

// Images for Payment Card Page


import Airtel from "../airtelTigo.png"
import Gpay from "../GhanaPay.webp"
import Vodafone from "../vodafone.png"
import MTN from "../mtn.jpg"

const Fees = () => {
  return (
    <div className="main-page">
      <Header userName = "Mark"/>
      <Menu />
      {/* Payment Card */}
      <div className="fees-page">
        <h1>Pay  Your Fees Now</h1>
        <p>Kindly choose your preferred payment method for further assistance</p>

        <div className="teleco-main">
          <div className="teleco">
            <img className="images" src={Airtel}/>
          </div>
          <div className="teleco">
            <img className="images" src={Vodafone} alt="" />
          </div>
          <div className="teleco" >
            <img className="images mtn" src={MTN} alt="" />
          </div>
          <div className="teleco">
            <img className="images" src={Gpay} alt="" />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Fees;
