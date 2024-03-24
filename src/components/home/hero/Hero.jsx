import React from "react";
import "./Hero.css";
import Navbar from "../navbar/Navbar";

import heroImg from "../../../assets/images/hero-img.png";

const Hero = () => {
  return (
    <div className="hero-section">
      <Navbar />

      <div className="hero-text">
        <h1>Hello World! I'm Aman</h1>
        <h3>
          a passionate software engineering undergrad delving into the world of
          web and mobile applications
        </h3>
      </div>

      <button className="hero-resumeBtn">my resume</button>

      <img src={heroImg} className="hero-img" />
    </div>
  );
};

export default Hero;
