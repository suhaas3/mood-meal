import React from "react";
import { BrowserRouter as Router,Routes,Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import MoodMeal from "./Components/MoodMeal/MoodMeal";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/moodmeal" element={<MoodMeal/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

