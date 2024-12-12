import React from "react";
import "./Header1.css";

const Header1 = () => {
  return (
    <header className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="nav-icons">
        <img src="notification.png" alt="Notifications" className="icon" />
        <img src="conversation.png" alt="Messages" className="icon" />
        <img src="Student1.png" alt="Student" className="icon" />
        <img src="POWEROFF.png" alt="logout" className="icon" onClick={handleLogout} 
          style={{ cursor: 'pointer' }}/>
      </div>
    </header>
  );
};

export default Header1;
