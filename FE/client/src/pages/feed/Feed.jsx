import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import join from "../../media/join.png";
import ChatBot from "../../components/ChatBot";

import MainNavbar from "../../components/MainNav";
function Feed() {
  const [aiClicked, setAiClicked] = useState(false);
  const handelAiChatHandler = () => {
    setAiClicked(true);
  };
  const closehandelAiChatHandler = () => {
    setAiClicked(false);
  };
  return (
    <div>
      <MainNavbar />
      <div className="flex bg-gray-200">
        {/* Sidebar */}
        <div className="w-1/4">
          <aside className=" h-fit rounded-xl bg-white p-4 shadow-lg ms-10 mt-7">
            {/* Profile Card */}

            <div className="flex items-center mb-6">
              <img
                src="https://via.placeholder.com/100"
                alt="Profile"
                className="w-20 h-20 rounded-full mx-auto"
              />
              <div className="p-4">
                <h2 className="text-start text-lg font-bold mt-4">Jane Doe</h2>
                <p className="text-start text-gray-500 text-sm">
                  About Description Lorem Ipsum | Guru Ghasidas University,
                  Bilaspur
                </p>
              </div>
            </div>
          </aside>
          {!aiClicked && (
            <aside className=" h-fit bg-white rounded-xl shadow-lg ms-10 mt-5">
              <div className="flex items-center">
                <button
                  onClick={handelAiChatHandler}
                  className="w-full text-left bg-white py-2 px-4 rounded-lg"
                >
                  Chat with Alumn<span className="text-teal-600">AI</span>
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
          <aside className=" h-fit bg-white rounded-xl shadow-lg ms-10 mt-5 hover:bg-green-200">
            <div className="flex rounded-xl items-center bg-teal-500">
              <button className="w-full text-left  py-2 px-4 rounded-lg ">
                Create a Job
              </button>
              <MdKeyboardArrowRight className="text-2xl" />
            </div>
          </aside>
        </div>

        {/* Feed Section */}
        <main className="w-1/2 p-6">
          {/* Post */}
          {[1, 2].map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg mb-6 overflow-hidden"
            >
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src="https://via.placeholder.com/50"
                      alt="Author"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h4 className="font-bold">Paul Wall</h4>
                      <p className="text-sm text-gray-500">1h</p>
                    </div>
                  </div>
                  <button className="text-gray-500">...</button>
                </div>
                <p className="mt-4 text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <img src={join} alt="Post" className="w-full" />
              <div className="p-4 flex justify-between text-gray-600 text-sm">
                <span>1268 Likes</span>
                <span>56 Comments</span>
              </div>
              <div className="p-4 flex justify-around text-gray-500 text-sm">
                <button className="hover:text-black">Like</button>
                <button className="hover:text-black">Comment</button>
                <button className="hover:text-black">Share</button>
              </div>
            </div>
          ))}
        </main>

        {/* Messaging Section */}
        <aside className="w-1/4 h-fit mt-6 rounded-xl bg-white p-6 shadow-lg">
          <h3 className="font-bold text-gray-800 mb-4">Messaging</h3>
          {/* Search */}
          <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 mb-4">
            <CiSearch className="text-2xl me-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent w-full focus:outline-none text-sm"
            />
          </div>
          {/* Messages */}
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
