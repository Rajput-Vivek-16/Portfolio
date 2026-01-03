import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header-section">
      <div className="header-content">
        <div className="profile-image">
          <img src={process.env.PUBLIC_URL + "/Vivek.png"} width="250" alt="Vivek Rajput" />
        </div>
        <div className="header-text">
      
          <h2>I'm <span className="highlight">Vivek</span> Rajput</h2>
          <p className="intro-text">
             <strong>Junior Undergraduate</strong> pursuing a major in <strong>Chemical Engineering</strong> with a minor in <strong>Computer Science and Engineering</strong> at <strong>IIT Gandhinagar</strong>.
          </p>
          

          <div className="quick-links">
            <button 
              className="button primary" 
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
              About Me
            </button>
            <a href="https://drive.google.com/file/d/12FCNaIsbs3hW27JuOF7dLOAx7MdcYej0/view?usp=sharing" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="button secondary">
              View Resume
            </a>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/vivek-rajput-iitgn2ndyear/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
            </a>
            <a href="https://github.com/Rajput-Vivek-16" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
            </a>
            <a href="mailto:rajput.vivek@iitgn.ac.in">
              <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
