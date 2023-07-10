import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"
export default function NavBar() {
  return (
    <div className='navbar-container'>
      <div className='item-list'>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/skills">Skills</Link></li>
      <li><Link to="/Contactme">ContactMe</Link></li>
      
    </ul>
    </div>
  
    </div>
  )
}
