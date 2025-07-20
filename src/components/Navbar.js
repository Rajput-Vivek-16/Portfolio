import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="brand-symbol">@</span>Vivek
        </div>
        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <button 
            className="navbar-item" 
            onClick={() => scrollToSection('home')}
          >
            Home
          </button>
          <button 
            className="navbar-item" 
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button 
            className="navbar-item" 
            onClick={() => scrollToSection('experience')}
          >
            Experience
          </button>
          <button 
            className="navbar-item" 
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
          <button 
            className="navbar-item" 
            onClick={() => scrollToSection('achievements')}
          >
            Achievements
          </button>
          <button 
            className="navbar-item" 
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;