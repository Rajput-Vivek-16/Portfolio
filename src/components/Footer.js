import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Contact Me</h3>
          <p>Let's connect and collaborate!</p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <a href="mailto:rajput.vivek@iitgn.ac.in">rajput.vivek@iitgn.ac.in</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🏢</span>
              <span>IIT Gandhinagar, Gujarat, India</span>
            </div>
          </div>
        </div>
        
        <div className="footer-actions">
          <a href="mailto:rajput.vivek@iitgn.ac.in" className="footer-button primary">
            Get in Touch
          </a>
          <a href="https://drive.google.com/file/d/1xhVtNKA13tUvikCS99Rl_3p2jB-O4hdj/view" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="footer-button secondary">
            View Resume
          </a>
        </div>
      </div>
      
      <div className="footer-social">
        <div className="social-links">
          <a href="https://www.linkedin.com/in/vivek-rajput-iitgn2ndyear/" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="social-link">
            <span className="social-icon">💼</span>
            LinkedIn
          </a>
          <a href="https://github.com/Rajput-Vivek-16" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="social-link">
            <span className="social-icon">🔗</span>
            GitHub
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