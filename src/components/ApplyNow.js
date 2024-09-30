// src/components/ApplyNow.js
import React, { useState } from 'react';
import ApplicationForm from './ApplicationForm';

const ApplyNow = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div style={styles.container} id="apply">
      <h2>Apply Now</h2>
      <p>Are you interested in joining our university for research opportunities? Apply now and take the first step in advancing your academic journey.</p>
      <button onClick={toggleForm} style={styles.button}>
        {showForm ? 'Close Application Form' : 'Open Application Form'}
      </button>

      {showForm && <ApplicationForm />}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    margin: '40px 0',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '20px 0',
  },
};

export default ApplyNow;