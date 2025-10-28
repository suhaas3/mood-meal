import React, { useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import FooterSection from "../../FooterSection/FooterSection";

function Home() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user); // Redux store user data

  // Redirect to login if not logged in
  useEffect(() => {
    if (!user || !user._id) {
      navigate("/login"); // redirect if not logged in
    }
  }, [user, navigate]);

  // Prevent UI flicker while checking login
  if (!user || !user._id) {
    return null;
  }

  const handleNavigateMoodMeal = () => {
    navigate("/moodmeal");
  };

  return (
    <>
      <div className="homepage">
        {/* ✅ Welcome Section */}
        <div className="welcome-user">
          <h2 style={{ textAlign: "center", marginTop: "40px", color: "#333" }}>
            👋 Welcome,&nbsp;
            <span style={{ color: "#ff6600", textTransform: "capitalize" }}>
              {user.firstName} {user.lastName}
            </span>
            !
          </h2>
          <p
            style={{
              textAlign: "center",
              fontFamily: "Arial",
              fontSize: "16px",
              color: "#555",
            }}
          >
            Glad to have you back on <b>MoodMeal</b> 🍽️
          </p>
        </div>

        {/* ✅ Centered Button */}
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button
            onClick={handleNavigateMoodMeal}
            style={{
              backgroundColor: "#ff6600",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              padding: "12px 24px",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#e55d00")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#ff6600")}
          >
            🚀 Get Started
          </button>
        </div>

        {/* Hero Section */}
        <section className="hero">
          <h1 className="hero-title">MoodMeal</h1>
          <p className="hero-quote">
            “Track your mood. Choose your meal. Transform your life.”
          </p>
        </section>

        {/* Features Section */}
        <section className="features">
          <h2 className="features-heading">How MoodMeal Helps</h2>
          <div className="feature-list">
            <Feature
              icon="😊"
              title="Log Your Mood"
              description="Capture how you feel before you eat."
              navigate={navigate}
            />
            <Feature
              icon="⏰"
              title="Track Meal Patterns"
              description="Spot trends in emotional eating habits."
              navigate={navigate}
            />
            <Feature
              icon="💪"
              title="Improve Wellness"
              description="Build awareness and balance with food."
              navigate={navigate}
            />
          </div>
        </section>
      </div>

      <FooterSection />
    </>
  );
}

function Feature({ icon, title, description, navigate }) {
  const navigateToMoodMeal = () => {
    navigate("/moodmeal");
  };

  return (
    <div className="feature-box" onClick={navigateToMoodMeal}>
      <div className="feature-icon-container">{icon}</div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-desc">{description}</p>
    </div>
  );
}

export default Home;
