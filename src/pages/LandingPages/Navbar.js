import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Alu<span>dent</span></div>
      <div className="menu">
        <Link to="/explore">Explore</Link>
        <Link to="/landing1">Jobs</Link>
        <Link to="/about">About</Link>
        <Link to="/signin">Log In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
