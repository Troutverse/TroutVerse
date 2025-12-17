'use client';

import { motion } from 'framer-motion';

export default function Slide10Demo() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-20 py-10 pb-30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h2 className="text-6xl font-bold text-purple-400 font-mono mb-4">Demo</h2>
        <p className="text-xl text-gray-300 font-mono">실제 작동 영상</p>
      </motion.div>

      <div className="grid grid-cols-2 gap-6 max-w-6xl mb-10">
        <motion.div
          className="aspect-video bg-gray-900/50 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl flex items-center justify-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10" />
          <div className="relative z-10 text-center">
            <div className="text-6xl mb-4">🎮</div>
            <p className="text-gray-400 font-mono text-sm">손으로 잡고 늘리기</p>
          </div>
        </motion.div>

        <motion.div
          className="aspect-video bg-gray-900/50 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl flex items-center justify-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
          <div className="relative z-10 text-center">
            <div className="text-6xl mb-4">⚡</div>
            <p className="text-gray-400 font-mono text-sm">바닥에 떨어뜨리기</p>
          </div>
        </motion.div>

        <motion.div
          className="aspect-video bg-gray-900/50 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl flex items-center justify-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10" />
          <div className="relative z-10 text-center">
            <div className="text-6xl mb-4">💥</div>
            <p className="text-gray-400 font-mono text-sm">벽에 충돌 반응</p>
          </div>
        </motion.div>

        <motion.div
          className="aspect-video bg-gray-900/50 backdrop-blur-sm border-2 border-purple-500/30 rounded-2xl flex items-center justify-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
          <div className="relative z-10 text-center">
            <div className="text-6xl mb-4">✂️</div>
            <p className="text-gray-400 font-mono text-sm">메쉬 절단과 통합</p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-4 gap-5 max-w-6xl">
        <motion.div
          className="p-5 bg-green-900/30 backdrop-blur-sm border border-green-500/30 rounded-xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <div className="text-3xl mb-2">📊</div>
          <div className="text-3xl font-bold text-green-400 font-mono mb-1">72+</div>
          <div className="text-xs text-gray-400 font-mono">FPS (Quest 2/3)</div>
        </motion.div>

        <motion.div
          className="p-5 bg-cyan-900/30 backdrop-blur-sm border border-cyan-500/30 rounded-xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <div className="text-3xl mb-2">⚡</div>
          <div className="text-3xl font-bold text-cyan-400 font-mono mb-1">500</div>
          <div className="text-xs text-gray-400 font-mono">Particles</div>
        </motion.div>

        <motion.div
          className="p-5 bg-purple-900/30 backdrop-blur-sm border border-purple-500/30 rounded-xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <div className="text-3xl mb-2">🔄</div>
          <div className="text-3xl font-bold text-purple-400 font-mono mb-1">5</div>
          <div className="text-xs text-gray-400 font-mono">Substeps</div>
        </motion.div>

        <motion.div
          className="p-5 bg-yellow-900/30 backdrop-blur-sm border border-yellow-500/30 rounded-xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
        >
          <div className="text-3xl mb-2">⏱️</div>
          <div className="text-3xl font-bold text-yellow-400 font-mono mb-1">~2ms</div>
          <div className="text-xs text-gray-400 font-mono">Processing</div>
        </motion.div>
      </div>

      <motion.div
        className="mt-10 p-5 bg-purple-950/30 border-l-4 border-purple-500 rounded-r-xl max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <p className="text-gray-300 font-mono text-lg italic text-center leading-relaxed">
          "Quest 2/3 모바일 환경에서 72fps 안정적 유지 → <span className="text-purple-400 font-bold">실시간 VR 시뮬레이션 성공!</span>"
        </p>
      </motion.div>
    </div>
  );
}
