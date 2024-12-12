import React, { useState } from "react";
import "./Activity.css";

const Activity = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
    setSuccessMessage("");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSuccessMessage("");
  };

  const handleConfirm = () => {
    setSuccessMessage("Job is posted!");
    setTimeout(() => {
      setIsModalOpen(false);
    }, 2000); // Close modal after 2 seconds
  };

  return (
    <div className="activity-container">
      <section className="activity-box">
        <h3>Activity</h3>
        <div className="post">
          <p>Post 1: Lorem ipsum dolor sit amet...</p>
          <a href="#">Read More</a>
        </div>
        <div className="post">
          <p>Post 2: Consectetur adipiscing elit...</p>
          <a href="#">Read More</a>
        </div>
        <button className="create-post-btn " onClick={openModal}>
          Create a Post
        </button>

        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <button className="close-btn" onClick={closeModal}>
                X
              </button>
              <h2>Create a Job</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="position">Position</label>
                  <input
                    type="text"
                    id="position"
                    placeholder="Flutter Developer"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input type="text" id="company" placeholder="Facebook" />
                </div>

                <div className="form-group">
                  <label htmlFor="job-type">Job Type</label>
                  <input type="text" id="job-type" placeholder="Enter job type" />
                </div>

                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input type="text" id="location" placeholder="New York" />
                </div>

                <button
                  type="button"
                  className="confirm-btn"
                  onClick={handleConfirm}
                >
                  Confirm
                </button>
              </form>
              {successMessage && (
                <p className="success-message">{successMessage}</p>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Activity;
