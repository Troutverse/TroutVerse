'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide01Hero from './slides/Slide01Hero';
import Slide02Problem from './slides/Slide02Problem';
import Slide03Attempt1 from './slides/Slide03Attempt1';
import Slide04Attempt2 from './slides/Slide04Attempt2';
import Slide05Attempt3 from './slides/Slide05Attempt3';
import Slide06Breakthrough from './slides/Slide06Breakthrough';
import Slide07Solution from './slides/Slide07Solution';
import Slide08Conclusion from './slides/Slide08Conclusion';
import Slide09Demo from './slides/Slide09Demo';

import Navigation from '../../../components/Navigation';
import RetroBackground from '../../../components/RetroBackground';

const slides = [
  Slide01Hero,
  Slide02Problem,
  Slide03Attempt1,
  Slide04Attempt2,
  Slide05Attempt3,
  Slide06Breakthrough,
  Slide07Solution,
  Slide09Demo,
  Slide08Conclusion,
];

export default function MeshCreationPage() {
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
      <RetroBackground />
      
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
