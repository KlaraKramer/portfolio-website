import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import a CSS file for the navbar-specific styles

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Klara Krämer</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;