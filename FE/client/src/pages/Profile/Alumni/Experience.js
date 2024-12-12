import React from "react";
import "./Experience.css";

const Experience = () => {
  const handleEdit = (id) => {
    alert(`Edit Experience with ID: ${id}`);
  };

  return (
    <section className="experience">
      <h3>Experience</h3>
      <div className="experience-item">
        <div>
          <h4>Senior Sales Manager</h4>
          <p>Facebook | New York, USA</p>
          <p>Jun 2022 - Present</p>
        </div>
        <button onClick={() => handleEdit(1)} className="edit-icon">Edit</button>
      </div>
      <div className="experience-item">
        <div>
          <h4>Marketing Specialist</h4>
          <p>Google | California, USA</p>
          <p>Jan 2020 - May 2022</p>
        </div>
        <button onClick={() => handleEdit(2)} className="edit-icon">Edit</button>
      </div>
    </section>
  );
};

export default Experience;
