import React from "react";
import "./Hero.css";
import { CiInstagram, CiLinkedin, CiMail } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import profile from '../../assets/newProfilePic.jpg'
import resume from '../../assets/Aman_Shukla_Resume_WD_AI.pdf'

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="hero-left">
        <h1 className="hero-header">Hi, I'm Aman Shukla</h1>
        <p className="hero-info">
          MSc Artificial Intelligence &amp; Machine Learning student with a BCA background
          and hands-on experience in Machine Learning and Computer Vision.
          Currently developing an ongoing research project involving computer vision
          for agricultural applications. Interested in ML, Deep Learning, Computer
          Vision, and NLP.
        </p>
        <div className="hero-buttons">
          <a href={resume} download="Aman_Shukla_Resume" className="hero-resume-btn">Download Resume</a>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/aman-shukla3074" target="_blank" rel="noopener noreferrer">
            <CiLinkedin className="social-icons" />
          </a>
          <a href="https://github.com/AmanShukla3074" target="_blank" rel="noopener noreferrer">
            <VscGithubAlt className="social-icons" />
          </a>
          <a href="mailto:amanshukla30704@gmail.com" target="_blank" rel="noopener noreferrer">
            <CiMail className="social-icons" />
          </a>
          <a href="https://www.instagram.com/aman_shukla_3074/" target="_blank" rel="noopener noreferrer">
            <CiInstagram className="social-icons" />
          </a>
        </div>
      </div>
      <div className="hero-right">
        <img src={profile} alt="Aman Shukla" />
      </div>
    </div>
  );
};

export default Hero;
