// src/components/HeroSection.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <Container className="text-center hero-content">
        <h1>Discovering New Solutions Together</h1>
        <p>The complex challenges facing our world today require collaboration, diverse perspectives, and new ways of thinking.</p>
        <Button variant="primary" href="#research-news">Explore Research</Button>
      </Container>
    </div>
  );
}

export default HeroSection;