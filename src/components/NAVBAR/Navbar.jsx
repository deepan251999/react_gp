import React from 'react'
import './navbar.css';
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className='nav_container_main'>
    <nav className='navbar_container'>
        <h3>GP<span style={{color:"#ffc451"}}>.</span></h3>
        <ul>
           <Link to="/" className='home'>
           <li>Home</li>
           </Link>
           <Link to="about" className='about'>
           <li>About</li>
           </Link>
           <Link to="service" className='service'>
           <li>Services</li>
           </Link>
           <Link to="portfolio" className='portfolio'>
           <li>Portfolio</li>
           </Link>
           <Link to="team" className='team'>
           <li>Team</li>
           </Link>
           <Link to="dropDown" className='dropDown'>
           <li>DropDown</li>
           </Link>
           <Link to="contact" className='contact'>
           <li>Contact</li>
           </Link>
           <Link to="getstart" className='getstart'>
            <li>Get Started</li>
           </Link>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar;