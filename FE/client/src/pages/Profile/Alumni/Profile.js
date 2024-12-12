import React from "react";
import "./Profile.css";

const Profile = () => {
  const handleEdit = () => {
    alert("Edit Profile Clicked");
  };

  return (
    <section className="profile">
      <img src="profile.png" alt="Profile" className="profile-picture" />
      <div className="profile-info">
        <h1>BaldevRaj Mittal</h1>
        <p>Baldev Raj Mittal, the Founder Chairman of Lovely Group, was an entrepreneur par excellence. </p>
        <p>Punjab | Lovely Professional University </p>
      </div>
      <div className="profile-actions">
        <button onClick={handleEdit} className="edit-btn">Edit Profile</button>
        <button className="contact-btn">Contact Info</button>
        <button className="contact-btn">Connect</button>
      </div>
    </section>
  );
};

export default Profile;
