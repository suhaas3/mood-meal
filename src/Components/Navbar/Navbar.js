// import React, { useState } from "react";
// import './Navbar.css';
// import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import LoginPopup from "../LoginPopup/LoginPopup";
// import { useDispatch, useSelector } from "react-redux";
// import { Logut } from "../../Redux-toolkit/AuthSlice";
// import SignUpPopup from "../SignUpPopup/SignUpPopup";


// function Navbar() {

//   const [openLogin,setOpenLogin]= useState(false);
//   const [openSignUp,setOpenSignUp]=useState(false);

//   const links = [
//     { path: '/home', name: 'Home' },
//     {path: '/moodmeal',name: "MoodMeal"}
//   ]

//   const {isAuthenticate}=useSelector((state) => state.auth)

// const navigate = useNavigate();
// const location = useLocation();
// const dispatch = useDispatch();

//   function navigateFun(path) {
//     navigate(path)
//   }

//   function handleOpenLogin() {
//     setOpenLogin(prev => !prev);
//   }

//   function handleLogout() {
//     dispatch(Logut());
//   }

//   function handleSignUp() {
//     setOpenSignUp(prev => !prev);
//   }

//   console.log(openSignUp,'sign up')

//   return (
//     <>
//       <div className="navbar-section">

//         <ul type='none' className='nav-lists'>
//           {links.map((item, index) => (
//             <li className={`lists ${location.pathname === item.path ? 'active-link' : ""}`} key={index} onClick={() => navigateFun(item.path)}>{item.name}
//             </li>
//           ))}
//         </ul>

//         <input className="search" type="text" placeholder="Type ur need" />

//           <li type="none" className="signup-list" onClick={handleSignUp}>SignUp</li>

//         {isAuthenticate ? <button className="login-button-navbar" onClick={handleLogout}>Logout</button> : <button className="login-button-navbar" onClick={handleOpenLogin}>Login</button> }



//         {openLogin && <LoginPopup openLogin={openLogin} setOpenLogin={setOpenLogin} />}

//         {/* {openSignUp && <SignUpPopup setOpenSignUp={setOpenSignUp} openSignUp={openSignUp} />} */}

//       </div>
//     </>
//   )
// }

import React, { useState } from "react";
import './Navbar.css';
import { useNavigate, useLocation } from "react-router-dom";
import LoginPopup from "../LoginPopup/LoginPopup";
import { useDispatch, useSelector } from "react-redux";
import { Logut } from "../../Redux-toolkit/AuthSlice";
import SignUpPopup from "../SignUpPopup/SignUpPopup";

function Navbar() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const { isAuthenticate } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const links = [
    { path: '/home', name: 'Home' },
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

          <li className="signup-list" type="none">SignUp</li>

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
