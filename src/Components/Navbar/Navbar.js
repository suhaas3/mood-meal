import React, { useEffect, useState } from "react";
import './Navbar.css';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Navbar() {

  const links = [
    { path: '/home', name: 'Home' },
    {path: '/moodmeal',name: "MoodMeal"}
  ]

const navigate = useNavigate();
const location = useLocation();

  function navigateFun(path) {
    navigate(path)
  }


  return (
    <>
      <div className="navbar-section">

        <ul type='none' className='nav-lists'>
          {links.map((item, index) => (
            <li className={`lists ${location.pathname === item.path ? 'active-link' : ""}`} key={index} onClick={() => navigateFun(item.path)}>{item.name}
            </li>
          ))}
        </ul>

        <input className="search" type="text" placeholder="Type ur need" />

          <li type="none" className="sign-up" onClick={() => navigateFun('/signup')}>SignUp</li>

        <button className="login-button-navbar">Login</button> 

      </div>
    </>
  )
}

export default Navbar;