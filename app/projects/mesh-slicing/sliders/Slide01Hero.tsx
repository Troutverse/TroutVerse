'use client';

import { motion } from 'framer-motion';
import ThreeScene from '@/components/ThreeScene';

export default function Slide01Hero() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      {/* 3D Scene - 배경 */}
      <div className="absolute inset-0 opacity-30">
        <ThreeScene type="knife" />
      </div>

      {/* 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        <motion.h1
          className="text-8xl font-bold text-green-400 font-mono tracking-wider"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          체크포인트
        </motion.h1>

        <motion.p
          className="text-2xl text-green-300 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          2025년 Mesh Slicing 활동을 되돌아보세요
        </motion.p>

        <motion.div
          className="flex gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="w-12 h-12 border-2 border-green-400 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
            </svg>
          </div>

          <div className="w-12 h-12 border-2 border-green-400 rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 grid grid-cols-2 gap-1">
              <div className="bg-green-400"></div>
              <div className="bg-green-400"></div>
              <div className="bg-green-400"></div>
              <div className="bg-green-400 opacity-50"></div>
            </div>
          </div>

          <div className="w-12 h-12 border-2 border-green-400 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </motion.div>

        <motion.button
          className="mt-12 px-12 py-4 border-2 border-green-400 text-green-400 
                     font-mono text-xl rounded-lg hover:bg-green-400 hover:text-black
                     transition-all duration-300 flex items-center gap-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
          시작
        </motion.button>

        <motion.p
          className="text-sm text-green-700 font-mono mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          체크포인트는 보면 볼 수 없어요(공유하기로 인한 장우 제외). 
          <span className="underline cursor-pointer">자세히 알아보세요</span>.
        </motion.p>
      </div>
    </div>
  );
}