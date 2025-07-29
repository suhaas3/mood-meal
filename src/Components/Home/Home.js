import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from "react-router-dom";
import { Smile, Clock, Activity } from 'lucide-react';
import FooterSection from '../../FooterSection/FooterSection';
import { useSelector } from 'react-redux';
import MoodForm from '../../MoodForm/MoodForm';

function Home() {
  const [openMoodMealForm, setOpenMoodMealForm] = useState(false);
  const navigate = useNavigate();

  const { userName } = useSelector((state) => state.auth.LoginUserDetails);
  const {isAuthenticate } = useSelector((state) => state.auth);


  const openMoodForm = () => {
    setOpenMoodMealForm(prev => !prev);
  }


  return (
    <>
      <div className="homepage">
        <div className='welcome-user'>
          <h2 style={{ textAlign: 'center', marginTop: '20px', color: '#333' }}>
            Welcome, <span style={{ color: '#ff6600' }}>{userName}</span>!
          </h2>
          <h2 style={{textAlign:"center",fontFamily: "arial",fontSize: "16px",color: "#333"}}>Please Login using right side top Login button</h2>

        </div>
        {/* Hero Section */}
        <section className="hero">
          <h1 className="hero-title">MoodMeal</h1>
          <p className="hero-quote">“Track your mood. Choose your meal. Transform your life.”</p>
          {/* <button className="hero-button" onClick={() => navigateToMoodMeal('/moodmeal')}>Get Started</button> */}
          <button className="hero-button" onClick={openMoodForm}>Get Started</button>
        </section>

        {/* Features Section */}
        <section className="features">
          <h2 className="features-heading">How MoodMeal Helps</h2>
          <div className="feature-list">
            <Feature
              icon={<Smile className="feature-icon pink" />}
              title="Log Your Mood"
              description="Capture how you feel before you eat."
            />
            <Feature
              icon={<Clock className="feature-icon yellow" />}
              title="Track Meal Patterns"
              description="Spot trends in emotional eating habits."
            />
            <Feature
              icon={<Activity className="feature-icon green" />}
              title="Improve Wellness"
              description="Build awareness and balance with food."
            />
          </div>
        </section>
      </div>
      <FooterSection />
      {isAuthenticate ? (openMoodMealForm && <MoodForm openMoodMealForm={openMoodMealForm} setOpenMoodMealForm={setOpenMoodMealForm} />) : (
  <div style={{ color: 'red' }}>Error: You must be logged in to access this feature.</div>
) }

       {/* {openMoodMealForm && <MoodForm openMoodMealForm={openMoodMealForm} setOpenMoodMealForm={setOpenMoodMealForm} />} */}
    </>
  );
}

function Feature({ icon, title, description }) {
  const navigate = useNavigate();
  const navigateToMoodMeal = () => {
    navigate('/moodmeal')
  }
  return (
    <>
      <div className="feature-box" onClick={() => navigateToMoodMeal('/moodmeal')}>
        <div className="feature-icon-container">{icon}</div>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-desc">{description}</p>
      </div>
    </>
  );
}

export default Home;