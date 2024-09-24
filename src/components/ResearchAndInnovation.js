// src/components/ResearchAndInnovation.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ResearchAndInnovation() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <h2>New discoveries, every day.</h2>
          <p>Read the latest research news and meet our renowned faculty experts.</p>
          <ul>
            <li><a href="#research-news">Read the latest WashU research news</a></li>
            <li><a href="#faculty-experts">Meet our renowned faculty experts</a></li>
          </ul>
        </Col>
        <Col md={6}>
          <h2>Supporting world-class research.</h2>
          <p>WashU supports research that empowers our community to drive change in our region and our world.</p>
          <ul>
            <li><a href="#research-funding">Research funding</a></li>
            <li><a href="#faculty-resources">Faculty resources for research</a></li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default ResearchAndInnovation;