import React, { lazy } from "react";
import { BrowserRouter as Router,Routes,Route, Navigate } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import Profile from "./Components/Profile/Profile";
import UserProfileCard from "./Components/UserProfileCard/UserProfileCard";
import PasswordChange from "./Components/PasswordChange/PasswordChange";

const Home = lazy(() => import('./Components/Home/Home'))
const Navbar = lazy(() => import('./Components/Navbar/Navbar'))
const MoodMeal = lazy(() => import('./Components/MoodMeal/MoodMeal'))
const Login = lazy(() => import('./Components/Login/Login'))

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/moodmeal" element={<MoodMeal/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/profile" element={<UserProfileCard/>} />
          <Route path="/change-password" element={<PasswordChange/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

