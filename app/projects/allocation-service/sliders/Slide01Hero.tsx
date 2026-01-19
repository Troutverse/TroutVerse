'use client';

import { motion } from 'framer-motion';

export default function Slide01Hero() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

      {/* 네트워크 애니메이션 */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-20"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg className="w-[600px] h-[600px] text-orange-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.3}
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      </motion.div>

      {/* 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4">
        {/* 상단 태그 */}
        <motion.div
          className="px-4 py-2 border border-orange-400/30 rounded-full bg-black/30 backdrop-blur-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-400 font-mono text-sm">PlayFab Server Allocation</span>
        </motion.div>

        {/* 메인 타이틀 */}
        <motion.h1
          className="text-7xl md:text-9xl font-bold text-orange-400 font-mono tracking-wider text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Allocation
        </motion.h1>

        {/* 서브 타이틀 */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-xl md:text-2xl text-orange-300 font-mono">
            PlayFab Multiplayer Server Allocation
          </p>
          <p className="text-lg text-orange-500/70 font-mono mt-2">
            SignalR 매칭 + 자동 서버 할당 및 Fallback
          </p>
        </motion.div>

        {/* 기술 아이콘 */}
        <motion.div
          className="flex gap-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {/* SignalR */}
          <motion.div
            className="group w-16 h-16 border border-orange-400/30 rounded-xl flex flex-col items-center justify-center
                       bg-black/20 backdrop-blur-md hover:bg-orange-400/10 transition-all cursor-pointer"
            whileHover={{ scale: 1.1, borderColor: 'rgba(251, 146, 60, 0.6)' }}
          >
            <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs text-orange-400 mt-1 font-mono opacity-0 group-hover:opacity-100 transition-opacity">SignalR</span>
          </motion.div>

          {/* PlayFab */}
          <motion.div
            className="group w-16 h-16 border border-orange-400/30 rounded-xl flex flex-col items-center justify-center
                       bg-black/20 backdrop-blur-md hover:bg-orange-400/10 transition-all cursor-pointer"
            whileHover={{ scale: 1.1, borderColor: 'rgba(251, 146, 60, 0.6)' }}
          >
            <svg className="w-7 h-7 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.82 8 12 11.82 4.18 8 12 4.18zM4 9.48l7 3.5v7.84l-7-3.5V9.48zm16 0v7.84l-7 3.5v-7.84l7-3.5z" />
            </svg>
            <span className="text-xs text-orange-400 mt-1 font-mono opacity-0 group-hover:opacity-100 transition-opacity">PlayFab</span>
          </motion.div>

          {/* WebSocket */}
          <motion.div
            className="group w-16 h-16 border border-orange-400/30 rounded-xl flex flex-col items-center justify-center
                       bg-black/20 backdrop-blur-md hover:bg-orange-400/10 transition-all cursor-pointer"
            whileHover={{ scale: 1.1, borderColor: 'rgba(251, 146, 60, 0.6)' }}
          >
            <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-xs text-orange-400 mt-1 font-mono opacity-0 group-hover:opacity-100 transition-opacity">Real-time</span>
          </motion.div>

          {/* Render */}
          <motion.div
            className="group w-16 h-16 border border-orange-400/30 rounded-xl flex flex-col items-center justify-center
                       bg-black/20 backdrop-blur-md hover:bg-orange-400/10 transition-all cursor-pointer"
            whileHover={{ scale: 1.1, borderColor: 'rgba(251, 146, 60, 0.6)' }}
          >
            <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
            <span className="text-xs text-orange-400 mt-1 font-mono opacity-0 group-hover:opacity-100 transition-opacity">Cloud</span>
          </motion.div>
        </motion.div>

        {/* Stats 카드 */}
        <motion.div
          className="flex gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <div className="px-4 py-2 bg-black/40 backdrop-blur-md border border-orange-400/20 rounded-lg">
            <p className="text-orange-400 font-mono text-xs">할당 시간</p>
            <p className="text-orange-300 font-mono text-lg font-bold text-center">~30s</p>
          </div>
          <div className="px-4 py-2 bg-black/40 backdrop-blur-md border border-orange-400/20 rounded-lg">
            <p className="text-orange-400 font-mono text-xs">성공률</p>
            <p className="text-orange-300 font-mono text-lg font-bold text-center">95%+</p>
          </div>
          <div className="px-4 py-2 bg-black/40 backdrop-blur-md border border-orange-400/20 rounded-lg">
            <p className="text-orange-400 font-mono text-xs">가용성</p>
            <p className="text-orange-300 font-mono text-lg font-bold text-center">100%</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
