import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="profile-image">
          <img src="/Vivek.png" width="250" alt="Vivek Rajput" />
        </div>
        <div className="header-info">
          <h2>Hello!</h2>
          <p>I am <strong>Vivek Rajput</strong>, a junior undergraduate majoring in <strong>Chemical Engineering</strong> with a minor in <strong>Computer Science and Engineering</strong> at the <strong>Indian Institute of Technology Gandhinagar</strong>.</p>

          <h3>Academic Details</h3>
          <ul>
            <li><strong>B.Tech, IIT Gandhinagar (2023-Present):</strong> 8.5 CPI</li>
            <li><strong>Class XII, Riverdale Academy (2022-2023):</strong> 73.5%</li>
            <li><strong>Class X, Good Shepherd Mission School (2020-2021):</strong> 92%</li>
          </ul>

          <h3>About Me</h3>
          <ul>
            <li>🔬 Research Intern under Prof. Nitin Padhiyar on solar distillation and sustainable water purification.</li>
            <li>⚙️ Interested in <strong>simulation, data modeling, clean tech, and sustainable systems</strong>.</li>
            <li>🌱 Currently learning and applying concepts in <strong>CFD, MATLAB modeling</strong>, and <strong>process design</strong>.</li>
            <li>📫 Contact me: <a href="mailto:rajput.vivek@iitgn.ac.in">rajput.vivek@iitgn.ac.in</a></li>
          </ul>

          <h3>Skills</h3>
          <ul>
            <li><strong>Languages & Libraries:</strong> Python, C, C++, MATLAB, Cantera, NumPy, Pandas, Matplotlib</li>
            <li><strong>Tools:</strong> Simulink, Ansys Fluent, DWSIM, Autodesk Inventor, Polymath</li>
          </ul>

          <h3>Resume</h3>
          <a href="https://drive.google.com/file/d/1xhVtNKA13tUvikCS99Rl_3p2jB-O4hdj/view" target="_blank" rel="noopener noreferrer">Click here to view my resume</a>

          <h3>Connect with Me</h3>
          <p className="social-links">
            <a href="https://www.linkedin.com/in/vivek-rajput-iitgn2ndyear/" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
            </a>
            <a href="https://github.com/Rajput-Vivek-16" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
            </a>
            <a href="mailto:rajput.vivek@iitgn.ac.in">
              <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;