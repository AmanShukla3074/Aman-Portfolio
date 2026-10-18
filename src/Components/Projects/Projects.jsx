import React from 'react'
import './Projects.css'
import { FiGithub } from 'react-icons/fi'
import { FaChrome } from 'react-icons/fa'
import { MdScience } from 'react-icons/md'

const Projects = () => {
  return (
    <div id='projects' className='projects'>
      <h1 className="projects-header">Projects</h1>
      <div className="projects-container">

        {/* ── AI Project 1: Animal Detection (Ongoing Research) ── */}
        <div className="project project-featured">
          <div className="project-head">
            <p className="project-name">
              Animal Detection in Harvesting
            </p>
            <div className="project-links">
              <a
                href="https://github.com/AmanShukla3074/Edge-Deployed_Infrared_-IR-_Detection_of_Occluded_Wildlife_During_Agricultural_Harvesting"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Repository"
              >
                <FiGithub className='project-link' />
              </a>
            </div>
          </div>
          <div className="project-badge">Ongoing Research</div>
          <div className="project-details">
            Developing a computer-vision-based system to detect animals concealed within
            agricultural crops during harvesting. Building a synthetic custom dataset
            inspired from real thermal images. Investigating visible and
            infrared/thermal imagery for animal detection under dense crop conditions.
          </div>
          <div className="project-techs">
            <p className="project-tech">Python</p>
            <p className="project-tech">Computer Vision</p>
            <p className="project-tech">Deep Learning</p>
            <p className="project-tech">Image Processing</p>
          </div>
        </div>

        {/* ── AI Project 2: Bird Species Classification ── */}
        <div className="project">
          <div className="project-head">
            <p className="project-name">Artimis Bird Classifier</p>
            <div className="project-links">
              <a
                href="https://github.com/AmanShukla3074/Artimis_bird_classifier"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Repository"
              >
                <FiGithub className='project-link' />
              </a>
            </div>
          </div>
          <div className="project-details">
            Developed a bird-image classification project using a self-collected
            dataset. Performed image preprocessing and dataset preparation for
            multi-class classification tasks.
          </div>
          <div className="project-techs">
            <p className="project-tech">Python</p>
            <p className="project-tech">Machine Learning</p>
            <p className="project-tech">Computer Vision</p>
            <p className="project-tech">Image Classification</p>
          </div>
        </div>

        {/* ── Web Dev Project 1: E-Shop ── */}
        <div className="project">
          <div className="project-head">
            <p className="project-name">E-Shop</p>
            <div className="project-links">
              <a href="https://eshop-aman.vercel.app/" target="_blank" rel="noopener noreferrer" title="Live Demo">
                <FaChrome className='project-link' />
              </a>
              <a href="https://github.com/AmanShukla3074/Ecommerce-MERN" target="_blank" rel="noopener noreferrer" title="GitHub Repository">
                <FiGithub className='project-link' />
              </a>
            </div>
          </div>
          <div className="project-details">
            Developed a full-featured e-commerce platform using the MERN stack.
            Implemented secure user authentication with JWT tokens and OTP verification.
            Integrated Razorpay payment gateway for secure transactions.
          </div>
          <div className="project-techs">
            <p className="project-tech">React</p>
            <p className="project-tech">Node JS</p>
            <p className="project-tech">Express JS</p>
            <p className="project-tech">MongoDB</p>
            <p className="project-tech">Redux</p>
          </div>
        </div>

        {/* ── Web Dev Project 2: UKA-Super ── */}
        <div className="project">
          <div className="project-head">
            <p className="project-name">UKA-Super Website</p>
            <div className="project-links">
              <a
                href="https://github.com/AmanShukla3074/UKA-SuperApp-BCA-FinalYear-Projet"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Repository"
              >
                <FiGithub className='project-link' />
              </a>
            </div>
          </div>
          <div className="project-details">
            UKA is a comprehensive platform offering e-commerce, movie ticket
            booking, and music streaming. Developed using Django REST Framework
            as the backend and React for the front-end.
          </div>
          <div className="project-techs">
            <p className="project-tech">React</p>
            <p className="project-tech">Django REST Framework</p>
            <p className="project-tech">MySQL</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects
