// import React and useState, useEffect
import React, { useState, useEffect } from 'react';
// import our CSS
import './index.css';
// import our components
import Nav from './components/Nav';
import About from './components/About';
import Sound from './components/Sound';
import Code from './components/Code';
import Music from './components/Music';
import Contact from './components/Contact';
import Footer from './components/Footer';

// render the main screen
function App() {
  // manage page state
  const [currentPage, setCurrentPage] = useState('about')

  // change title based on selected page
  useEffect(() => {
    switch (currentPage) {
        case 'code':
            document.title = "// Daniel Brackenbury // Code //";
            break;
        case 'sound':
            document.title = "// Daniel Brackenbury // Sound //";
            break;
        case 'music':
            document.title = "// Daniel Brackenbury // Music //";
            break;
        case 'contact':
            document.title = "// Daniel Brackenbury // Contact //";
            break;
        default:
            document.title = "// Daniel Brackenbury //";
    }
  }, [currentPage]);

  return (
    <div className="body-container">
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}></Nav>

      <div className="content-container">
        {currentPage==='about' && <About setCurrentPage={setCurrentPage}></About>}
        {currentPage==='sound' && <Sound></Sound>}
        {currentPage==='code' && <Code></Code>}
        {currentPage==='music' && <Music></Music>}
        {currentPage==='contact' && <Contact></Contact>}
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
