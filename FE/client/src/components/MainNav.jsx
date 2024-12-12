import React from "react";
import { FaSearch, FaPen, FaHome, FaBell, FaUserFriends, FaCommentDots } from "react-icons/fa";
import home from "../media/home.png"
import bell from "../media/notification.png"
import event from "../media/conference.png"
import chat from "../media/conversation.png"
import forum from "../media/froum.png"
import {Link} from "react-router-dom"
function MainNavbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4 shadow-sm border-b">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold text-gray-800">
          <span className="text-black">Alu</span><span className="text-teal-600">dent</span>
        </h1>
      </div>

      {/* Center Section: Search Bar */}
      <div className="flex items-center space-x-2 bg-gray-100 rounded-lg px-4 py-2 w-1/3">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent focus:outline-none text-sm w-full"
        />
      </div>

      {/* Right Section: Icons */}
      <div className="flex items-center space-x-6 text-gray-600">
        <div>
            <img className="size-6" src={home} alt="Home" srcset="" />
        </div>
        {/* <div>
            <img className="size-6" src={bell} alt="Notification" srcset="" />
        </div> */}
        {/* <div>
            <img className="size-6" src={event} alt="event" srcset="" />
        </div> */}

            <img className="size-6" src={chat} alt="chat" srcset="" />
        </div>
        <Link to = "/discussionforum">
            <img className="size-6" src={forum} alt="Forum" srcset="" />
        </Link>
        <div className="w-8 h-8 bg-blue-100 rounded-full overflow-hidden flex items-center justify-center">
          <img
            src="https://via.placeholder.com/150"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;
