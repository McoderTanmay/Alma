// import React from "react";
// import "./SigninPage.css"; 

// const SigninPage = () => {
//   return (
//     <div className="signin-page">
//       <div className="signin-container">
//         <h1 className="platform-name">Alu<span>dent</span></h1>
//         <h2 className="welcome-text">Welcome Back</h2>
//         <p className="subtext">Enter your credential to login</p>

//         <form className="signin-form">
//           <div className="input-group">
//             <input
//               type="text"
//               placeholder="Username/Enrollment No."
//               className="input-field"
//             />
//           </div>
//           <div className="input-group">
//             <input
//               type="password"
//               placeholder="Password"
//               className="input-field"
//             />
//           </div>
//           <button type="submit" className="login-button">
//             Login Now
//           </button>
//         </form>

//         <div className="forgot-password">
//           <a href="#">Forgot password?</a>
//         </div>

//         <div className="signin-link">
//           <p>
//             Don't have an account? <a href="#">Sign Up</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SigninPage;
import React from "react";
import { useNavigate } from "react-router-dom";
import "./SigninPage.css";

const SigninPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    navigate("/"); // Navigate to homepage or dashboard
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <h1 className="platform-name">Alu<span>dent</span></h1>
        <h2 className="welcome-text">Welcome Back</h2>
        <p className="subtext">Enter your credentials to log in</p>
        <form className="signin-form" onSubmit={handleLogin}>
          <div className="input-group">
            <input type="text" placeholder="Username/Enrollment No." className="input-field" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" className="input-field" />
          </div>
          <button type="submit" className="login-button">Login Now</button>
        </form>
        <div className="signin-link">
          <p>
            Don't have an account?{" "}
            <span onClick={() => navigate("/signup")} className="redirect-link">
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;

