import React from 'react';
import './Achievements.css';

const Achievements = () => {
  return (
    <div className="section achievements-section">
      <h2>Achievements</h2>
      <div className="achievement-item">
        <div className="achievement-icon">🏆</div>
        <div className="achievement-content">
          <h3>Yuva Unstoppable Scholar</h3>
          <p>Selected based on academic merit and interview. [Jun 2022 – Present]</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;