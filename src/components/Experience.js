import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="section experience-section">
      <h2>Work Experience</h2>
      <div className="experience-item">
        <div className="experience-header">
          <h3>Research Intern</h3>
          <div className="experience-meta">
            <span className="company">IIT Gandhinagar</span>
            <span className="duration">[May 2025 – Present]</span>
          </div>
        </div>
        <ul className="experience-details">
          <li>
            Designed and improved a double-slope solar still setup (20L capacity) in collaboration with a teammate; 
            iteratively modified the system based on experimental observations to achieve 100°C basin water temperature.
          </li>
          <li>
            Achieved a maximum water temperature of 60.8°C with 85 ppm TDS in solar distillation experiments; 
            conducted multiple experimental trials and iteratively improved the setup based on observations.
          </li>
          <li>
            Made multiple versions of MATLAB code through literature review to compute optimal tilt and azimuth 
            angles for solar vacuum tube orientation.
          </li>
          <li>
            Attempted to model the system to estimate daily water purification based on location and date, 
            but faced challenges due to reliance on experimental data such as solar radiation and temperature.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;