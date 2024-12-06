import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./ExploreSection.css";

const ExploreSection = () => {
  return (
    <div className="explore-section">
      <div className="explore-articles">
        <div className="tags1">
          <h2>Explore collaborative articles</h2>
          <p>
            We're unlocking community knowledge in a new way. Experts add
            insights directly into each article, started with the help of AI.
          </p>
        </div>
        <div className="tags">
          <Link to="/marketing">
            <button>Marketing</button>
          </Link>
          <Link to="/public-administration">
            <button>Public Administration</button>
          </Link>
          <Link to="/engineering">
            <button>Engineering</button>
          </Link>
          <Link to="/it-services">
            <button>IT Services</button>
          </Link>
          <Link to="/sustainability">
            <button>Sustainability</button>
          </Link>
          <Link to="/business-administration">
            <button>Business Administration</button>
          </Link>
          <Link to="/telecommunications">
            <button>Telecommunications</button>
          </Link>
          <Link to="/hr-management">
            <button>HR Management</button>
          </Link>
          <Link to="/all-articles">
            <button className="see-all">See All</button>
          </Link>
        </div>
      </div>

      <div className="find-job">
        <div className="tags2">
          <h2>Find the right job or internship for you</h2>
        </div>
        <div className="tags">
          <Link to="/finance">
            <button className="b1">Finance</button>
          </Link>
          <Link to="/business-development">
            <button>Business Development</button>
          </Link>
          <Link to="/engineering-job">
            <button>Engineering</button>
          </Link>
          <Link to="/administrative-assistance">
            <button>Administrative Assistance</button>
          </Link>
          <Link to="/retail-associate">
            <button className="b2">Retail Associate</button>
          </Link>
          <Link to="/customer-service">
            <button>Customer Service</button>
          </Link>
          <Link to="/operations">
            <button>Operations</button>
          </Link>
          <Link to="/it-jobs">
            <button>Information Technology</button>
          </Link>
          <Link to="/marketing-jobs">
            <button>Marketing</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;

