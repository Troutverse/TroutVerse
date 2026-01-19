'use client';

import { motion } from 'framer-motion';

export default function Slide01Hero() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden pt-16 pb-24">
      {/* 3D 애니메이션 배경 */}
      <div className="absolute inset-0 opacity-30">
        <SoftBodyAnimation />
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
          PBD Soft Body
        </motion.h1>

        {/* 서브 타이틀 */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-xl md:text-2xl text-green-300 font-mono">
            Position Based Dynamics
          </p>
          <p className="text-lg text-green-500/70 font-mono mt-2">
            VR 수술 시뮬레이션을 위한 실시간 소프트바디 물리 엔진
          </p>
        </motion.div>

        {/* 기술 아이콘 */}
        <motion.div
          className="flex gap-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {/* Unity */}
          <motion.div
            className="group w-16 h-16 border border-green-400/30 rounded-xl flex flex-col items-center justify-center
                       bg-black/20 backdrop-blur-md hover:bg-green-400/10 transition-all cursor-pointer"
            whileHover={{ scale: 1.1, borderColor: 'rgba(74, 222, 128, 0.6)' }}
          >
            <svg className="w-7 h-7 text-green-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.82 8 12 11.82 4.18 8 12 4.18zM4 9.48l7 3.5v7.84l-7-3.5V9.48zm16 0v7.84l-7 3.5v-7.84l7-3.5z" />
            </svg>
            <span className="text-xs text-green-400 mt-1 font-mono opacity-0 group-hover:opacity-100 transition-opacity">Unity</span>
          </motion.div>

          {/* Physics */}
          <motion.div
            className="group w-16 h-16 border border-green-400/30 rounded-xl flex flex-col items-center justify-center
                       bg-black/20 backdrop-blur-md hover:bg-green-400/10 transition-all cursor-pointer"
            whileHover={{ scale: 1.1, borderColor: 'rgba(74, 222, 128, 0.6)' }}
          >
            <div className="w-7 h-7 flex items-center justify-center">
              <span className="text-2xl text-green-400">⚛️</span>
            </div>
            <span className="text-xs text-green-400 mt-1 font-mono opacity-0 group-hover:opacity-100 transition-opacity">Physics</span>
          </motion.div>

          {/* Meta Quest */}
          <motion.div
            className="group w-16 h-16 border border-green-400/30 rounded-xl flex flex-col items-center justify-center
                       bg-black/20 backdrop-blur-md hover:bg-green-400/10 transition-all cursor-pointer"
            whileHover={{ scale: 1.1, borderColor: 'rgba(74, 222, 128, 0.6)' }}
          >
            <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
            <span className="text-xs text-green-400 mt-1 font-mono opacity-0 group-hover:opacity-100 transition-opacity">VR</span>
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
            <p className="text-green-400 font-mono text-xs">개발 기간</p>
            <p className="text-green-300 font-mono text-lg font-bold text-center">4주</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function SoftBodyAnimation() {
  const particleCount = 8;
  const radius = 150;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg className="absolute inset-0" viewBox="0 0 800 600">
        {[...Array(particleCount)].map((_, i) => {
          const angle = (i * Math.PI * 2) / particleCount;
          const x = 400 + Math.cos(angle) * radius;
          const y = 300 + Math.sin(angle) * radius;

          return (
            <motion.circle
              key={`particle-${i}`}
              cx={x}
              cy={y}
              r="8"
              fill="url(#particleGradient)"
              style={{ filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.8))' }}
              animate={{
                r: [8, 12, 8],
                cx: [x, x + Math.cos(angle) * 20, x],
                cy: [y, y + Math.sin(angle) * 20, y],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
            />
          );
        })}

        {[...Array(particleCount)].map((_, i) => {
          const nextI = (i + 1) % particleCount;
          const angle1 = (i * Math.PI * 2) / particleCount;
          const angle2 = (nextI * Math.PI * 2) / particleCount;
          const x1 = 400 + Math.cos(angle1) * radius;
          const y1 = 300 + Math.sin(angle1) * radius;
          const x2 = 400 + Math.cos(angle2) * radius;
          const y2 = 300 + Math.sin(angle2) * radius;

          return (
            <motion.line
              key={`edge-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#edgeGradient)"
              strokeWidth="2"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          );
        })}

        <defs>
          <radialGradient id="particleGradient">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="1" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.5" />
          </radialGradient>
          <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
