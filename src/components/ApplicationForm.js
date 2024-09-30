// src/components/ApplicationForm.js
import React, { useState } from 'react';
import './ApplicationForm.css';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    resume: null,
    whyApply: '',
    thoughts: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate saving data (could use an API or backend server for actual saving)
    console.log('Applicant Data:', formData);
    
    // For now, just simulate saving by clearing the form
    alert("Application submitted successfully!");
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      resume: null,
      whyApply: '',
      thoughts: '',
    });
  };

  return (
    <div style={styles.container}>
      <h2>Apply for Research Opportunities</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label>Upload Resume (PDF only):</label>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label>Why are you applying?</label>
          <textarea
            name="whyApply"
            value={formData.whyApply}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div style={styles.formGroup}>
          <label>Additional Thoughts:</label>
          <textarea
            name="thoughts"
            value={formData.thoughts}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" style={styles.submitButton}>Submit Application</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '40px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formGroup: {
    margin: '10px 0',
    width: '80%',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ApplicationForm;