import React, { useState } from 'react';
import Nav from './components/Nav';
import Main from './components/Main';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Card from './components/Card';
import Footer from './components/Footer';
import Resume from './components/Resume';


function App() {
  
  const [currentPage, setCurrentPage] = useState('Main');
  
  const renderPage = () => {
  
    if(currentPage === 'Main') {
      return <Main />
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
    if(currentPage === 'Resume') {
      return <Resume />;
    }
    if(currentPage === 'Projects') {
      return <Card />;
    }
    return <Contact />;
  
  };

  const handlePageChange = (page) => setCurrentPage(page);

  const MainPage = currentPage === 'Main';
  
  return (
    <div>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}

        {!MainPage && (
        <Footer />
        )}
    </div>
  );
}

export default App;
