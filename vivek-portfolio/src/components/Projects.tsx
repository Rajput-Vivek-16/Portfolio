import React from 'react';

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h3>Projects</h3>
      <ul>
        <li>
          <strong>Pressure-Driven Water Purifier [Dec 2024 – Apr 2025]</strong><br />
          Designed an electricity-free portable purifier targeting disaster zones. Achieved 60.2% arsenic and 92.5% dye removal.<br />
          <a href="https://drive.google.com/file/d/1Jxf995kEH8P_aYu-2pMo7aGdfzOOPI45/view" target="_blank" rel="noopener noreferrer">[Poster]</a>
        </li>
        <li>
          <strong>Heat Transfer in an Agitated Vessel [Jan – Apr 2025]</strong><br />
          Analyzed heat transfer with varying RPM and demonstrated 50% improvement using Google Colab.<br />
          <a href="https://drive.google.com/file/d/1qQmll2uqGeAE4O08xExXte8FdPjkf58I/view" target="_blank" rel="noopener noreferrer">[Report]</a>
        </li>
        <li>
          <strong>CFD Simulation of Laminar Flow [Mar 2025]</strong><br />
          Simulated flow of water, ethanol, and mercury in ANSYS Fluent at Re = 1000 and studied convergence and velocity profiles.<br />
          <a href="https://drive.google.com/file/d/15oSdfXY2iNK8QRfm9rLbq_J4oNDaN1q1/view" target="_blank" rel="noopener noreferrer">[Report]</a>
        </li>
      </ul>
    </section>
  );
};

export default Projects;