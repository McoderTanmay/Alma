import React from "react";
import "./Profile1.css";

const Profile1 = () => {
  const handleEdit = () => {
    alert("Edit Profile Clicked");
  };

  return (
    <section className="profile">
      <img src="profile.png" alt="Profile" className="profile-picture" />
      <div className="profile-info">
        <h1>Mr.Rabindra kumar </h1>
        <p> Full Stack Developer | Student@GGV| Digital India:</p>
        <p>Problem Solving skill(DSA).|Java</p>
      </div>
      <div className="profile-actions">
        <button onClick={handleEdit} className="edit-btn">Edit Profile</button>
        <button className="contact-btn">Contact Info</button>
        <button className="contact-btn">Connect</button>
      </div>
    </section>
  );
};

export default Profile1;
