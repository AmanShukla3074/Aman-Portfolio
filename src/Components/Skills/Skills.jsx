import React from "react";
import "./Skills.css";
import html from "../../assets/programing-language/html5-logo-31813.png";
// import html from "../../assets/programing-language/html.png";
import css from "../../assets/programing-language/css.png";
import javascript from "../../assets/programing-language/javascript.png";
import react from "../../assets/programing-language/react.png";
import node from "../../assets/programing-language/node.png";
import express from "../../assets/programing-language/express.png";
import mongo from "../../assets/programing-language/mongo.png";
import sql from "../../assets/programing-language/sql.png";
import java from "../../assets/programing-language/java.png";
import python from "../../assets/programing-language/python.png";
import djangorestframework from "../../assets/programing-language/django.png";
import git from "../../assets/programing-language/git.png";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h1 className="skills-header">Skills</h1>
      <div className="skills-img-wrapper">
        <div className="skills-img-container">
          <img src={html} />
        <p className="skills-name">HTML</p>
        </div>

      
      <div className="skills-img-container">
        <img src={css} />
        <p className="skills-name">CSS</p>
      </div>
      <div className="skills-img-container">
        <img src={javascript} />
        <p className="skills-name">JavaScript</p>
      </div>
      <div className="skills-img-container">
        <img src={react} />
        <p className="skills-name">React</p>
      </div>
      <div className="skills-img-container">
        <img src={node} />
        <p className="skills-name">Node JS</p>
      </div>
      <div className="skills-img-container">
        <img src={express} />
        <p className="skills-name">Express JS</p>
      </div>
      <div className="skills-img-container">
        <img src={mongo} />
        <p className="skills-name">MongoDB</p>
      </div>
      <div className="skills-img-container">
        <img src={djangorestframework} />
        <p className="skills-name">Django Rest Framework</p>
      </div>
      <div className="skills-img-container">
        <img src={sql} />
        <p className="skills-name">MySQL</p>
      </div>
      <div className="skills-img-container">
        <img src={java} />
        <p className="skills-name">Java</p>
      </div>
      <div className="skills-img-container">
        <img src={python} />
        <p className="skills-name">Python</p>
      </div>
      <div className="skills-img-container">
        <img src={git} />
        <p className="skills-name">Git</p>
      </div>
    </div>
    </div>
  );
};

export default Skills;
