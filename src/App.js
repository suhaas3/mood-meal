import React from "react";
import { BrowserRouter as Router,Routes,Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import MoodMeal from "./Components/MoodMeal/MoodMeal";
import { useSelector } from "react-redux";

function App() {
  const {isAuthenticate } = useSelector((state) => state.auth);
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {isAuthenticate && <Route path="/moodmeal" element={<MoodMeal/>} />}
        </Routes>
      </Router>
    </>
  );
}

export default App;

