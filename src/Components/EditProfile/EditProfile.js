import React, { useEffect, useState } from "react";
import "./EditProfile.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../Utils/constants";
import { addUser } from "../../Redux-toolkit/Reducers/userSlice";

const EditProfile = ({ user }) => {


  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [age, setAge] = useState(user?.age || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [about, setAbout] = useState(user?.about || "");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleEditProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(BASE_URL + '/profile/edit', { firstName, lastName, age, gender, about }, { withCredentials: true });

      console.log(res?.data);
      dispatch(addUser(res?.data?.data));
    } catch (err) {
      setError(err?.response?.data);
    }
  }


  return user && (
    <div className="edit-profile-container">
      <div className="edit-profile-card">
        <h2>Update Profile</h2>

        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter first name"
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter last name"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Age</label>
            <select value={age} onChange={(e) => setAge(e.target.value)}>
              <option value="">Select Age</option>
              {Array.from({ length: 83 }, (_, i) => i + 18).map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Other</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>About</label>
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="Tell us about yourself..."
            rows="4"
          ></textarea>
        </div>

        <p style={{color: "red", textAlign:"center", fontSize: "14px"}}>{error}</p> <button type="submit" className="save-btn" onClick={handleEditProfile}> Save Changes </button>

      </div>
    </div>
  );
};

export default EditProfile;
