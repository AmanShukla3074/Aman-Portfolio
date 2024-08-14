import React from 'react'
import './Footer.css'
import { CiInstagram, CiLinkedin, CiMail } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <div className='footer'>
      <p className="footer-name">Aman Shukla</p>
      <div className="footer-social-links">
        <a href="https://www.linkedin.com/in/aman-shukla3074" target="_blank" rel="noopener noreferrer">
        <CiLinkedin className="social-icons" onClick={()=>{navigate()}}/>
        </a>
        <a href="https://github.com/AmanShukla3074" target="_blank" rel="noopener noreferrer">
        <FiGithub className="social-icons" onClick={()=>{navigate()}}/>
        </a>
        <a href="mailto:amanshukla30704@gmail.com" target="_blank" rel="noopener noreferrer">
        <CiMail className="social-icons" onClick={()=>{navigate()}}/>
        </a>
        <a href="https://www.instagram.com/aman_shukla_3074/" target="_blank" rel="noopener noreferrer">
        <CiInstagram className="social-icons" onClick={()=>{navigate()}}/>
        </a>
        </div>
    </div>
  )
}

export default Footer
