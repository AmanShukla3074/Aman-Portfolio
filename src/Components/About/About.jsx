import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <h2 className="about-header">About Me</h2>

      <div className="about-info-container">
        <p className="about-info">
          Hello, My name is Aman Shukla. I'm an MSc Artificial Intelligence &amp;
          Machine Learning student at Gujarat University, based in Ahmedabad, India.
          I have a BCA background and hands-on experience in Machine Learning and
          Computer Vision.
        </p>

        <p className="about-info">
          I'm currently developing an ongoing research project involving computer
          vision for agricultural applications — specifically detecting animals
          concealed within crops during harvesting using visible and
          infrared/thermal imagery. I am also working on building a synthetic
          custom dataset inspired from real thermal images for this project.
        </p>

        <p className="about-info">
          My interests span Machine Learning, Deep Learning, Computer Vision, and
          Natural Language Processing. I'm open to AI/ML internship and entry-level
          opportunities where I can contribute and keep growing. Let's connect and
          build something impactful together!
        </p>
      </div>

      <h2 className="study-header">Education</h2>

      {/* MSc AI & ML - Current */}
      <div className="study-info-wrapper">
        <div className="study-info-right">
          <div className="study-info-degree">
            MSc Artificial Intelligence &amp; Machine Learning
          </div>
          <div className="study-info-collageName">
            Gujarat University
          </div>
        </div>
        <div className="study-info-left">
          <div className="study-info-time">2025 – 2027</div>
          <div className="study-info-marks" style={{ color: '#be14ef', fontWeight: '600' }}>Pursuing</div>
        </div>
      </div>

      {/* BCA - Completed */}
      <div className="study-info-wrapper" style={{ marginTop: '20px' }}>
        <div className="study-info-right">
          <div className="study-info-degree">
            Bachelor of Computer Applications (BCA)
          </div>
          <div className="study-info-collageName">
            LJ College of Computer Applications, Gujarat University
          </div>
        </div>
        <div className="study-info-left">
          <div className="study-info-time">2021 – 2024</div>
          <div className="study-info-marks">CGPA: 8.25</div>
        </div>
      </div>

    </div>
  );
};

export default About;
