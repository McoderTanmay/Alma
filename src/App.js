import React from "react";
// import {createBrowserRouter} from "react-router-dom";
import { BrowserRouter as Router, Routes,Route, Switch } from 'react-router-dom';
import Modal from "./components/Modal"

import Navbar from "./pages/LandingPages/Navbar";
import WelcomeSection from "./pages/LandingPages/WelcomeSection";
// // import Footer from "./components/Footer";
// import ExploreSection from "./pages/LandingPages/ExploreSection";
// import LandingPage1 from "./pages/LandingPages/LandingPage1";
// import LandingPage2 from "./pages/LandingPages/LandingPage2";
import SigninPage  from "./pages/Registration/SigninPage";
import SignupPage  from "./pages/Registration/SignupPage";
 import ConfirmationPage from "./pages/Registration/ConfirmationPage";


function App() {
  return (
    <Router>
      <Modal/>
    <Navbar />
    <Routes>
      <Route path="/" element={<WelcomeSection />} />
      {/* <Route path="/explore" element={<ExploreSection />} />
      <Route path="/landing1" element={<LandingPage1 />} />
      <Route path="/landing2" element={<LandingPage2 />} /> */}
      <Route path="/signin" element={<SigninPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/confirmation" element={<ConfirmationPage />} /> 
    </Routes>
  </Router>
       
      
     
    
   
  );
}

export default App;

