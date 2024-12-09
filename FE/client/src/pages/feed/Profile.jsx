import React from "react";
import join from "../../media/join.png";


function Profile() {
  return (
    <div>
      <div className="flex items-center mb-6">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-20 h-20 rounded-full mx-auto"
        />
        <div className="p-4">
          <h2 className="text-start text-lg font-bold mt-4">Jane Doe</h2>
          <p className="text-start text-gray-500 text-sm">
            About Description Lorem Ipsum | Guru Ghasidas University, Bilaspur
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
