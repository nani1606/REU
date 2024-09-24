// src/components/Achievements.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Achievements.css';

function Achievements() {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Achievements</h2>
      <Row>
        <Col md={4}>
          <div className="achievement-card">
            <h3>Nobel Prize in Physics - 2019</h3>
            <p>Awarded for groundbreaking research in quantum mechanics.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="achievement-card">
            <h3>Pioneer in AI Research</h3>
            <p>Leading advancements in artificial intelligence and machine learning.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="achievement-card">
            <h3>Top-Ranked University</h3>
            <p>Consistently ranked among the top universities for research.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Achievements;