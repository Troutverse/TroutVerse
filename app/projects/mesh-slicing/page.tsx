'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide01Hero from './sliders/Slide01Hero';
import Slide02Stats from './sliders/Slide02Stats';
import Slide03Problem1 from './sliders/Slide03Attempt1';
import Slide04Attempt1 from './sliders/Slide04Attempt2';
import Slide05Attempt2 from './sliders/Slide05Attempt3';
import Slide06Attempt3 from './sliders/Slide06Attempt4';
import Slide07Attempt4 from './sliders/Slide07Breakthrough';
import Slide08Breakthrough from './sliders/Slide08Solution';
import Slide10Results from './sliders/Slide10Conclusion';
import Navigation from '../../../components/Navigation';
import RetroBackground from '../../../components/RetroBackground';


const slides = [
  Slide01Hero,
  Slide02Stats,
  Slide03Problem1,
  Slide04Attempt1,
  Slide05Attempt2,
  Slide06Attempt3,
  Slide07Attempt4,
  Slide08Breakthrough,
  Slide10Results,
];

export default function MeshSlicingPage() {
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
    // Navbar 높이만큼 아래로 스크롤 (보통 64px~80px)
    window.scrollTo({
      top: 80, // Navbar 높이에 맞게 조정
      behavior: 'smooth' // 부드럽게 스크롤
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
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
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