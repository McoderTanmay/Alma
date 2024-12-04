import React from "react";
import "./WelcomeSection.css"; 
// import Girlimage from './Girl.png'

const WelcomeSection = () => {
  return (
    <section className="welcome-section">
      <div className= "Parent1"> 
      <div className="welcome-content">
        <h1>Welcome to the Student-Alumni Interaction System</h1>
        <p className="subtitle">
          by Department of Technical Education, Rajasthan
        </p>
        <button className="signin-button">Sign in with Email</button>
        <p className="info-text">
          By joining in you agree to Aludent's{" "}
          <a href="/user-agreement" className="link">
            User Agreement
          </a>
          ,{" "}
          <a href="/privacy-policy" className="link">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/cookie-policy" className="link">
            Cookie Policy
          </a>
          .
        </p>
        <p className="new-user">
          New to Aludent? <a href="/join" className="join-now">Join Now</a>
        </p>
      </div>
      <div className="welcome-image">
      <img
          src="Girl.png"
          alt="Graduate Girl"
          className="girl-image"
        />
      </div>
      </div>
      <div>
  <footer classname= "green">
  <img
          src="Greenbg1.png"
          alt="Green Background"
          className="green-image"
        />
  </footer>
  </div>
    </section>
  );
};

export default WelcomeSection;
