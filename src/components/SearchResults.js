import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const mockData = [
  { title: 'Research in AI', description: 'Exploring new frontiers in artificial intelligence.' },
  { title: 'Genetics and Health', description: 'Understanding the impact of genetics on health.' },
  // Add more mock data or fetch from your data source
];

function SearchResults({ query }) {
  const [results] = useState(mockData.filter(item => item.title.toLowerCase().includes(query.toLowerCase())));

  return (
    <section id="search-results" className="py-5">
      <Container>
        <h2>Search Results</h2>
        <Row>
          {results.length > 0 ? (
            results.map((result, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card>
                  <Card.Body>
                    <Card.Title>{result.title}</Card.Title>
                    <Card.Text>{result.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <Col>
              <p>No results found for "{query}"</p>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
}

export default SearchResults;