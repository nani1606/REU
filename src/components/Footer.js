import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col md={6}>
            <p>© 2024 ABC University | All Rights Reserved</p>
          </Col>
          <Col md={6} className="text-md-right">
            <p>Contact Us: info@abcuniversity.edu | +123-456-7890</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;