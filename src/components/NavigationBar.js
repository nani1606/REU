// src/components/NavigationBar.js
import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">University Research</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Research & Innovation" id="research-dropdown">
              <NavDropdown.Item href="#research-news">Research News</NavDropdown.Item>
              <NavDropdown.Item href="#faculty-experts">Faculty Experts</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#innovation">Innovation at University</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#life-at-university">Life at University</Nav.Link>
            <Nav.Link href="#admissions-aid">Admissions & Aid</Nav.Link>
            <Nav.Link href="#about-university">About University</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#apply">Apply</Nav.Link>
            <Nav.Link href="#visit">Visit</Nav.Link>
            <Nav.Link href="#give">Give</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;