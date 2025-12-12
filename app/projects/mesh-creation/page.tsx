'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import RetroBackground from '@/components/RetroBackground';

// Slides
import Slide01Hero from './slides/Slide01Hero';
import Slide02Problem from './slides/Slide02Problem';
import Slide03Attempt1 from './slides/Slide03Attempt1';
import Slide04Attempt2 from './slides/Slide04Attempt2';
import Slide05Attempt3 from './slides/Slide05Attempt3';
import Slide06Breakthrough from './slides/Slide06Breakthrough';
import Slide07Solution from './slides/Slide07Solution';
import Slide08Conclusion from './slides/Slide08Conclusion';

const slides = [
  Slide01Hero,
  Slide02Problem,
  Slide03Attempt1,
  Slide04Attempt2,
  Slide05Attempt3,
  Slide06Breakthrough,
  Slide07Solution,
  Slide08Conclusion,
];

export default function MeshCreationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 80);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevSlide();
      if (e.key === 'ArrowRight') goToNextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <RetroBackground />

      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0"
            >
              <CurrentSlideComponent />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* <Navigation
          currentPage={currentSlide + 1}
          totalPages={slides.length}
          onNext={goToNextSlide}
          onPrev={goToPrevSlide}
          onPageClick={goToSlide}
        /> */}
      </div>
    </div>
  );
}