// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Slideshow from './components/Slideshow';
import ResearcherHighlight from './components/ResearcherHighlight';
import Opportunities from './components/Opportunities';
import ApplyNow from './components/ApplyNow';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slideshow />
      <ResearcherHighlight />
      <Opportunities />
      <ApplyNow />
      <About />
      <Footer />
    </div>
  );
}

export default App;