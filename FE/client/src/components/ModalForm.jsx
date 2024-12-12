import React, { useState } from "react";
import Modal from "react-modal";
import "./ModalForm.css";

Modal.setAppElement("#root");

const ModalForm = ({ isOpen, toggleModal, onAddQuestion }) => {
  const [question, setQuestion] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim() === "") {
      alert("Question field is required!");
      return;
    }

    // Pass the new question and details to the parent component
    onAddQuestion(question, details);

    toggleModal();
    setQuestion("");
    setDetails("");
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <div className="modal-header">
        <h2>Post a Question</h2>
        <button className="close-button" onClick={toggleModal}>
          &times;
        </button>
      </div>
      <form onSubmit={handleSubmit} className="modal-form">
        <input
          type="text"
          placeholder="Enter your question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="input-field"
        />
        <textarea
          placeholder="Add more details (optional)..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="textarea-field"
        ></textarea>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default ModalForm;
