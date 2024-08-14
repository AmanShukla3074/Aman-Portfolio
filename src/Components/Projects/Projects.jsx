import React from 'react'
import './Projects.css'
import { FiGithub } from 'react-icons/fi'
import { FaChrome } from 'react-icons/fa'

const Projects = () => {

  return (
    <div id='projects' className='projects'>
      <h1 className="projects-header">Projects</h1>
      <div className="projects-container">
        <div className="project">
            <div className="project-head">
                <p className="project-name">E-Shop</p>
                <div className="project-links">
                <a href="https://eshop-aman.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <FaChrome  className='project-link'/>
                </a>
                <a href="https://github.com/AmanShukla3074/Ecommerce-MERN" target="_blank" rel="noopener noreferrer">
                    <FiGithub className='project-link'/>
                </a>
                </div>
            </div>
            <div className="project-details">
            Developed a full-featured e-commerce platform using the MERN stack.Implemented secure user authentication and authorization using JWT tokens and OTP verification for registration and login.Integrated a secure payment gateway using Razorpay API, allowing users to complete transactions safely and efficiently.
            </div>
            <div className="project-techs">
                <p className="project-tech">React</p>
                <p className="project-tech">Node JS</p>
                <p className="project-tech">Express JS</p>
                <p className="project-tech">MongoDB</p>
                <p className="project-tech">Redux</p>
            </div>
        </div>
        <div className="project">
            <div className="project-head">
                <p className="project-name">UKA-Super Website</p>
                <div className="project-links">
                <a href="https://github.com/AmanShukla3074/UKA-SuperApp-BCA-FinalYear-Projet" target="_blank" rel="noopener noreferrer">
                    <FiGithub className='project-link'/>
                </a>
                </div>
            </div>
            <div className="project-details">
            UKA is a comprehensive platform offering a diverse range of services, including e-commerce, movie ticket booking, and music streaming.Developed a responsive web application utilizing Django REST Framework as the backend and React for the front-end, creating a seamless and dynamic user experience.Utilized the layout editor to create a UI for the application in order to allow different scenes to interact with each other.

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
