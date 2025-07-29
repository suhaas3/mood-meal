import React from "react";
import "./FooterSection.css";

function FooterSection() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-title">MoodMeal</h2>
        <p className="footer-text">
          Eat with emotion. Track your meals. Understand yourself better.
        </p>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy</a>
        </div>

        <p className="footer-bottom">&copy; {new Date().getFullYear()} MoodMeal. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default FooterSection;
