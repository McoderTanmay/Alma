import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import ChatBot from "../../components/ChatBot";
import Profile from "./Profile";
import Post from "./Post";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Feed.css";


import MainNavbar from "../../components/MainNav";
import { Link } from "react-router-dom";

function Feed() {
  const [aiClicked, setAiClicked] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPosted, setIsPosted] = useState(false);
  const [error, setError] = useState("");
  const handleCreateJobClick = () => {
    setIsModalOpen(true); /// open the modal
  };
  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setError(""); // Reset any errors
    setIsPosted(false); // Reset success message
  };
  const handlemySubmit = () => {
    // Handle form submission logic here
    setShowNotification(true); // Show notification
    setTimeout(() => {
      setShowNotification(false); // Hide notification after 3 seconds
   }, 3000);
  };

  const handelAiChatHandler = () => {
    setAiClicked(true);
  };
  const closehandelAiChatHandler = () => {
    setAiClicked(false);
  };
  const handleConfirmClick = () => {
    // Simulate form submission logic
    const isValid = true; // Replace this with actual validation logic

    if (isValid) {
      setIsPosted(true);
      setTimeout(() => {
        setIsModalOpen(false); // Close the modal after success
      }, 1500);
    } else {
      setError("Error: Please fill out all required fields!");
}
};
  const handleSubmit = async () => {
    if (!fromDate || !toDate) {
      alert("Please select both From and To dates");
      return;
    }
  
    // Get the Bearer token from local storage
    const token = localStorage.getItem("authToken");
  
    if (!token) {
      alert("Authentication token not found. Please log in.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/feed/createavailability", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Add the Bearer token to the headers
        },
        body: JSON.stringify({
          startDate: new Date(fromDate).toISOString(),
          endDate: new Date(toDate).toISOString(),
        }),
      });
  
      const data = await response.json();
      console.log("API Response:", data);
    } catch (error) {
      console.error("Error while calling API:", error);
    }
  };
  

  return (
    <div>
      <MainNavbar />
      <div className="w-full bg-teal-500 py-2">
        <div className="overflow-hidden">
          <div className="overflow-hidden bg-gray-800">
            <div className="whitespace-nowrap animate-marquee text-white text-lg font-bold">
              Upcoming Alumini Offline Meetups: Miss Aditi Ranjan will visit
              campus on 2nd Jan 2025! &nbsp; | &nbsp; Check out the latest
              features on our platform! &nbsp; | &nbsp; Don't miss our special
              offers this week!
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-gray-200">
        {/* Sidebar */}
        <div className="w-1/4">
          <aside className=" h-fit rounded-xl bg-white p-4 shadow-lg ms-10 mt-7">
            {/* Profile Card */}
            <Profile />
          </aside>
          {!aiClicked && (
            <aside className=" h-fit bg-white rounded-xl shadow-lg ms-10 mt-5">
              <div className="flex items-center">
                <button
                  onClick={handelAiChatHandler}
                  className="w-full text-left bg-white py-2 px-4 rounded-lg"
                >
                  Chat with Assistant <span className="text-teal-600">AI</span>
                </button>
                <MdKeyboardArrowRight className="text-2xl" />
              </div>
            </aside>
          )}
          {aiClicked && (
            <aside className="h-fit bg-white rounded-xl shadow-lg ms-10 mt-5">
              <ChatBot onClose={closehandelAiChatHandler}></ChatBot>
            </aside>
          )}
          {/* Create a Job Button */}
          < aside className=" h-fit bg-blue-500 rounded-xl shadow-lg ms-10 mt-5">
           
      <div className="flex rounded-xl items-center bg-teal-500">
        <Link to = "/jobportal" className="w-full text-left py-2 px-4 rounded-lg text-white">
          
          
        
          Create a Job
          </Link>
      </div>
        {/* Modal */}
    {isModalOpen && (
      <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="job-form-container bg-white rounded-lg shadow-lg p-6 relative">
          <div className="job-form-header flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Create a Job</h2>
            <button
              className="close-btn text-red-500 font-bold text-xl"
              onClick={handleCloseModal}
            >
              ×
            </button>
          </div>
          <div className="job-form-body w-[500px]">
            <div className="form-field mb-4">
              <label className="block font-bold mb-2">
                <i className="icon">🧑‍💻</i> Position
              </label>
              <input
                type="text"
                placeholder="Enter position"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="form-field mb-4">
              <label className="block font-bold mb-2">
                <i className="icon">🏢</i> Company Name
              </label>
              <input
                type="text"
                placeholder="Enter company name"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="form-field mb-4">
              <label className="block font-bold mb-2">
                <i className="icon">💼</i> Job Type
              </label>
              <input
                type="text"
                placeholder="Enter job type"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="form-field mb-4">
              <label className="block font-bold mb-2">
                <i className="icon">📍</i> Location
              </label>
              <input
                type="text"
                placeholder="Enter location"
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>

          <button
            className="confirm-btn bg-teal-500 text-white py-2 px-4 rounded-md w-full"
            onClick={handleConfirmClick}
          >
            Confirm
          </button>

          {isPosted && (
            <div className="success-message text-green-500 mt-4">
              Job Posted Successfully!
            </div>
          )}

          {error && (
            <div className="error-message text-red-500 mt-4">{error}</div>
          )}
        </div>
      </div>
    )}
  </aside>
          <aside className=" h-fit bg-blue-500 rounded-xl shadow-lg ms-10 mt-5">
            <div className="flex rounded-xl items-center">
              <button
                className="w-full text-left py-2 px-4 rounded-lg bg-blue-500 text-white"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Availability
              </button>
              {/* Dropdown Content */}
              {showDropdown && (
                <div className="mt-2 p-4 border rounded-lg bg-gray-100">
                  <div className="dates ">
                    <div className="mb-4">
                      <label className="block font-bold mb-2">From:</label>
                      <DatePicker
                        selected={fromDate}
                        onChange={(date) => setFromDate(date)}
                        placeholderText="Select from date"
                        dateFormat="yyyy/MM/dd"
                        className="w-full p-2 border rounded-lg"
                      />
                    </div>

                    {/* To Date */}
                    <div className="mb-4">
                      <label className="block font-bold mb-2">To:</label>
                      <DatePicker
                        selected={toDate}
                        onChange={(date) => setToDate(date)}
                        placeholderText="Select to date"
                        dateFormat="yyyy/MM/dd"
                        className="w-full p-2 border rounded-lg"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      onClick={handlemySubmit}
                      className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg"
                    >
                      Submit
                    </button>
                  </div>
                  {/* From Date */}
                </div>
              )}
              <MdKeyboardArrowRight className="text-2xl" />
            </div>
            {showNotification && (
        <div className="mt-4 p-4 text-center bg-green-500 text-white rounded-lg shadow-lg">
          Your availability has been submitted successfully!
        </div>
        )}
          </aside>
        </div>

        {/* Feed Section */}
        <main className="w-1/2 p-6">
          {[1, 2].map((index) => (
            <Post key={index} />
          ))}
        </main>

        {/* Messaging Section */}
        <aside className="w-1/4 h-fit mt-6 rounded-xl bg-white p-6 shadow-lg">
          <h3 className="font-bold text-gray-800 mb-4">Messaging</h3>
          <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 mb-4">
            <CiSearch className="text-2xl me-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent w-full focus:outline-none text-sm"
            />
          </div>
          <ul className="space-y-4">
            {[1, 2, 3, 4, 5].map((msg, index) => (
              <li
                key={index}
                className={`p-3 rounded-lg ${
                  index === 0 ? "bg-blue-100" : "hover:bg-gray-100"
                }`}
              >
                <div className="flex space-x-4">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="User"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1 text-left">
                    <h4 className="font-bold">John Peas</h4>
                    <p className="text-sm text-gray-500">
                      Lorem ipsum dolor sit amet...
                    </p>
                  </div>
                  <span className="text-gray-400 text-sm">Nov 27</span>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default Feed;
