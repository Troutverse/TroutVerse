'use client';

import { motion } from 'framer-motion';

export default function Slide01Hero() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

      {/* Lock 아이콘 애니메이션 */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-30"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg className="w-96 h-96 text-blue-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </motion.div>

      {/* 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4">
        {/* 상단 태그 */}
        <motion.div
          className="px-4 py-2 border border-blue-400/30 rounded-full bg-black/30 backdrop-blur-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-400 font-mono text-sm">ASP.NET Core Authentication</span>
        </motion.div>

        {/* 메인 타이틀 */}
        <motion.h1
          className="text-7xl md:text-9xl font-bold text-blue-400 font-mono tracking-wider text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Login Service
        </motion.h1>

        {/* 서브 타이틀 */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-xl md:text-2xl text-blue-300 font-mono">
            Secure Authentication System with JWT
          </p>
          <p className="text-lg text-blue-500/70 font-mono mt-2">
            중복 로그인 방지 및 실시간 세션 관리
          </p>
        </motion.div>

        {/* 기술 아이콘 */}
        <motion.div
          className="flex gap-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {/* ASP.NET Core */}
          <motion.div
            className="group w-16 h-16 border border-blue-400/30 rounded-xl flex flex-col items-center justify-center
                       bg-black/20 backdrop-blur-md hover:bg-blue-400/10 transition-all cursor-pointer"
            whileHover={{ scale: 1.1, borderColor: 'rgba(96, 165, 250, 0.6)' }}
          >
            <div className="w-7 h-7 flex items-center justify-center">
              <span className="text-xl text-blue-400 font-bold">.NET</span>
            </div>
            <span className="text-xs text-blue-400 mt-1 font-mono opacity-0 group-hover:opacity-100 transition-opacity">Core</span>
          </motion.div>

          {/* PostgreSQL */}
          <motion.div
            className="group w-16 h-16 border border-blue-400/30 rounded-xl flex flex-col items-center justify-center
                       bg-black/20 backdrop-blur-md hover:bg-blue-400/10 transition-all cursor-pointer"
            whileHover={{ scale: 1.1, borderColor: 'rgba(96, 165, 250, 0.6)' }}
          >
            <svg className="w-7 h-7 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            <span className="text-xs text-blue-400 mt-1 font-mono opacity-0 group-hover:opacity-100 transition-opacity">SQL</span>
          </motion.div>

          {/* JWT */}
          <motion.div
            className="group w-16 h-16 border border-blue-400/30 rounded-xl flex flex-col items-center justify-center
                       bg-black/20 backdrop-blur-md hover:bg-blue-400/10 transition-all cursor-pointer"
            whileHover={{ scale: 1.1, borderColor: 'rgba(96, 165, 250, 0.6)' }}
          >
            <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
            <span className="text-xs text-blue-400 mt-1 font-mono opacity-0 group-hover:opacity-100 transition-opacity">JWT</span>
          </motion.div>

          {/* Docker */}
          <motion.div
            className="group w-16 h-16 border border-blue-400/30 rounded-xl flex flex-col items-center justify-center
                       bg-black/20 backdrop-blur-md hover:bg-blue-400/10 transition-all cursor-pointer"
            whileHover={{ scale: 1.1, borderColor: 'rgba(96, 165, 250, 0.6)' }}
          >
            <svg className="w-7 h-7 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.5 3h-3v2h3V3zm0 4h-3v2h3V7zM10.5 7h-3v2h3V7zm-3 4h-3v2h3v-2zm10 0h-3v2h3v-2z" />
            </svg>
            <span className="text-xs text-blue-400 mt-1 font-mono opacity-0 group-hover:opacity-100 transition-opacity">Deploy</span>
          </motion.div>
        </motion.div>

        {/* Stats 카드 */}
        <motion.div
          className="flex gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <div className="px-4 py-2 bg-black/40 backdrop-blur-md border border-blue-400/20 rounded-lg">
            <p className="text-blue-400 font-mono text-xs">개발 기간</p>
            <p className="text-blue-300 font-mono text-lg font-bold text-center">2주</p>
          </div>
          <div className="px-4 py-2 bg-black/40 backdrop-blur-md border border-blue-400/20 rounded-lg">
            <p className="text-blue-400 font-mono text-xs">동시 접속</p>
            <p className="text-blue-300 font-mono text-lg font-bold text-center">1000+</p>
          </div>
          <div className="px-4 py-2 bg-black/40 backdrop-blur-md border border-blue-400/20 rounded-lg">
            <p className="text-blue-400 font-mono text-xs">응답 속도</p>
            <p className="text-blue-300 font-mono text-lg font-bold text-center">&lt;50ms</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
