// src/components/Department.js
import React, { useState } from 'react';
import Professor from './Professor';

const Department = ({ department }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={{ borderRight: '1px solid #ccc', padding: '10px' }}>
      <h3 style={{ cursor: 'pointer' }} onClick={toggleExpand}>
        {department.name} {isExpanded ? '-' : '+'}
      </h3>
      {isExpanded && (
        <div>
          {department.professors.map((prof, index) => (
            <Professor key={index} professor={prof} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Department;