import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header" style={{ backgroundColor: "black" }}>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="nav-icons">
        <img src="notification.png" alt="Notifications" className="icon" />
        <img src="conversation.png" alt="Messages" className="icon" />
        <img src="ALUMNI.png" alt="Alumni" className="icon" />
        <img
          src="POWEROFF.png"
          alt="logout"
          className="icon"
          onClick={handleLogout}
          style={{ cursor: "pointer" }}
        />
      </div>
    </header>
  );
};

export default Header;
