import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/AMAN-Nav-Logo-NoBG.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { IoCloseOutline } from 'react-icons/io5'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {

  const [menuOpen,setMenuOpen]=useState(false);

  return (
    <div className='navbar'>
      <div className="left">
        <img src={logo}/>
      </div>
      <div className="right">
        <ul className={`navlinks ${menuOpen?'navlinks-open':''}`}>
            {menuOpen && <IoCloseOutline onClick={()=>{setMenuOpen(false)}} className='menu-icons-close'/>}
            <li className='navlinks-li' onClick={()=>{setMenuOpen(false)}}> <AnchorLink className='anchor-link' offset={120} href='#home'> Home </AnchorLink></li>
            <li className='navlinks-li' onClick={()=>{setMenuOpen(false)}}> <AnchorLink className='anchor-link' offset={120} href='#about'> About Me </AnchorLink></li>
            <li className='navlinks-li' onClick={()=>{setMenuOpen(false)}}> <AnchorLink className='anchor-link' offset={120} href='#skills'> Skills </AnchorLink></li>
            <li className='navlinks-li' onClick={()=>{setMenuOpen(false)}}> <AnchorLink className='anchor-link' offset={120} href='#projects'> Projects </AnchorLink></li>
            <li className='navlinks-li' onClick={()=>{setMenuOpen(false)}}> <AnchorLink className='anchor-link' offset={120} href='#contact'> Contact Me </AnchorLink></li>
            <li className='navbar-resume'>Resume</li>
        </ul>
            {!menuOpen && < GiHamburgerMenu onClick={()=>{setMenuOpen(true)}}  className='menu-icons-open'/>}
      </div>
    </div>
  )
}

export default Navbar
