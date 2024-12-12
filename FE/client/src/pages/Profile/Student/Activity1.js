import React, { useState } from "react";
import "./Activity1.css";

const Activity1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState(null);
  const [message, setMessage] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
    setMessage(""); // Clear message when modal opens
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPostTitle("");
    setPostContent("");
    setPostImage(null);
    setMessage(""); // Clear message when modal closes
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (postTitle && postContent) {
      setMessage("Post is done!");
      closeModal();
    } else {
      setMessage("Please fill in all fields.");
    }
  };

  const handleImageChange = (e) => {
    setPostImage(e.target.files[0]);
  };

  return (
    <section className="activity">
      <h3>Activity</h3>
      <div className="post">
        <p>"Pain itself is loved, but because it is pain, it is necessary to experience it.")</p>
        <a href="#">Read More</a>
      </div>
      <div className="post">
        <p>Post 2: The only way to do great work is to love what you do</p>
        <a href="#">Read More</a>
      </div>
      <button className="create-post-btn" onClick={openModal}>Create a Post</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>X</button>
            <h2>Create a New Post</h2>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="post-title">Title</label>
              <input 
                type="text" 
                id="post-title" 
                placeholder="Enter title" 
                value={postTitle} 
                onChange={(e) => setPostTitle(e.target.value)}
                required
              />

              <label htmlFor="post-content">Content</label>
              <textarea 
                id="post-content" 
                placeholder="Write your post..." 
                value={postContent} 
                onChange={(e) => setPostContent(e.target.value)}
                required
              ></textarea>

              <label htmlFor="post-image">Upload Image</label>
              <input 
                type="file" 
                id="post-image" 
                accept="image/*" 
                onChange={handleImageChange}
              />

              <button type="submit" className="submit-btn">Post</button>
            </form>
            {message && <p className="message">{message}</p>}
          </div>
        </div>
      )}
    </section>
  );
};

export default Activity1;
