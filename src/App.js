import React, { lazy } from "react";
import { BrowserRouter as Router,Routes,Route, Navigate } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import { LogIn } from "lucide-react";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;

