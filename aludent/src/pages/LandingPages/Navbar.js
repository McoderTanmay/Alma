import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Alu<span>dent</span></div>
      <div className="menu">
        <a href="#explore">Explore</a>
        <a href="#jobs">Jobs</a>
        <a href="#about">About</a>
        <a href="#login">Log In</a>
        <a href="#signup">Sign Up</a>

      </div>
    </nav>
  );
};

export default Navbar;
