import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../Utils/constants";
import { removeUser } from "../../Redux-toolkit/Reducers/userSlice";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);

  const links = [
    { path: "/home", name: "Home" },
    { path: "/moodmeal", name: "MoodMeal" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleProfileClick = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setDropdownOpen(false);
    switch (option) {
      case "profile":
        navigate("/profile");
        break;
      case "changepassword":
        navigate("/change-password");
        break;
      case "forgotpassword":
        navigate("/forgot-password");
        break;
      case "logout":
        handleLogout();
        break;
      default:
        break;
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(`${BASE_URL}/logout`, {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/login");
    } catch (err) {
      navigate("/login");
    }
  };

  const handlePasswordChange = () => {
    navigate('/change-password')
  }

  return (
    <nav className="navbar-section">
      <div className="navbar-left">
        <ul className="nav-lists">
          {links.map((item, index) => (
            <li
              key={index}
              className={`lists ${
                location.pathname === item.path ? "active-link" : ""
              }`}
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* ✅ Profile Dropdown */}
      <div className="navbar-right" ref={dropdownRef}>
        <div className="profile-container-navbar" onClick={handleProfileClick}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Profile"
            className="profile-logo"
          />
          <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
            <p onClick={() => handleOptionClick("profile")}>Profile</p>
            <p onClick={handlePasswordChange}>
              Change Password
            </p>
            <p onClick={() => handleOptionClick("forgotpassword")}>
              Forgot Password
            </p>
            <p onClick={handleLogout}>Logout</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
