import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [story, setStory] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleEdit = () => {
    alert("Edit About Section");
  };

  const openModal = () => {
    setIsModalOpen(true);
    setSuccessMessage("");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setStory("");
    setSuccessMessage("");
  };

  const handlePostStory = () => {
    if (story.trim()) {
      setSuccessMessage("Your story has been posted!");
      setTimeout(() => {
        closeModal();
      }, 2000); // Close modal after 2 seconds
    } else {
      alert("Please write a story before posting!");
    }
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
      "Believe you can and you're halfway there."What you get by achieving your goals is not as important as what you become by achieving your goals." – uctus ligula vel nulla 
        
      </p>
      <button onClick={openModal} className="add-success-story">
        Add Success Story
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              X
            </button>
            <h2>Success Story</h2>
            <p>Share your success story below!</p>
            <input
              type="text"
              placeholder="Write a story idea..."
              value={story}
              onChange={(e) => setStory(e.target.value)}
              className="story-input"
            />
            <button className="post-btn" onClick={handlePostStory}>
              Post
            </button>
            {successMessage && <p className="success-message">{successMessage}</p>}
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
