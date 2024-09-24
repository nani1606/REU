import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function LeadProfessor() {
  return (
    <section id="lead-professor" className="py-5 bg-light">
      <Container>
        <Row>
          <Col>
            <h2>Meet Our Lead Professor</h2>
            <p>
              Dr. Jane Smith, a distinguished professor at ABC University, leads the initiative to offer research opportunities to students from around the world. With decades of experience and numerous accolades, Dr. Smith is dedicated to mentoring the next generation of innovators.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default LeadProfessor;