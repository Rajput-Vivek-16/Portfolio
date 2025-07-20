import React from 'react';
import './Portfolio.css';
import Header from './Header';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import PositionsOfResponsibility from './PositionsOfResponsibility';
import Achievements from './Achievements';
import ExtraCurricularActivities from './ExtraCurricularActivities';

const Portfolio: React.FC = () => {
  return (
    <div className="portfolio">
      <Header />
      <hr />
      <WorkExperience />
      <Projects />
      <PositionsOfResponsibility />
      <Achievements />
      <ExtraCurricularActivities />
      <hr />
      <p>Feel free to connect or collaborate with me!</p>
    </div>
  );
};

export default Portfolio;