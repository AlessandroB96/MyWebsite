import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Card from './components/Card';


function App() {
  
  const [currentPage, setCurrentPage] = useState('Main');
  
  const renderPage = () => {
  
    if(currentPage === 'Main') {
      return <Main />;
    }
    if(currentPage === 'about me') {
      return <About />;
    }
    if(currentPage === 'Skills') {
      return <Skills />;
    }
    if(currentPage === 'Experience') {
      return <Experience />;
    }
    if(currentPage === 'Projects') {
      return <Card />;
    }
    return <Contact />;
  
  };

  const handlePageChange = (page) => setCurrentPage(page);
  
  return (
    <div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
    </div>
  );
}

export default App;
