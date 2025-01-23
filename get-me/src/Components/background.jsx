import React, { useEffect, useState } from 'react';
import './background.css';

const Background = () => {
  const images = [
    '/aa.jpg',
    '/ab.jpg',
    '/ac.jpg',
    '/ad.jpg',
    '/ae.jpg',
    '/af.jpg',
    '/ag.jpg',
    '/ah.jpg',
    '/ai.jpg',
    '/aj.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        transition: 'background-image 1s ease-in-out', 
      }}
    >
      <div className="overlay"></div>  {/* Brown overlay */}
    </div>
  );
};

export default Background;
