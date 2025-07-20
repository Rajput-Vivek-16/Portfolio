import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="section about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-items">
          <div className="about-item">
            <div className="icon">🔬</div>
            <p>Research Intern under Prof. Nitin Padhiyar on solar distillation and sustainable water purification.</p>
          </div>
          <div className="about-item">
            <div className="icon">⚙️</div>
            <p>Interested in <strong>simulation, data modeling, clean tech, and sustainable systems</strong>.</p>
          </div>
          <div className="about-item">
            <div className="icon">🌱</div>
            <p>Currently learning and applying concepts in <strong>CFD, MATLAB modeling</strong>, and <strong>process design</strong>.</p>
          </div>
          <div className="about-item">
            <div className="icon">📫</div>
            <p>Contact me: <a href="mailto:rajput.vivek@iitgn.ac.in">rajput.vivek@iitgn.ac.in</a></p>
          </div>
        </div>
        
        <div className="skills-section">
          <h3>Skills</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>Languages & Libraries</h4>
              <div className="skill-tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">C</span>
                <span className="skill-tag">C++</span>
                <span className="skill-tag">MATLAB</span>
                <span className="skill-tag">Cantera</span>
                <span className="skill-tag">NumPy</span>
                <span className="skill-tag">Pandas</span>
                <span className="skill-tag">Matplotlib</span>
              </div>
            </div>
            <div className="skill-category">
              <h4>Tools</h4>
              <div className="skill-tags">
                <span className="skill-tag">Simulink</span>
                <span className="skill-tag">Ansys Fluent</span>
                <span className="skill-tag">DWSIM</span>
                <span className="skill-tag">Autodesk Inventor</span>
                <span className="skill-tag">Polymath</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;