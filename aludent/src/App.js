import React from "react";
import Navbar from "./pages/LandingPages/Navbar";
import WelcomeSection from "./pages/LandingPages/WelcomeSection";
// import Footer from "./components/Footer";
import ExploreSection from "./pages/LandingPages/ExploreSection";
import LandingPage1 from "./pages/LandingPages/LandingPage1";
import LandingPage2 from "./pages/LandingPages/LandingPage2";

function App() {
  return (
    <div>
      <Navbar />
      <WelcomeSection />
      <ExploreSection />
      <LandingPage1 />
      <LandingPage2 />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

