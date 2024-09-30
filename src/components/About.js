import React from 'react';

const About = () => {
  return (
    <section id="about" style={styles.aboutSection}>
      <h2>About Saint Louis University</h2>
      <p>
        Saint Louis University (SLU) is one of the nation’s oldest and most prestigious Catholic universities. With a legacy of academic excellence that spans more than 200 years, SLU is a pioneer in research and education across multiple disciplines. 
      </p>
      <p>
        Our mission is to pursue truth for the greater glory of God and for the service of humanity. Through our faculty's dedication to research and innovation, we provide students and researchers with opportunities to shape the future.
      </p>
    </section>
  );
};

const styles = {
  aboutSection: {
    padding: '60px 20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
};

export default About;
