'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ThreeScene from '@/components/ThreeScene';

export default function Slide02Stats() {
  const [count, setCount] = useState(0);
  const targetCount = 496;

  useEffect(() => {
    let current = 0;
    const increment = targetCount / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-between px-20">
      {/* 왼쪽: 3D 오브젝트 */}
      <motion.div
        className="w-1/2 h-full"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <ThreeScene type="sphere" color="#EC4899" />
      </motion.div>

      {/* 오른쪽: 콘텐츠 */}
      <div className="w-1/2 flex flex-col items-start gap-8">
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
          <p className="text-pink-400 font-mono text-lg">올해 개의 메시지 보냈어요</p>
        </motion.div>

        <motion.h2
          className="text-9xl font-bold text-pink-500 font-mono"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
        >
          {count}
        </motion.h2>

        <motion.p
          className="text-2xl text-pink-300 font-mono leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Mesh Slicing 개발 중 상위{' '}
          <span className="bg-pink-500 text-black px-2 py-1">23.41%</span>에 들어
          갔어요!
        </motion.p>

        <motion.div
          className="flex gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <div className="w-12 h-12 border-2 border-pink-400 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
            </svg>
          </div>

          <div className="w-12 h-12 border-2 border-pink-400 rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 grid grid-cols-2 gap-1">
              <div className="bg-pink-400"></div>
              <div className="bg-pink-400"></div>
              <div className="bg-pink-400"></div>
              <div className="bg-pink-400 opacity-50"></div>
            </div>
          </div>

          <div className="w-12 h-12 border-2 border-pink-400 rounded-lg flex items-center justify-center relative">
            <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>
        </motion.div>
      </div>
    </div>
  );
}