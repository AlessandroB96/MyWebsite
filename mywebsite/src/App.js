import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
    <Nav />
    <Main />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Contact />
    </div>
  );
}

export default App;
