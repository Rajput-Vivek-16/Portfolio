import React from 'react';
import './App.css';
import profileImage from './assets/Vivek.png';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <div className="profile-section">
            <div className="profile-image">
              <img src={profileImage} alt="Vivek Rajput" />
            </div>
            <div className="profile-info">
              <h1>Hello!</h1>
              <p>
                I am <strong>Vivek Rajput</strong>, a junior undergraduate majoring in{' '}
                <strong>Chemical Engineering</strong> with a minor in{' '}
                <strong>Computer Science and Engineering</strong> at the{' '}
                <strong>Indian Institute of Technology Gandhinagar</strong>.
              </p>

              <div className="contact-links">
                <a 
                  href="https://www.linkedin.com/in/vivek-rajput-iitgn2ndyear/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-btn linkedin"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://github.com/Rajput-Vivek-16" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-btn github"
                >
                  GitHub
                </a>
                <a 
                  href="mailto:rajput.vivek@iitgn.ac.in"
                  className="contact-btn email"
                >
                  Email
                </a>
                <a 
                  href="https://drive.google.com/file/d/1xhVtNKA13tUvikCS99Rl_3p2jB-O4hdj/view" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-btn resume"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className="main-content">
          <section className="section">
            <h2>Academic Details</h2>
            <div className="academic-grid">
              <div className="academic-item">
                <h3>B.Tech, IIT Gandhinagar (2023-Present)</h3>
                <p>8.5 CPI</p>
              </div>
              <div className="academic-item">
                <h3>Class XII, Riverdale Academy (2022-2023)</h3>
                <p>73.5%</p>
              </div>
              <div className="academic-item">
                <h3>Class X, Good Shepherd Mission School (2020-2021)</h3>
                <p>92%</p>
              </div>
            </div>
          </section>

          <section className="section">
            <h2>About Me</h2>
            <div className="about-grid">
              <div className="about-item">
                <span className="icon">🔬</span>
                <p>Research Intern under Prof. Nitin Padhiyar on solar distillation and sustainable water purification.</p>
              </div>
              <div className="about-item">
                <span className="icon">⚙️</span>
                <p>Interested in <strong>simulation, data modeling, clean tech, and sustainable systems</strong>.</p>
              </div>
              <div className="about-item">
                <span className="icon">🌱</span>
                <p>Currently learning and applying concepts in <strong>CFD, MATLAB modeling</strong>, and <strong>process design</strong>.</p>
              </div>
              <div className="about-item">
                <span className="icon">📫</span>
                <p>Contact me: <a href="mailto:rajput.vivek@iitgn.ac.in">rajput.vivek@iitgn.ac.in</a></p>
              </div>
            </div>
          </section>

          <section className="section">
            <h2>Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Languages & Libraries</h3>
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
                <h3>Tools</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Simulink</span>
                  <span className="skill-tag">Ansys Fluent</span>
                  <span className="skill-tag">DWSIM</span>
                  <span className="skill-tag">Autodesk Inventor</span>
                  <span className="skill-tag">Polymath</span>
                </div>
              </div>
            </div>
          </section>

          <section className="section">
            <h2>Work Experience</h2>
            <div className="experience-item">
              <h3>Research Intern | IIT Gandhinagar [May 2025 – Present]</h3>
              <ul>
                <li>◦ Designed and improved a double-slope solar still setup (20L capacity) in collaboration with a teammate; iteratively modified the system based on experimental observations to achieve 100°C basin water temperature.</li>
                <li>◦ Achieved a maximum water temperature of 60.8°C with 85 ppm TDS in solar distillation experiments; conducted multiple experimental trials and iteratively improved the setup based on observations.</li>
                <li>◦ Made multiple versions of MATLAB code through literature review to compute optimal tilt and azimuth angles for solar vacuum tube orientation.</li>
                <li>◦ Attempted to model the system to estimate daily water purification based on location and date, but faced challenges due to reliance on experimental data such as solar radiation and temperature.</li>
              </ul>
            </div>
          </section>

          <section className="section">
            <h2>Projects</h2>
            <div className="projects-grid">
              <div className="project-item">
                <h3>Pressure-Driven Water Purifier [Dec 2024 – Apr 2025]</h3>
                <p>Designed an electricity-free portable purifier targeting disaster zones. Achieved 60.2% arsenic and 92.5% dye removal.</p>
                <a href="https://drive.google.com/file/d/1Jxf995kEH8P_aYu-2pMo7aGdfzOOPI45/view" target="_blank" rel="noopener noreferrer" className="project-link">[Poster]</a>
              </div>
              <div className="project-item">
                <h3>Heat Transfer in an Agitated Vessel [Jan – Apr 2025]</h3>
                <p>Analyzed heat transfer with varying RPM and demonstrated 50% improvement using Google Colab.</p>
                <a href="https://drive.google.com/file/d/1qQmll2uqGeAE4O08xExXte8FdPjkf58I/view" target="_blank" rel="noopener noreferrer" className="project-link">[Report]</a>
              </div>
              <div className="project-item">
                <h3>CFD Simulation of Laminar Flow [Mar 2025]</h3>
                <p>Simulated flow of water, ethanol, and mercury in ANSYS Fluent at Re = 1000 and studied convergence and velocity profiles.</p>
                <a href="https://drive.google.com/file/d/15oSdfXY2iNK8QRfm9rLbq_J4oNDaN1q1/view" target="_blank" rel="noopener noreferrer" className="project-link">[Report]</a>
              </div>
            </div>
          </section>

          <section className="section">
            <h2>Positions of Responsibility</h2>
            <div className="responsibility-grid">
              <div className="responsibility-item">
                <h3>Technical Officer, SEC, IITGN [Jan 2025 – Present]</h3>
                <p>Built secure MongoDB-backed voting system and managed election-day tech.</p>
              </div>
              <div className="responsibility-item">
                <h3>Senior Tech Team, EII, IITGN [Sep 2024 – Apr 2025]</h3>
                <p>Developed E-Summit website and team section UI.</p>
              </div>
            </div>
          </section>

          <section className="section">
            <h2>Achievements</h2>
            <div className="achievement-item">
              <h3>Yuva Unstoppable Scholar</h3>
              <p>Selected based on academic merit and interview. [Jun 2022 – Present]</p>
            </div>
          </section>

          <section className="section">
            <h2>Extra-Curricular Activities</h2>
            <div className="activities-grid">
              <div className="activity-item">
                <span className="icon">🏆</span>
                <p>Participated in SIH 2024, built a disaster-response platform with AI chatbot.</p>
              </div>
              <div className="activity-item">
                <span className="icon">🧑‍🏫</span>
                <p>JEE Mentor at Physics Wallah; mentored 500+ students [May – Oct 2024]</p>
              </div>
              <div className="activity-item">
                <span className="icon">🎓</span>
                <p>Volunteered at IITGN's Convocation, Nanomaterials Workshop, and Curiosity Carnival.</p>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <p>Feel free to connect or collaborate with me!</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
