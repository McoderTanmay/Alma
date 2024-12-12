import React from "react";
import "./Education.css";

const Education = () => {
  const handleEdit = (id) => {
    alert(`Edit Education with ID: ${id}`);
  };

  return (
    <section className="education">
      <h3>Education</h3>
      <div className="education-item">
        <div>
          <h4>Guru Ghasidas University</h4>
          <p>Bachelor of Technology (Computer Science)</p>
          <p>2015 - 2019</p>
        </div>
        <button onClick={() => handleEdit(1)} className="edit-icon">Edit</button>
      </div>
    </section>
  );
};

export default Education;
