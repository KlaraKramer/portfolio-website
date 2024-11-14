import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1><Link to="/">Klara Krämer</Link></h1>
      </div>
      <div className="navbar-center">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to ="https://www.linkedin.com/in/klara-krämer/" target="_blank">LinkedIn</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;