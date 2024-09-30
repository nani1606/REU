// src/components/Professor.js
import React, { useState } from 'react';
import './Professor.css'; // Make sure to create this CSS file and add styles

const Professor = ({ professor }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="professor-card">
      <img src={professor.image} alt={professor.name} />
      <div className="professor-details">
        <h3 onClick={toggleExpand} style={{ cursor: 'pointer' }}>
          {professor.name} {isExpanded ? '-' : '+'}
        </h3>
        <p><strong>Qualification:</strong> {professor.qualification}</p>
        <p><strong>Years of Experience:</strong> {professor.experience}</p>
        {isExpanded && (
          <div className="expanded-details">
            <p><strong>Details:</strong> {professor.details}</p>
            <p><strong>Research Opportunities:</strong> {professor.researchOpportunities}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Professor;