// import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Carousel } from "flowbite-react";
import React, { useState, useEffect } from 'react';



const CarouselCustomNavigation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://media.edutopia.org/styles/responsive_2880px_16x9/s3/masters/2020-09/iStock-1271957539-crop.jpg',
      alt: ' A student and tutor engaged in an online math session, with the student looking excited and confident.',
      title: "Unlock Your Math Potential",
      description: 'Personalized 1-on-1 math tutoring for students worldwide. Experience the power of tailored learning.',
      buttonText: 'Start Your Journey',
    },
    {
      image: 'https://static.vecteezy.com/system/resources/thumbnails/001/803/234/original/fly-through-formulas-black-free-video.jpg',
      alt: 'A collage of international flags or landmarks, overlaid with mathematical symbols and formulas.',
      title: 'Any Curriculum, Any Grade',
      description: "From elementary to college prep, we've got you covered. Expert tutors for all major international curriculam.",
      buttonText: 'Discover Cities',
    },
    {
      image: 'https://tenneyschool.com/wp-content/uploads/2016/11/Confident-Student.jpg',
      alt: 'Serene beach scene with a colorful sunset over the ocean',
      title: 'Math Made Easy, Success Made Certain',
      description: 'Build confidence, improve grades, and develop a lifelong love for mathematics with Math Easy.',
      buttonText: 'Find Your Oasis',
    },
  ];

  const showSlide = (index) => {
    setCurrentSlide((index + slides.length) % slides.length);
  };

  const nextSlide = () => {
    showSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    showSlide(currentSlide - 1);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  const handleSwipe = (touchStartX, touchEndX) => {
    if (touchStartX - touchEndX > 50) {
      nextSlide();
    } else if (touchEndX - touchStartX > 50) {
      prevSlide();
    }
  };

  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <button
        style={{
          position: 'absolute',
          top: '50%',
          left: '1rem',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          fontSize: '2rem',
          padding: '1rem',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          zIndex: 100,
        }}
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        &lt;
      </button>
      <button
        style={{
          position: 'absolute',
          top: '50%',
          right: '1rem',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          fontSize: '2rem',
          padding: '1rem',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          zIndex: 100,
        }}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        &gt;
      </button>
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: currentSlide === index ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '2rem',
              borderRadius: '10px',
              maxWidth: '600px',
              width: '90%',
              color: 'white',
              textAlign: 'center',
              zIndex: 10,
            }}
          >
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{slide.title}</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>{slide.description}</p>
            <button
              style={{
                backgroundColor: '#ff6b6b',
                color: 'white',
                padding: '0.8rem 1.5rem',
                border: 'none',
                borderRadius: '5px',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#ff8787')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#ff6b6b')}
            >
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '1rem',
          zIndex: 10,
        }}
      >
        {slides.map((_, index) => (
          <div
            key={index}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: currentSlide === index ? 'white' : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer',
            }}
            onClick={() => showSlide(index)}
          />
        ))}
      </div>
      <div
        onTouchStart={(e) => setTouchStartX(e.changedTouches[0].screenX)}
        onTouchEnd={(e) => {
          setTouchEndX(e.changedTouches[0].screenX);
          handleSwipe(touchStartX, touchEndX);
        }}
      />
    </div>
  );
};

export default CarouselCustomNavigation;
