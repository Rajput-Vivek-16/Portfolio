import React from 'react';
import './Positions.css';

const Positions = () => {
  const positions = [
    {
      title: "Technical Officer, SEC, IITGN",
      duration: "[Jan 2025 – Present]",
      description: "Built secure MongoDB-backed voting system and managed election-day tech."
    },
    {
      title: "Senior Tech Team, EII, IITGN",
      duration: "[Sep 2024 – Apr 2025]",
      description: "Developed E-Summit website and team section UI."
    }
  ];

  return (
    <div className="section positions-section">
      <h2>Positions of Responsibility</h2>
      <div className="positions-list">
        {positions.map((position, index) => (
          <div key={index} className="position-item">
            <div className="position-header">
              <h3>{position.title}</h3>
              <span className="position-duration">{position.duration}</span>
            </div>
            <p className="position-description">{position.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Positions;