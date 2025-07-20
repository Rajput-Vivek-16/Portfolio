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
          
          <div className="academic-details">
            <h3>Academic Details</h3>
            <ul>
              <li><strong>B.Tech, IIT Gandhinagar (2023-Present):</strong> 8.5 CPI</li>
              <li><strong>Class XII, Riverdale Academy, Surat (2022-2023):</strong> 73.5%</li>
              <li><strong>Class X, Good Shepherd High School, Surat (2020-2021):</strong> 92%</li>
            </ul>
          </div>

          <div className="quick-links">
            <button 
              className="button primary" 
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
              About Me
            </button>
            <a href="https://drive.google.com/file/d/1xhVtNKA13tUvikCS99Rl_3p2jB-O4hdj/view" 
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
