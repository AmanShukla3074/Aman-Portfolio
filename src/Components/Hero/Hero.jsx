import React from "react";
import "./Hero.css";
import { CiInstagram, CiLinkedin, CiMail } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import profile from '../../assets/newProfilePic.jpg'

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="hero-left">
        <h1 className="hero-header">Hi, I'm Aman Shukla</h1>
        <p className="hero-info">
          I'm a full stack web developer and software engineer with a passion
          for creating dynamic and responsive web applications. As a fresher, I
          have a solid foundation in both front-end and back-end technologies.constantly learning and growing in this ever-evolving field.
        </p>
        <div className="social-links">
        <a href="https://www.linkedin.com/in/aman-shukla3074" target="_blank" rel="noopener noreferrer">
        <CiLinkedin className="social-icons"/>
        </a>
        <a href="https://github.com/AmanShukla3074" target="_blank" rel="noopener noreferrer">
        <VscGithubAlt  className="social-icons"/>
        </a>
        <a href="mailto:amanshukla30704@gmail.com" target="_blank" rel="noopener noreferrer">
        <CiMail className="social-icons"/>
        </a>
        <a href="https://www.instagram.com/aman_shukla_3074/" target="_blank" rel="noopener noreferrer">
        <CiInstagram className="social-icons"/>
        </a>
        </div>
      </div>
      <div className="hero-right">
        <img src={profile} />
      </div>
    </div>
  );
};

export default Hero;
