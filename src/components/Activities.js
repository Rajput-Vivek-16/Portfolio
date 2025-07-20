import React from 'react';
import './Activities.css';

const Activities = () => {
  const activities = [
    {
      icon: "🏆",
      text: "Participated in SIH 2024, built a disaster-response platform with AI chatbot."
    },
    {
      icon: "🧑‍🏫",
      text: "JEE Mentor at Physics Wallah; mentored 500+ students [May – Oct 2024]"
    },
    {
      icon: "🎓",
      text: "Volunteered at IITGN's Convocation, Nanomaterials Workshop, and Curiosity Carnival."
    }
  ];

  return (
    <div className="section activities-section">
      <h2>Extra-Curricular Activities</h2>
      <div className="activities-grid">
        {activities.map((activity, index) => (
          <div key={index} className="activity-item">
            <div className="activity-icon">{activity.icon}</div>
            <p>{activity.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;