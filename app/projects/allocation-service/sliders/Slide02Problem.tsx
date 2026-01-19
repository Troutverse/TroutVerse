'use client';

import { motion } from 'framer-motion';

export default function Slide02Problem() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-10">
      {/* 왼쪽: 복잡한 매칭 시나리오 */}
      <div className="w-1/2 h-full flex flex-col justify-center gap-6">
        {/* 문제 상황 1 */}
        <div className="relative h-[42%] border-2 border-red-500/30 rounded-2xl bg-red-950/20 overflow-hidden">
          <ChaosAnimation />
          
          <motion.div
            className="absolute top-4 left-4 px-4 py-2 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-red-400 font-mono text-sm">일반 매칭 시스템</p>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-0 right-0 flex justify-center"
            animate={{
              opacity: [0, 0, 1, 1, 0, 0],
            }}
            transition={{
              duration: 6,
              times: [0, 0.3, 0.35, 0.6, 0.65, 1],
              repeat: Infinity,
            }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-lg">
              <span className="text-2xl">❌</span>
              <span className="text-red-400 font-mono text-sm font-bold">비동기 문제</span>
            </div>
          </motion.div>
        </div>

        {/* 구분선 */}
        <div className="relative flex items-center py-2">
          <div className="flex-1 h-px bg-gray-700"></div>
          <div className="mx-4 text-3xl text-gray-500 font-bold">→</div>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* 해결 방안 */}
        <div className="relative h-[42%] border-2 border-green-500/30 rounded-2xl bg-green-950/20 overflow-hidden">
          <RealtimeMatchingAnimation />
          
          <motion.div
            className="absolute top-4 left-4 px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-green-400 font-mono text-sm">실시간 매칭</p>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-0 right-0 flex justify-center"
            animate={{
              opacity: [0, 0, 1, 1, 0, 0],
            }}
            transition={{
              duration: 6,
              times: [0, 0.5, 0.55, 0.8, 0.85, 1],
              repeat: Infinity,
            }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-lg">
              <span className="text-2xl">✓</span>
              <span className="text-green-400 font-mono text-sm font-bold">즉시 매칭</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 오른쪽: 문제점 설명 */}
      <div className="w-1/2 flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-red-400 font-mono mb-3">The Problem</h2>
          <p className="text-xl text-gray-300 font-mono">
            게임 서버 관리의 복잡성
          </p>
        </motion.div>

        {/* 문제점 카드 1 */}
        <motion.div
          className="p-5 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🎮</div>
            <div>
              <h3 className="text-lg font-bold text-purple-400 font-mono mb-2">
                매칭 요구사항
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-sm">
                <li>• <span className="text-red-400">실시간 로비 상태 동기화</span></li>
                <li>• 플레이어 자동 배치</li>
                <li>• 전용 게임 서버 필요</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 문제점 카드 2 */}
        <motion.div
          className="p-5 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚡</div>
            <div>
              <h3 className="text-lg font-bold text-blue-400 font-mono mb-2">
                기술적 난제
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-sm">
                <li>• HTTP 폴링: 느리고 비효율적</li>
                <li>• Race Condition (동시 접속)</li>
                <li>• 서버 리소스 자동 할당/해제</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 문제점 카드 3 */}
        <motion.div
          className="p-5 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🌐</div>
            <div>
              <h3 className="text-lg font-bold text-yellow-400 font-mono mb-2">
                인프라 문제
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-sm">
                <li>• 글로벌 서버 배치 (지연 시간)</li>
                <li>• Auto Scaling (비용 최적화)</li>
                <li>• 장애 대응 (Fallback)</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 인용구 */}
        <motion.div
          className="p-5 bg-orange-950/30 border-l-4 border-orange-500 rounded-r-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-gray-300 font-mono text-sm italic leading-relaxed">
            "HTTP 요청만으로는 실시간 매칭 불가능<br />
            WebSocket + 전용 서버 자동 할당 필요<br />
            → <span className="text-orange-400 font-bold">SignalR + PlayFab 조합</span>"
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// 혼란스러운 매칭 애니메이션
function ChaosAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 플레이어들 (무작위 배치) */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-10 h-10 bg-red-500 rounded-full flex items-center justify-center"
          animate={{
            x: [
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
              Math.random() * 200 - 100,
            ],
            y: [
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
            ],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </motion.div>
      ))}

      {/* 물음표 */}
      <motion.div
        className="text-6xl text-red-400"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        ?
      </motion.div>
    </div>
  );
}

// 실시간 매칭 애니메이션
function RealtimeMatchingAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 로비 */}
      <div className="w-32 h-32 border-4 border-green-500 rounded-xl bg-green-950/30 flex items-center justify-center">
        <span className="text-green-400 font-mono text-sm">Lobby</span>
      </div>

      {/* 플레이어들이 로비로 모임 */}
      {[0, 120, 240, 60, 180, 300].map((angle, i) => (
        <motion.div
          key={angle}
          className="absolute w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
          style={{
            left: '50%',
            top: '50%',
            marginLeft: -16,
            marginTop: -16,
          }}
          animate={{
            x: [
              Math.cos((angle * Math.PI) / 180) * 120,
              Math.cos((angle * Math.PI) / 180) * 120,
              0,
              0,
            ],
            y: [
              Math.sin((angle * Math.PI) / 180) * 120,
              Math.sin((angle * Math.PI) / 180) * 120,
              0,
              0,
            ],
            scale: [1, 1, 0.6, 0.6],
          }}
          transition={{
            duration: 6,
            times: [0, 0.3, 0.5, 1],
            delay: i * 0.1,
            repeat: Infinity,
          }}
        >
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
