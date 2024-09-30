import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ResearcherHighlight.css'; // Ensure to include this CSS file

const ResearcherHighlight = () => {
  const researcher = {
    name: 'Dr. Orhun Aydin',
    description: 'With over 10 years of experience in robotics and AI, Dr. Orhun Aydin is leading cutting-edge research that shapes the future of technology. His work has been widely recognized and has made significant contributions to the field.',
    image: 'https://media.licdn.com/dms/image/v2/C4E03AQH8fc4sP7EvAg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1663892314908?e=1730332800&v=beta&t=UnTqXlQn77Iarm6Wx1NHFb5ovYYbipaMIEJ2nXerq80', // Replace with actual image path
  };

  // Array of 6 images for the slideshow
  const images = [
    'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?cs=srgb&dl=pexels-pixabay-60597.jpg&fm=jpg',
    'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?cs=srgb&dl=pexels-pixabay-60597.jpg&fm=jpg',
    'https://cdn.pixabay.com/photo/2024/01/02/14/58/leaf-8483401_640.jpg',
    'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?cs=srgb&dl=pexels-pixabay-60597.jpg&fm=jpg',
    'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?cs=srgb&dl=pexels-pixabay-60597.jpg&fm=jpg',
    'https://cdn.pixabay.com/photo/2024/01/02/14/58/leaf-8483401_640.jpg',
  ];

  return (
    <div className="researcher-highlight-container">
      <h2>Featured Researcher</h2>

      {/* Researcher Information */}
      <div className="researcher-info">
        <img src={researcher.image} alt={researcher.name} className="researcher-image" />
        <div className="researcher-details">
          <h3>{researcher.name}</h3>
          <p>{researcher.description}</p>
        </div>
      </div>

      {/* Slideshow of images */}
      <div className="slideshow-container">
        <Carousel showArrows={true} autoPlay infiniteLoop interval={3000} showThumbs={false}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Research Image ${index + 1}`} className="carousel-image" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ResearcherHighlight;