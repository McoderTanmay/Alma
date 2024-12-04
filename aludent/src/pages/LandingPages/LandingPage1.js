import React from "react";
import "./LandingPage1.css"; 

const LandingPage1 = () => {
  return (
    <div className="landing-page1">
      <header className="header">
        <h1>Join your classmates and Alumni on Aludent</h1>
      </header>
      <div className="image-container">
        <img
          src="Grp.jpg"
          alt="Group of people networking"
          className="landing-image"
        />
      </div>
      <div className="button-container">
        <button className="get-started-button">Get Started</button>
      </div>
    </div>
  );
};

export default LandingPage1;