import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import axios from "axios";
import { BASE_URL } from "../../Utils/constants";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../Redux-toolkit/Reducers/userSlice";

const Profile = ({ user }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchUserProfile = async () => {
    try {
      const res = await axios.get(BASE_URL + '/profile/view', {
        withCredentials: true
      })

      dispatch(addUser(res?.data));
      // dispatch(addUser(res?.data));
    } catch (err) {
      //Error handling
      if (err.status === 401) {
        navigate("/login");
      }
    }

  }
 
  useEffect(() => {
    fetchUserProfile();
  }, [])


  return user && (
    <>
      <div className="profile-container">
        <div className="profile-card">
          <h2 className="profile-title">Ur Current Profile</h2>

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
              <label>Age :</label>
              <span>{user?.age || "N/A"}</span>
            </div>

            <div className="info-group">
              <label>Gender :</label>
              <span>{user?.gender || "N/A"}</span>
            </div>

            <div className="info-group">
              <label>About:</label>
              <p className="about-text">{user?.about || "No description"}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
