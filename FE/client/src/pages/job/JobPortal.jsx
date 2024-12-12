import React, { useState, useEffect } from "react";
import JobPostModal from "../../components/JobPostModal";
import { FaBriefcase, FaHeart, FaPlus } from "react-icons/fa";
import "./JobPortal.css";

const JobPortal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobPosts, setJobPosts] = useState([]);

  // Pre-fill job posts using useEffect
  useEffect(() => {
    const initialJobPosts = [
      {
        id: 1,
        company: "Tech Solutions Inc.",
        role: "Software Engineer",
        location: "San Francisco, CA",
        appLink: "https://example.com/apply-software-engineer",
        interestedCount: 10,
      },
      {
        id: 2,
        company: "Innovative Designs",
        role: "Product Manager",
        location: "New York, NY",
        appLink: "https://example.com/apply-product-manager",
        interestedCount: 5,
      },
      {
        id: 3,
        company: "Creative Labs",
        role: "UX/UI Designer",
        location: "Austin, TX",
        appLink: "https://example.com/apply-ux-ui-designer",
        interestedCount: 3,
      },
    ];
    setJobPosts(initialJobPosts);
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const addJobPost = (company, role, location, appLink) => {
    const newJobPost = {
      id: jobPosts.length + 1,
      company,
      role,
      location,
      appLink,
      interestedCount: 0,
    };
    setJobPosts([newJobPost, ...jobPosts]);
  };

  const handleInterested = (id) => {
    setJobPosts(
      jobPosts.map((job) =>
        job.id === id
          ? { ...job, interestedCount: job.interestedCount + 1 }
          : job
      )
    );
  };

  return (
    <div className="job-portal">
      <div className="container">
        <div className="header">
          <h1>Job Listings</h1>
          <button className="post-job-button" onClick={toggleModal}>
            <FaPlus style={{ marginRight: "8px" }} /> Post a Job
          </button>
        </div>

        <div className="job-list">
          {jobPosts.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-header">
                <FaBriefcase size={24} style={{ marginRight: "10px" }} />
                <span className="job-title">{job.role}</span>
              </div>
              <p className="job-company">{job.company}</p>
              <p className="job-location">{job.location}</p>
              <a href={job.appLink} className="job-link" target="_blank" rel="noopener noreferrer">
                Apply Here
              </a>
              <div className="job-footer">
                <button
                  className="interested-button"
                  onClick={() => handleInterested(job.id)}
                >
                  <FaHeart size={16} style={{ marginRight: "5px" }} />{" "}
                  {job.interestedCount} Interested
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <JobPostModal isOpen={isModalOpen} toggleModal={toggleModal} onAddJobPost={addJobPost} />
    </div>
  );
};

export default JobPortal;
