import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Pressure-Driven Water Purifier",
      duration: "[Dec 2024 – Apr 2025]",
      description: "Designed an electricity-free portable purifier targeting disaster zones. Achieved 60.2% arsenic and 92.5% dye removal.",
      link: "https://drive.google.com/file/d/1Jxf995kEH8P_aYu-2pMo7aGdfzOOPI45/view",
      linkText: "Poster"
    },
    {
      title: "Heat Transfer in an Agitated Vessel",
      duration: "[Jan – Apr 2025]",
      description: "Analyzed heat transfer with varying RPM and demonstrated 50% improvement using Google Colab.",
      link: "https://drive.google.com/file/d/1qQmll2uqGeAE4O08xExXte8FdPjkf58I/view",
      linkText: "Report"
    },
    {
      title: "CFD Simulation of Laminar Flow",
      duration: "[Mar 2025]",
      description: "Simulated flow of water, ethanol, and mercury in ANSYS Fluent at Re = 1000 and studied convergence and velocity profiles.",
      link: "https://drive.google.com/file/d/15oSdfXY2iNK8QRfm9rLbq_J4oNDaN1q1/view",
      linkText: "Report"
    }
  ];

  return (
    <div className="section projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <span className="project-duration">{project.duration}</span>
            </div>
            <p className="project-description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              [{project.linkText}]
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;