// import React from "react";
// import "./ConfirmationPage.css"; 

// const ConfirmationPage = () => {
//   return (
//     <div className="confirmation-page">
//       <div className="confirmation-container">
//       <div className="gif-container">
      
//        <img src="/success.gif" alt="My Gif" style={{ width: "100%", height: "auto" }} />
      
//     </div>
//         <h1 className="platform-name">Great!</h1>
//         <h2 className="register-text">You've registered successfully</h2>
        

//         <form className="signin-form">
//         <button type="submit" className="login-button">
            
//             <div className="forgot-password">
//           <a href="#">Login</a>
//         </div>
//           </button>
       
        
//         </form>

       
//       </div>
//     </div>
//   );
// };

// export default ConfirmationPage;
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ConfirmationPage.css";

const ConfirmationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="confirmation-page">
      <div className="confirmation-container">
        <div className="gif-container">
          <img src="/success.gif" alt="Success" style={{ width: "100%" }} />
        </div>
        <h1 className="platform-name">Great!</h1>
        <h2 className="register-text">You've registered successfully</h2>
        <button onClick={() => navigate("/signin")} className="login-button">Login</button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
