import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import LeadProfessor from './components/LeadProfessor';
import Departments from './components/Departments';
import ExploreDepartments from './components/ExploreDepartments';
import ApplyNow from './components/ApplyNow';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Navbar setSearchQuery={setSearchQuery} />
      <div className="section-container">
        <img src="path/to/university-image.jpg" alt="University" className="section-image" />
        <About />
      </div>
      <div className="section-container">
        <img src="path/to/professor-image.jpg" alt="Lead Professor" className="section-image" />
        <LeadProfessor />
      </div>
      <div className="section-container">
        <img src="path/to/departments-image.jpg" alt="Departments" className="section-image" />
        <Departments />
      </div>
      <div className="section-container">
        <img src="path/to/explore-image.jpg" alt="Explore Departments" className="section-image" />
        <ExploreDepartments />
      </div>
      <ApplyNow />
      <SearchResults query={searchQuery} />
      <Footer />
    </>
  );
}

export default App;
