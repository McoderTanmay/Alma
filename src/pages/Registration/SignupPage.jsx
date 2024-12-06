import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    
    navigate("/confirmation"); 
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1 className="platform-name">Alu<span>dent</span></h1>
        <h2 className="signup-title">Sign up</h2>
        <p className="signup-subtitle">Create your account</p>
        <form className="signup-form" onSubmit={handleSignup}>
          <div className="input-group">
            <input type="text" placeholder="Username" className="input-field" />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email" className="input-field" />
          </div>
          <div className="input-group">
            <input type="text" placeholder="Enrollment No." className="input-field" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" className="input-field" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Confirm Password" className="input-field" />
          </div>
          <div className="upload-group">
            <input type="file" id="upload-id" className="upload-input" />
            <label htmlFor="upload-id" className="upload-label">Upload ID Proof</label>
          </div>
          <button type="submit" className="signup-button">Sign up</button>
        </form>
        <div className="signin-link">
          <p>
            Already have an account?{" "}
            <span onClick={() => navigate("/signin")} className="redirect-link">
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;








