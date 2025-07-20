import React from 'react';
import './App.css';
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
      <Header />
      <About />
      <Experience />
      <Projects />
      <Positions />
      <Achievements />
      <Activities />
      <Footer />
    </div>
  );
}

export default App;