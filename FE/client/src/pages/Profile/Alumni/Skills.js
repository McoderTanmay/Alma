import React from "react";
import "./Skills.css";

const Skills = () => {
  const handleAddSkill = () => {
    alert("Add Skill Clicked");
  };

  return (
    <section className="skills">
      <h3>Skills</h3>
      <div className="skill-list">
        <span className="skill">Problem Solving</span>
        <span className="skill">Strategic Thinking</span>
        <span className="skill">Team Leadership</span>
      </div>
      <button onClick={handleAddSkill} className="add-skill-btn">Add Skill</button>
    </section>
  );
};

export default Skills;
