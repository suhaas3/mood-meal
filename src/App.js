import React, { lazy } from "react";
import { BrowserRouter as Router,Routes,Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = lazy(() => import('./Components/Home/Home'))
const Navbar = lazy(() => import('./Components/Navbar/Navbar'))
const MoodMeal = lazy(() => import('./Components/MoodMeal/MoodMeal'))

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          {<Route path="/moodmeal" element={<MoodMeal/>} />}
        </Routes>
      </Router>
    </>
  );
}

export default App;

