import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-content">
        <h3>Let's Connect!</h3>
        <p>Feel free to connect or collaborate with me!</p>
        <div className="footer-links">
          <a href="mailto:rajput.vivek@iitgn.ac.in" className="footer-button">
            Get in Touch
          </a>
          <a href="https://drive.google.com/file/d/1xhVtNKA13tUvikCS99Rl_3p2jB-O4hdj/view" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="footer-button secondary">
            Download Resume
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Vivek Rajput. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;