// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navLeft}>
        <a href="#top" style={styles.universityName}>University Name</a>
      </div>
      <div style={styles.navRight}>
        <a href="#about" style={styles.navItem}>About</a>
        <a href="#opportunities" style={styles.navItem}>Opportunities</a>
        <a href="#apply" style={styles.navItem}>Apply Now</a>
        <a href="#contact" style={styles.navItem}>Contact Us</a>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
    position: 'fixed',
    top: '0',
    width: '100%',
    bottom: '20',
  },
  universityName: {
    fontSize: '1.5rem',
    color: '#fff',
    textDecoration: 'none',
  },
  navRight: {
    display: 'flex',
  },
  navItem: {
    marginLeft: '20px',
    color: '#fff',
    textDecoration: 'none',
    cursor: 'pointer',
  }
};

export default Navbar;