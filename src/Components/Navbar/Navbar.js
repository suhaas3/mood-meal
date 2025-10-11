import React, { useState } from "react";
import './Navbar.css';
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const [openLogin, setOpenLogin] = useState(true);


  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const links = [
    { path: '/home', name: 'Home' },
    { path: '/moodmeal', name: "MoodMeal" },
  ];

  const navigateFun = (path) => navigate(path);

  const handleOpenLogin = () => setOpenLogin(prev => !prev);

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
      </nav>
    </>
  );
}

export default Navbar;
