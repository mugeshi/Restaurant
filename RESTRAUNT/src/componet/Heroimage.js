import React, { useState, useEffect } from 'react';
import './HeroSlider.css';
import images1 from '../assets/images1.jpeg';
import images2 from '../assets/images2.jpeg';
import image5 from '../assets/image5.jpeg';

const slidesData = [
  { id: 1,  backgroundImage: images1 },
  { id: 2,  backgroundImage: images2 },
  { id: 3,  backgroundImage: image5 }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slidesData.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slidesData.length - 1 : currentSlide - 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <div className="hero-slider">
      {slidesData.map((slide, index) => (
        <div key={slide.id} className={index === currentSlide ? 'slide active' : 'slide'} style={{ backgroundImage: `url(${slide.backgroundImage})` }}>
          
        </div>
      ))}
      <button onClick={prevSlide} className="prev">Prev</button>
      <button onClick={nextSlide} className="next">Next</button>
    </div>
  );
};

export default HeroSlider;
