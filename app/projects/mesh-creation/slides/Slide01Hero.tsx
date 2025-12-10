// app/projects/mesh-creation/slides/Slide01Hero.tsx
'use client';

import { motion } from 'framer-motion';

export default function Slide01Hero() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-20 py-20">
      {/* 메인 타이틀 */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-9xl font-bold font-mono mb-6"
          style={{
            background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 80px rgba(16, 185, 129, 0.5)',
          }}
          animate={{
            textShadow: [
              '0 0 80px rgba(16, 185, 129, 0.5)',
              '0 0 100px rgba(6, 182, 212, 0.6)',
              '0 0 80px rgba(16, 185, 129, 0.5)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Mesh Creation
        </motion.h1>

        <motion.p
          className="text-3xl text-cyan-300 font-mono mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Cap Mesh Generation Algorithm
        </motion.p>

        <motion.p
          className="text-xl text-gray-400 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          절단면 재구성 알고리즘
        </motion.p>
      </motion.div>

      {/* 기술 스택 */}
      <motion.div
        className="flex gap-6 mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        {[
          { icon: '🔺', label: 'Triangulation' },
          { icon: '📐', label: 'Geometry' },
          { icon: '⚡', label: 'Real-time' },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            className="flex flex-col items-center gap-2 px-6 py-4 bg-green-500/10 backdrop-blur-md border border-green-400/30 rounded-xl"
            whileHover={{ scale: 1.05, borderColor: 'rgba(74, 222, 128, 0.6)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + index * 0.1 }}
          >
            <span className="text-4xl">{item.icon}</span>
            <span className="text-green-400 font-mono text-sm">{item.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* 통계 */}
      <motion.div
        className="flex gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        {[
          { value: '4', label: '시도 횟수' },
          { value: '~1ms', label: '처리 시간' },
          { value: '100%', label: '완전성' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center px-6 py-4 bg-black/40 backdrop-blur-sm border border-cyan-500/30 rounded-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6 + index * 0.15, type: 'spring' }}
          >
            <div className="text-3xl font-bold text-cyan-400 font-mono mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-gray-400 font-mono">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 text-black font-mono font-bold text-lg rounded-xl shadow-lg"
          whileHover={{
            scale: 1.05,
            boxShadow: '0 0 30px rgba(16, 185, 129, 0.6)',
          }}
          whileTap={{ scale: 0.95 }}
        >
          여정 시작하기 →
        </motion.button>
      </motion.div>

      {/* 스크롤 힌트 */}
      <motion.div
        className="absolute bottom-32 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-500 font-mono text-sm">Scroll or Press →</span>
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}