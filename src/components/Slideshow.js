import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Slideshow.css';

const Slideshow = () => {
  return (
    <section className="slideshow-section" id="top">
      <div className="slideshow-container">
        <Carousel showArrows={true} autoPlay infiniteLoop interval={3000} showThumbs={false}>
          <div className="slide">
            <img
              src="https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?cs=srgb&dl=pexels-pixabay-60597.jpg&fm=jpg"
              alt="Research Image 1"
              className="carousel-image"
            />
            <p className="caption">Leading research in AI and Robotics</p>
          </div>
          <div className="slide">
            <img
              src="https://cdn.pixabay.com/photo/2024/01/02/14/58/leaf-8483401_640.jpg"
              alt="Research Image 2"
              className="carousel-image"
            />
            <p className="caption">Cutting-edge technology and innovation</p>
          </div>
        </Carousel>
      </div>

      <div className="university-description">
        <p>
          Our university is a pioneer in research, fostering innovation and collaboration across
          multiple disciplines. Join us to be part of the next wave of breakthroughs in science and
          technology.
        </p>
        <a href="#opportunities" className="link">Explore Opportunities</a>
      </div>
    </section>
  );
};

export default Slideshow;