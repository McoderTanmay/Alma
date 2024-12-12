import React from "react";
import "./About1.css";

const About1 = () => {
  const handleEdit = () => {
    alert("Edit About Section");
  };

  return (
    <section className="about">
      <div className="about-header">
        <h3>About</h3>
        
        <button className="edit-icon" onClick={handleEdit}>
          <i className="fa fa-pencil"></i> Edit
        </button>
      </div>
      <p>
      The only way to do great work is to love what you do."Success is not final, failure is not fatal: It is the courage to continue that counts.Believe you can and you're halfway there."
      </p>
    </section>
  );
};

export default About1;
