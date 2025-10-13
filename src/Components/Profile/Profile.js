import React from "react";
import { useSelector } from "react-redux";
import "./Profile.css";

const Profile = () => {
  // Access user data from Redux store
  const user = useSelector((state) => state.user);

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="profile-title">My Profile</h2>

        <div className="profile-info">
          <div className="info-group">
            <label>First Name:</label>
            <span>{user?.firstName || "N/A"}</span>
          </div>

          <div className="info-group">
            <label>Last Name:</label>
            <span>{user?.lastName || "N/A"}</span>
          </div>

          <div className="info-group">
            <label>Email ID:</label>
            <span>{user?.emailId || "N/A"}</span>
          </div>

          <div className="info-group">
            <label>About:</label>
            <p className="about-text">{user?.about || "No description"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
