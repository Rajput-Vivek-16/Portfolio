import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Positions from './components/Positions';
import Achievements from './components/Achievements';
import Activities from './components/Activities';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <Header />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="achievements">
        <Achievements />
        <Positions />
        <Activities />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;