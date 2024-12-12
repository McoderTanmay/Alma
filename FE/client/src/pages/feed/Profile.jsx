import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Profile() {
  const [userData, setUserData] = useState("");
  const { success } = useSelector((state) => state.auth);

  // This useEffect fetches the user data after successful login
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Assuming you get the userId from your auth state after login
        const response = await fetch(`http://localhost:5000/api/user/getuserdetails`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("authToken")}`, // Assuming you use token-based authentication
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data.user); // Assuming the response contains a user object
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (success) {
      fetchUserData();
    }
  }, [success]); // This will trigger the effect when 'success' state changes

  return (
    <div>
      <div className="flex items-center mb-6">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-20 h-20 rounded-full mx-auto"
        />
        <div className="p-4">
          <h2 className="text-start text-lg font-bold mt-4">
            {userData.FullName || "Tanmay"}
          </h2>
          <p className="text-start text-gray-500 text-sm">
            {userData.description ||
              "About Backend Dev | Guru Ghasidas University, Bilaspur"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
