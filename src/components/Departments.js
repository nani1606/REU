import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Departments() {
  return (
    <section id="departments" className="py-5">
      <Container>
        <Row>
          <Col>
            <h2>Research Opportunities by Department</h2>
            <p>
              Explore the diverse range of departments at ABC University where groundbreaking research is taking place. Whether you're interested in computer science, biology, or physics, ABC University has a place for you.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Departments;