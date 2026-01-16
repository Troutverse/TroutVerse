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
          <span className="text-green-400 font-mono text-sm">Unity × SignalR</span>
        </motion.div>

        {/* 메인 타이틀 */}
        <motion.h1
          className="text-7xl md:text-9xl font-bold text-green-400 font-mono tracking-wider text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Matchmaking
        </motion.h1>

        {/* 서브 타이틀 */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-xl md:text-2xl text-green-300 font-mono">
            Real-time Multiplayer Architecture
          </p>
          <p className="text-lg text-green-500/70 font-mono mt-2">
            SignalR 기반 실시간 4인 매칭 시스템
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

          {/* C# */}
          <motion.div
            className="group w-16 h-16 border border-green-400/30 rounded-xl flex flex-col items-center justify-center
                       bg-black/20 backdrop-blur-md hover:bg-green-400/10 transition-all cursor-pointer"
            whileHover={{ scale: 1.1, borderColor: 'rgba(74, 222, 128, 0.6)' }}
          >
            <div className="w-7 h-7 flex items-center justify-center">
              <span className="text-2xl text-green-400 font-bold">C#</span>
            </div>
            <span className="text-xs text-green-400 mt-1 font-mono opacity-0 group-hover:opacity-100 transition-opacity">C#</span>
          </motion.div>

          {/* SignalR */}
          <motion.div
            className="group w-16 h-16 border border-green-400/30 rounded-xl flex flex-col items-center justify-center
                       bg-black/20 backdrop-blur-md hover:bg-green-400/10 transition-all cursor-pointer"
            whileHover={{ scale: 1.1, borderColor: 'rgba(74, 222, 128, 0.6)' }}
          >
            <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-xs text-green-400 mt-1 font-mono opacity-0 group-hover:opacity-100 transition-opacity">SignalR</span>
          </motion.div>

          {/* ASP.NET */}
          <motion.div
            className="group w-16 h-16 border border-green-400/30 rounded-xl flex flex-col items-center justify-center
                       bg-black/20 backdrop-blur-md hover:bg-green-400/10 transition-all cursor-pointer"
            whileHover={{ scale: 1.1, borderColor: 'rgba(74, 222, 128, 0.6)' }}
          >
            <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
            </svg>
            <span className="text-xs text-green-400 mt-1 font-mono opacity-0 group-hover:opacity-100 transition-opacity">Server</span>
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
            <p className="text-green-400 font-mono text-xs">Players</p>
            <p className="text-green-300 font-mono text-lg font-bold text-center">4</p>
          </div>
          <div className="px-4 py-2 bg-black/40 backdrop-blur-md border border-green-400/20 rounded-lg">
            <p className="text-green-400 font-mono text-xs">Response</p>
            <p className="text-green-300 font-mono text-lg font-bold text-center">&lt;100ms</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
