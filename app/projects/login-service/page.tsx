'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide01Hero from './sliders/Slide01Hero';
import Slide02Problem from './sliders/Slide02Problem';
import Slide03Attempt1 from './sliders/Slide03Attempt1';
import Slide04Attempt2 from './sliders/Slide04Attempt2';
import Slide05Architecture from './sliders/Slide05Architecture';
import Slide06JWT from './sliders/Slide06JWT';
import Slide07Database from './sliders/Slide07Database';
import Slide08Repository from './sliders/Slide08Repository';
import Slide09Demo from './sliders/Slide09Demo';
import Slide10Results from './sliders/Slide10Results';
import Slide11Conclusion from './sliders/Slide11Conclusion';

import Navigation from '../../../components/Navigation';
import RetroBackground from '../../../components/RetroBackground';

const slides = [
  Slide01Hero,
  Slide02Problem,
  Slide03Attempt1,
  Slide04Attempt2,
  Slide05Architecture,
  Slide06JWT,
  Slide07Database,
  Slide08Repository,
  Slide09Demo,
  Slide10Results,
  Slide11Conclusion,
];

export default function LoginServicePage() {
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