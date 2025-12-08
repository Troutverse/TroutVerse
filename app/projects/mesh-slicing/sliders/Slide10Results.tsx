'use client';

import { motion } from 'framer-motion';

export default function Slide10Results() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-20">
      <div className="max-w-6xl w-full space-y-12">
        {/* 헤더 */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-6xl font-bold text-green-400 font-mono mb-4">
            Final Results
          </h2>
          <p className="text-2xl text-green-300 font-mono">
            7번의 시도 끝에 완성된 시스템
          </p>
        </motion.div>

        {/* 비디오 플레이어 */}
        <motion.div
          className="relative aspect-video rounded-lg overflow-hidden border-2 border-green-500/50"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/mesh-slicing-demo.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </motion.div>

        {/* 메트릭 */}
        <motion.div
          className="grid grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="p-6 border-2 border-green-500/50 rounded-lg bg-green-950/30 text-center">
            <div className="text-4xl mb-2">✅</div>
            <p className="text-green-400 font-mono font-bold text-xl mb-2">
              메쉬 완전성
            </p>
            <p className="text-green-200 font-mono text-sm">
              100% 닫힌 메쉬
            </p>
          </div>

          <div className="p-6 border-2 border-green-500/50 rounded-lg bg-green-950/30 text-center">
            <div className="text-4xl mb-2">📐</div>
            <p className="text-green-400 font-mono font-bold text-xl mb-2">
              삼각형 품질
            </p>
            <p className="text-green-200 font-mono text-sm">
              균일한 분포
            </p>
          </div>

          <div className="p-6 border-2 border-green-500/50 rounded-lg bg-green-950/30 text-center">
            <div className="text-4xl mb-2">🎯</div>
            <p className="text-green-400 font-mono font-bold text-xl mb-2">
              노멀 방향
            </p>
            <p className="text-green-200 font-mono text-sm">
              올바른 방향
            </p>
          </div>
        </motion.div>

        {/* 통계 */}
        <motion.div
          className="p-8 border-2 border-green-500/30 rounded-lg bg-green-950/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <div className="grid grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-green-400 font-mono mb-2">3</p>
              <p className="text-green-300 font-mono text-sm">주 개발</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-green-400 font-mono mb-2">7</p>
              <p className="text-green-300 font-mono text-sm">번의 시도</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-green-400 font-mono mb-2">2</p>
              <p className="text-green-300 font-mono text-sm">참고 논문</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-green-400 font-mono mb-2">1</p>
              <p className="text-green-300 font-mono text-sm">최종 성공</p>
            </div>
          </div>
        </motion.div>

        {/* 링크 */}
        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <a
            href="https://github.com/troutverse/mesh-slicing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-green-400 text-green-400 font-mono rounded-lg
                     hover:bg-green-400 hover:text-black transition-all duration-300"
          >
            GitHub Repository
          </a>
          <a
            href="#"
            className="px-8 py-4 bg-green-500 text-black font-mono rounded-lg font-bold
                     hover:bg-green-400 transition-all duration-300"
          >
            Live Demo
          </a>
        </motion.div>
      </div>
    </div>
  );
}