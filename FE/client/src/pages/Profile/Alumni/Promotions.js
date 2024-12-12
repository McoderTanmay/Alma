import React from "react";
import "./Promotions.css";

const Promotions = () => {
  return (
    <section className="promotions">
      <h3>Jobs</h3>
      <div className="promotion-item">
        <h4>Scholarship Available</h4>
        <p>Top-ranked MBA program starting soon. Sign up now!</p>
        <a href="#">Learn More</a>
      </div>
      <div className="promotion-item">
        <h4>12-20 Months UK Masters</h4>
        <p>Get an MSc in Data Science from the University of Plymouth.</p>
        <a href="#">Sign Up</a>
      </div>
    </section>
  );
};

export default Promotions;
