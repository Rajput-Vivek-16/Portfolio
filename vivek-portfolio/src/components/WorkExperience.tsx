import React from 'react';

const WorkExperience: React.FC = () => {
  return (
    <section className="work-experience">
      <h3>Work Experience</h3>
      <ul>
        <li>
          <strong>Research Intern | IIT Gandhinagar [May 2025 – Present]</strong><br />
          <ul>
            <li>◦ Designed and improved a double-slope solar still setup (20L capacity) in collaboration with a teammate; iteratively modified the system based on experimental observations to achieve 100°C basin water temperature.</li>
            <li>◦ Achieved a maximum water temperature of 60.8°C with 85 ppm TDS in solar distillation experiments; conducted multiple experimental trials and iteratively improved the setup based on observations.</li>
            <li>◦ Made multiple versions of MATLAB code through literature review to compute optimal tilt and azimuth angles for solar vacuum tube orientation.</li>
            <li>◦ Attempted to model the system to estimate daily water purification based on location and date, but faced challenges due to reliance on experimental data such as solar radiation and temperature.</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default WorkExperience;