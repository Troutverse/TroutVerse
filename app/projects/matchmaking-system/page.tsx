'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slide01Hero from './sliders/Slide01Hero';
import Slide02Challenge from './sliders/Slide02Challenge';
import Slide03Architecture from './sliders/Slide03Architecture';
import Slide04Flow from './sliders/Slide04Flow';
import Slide05TechnicalDeepDive from './sliders/Slide05TechnicalDeepDive';
import Slide06Concurrency from './sliders/Slide06Concurrency';
import Slide07KeyFeatures from './sliders/Slide07KeyFeatures';
import Slide08ChallengesSolutions from './sliders/Slide08ChallengesSolutions';
import Slide09Performance from './sliders/Slide09Performance';
import Slide10Demo from './sliders/Slide10Demo';
import Slide11TechnicalStack from './sliders/Slide11TechnicalStack';
import Slide12Conclusion from './sliders/Slide12Conclusion';

import Navigation from '../../../components/Navigation';
import RetroBackground from '../../../components/RetroBackground';

const slides = [
  Slide01Hero,
  Slide02Challenge,
  Slide03Architecture,
  Slide04Flow,
  Slide05TechnicalDeepDive,
  Slide06Concurrency,
  Slide07KeyFeatures,
  Slide08ChallengesSolutions,
  Slide09Performance,
  Slide10Demo,
  Slide11TechnicalStack,
  Slide12Conclusion,
];

export default function MatchmakingSystemPage() {
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
