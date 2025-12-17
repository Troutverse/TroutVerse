'use client';

import { motion } from 'framer-motion';
import ThreeScene from '@/components/ThreeScene';

export default function Slide01Hero() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* 3D Scene - 배경 */}
      <div className="absolute inset-0 opacity-50">
        <ThreeScene type="knife" />
      </div>

      {/* 그라데이션 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

      {/* 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4">
        {/* 상단 태그 */}
        <motion.div
          className="px-4 py-2 border border-green-400/30 rounded-full bg-black/30 backdrop-blur-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-green-400 font-mono text-sm">Unity VR</span>
        </motion.div>

        {/* 메인 타이틀 */}
        <motion.h1
          className="text-7xl md:text-9xl font-bold text-green-400 font-mono tracking-wider text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Cap Mesh
        </motion.h1>

        {/* 서브 타이틀 */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-xl md:text-2xl text-green-300 font-mono">
            Cap Mesh Generation Algorithm
          </p>
          <p className="text-lg text-green-500/70 font-mono mt-2">
            절단면 재구성 알고리즘
          </p>
        </motion.div>

        {/* 기술 아이콘 */}
        <motion.div
          className="flex gap-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {/* Triangulation */}
          <motion.div
            className="group w-16 h-16 border border-green-400/30 rounded-xl flex flex-col items-center justify-center
                       bg-black/20 backdrop-blur-md hover:bg-green-400/10 transition-all cursor-pointer"
            whileHover={{ scale: 1.1, borderColor: 'rgba(74, 222, 128, 0.6)' }}
          >
            <span className="text-3xl">🔺</span>
            <span className="text-xs text-green-400 mt-1 font-mono opacity-0 group-hover:opacity-100 transition-opacity">Triangle</span>
          </motion.div>

          {/* Geometry */}
          <motion.div
            className="group w-16 h-16 border border-green-400/30 rounded-xl flex flex-col items-center justify-center
                       bg-black/20 backdrop-blur-md hover:bg-green-400/10 transition-all cursor-pointer"
            whileHover={{ scale: 1.1, borderColor: 'rgba(74, 222, 128, 0.6)' }}
          >
            <span className="text-3xl">📐</span>
            <span className="text-xs text-green-400 mt-1 font-mono opacity-0 group-hover:opacity-100 transition-opacity">Geometry</span>
          </motion.div>

          {/* Real-time */}
          <motion.div
            className="group w-16 h-16 border border-green-400/30 rounded-xl flex flex-col items-center justify-center
                       bg-black/20 backdrop-blur-md hover:bg-green-400/10 transition-all cursor-pointer"
            whileHover={{ scale: 1.1, borderColor: 'rgba(74, 222, 128, 0.6)' }}
          >
            <span className="text-3xl">⚡</span>
            <span className="text-xs text-green-400 mt-1 font-mono opacity-0 group-hover:opacity-100 transition-opacity">Real-time</span>
          </motion.div>
        </motion.div>

        {/* Stats 카드 */}
        <motion.div
          className="absolute bottom-20 right-8 flex gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <div className="px-4 py-2 bg-black/40 backdrop-blur-md border border-green-400/20 rounded-lg">
            <p className="text-green-400 font-mono text-xs">처리 시간</p>
            <p className="text-green-300 font-mono text-lg font-bold text-center">~1ms</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
