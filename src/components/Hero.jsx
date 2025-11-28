import React from "react";
import "../css/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Build Modern Websites With Confidence
        </h1>

        <p className="hero-desc">
          I am a frontend developer who creates clean, responsive,
          and high-quality digital experiences for the web.
        </p>

        <div className="hero-buttons">
          <a href="#" className="btn-primary">Get Started</a>
          <a href="#" className="btn-secondary">Learn More</a>
        </div>
      </div>

      <div className="hero-image"></div>
    </section>
  );
};

export default Hero;
