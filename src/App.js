// import React and useState, useEffect
import React, { useState } from 'react';
// import our CSS
import './index.css';
// import our components
import Nav from './components/Nav';
import About from './components/About';
import Sound from './components/Sound';
import Code from './components/Code';
import Music from './components/Music';
import Contact from './components/Contact';

// render the main screen
function App() {
  // manage page state
  const [currentPage, setCurrentPage] = useState('about')

  return (
    <div className="body-container">
      <Nav setCurrentPage={setCurrentPage}></Nav>

      <div className="content-container">
        {currentPage==='about' && <About setCurrentPage={setCurrentPage}></About>}
        {currentPage==='sound' && <Sound></Sound>}
        {currentPage==='code' && <Code></Code>}
        {currentPage==='music' && <Music></Music>}
        {currentPage==='contact' && <Contact></Contact>}
      </div>
    </div>
  );
}

export default App;
