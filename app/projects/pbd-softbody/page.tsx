'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide01Hero from './sliders/Slide01Hero';
import Slide02Problem from './sliders/Slide02Problem';
import Slide03Attempt1 from './sliders/Slide03Attempt1';
import Slide04Rejected from './sliders/Slide04Rejected';
import Slide05Attempt2 from './sliders/Slide05Attempt2';
import Slide06Attempt3 from './sliders/Slide06Attempt3';
import Slide07Breakthrough from './sliders/Slide07Breakthrough';
import Slide08Optimization from './sliders/Slide08Optimization';
import Slide09VRIntegration from './sliders/Slide09VRIntegration';
import Slide10Demo from './sliders/Slide10Demo';
import Slide11Conclusion from './sliders/Slide11Conclusion';

import Navigation from '../../../components/Navigation';
import ProjectBackground from '../../../components/ProjectBackground';

const slides = [
  Slide01Hero,
  Slide02Problem,
  Slide03Attempt1,
  Slide04Rejected,
  Slide05Attempt2,
  Slide06Attempt3,
  Slide07Breakthrough,
  Slide08Optimization,
  Slide09VRIntegration,
  Slide10Demo,
  Slide11Conclusion,
];

export default function PBDBodyProject() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 80,
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <ProjectBackground />
      
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0 
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      <Navigation
        onPrev={prevSlide}
        onNext={nextSlide}
        canGoPrev={currentSlide > 0}
        canGoNext={currentSlide < slides.length - 1}
        currentSlide={currentSlide}
        totalSlides={slides.length}
      />
    </div>
  );
}
