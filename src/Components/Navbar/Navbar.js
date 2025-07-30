import React, { useState } from "react";
import './Navbar.css';
import { useNavigate, useLocation } from "react-router-dom";
import LoginPopup from "../LoginPopup/LoginPopup";
import { useDispatch, useSelector } from "react-redux";
import SignUpPopup from "../SignUpPopup/SignUpPopup";
import { Logut } from "../../Redux-toolkit/Reducers/AuthSlice";

function Navbar() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const { isAuthenticate } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const links = [
    { path: '/', name: 'Home' },
    { path: '/moodmeal', name: "MoodMeal" }
  ];

  const navigateFun = (path) => navigate(path);

  const handleOpenLogin = () => setOpenLogin(prev => !prev);
  const handleSignUp = () => setOpenSignUp(prev => !prev);
  const handleLogout = () => dispatch(Logut());

  return (
    <>
      <nav className="navbar-section">
        <div className="navbar-left">
          <ul className="nav-lists">
            {links.map((item, index) => (
              <li
                key={index}
                className={`lists ${location.pathname === item.path ? 'active-link' : ''}`}
                onClick={() => navigateFun(item.path)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-right">
          <input className="search" type="text" placeholder="Search meals or moods..." />

          {/* <li className="signup-list" type="none">SignUp</li> */}

          {isAuthenticate ? (
            <button className="login-button-navbar" onClick={handleLogout}>Logout</button>
          ) : (
            <button className="login-button-navbar" onClick={handleOpenLogin}>Login</button>
          )}
        </div>
      </nav>

      {openLogin && <LoginPopup openLogin={openLogin} setOpenLogin={setOpenLogin} />}
      {/* {openSignUp && <SignUpPopup setOpenSignUp={setOpenSignUp} openSignUp={openSignUp} />} */}
    </>
  );
}

export default Navbar;
