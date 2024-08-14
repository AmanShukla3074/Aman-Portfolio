import React from "react";
import "./About.css";
// import { IoLocationOutline } from "react-icons/io5";

const About = () => {
  return (
    <div id="about" className="about">
      <h2 className="about-header">About Me</h2>

      <div className="about-info-container">
        <p className="about-info">
          Hello, My name is Aman Shukla.I'm a web developer and software
          engineer based in India who exploring industry as full-stack web
          developer and software engineer with a strong foundation in both
          front-end and back-end technologies.
        </p>

        <p className="about-info">
          Graduated with a Bachelor's degree in Computer Applications. With a
          keen interest in web development, I am dedicated to expanding my
          skills and knowledge in this field. I focus on creating dynamic and
          responsive web applications, always exploring new technologies and
          tools to enhance my work.
        </p>

        <p className="about-info">
          I'm looking forward to contributing my skills to a dynamic team and
          growing as a developer. Let's connect and create something awesome
          together!
        </p>
      </div>

      <h2 className="study-header">Education</h2>
      <div className="study-info-wrapper">
        <div className="study-info-right">
          <div className="study-info-degree">
            Bachelor of Computer Application
          </div>
          <div className="study-info-collageName">
            LJ Collage of Computer Applications
          </div>
        </div>
        <div className="study-info-left">
          <div className="study-info-time">Sep 2021 - May 2024</div>
          <div className="study-info-marks">CGPA: 8.25</div>
        </div>
      </div>
      {/* <div className="address">
          <IoLocationOutline />
          Nikol, Ahmedabad-382350, Gujarat, India
        </div> */}
    </div>
  );
};

export default About;
