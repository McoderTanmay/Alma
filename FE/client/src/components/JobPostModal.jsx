import React, { useState } from "react";
import Modal from "react-modal";
import "./JobPost.css";

Modal.setAppElement("#root");

const JobPostModal = ({ isOpen, toggleModal, onAddJobPost }) => {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [appLink, setAppLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (company.trim() === "" || role.trim() === "" || location.trim() === "" || appLink.trim() === "") {
      alert("Please fill in all fields!");
      return;
    }

    onAddJobPost(company, role, location, appLink);
    toggleModal();
    setCompany("");
    setRole("");
    setLocation("");
    setAppLink("");
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={toggleModal} className="modal" overlayClassName="overlay">
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company Name"
          required
        />
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role"
          required
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          required
        />
        <input
          type="url"
          value={appLink}
          onChange={(e) => setAppLink(e.target.value)}
          placeholder="Application Link"
          required
        />
        <button type="submit">Post Job</button>
      </form>
    </Modal>
  );
};

export default JobPostModal;
