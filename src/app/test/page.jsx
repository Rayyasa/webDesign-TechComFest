// pages/index.js
import React from 'react';
import g1 from 'src/assets/g1.jpeg'; // Import your images
import SwiperComponent from './components/Slider';
const Home = () => {
  const images = [
    { src: g1, alt: 'Blog 1' },
    { src: g1, alt: 'Blog 2' },
    { src: g1, alt: 'Blog 3' },
  ];

  return (
    <div className="container">
      <SwiperComponent images={images} />
    </div>
  );
};

export default Home;
