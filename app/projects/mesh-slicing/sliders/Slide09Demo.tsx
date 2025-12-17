'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';

export default function Slide09Demo() {
  const [selectedVideo, setSelectedVideo] = useState<'MeshSlice1' | 'MeshSlice2'>('MeshSlice2');
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="w-full h-full flex items-center justify-between px-12 gap-8">
      {/* 왼쪽: 비디오 + 버튼 (60%) */}
      <div className="w-[60%] h-full flex flex-col justify-center gap-4">
        {/* 비디오 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedVideo}
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-xl blur-xl opacity-30"></div>
            
            <div className="relative bg-black/70 backdrop-blur-md rounded-xl overflow-hidden border-2 border-cyan-500/50">
              <div className="absolute top-0 left-0 w-10 h-10 border-t-3 border-l-3 border-cyan-400 z-10"></div>
              <div className="absolute top-0 right-0 w-10 h-10 border-t-3 border-r-3 border-cyan-400 z-10"></div>
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-3 border-l-3 border-cyan-400 z-10"></div>
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-3 border-r-3 border-cyan-400 z-10"></div>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-scan pointer-events-none z-10"></div>

              <video
                key={selectedVideo}
                ref={videoRef}
                src={`/videos/${selectedVideo}.mp4`}
                className="w-full h-auto"
                controls
                autoPlay
                loop
                muted
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                Your browser does not support the video tag.
              </video>

              {!isPlaying && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-20 cursor-pointer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={() => {
                    if (videoRef.current) {
                      videoRef.current.play();
                    }
                  }}
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 하단 버튼 */}
        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
           onClick={() => setSelectedVideo('MeshSlice1')}
            className={`flex-1 px-6 py-3 rounded-lg font-mono text-sm transition-all ${
              selectedVideo === 'MeshSlice1'
                ? 'bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/50'
                : 'bg-black/50 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/10'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Game (5s)
          </motion.button>
          <motion.button
            onClick={() => setSelectedVideo('MeshSlice2')}
            className={`flex-1 px-6 py-3 rounded-lg font-mono text-sm transition-all ${
              selectedVideo === 'MeshSlice2'
                ? 'bg-purple-500 text-black font-bold shadow-lg shadow-purple-500/50'
                : 'bg-black/50 text-purple-400 border border-purple-500/50 hover:bg-purple-500/10'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Scene (6s)
          </motion.button>
        </motion.div>
      </div>

      {/* 오른쪽: 설명 (40%) */}
      <motion.div
        className="w-[40%] flex flex-col gap-6"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* 헤더 */}
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
          <p className="text-green-400 font-mono text-sm tracking-wider">LIVE DEMO</p>
        </div>

        {/* 타이틀 */}
        <h2 className="text-4xl font-bold font-mono leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
          Mesh Slicing System
        </h2>

        {/* 설명 */}
        <p className="text-lg text-gray-300 font-mono leading-relaxed">
          Unity VR 환경에서 실시간으로 작동하는 메시 슬라이싱 시스템입니다. 
          <span className="text-cyan-400"> Rigidbody</span>를 활용한 
          물리 시뮬레이션과 <span className="text-purple-400">Arc-Length 기반 
          Cap Mesh 생성</span>이 적용되었습니다.
        </p>

        {/* GitHub 버튼 */}
        <motion.a
          href="https://github.com/Troutverse/MeshSlicing"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group mt-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-mono font-bold flex items-center justify-center gap-3 border-2 border-purple-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View Source Code
          </div>
        </motion.a>

        {/* 기술 스택 */}
        <div className="flex flex-wrap gap-2 mt-2">
          {['Unity', 'C#', 'VR', 'Meta Quest'].map((tech, i) => (
            <span
              key={tech}
              className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded text-cyan-300 font-mono text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 성능 메트릭 */}
        <div className="mt-4 p-4 bg-black/30 backdrop-blur-sm border border-green-500/30 rounded-lg">
          <p className="text-green-400 font-mono text-xs mb-3 tracking-wider">PERFORMANCE</p>
          <div className="grid grid-cols-2 gap-3 text-sm font-mono">
            <div>
              <span className="text-gray-400">FPS:</span>
              <span className="text-white ml-2 font-bold">72+</span>
            </div>
            <div>
              <span className="text-gray-400">Platform:</span>
              <span className="text-white ml-2">Unity</span>
            </div>
            <div>
              <span className="text-gray-400">Polygons:</span>
              <span className="text-white ml-2">~50K</span>
            </div>
            <div>
              <span className="text-gray-400">Physics:</span>
              <span className="text-cyan-400 ml-2 font-bold">Rigidbody</span>
            </div>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </div>
  );
}