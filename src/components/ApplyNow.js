import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function ApplyNow() {
  return (
    <section id="apply" className="py-5">
      <Container>
        <h2>Apply Now</h2>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group controlId="formResume">
            <Form.Label>Resume</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group controlId="formCoverLetter">
            <Form.Label>Cover Letter</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Write your cover letter" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </section>
  );
}

export default ApplyNow;