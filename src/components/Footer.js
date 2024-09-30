// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer} id="contact">
      <p>Contact Us: info@university.com</p>
      <p>© 2024 University Name. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '20px 0',
    backgroundColor: '#333',
    color: '#fff',
    marginTop: '40px',
  },
};

export default Footer;