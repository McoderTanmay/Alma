import React from "react";
import "./ExploreSection.css";

const ExploreSection = () => {
  return (
    <div className="explore-section">
      
      <div className="explore-articles">
        <div classname= "tags1">
        <h2>Explore collaborative articles</h2>
        <p>
          We're unlocking community knowledge in a new way. Experts add
          insights directly into each article, started with the help of AI.
        </p>
        </div>
        <div className="tags">
          <button>Marketing</button>
          <button>Public Administration</button>
          <button>Engineering</button>
          <button>IT Services</button>
          <button>Sustainability</button>
          <button>Business Administration</button>
          <button>Telecommunications</button>
          <button>HR Management</button>
          <button className="see-all">See All</button>
        </div>
      </div>

     
      <div className="find-job">
        <div classname="tags2">
            <h2>Find the right job or internship for you</h2>
        </div>
        <div className="tags">
          <button className="b1">Finance</button>
          <button>Business Development</button>
          <button>Engineering</button>
          <button>Administrative Assistance</button> 
          <button className="b2"> Retail Associate</button>
          
          <button>Customer Service</button>
          <button>Operations</button>
          <button>Information Technology</button>
          <button>Marketing</button>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
