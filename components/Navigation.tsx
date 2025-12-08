'use client';

import { motion } from 'framer-motion';

interface NavigationProps {
  onPrev: () => void;
  onNext: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
  currentSlide: number;
  totalSlides: number;
}

export default function Navigation({
  onPrev,
  onNext,
  canGoPrev,
  canGoNext,
  currentSlide,
  totalSlides,
}: NavigationProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* 이전 버튼 */}
        <motion.button
          onClick={onPrev}
          disabled={!canGoPrev}
          className={`
            w-16 h-16 rounded-lg border-2 
            flex items-center justify-center
            transition-all duration-300
            ${canGoPrev 
              ? 'border-green-400 text-green-400 hover:bg-green-400 hover:text-black cursor-pointer' 
              : 'border-gray-800 text-gray-800 cursor-not-allowed'
            }
          `}
          whileHover={canGoPrev ? { scale: 1.1 } : {}}
          whileTap={canGoPrev ? { scale: 0.95 } : {}}
        >
          <svg 
            className="w-8 h-8" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
        </motion.button>

        {/* 진행 표시 */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <div
                key={index}
                className={`
                  h-2 transition-all duration-300
                  ${index === currentSlide 
                    ? 'w-8 bg-green-400' 
                    : 'w-2 bg-gray-700'
                  }
                  rounded-full
                `}
              />
            ))}
          </div>
          <p className="text-green-400 font-mono text-sm">
            {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </p>
        </div>

        {/* 다음 버튼 */}
        <motion.button
          onClick={onNext}
          disabled={!canGoNext}
          className={`
            w-16 h-16 rounded-lg border-2 
            flex items-center justify-center
            transition-all duration-300
            ${canGoNext 
              ? 'border-green-400 text-green-400 hover:bg-green-400 hover:text-black cursor-pointer' 
              : 'border-gray-800 text-gray-800 cursor-not-allowed'
            }
          `}
          whileHover={canGoNext ? { scale: 1.1 } : {}}
          whileTap={canGoNext ? { scale: 0.95 } : {}}
        >
          <svg 
            className="w-8 h-8" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}