'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

export default function Slide10Demo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="w-full h-full flex items-center justify-between px-16 gap-12 pt-16 pb-24 overflow-hidden relative">
      {/* 배경 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #22c55e 2px, transparent 2px),
                           radial-gradient(circle at 80% 50%, #22c55e 2px, transparent 2px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* 왼쪽: 비디오 플레이어 (60%) */}
      <div className="w-[60%] h-full flex flex-col justify-center gap-6 z-10">

        {/* 비디오 플레이어 */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* 글로우 효과 */}
          <div className="absolute -inset-4 bg-gradient-to-r from-green-500 via-green-400 to-green-500 rounded-2xl blur-3xl opacity-30" />

          {/* 비디오 컨테이너 */}
          <div className="relative bg-black/80 backdrop-blur-md rounded-2xl overflow-hidden border-2 border-green-500/50">
            {/* 코너 프레임 */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-green-400 z-20" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-green-400 z-20" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-green-400 z-20" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-green-400 z-20" />

            {/* 스캔라인 효과 */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-scan pointer-events-none z-10" />

            {/* 비디오 플레이스홀더 */}
            <div className="relative aspect-video bg-gradient-to-br from-black to-green-900/20 flex items-center justify-center">
              {/* LIVE 뱃지 */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-red-500/90 rounded-full z-20">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-white font-mono text-xs font-bold">LIVE DEMO</span>
              </div>

              {/* 플레이 버튼 또는 비디오 */}
              {!isPlaying && (
                <motion.button
                  onClick={() => {
                    setIsPlaying(true);
                    videoRef.current?.play();
                  }}
                  className="relative z-20"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-2xl shadow-green-500/50">
                    <svg className="w-12 h-12 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>

                  {/* 펄스 링 */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-green-400"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                  />
                </motion.button>
              )}

              {/* 데모 시뮬레이션 */}
              <DemoSimulation />
            </div>

            {/* 하단 정보바 */}
            <div className="p-4 bg-black/90 border-t border-green-500/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-400 font-mono text-xs">90fps</span>
                  </div>
                  <div className="w-px h-4 bg-gray-600" />
                  <span className="text-green-400 font-mono text-xs">4 Players Connected</span>
                </div>
                <span className="text-gray-400 font-mono text-xs">00:12 / 00:45</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* GitHub 링크 */}
        <motion.a
          href="#" // TODO: GitHub 링크 입력
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />

          <div className="relative bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-mono font-bold flex items-center justify-center gap-3 border-2 border-green-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="text-lg">View Source Code on GitHub</span>
          </div>
        </motion.a>
      </div>

      {/* 오른쪽: 정보 (40%) */}
      <motion.div
        className="w-[40%] h-full overflow-y-auto space-y-6 z-10 pr-2 custom-scrollbar"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* 헤더 */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-400 font-mono text-sm tracking-wider font-bold">
              LIVE DEMONSTRATION
            </span>
          </div>

          <h2 className="text-5xl font-bold font-mono leading-tight mb-4">
            <span className="text-green-400">
              Real-time
            </span>
            <br />
            <span className="text-green-400">Matchmaking</span>
          </h2>

          <p className="text-lg text-gray-300 font-mono leading-relaxed">
            Unity VR 환경에서 실시간으로 작동하는
            <span className="text-green-400"> SignalR 기반</span> 매칭 시스템입니다.
          </p>
        </div>

        {/* 주요 기능 */}
        <div className="space-y-4">
          <FeatureItem
            icon="⚡"
            title="Instant Connection"
            description="100ms 이내 서버 연결"
            delay={0.4}
          />
          <FeatureItem
            icon="🎯"
            title="Auto Matching"
            description="4인 자동 로비 매칭"
            delay={0.5}
          />
          <FeatureItem
            icon="🔄"
            title="Real-time Sync"
            description="모든 클라이언트 동시 업데이트"
            delay={0.6}
          />
          <FeatureItem
            icon="🧹"
            title="Clean Disconnect"
            description="자동 정리 및 재매칭"
            delay={0.7}
          />
        </div>

        {/* 기술 스택 */}
        <div className="p-5 bg-green-950/30 border border-green-500/30 rounded-xl backdrop-blur-md">
          <h4 className="text-green-400 font-mono text-sm font-bold mb-3">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {['Unity', 'C#', 'SignalR', 'ASP.NET Core', 'WebSocket'].map((tech, i) => (
              <motion.span
                key={tech}
                className="px-3 py-1.5 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 font-mono text-xs"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* 성능 메트릭 */}
        <div className="p-5 bg-green-950/30 border border-green-500/30 rounded-xl">
          <h4 className="text-green-400 font-mono text-xs mb-4 tracking-wider">
            PERFORMANCE METRICS
          </h4>
          <div className="grid grid-cols-2 gap-4 text-sm font-mono">
            <div>
              <span className="text-gray-400">Response:</span>
              <span className="text-white ml-2 font-bold">&lt;100ms</span>
            </div>
            <div>
              <span className="text-gray-400">Success Rate:</span>
              <span className="text-green-400 ml-2 font-bold">99.8%</span>
            </div>
            <div>
              <span className="text-gray-400">Concurrent:</span>
              <span className="text-white ml-2">100+ Users</span>
            </div>
            <div>
              <span className="text-gray-400">Uptime:</span>
              <span className="text-green-400 ml-2 font-bold">99.9%</span>
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
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(34, 197, 94, 0.1);
          border-radius: 10px;
          margin: 8px 0;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #22c55e 0%, #16a34a 100%);
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #4ade80 0%, #22c55e 100%);
          box-shadow: 0 0 15px rgba(74, 222, 128, 0.8);
        }
      `}</style>
    </div>
  );
}

// Feature Item
function FeatureItem({ icon, title, description, delay }: {
  icon: string;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      className="flex items-start gap-4 p-4 bg-green-950/20 border border-green-400/30 rounded-lg hover:bg-green-950/40 hover:border-green-500/50 transition-all"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      <div className="text-3xl">{icon}</div>
      <div>
        <h4 className="text-green-400 font-mono text-sm font-bold mb-1">
          {title}
        </h4>
        <p className="text-gray-400 font-mono text-xs">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

// Demo Simulation
function DemoSimulation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          className="text-green-400 font-mono text-6xl font-bold mb-4"
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [0.95, 1, 0.95]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        >
          🎮
        </motion.div>
        <p className="text-gray-400 font-mono text-sm">
          매칭 프로세스 시뮬레이션
        </p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>
    </div>
  );
}
