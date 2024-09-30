// src/components/Opportunities.js
import React, { useState } from 'react';
import Department from './Department';

const Opportunities = () => {
  const departments = [
    { name: 'Science', professors: [{ name: 'Dr. John Doe', details: 'Physics Research, 10 years experience' }, { name: 'Dr. Jane Smith', details: 'Biology Research, 8 years experience' }] },
    { name: 'Engineering', professors: [{ name: 'Dr. Alan Turing', details: 'Computer Science Research, 5 years experience' }] },
    { name: 'Arts', professors: [{ name: 'Dr. Emily Williams', details: 'History Research, 15 years experience' }] }
  ];

  return (
    <div>
      <h2><center>Research Opportunities by Department</center></h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {departments.map((dept, index) => (
          <Department key={index} department={dept} />
        ))}
      </div>
    </div>
  );
};

export default Opportunities;