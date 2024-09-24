import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row>
          <Col>
            <h2>About ABC University</h2>
            <p>
              ABC University is a world-renowned institution known for its dedication to research and innovation. With a rich history of academic excellence, we are committed to providing students and researchers from around the globe with unparalleled opportunities to advance their knowledge and contribute to groundbreaking discoveries.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;