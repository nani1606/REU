import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

// Example data (replace with actual data)
const departments = {
  A: [
    {
      name: 'Dr. John Doe',
      image: 'https://www.shutterstock.com/image-vector/pictogram-head-question-mark-john-260nw-171638717.jpg',
      quote: 'My research focuses on artificial intelligence and machine learning...',
      departments: ['A', 'B']
    },
    // other professors
  ],
  B: [
    {
      name: 'Dr. Jane Roe',
      image: 'https://www.shutterstock.com/image-vector/pictogram-head-question-mark-john-260nw-171638717.jpg',
      quote: 'I am passionate about understanding the complexities of human genetics...',
      departments: ['B']
    },
    // other professors
  ],
  // other departments
};

function ExploreDepartments() {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedProfessor, setSelectedProfessor] = useState(null);

  return (
    <section id="explore" className="py-5 bg-light">
      <Container>
        <h2>Explore the Departments</h2>
        <Row className="mb-4">
          {Object.keys(departments).map(department => (
            <Col md={3} key={department} className="mb-4 department-col">
              <Card onClick={() => setSelectedDepartment(department)} className="text-center clickable">
                <Card.Body>
                  <Card.Title>Department {department}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {selectedDepartment && (
          <>
            <Row className="professor-list">
              {departments[selectedDepartment].map((professor, index) => (
                <Col md={3} key={index} className="mb-4">
                  <Card className="text-center clickable">
                    <Card.Img
                      variant="top"
                      src={professor.image}
                      className="circle-image"
                      onClick={() => setSelectedProfessor(index)}
                    />
                    <Card.Body>
                      <Card.Title>{professor.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            {selectedProfessor !== null && (
              <Row>
                <Col>
                  <Card className="mb-4">
                    <Card.Body>
                      <Card.Title>{departments[selectedDepartment][selectedProfessor].name}</Card.Title>
                      <Card.Text>{departments[selectedDepartment][selectedProfessor].quote}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            )}
          </>
        )}
      </Container>
    </section>
  );
}

export default ExploreDepartments;