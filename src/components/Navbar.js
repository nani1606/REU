import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    alert(`Search for: ${searchQuery}`);
    // Implement search functionality here
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">ABC University Research</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="#about">About</Nav.Link>
          <Nav.Link as={Link} to="#lead">Lead Professor</Nav.Link>
          <Nav.Link as={Link} to="#departments">Departments</Nav.Link>
          <Nav.Link as={Link} to="#explore">Explore</Nav.Link>
          <Nav.Link as={Link} to="#apply">Apply Now</Nav.Link>
        </Nav>
        <Form inline className="ml-auto">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button variant="outline-success" onClick={handleSearch}>Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;