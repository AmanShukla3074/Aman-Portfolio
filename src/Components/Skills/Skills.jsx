import React from "react";
import "./Skills.css";

// AI/ML Skills — icons from CDN (no extra packages needed)
import python from "../../assets/programing-language/python.png";
import git from "../../assets/programing-language/git.png";
import sql from "../../assets/programing-language/sql.png";
import mongo from "../../assets/programing-language/mongo.png";

// Tech icon CDN URLs (SimpleIcons / Devicon via CDN)
const tensorflowLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg";
const pytorchLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg";
const opencvLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg";
const sklearnLogo = "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg";
const jupyterLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg";
const numpyLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg";
const pandasLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h1 className="skills-header">Skills</h1>

      {/* ── AI / ML / CV Skills ── */}
      <p className="skills-category-label">AI &amp; Machine Learning</p>
      <div className="skills-img-wrapper">
        <div className="skills-img-container">
          <img src={python} alt="Python" />
          <p className="skills-name">Python</p>
        </div>
        <div className="skills-img-container">
          <img src={tensorflowLogo} alt="TensorFlow" />
          <p className="skills-name">TensorFlow</p>
        </div>
        {/* <div className="skills-img-container">
          <img src={pytorchLogo} alt="PyTorch" />
          <p className="skills-name">PyTorch</p>
        </div> */}
        <div className="skills-img-container">
          <img src={sklearnLogo} alt="scikit-learn" />
          <p className="skills-name">scikit-learn</p>
        </div>
        <div className="skills-img-container">
          <img src={opencvLogo} alt="OpenCV" />
          <p className="skills-name">OpenCV</p>
        </div>
        <div className="skills-img-container">
          <img src={numpyLogo} alt="NumPy" />
          <p className="skills-name">NumPy</p>
        </div>
        <div className="skills-img-container">
          <img src={pandasLogo} alt="Pandas" />
          <p className="skills-name">Pandas</p>
        </div>
        <div className="skills-img-container">
          <img src={jupyterLogo} alt="Jupyter" />
          <p className="skills-name">Jupyter</p>
        </div>
      </div>

      {/* ── Data / DB / Tools ── */}
      <p className="skills-category-label" style={{ marginTop: '30px' }}>Databases &amp; Tools</p>
      <div className="skills-img-wrapper">
        <div className="skills-img-container">
          <img src={sql} alt="MySQL" />
          <p className="skills-name">MySQL</p>
        </div>
        <div className="skills-img-container">
          <img src={mongo} alt="MongoDB" />
          <p className="skills-name">MongoDB</p>
        </div>
        <div className="skills-img-container">
          <img src={git} alt="Git" />
          <p className="skills-name">Git</p>
        </div>
      </div>

      {/*
       * ──────────────────────────────────────────────────────────────────
       * ORIGINAL WEB DEVELOPMENT SKILLS — preserved for easy restoration
       * ──────────────────────────────────────────────────────────────────
       * Imports needed to restore:
       *   import html from "../../assets/programing-language/html5-logo-31813.png";
       *   import css from "../../assets/programing-language/css.png";
       *   import javascript from "../../assets/programing-language/javascript.png";
       *   import react from "../../assets/programing-language/react.png";
       *   import node from "../../assets/programing-language/node.png";
       *   import express from "../../assets/programing-language/express.png";
       *   import djangorestframework from "../../assets/programing-language/django.png";
       *   import java from "../../assets/programing-language/java.png";
       *
       * JSX to restore (place inside skills-img-wrapper):
       *   <div className="skills-img-container"><img src={html}/><p className="skills-name">HTML</p></div>
       *   <div className="skills-img-container"><img src={css}/><p className="skills-name">CSS</p></div>
       *   <div className="skills-img-container"><img src={javascript}/><p className="skills-name">JavaScript</p></div>
       *   <div className="skills-img-container"><img src={react}/><p className="skills-name">React</p></div>
       *   <div className="skills-img-container"><img src={node}/><p className="skills-name">Node JS</p></div>
       *   <div className="skills-img-container"><img src={express}/><p className="skills-name">Express JS</p></div>
       *   <div className="skills-img-container"><img src={djangorestframework}/><p className="skills-name">Django REST Framework</p></div>
       *   <div className="skills-img-container"><img src={java}/><p className="skills-name">Java</p></div>
       * ──────────────────────────────────────────────────────────────────
       */}
    </div>
  );
};

export default Skills;
