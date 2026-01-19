'use client';

import { motion } from 'framer-motion';

export default function Slide05Attempt2() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 pt-20 pb-28">
      {/* 왼쪽: 애니메이션 */}
      <div className="w-[45%] h-full flex items-center justify-center">
        <div className="relative w-full h-[80%] border-2 border-red-500/30 rounded-2xl bg-red-950/20 overflow-hidden">
          <VerletAnimation />

          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{
              opacity: [0, 0, 0, 0, 1, 1, 0],
              scale: [0, 0, 0, 0, 1.2, 1, 0],
            }}
            transition={{
              duration: 8,
              times: [0, 0.5, 0.6, 0.65, 0.7, 0.8, 1],
              repeat: Infinity,
            }}
          >
            <div className="flex flex-col items-center gap-4">
              <span className="text-8xl">🍝</span>
              <span className="text-red-400 font-mono text-3xl font-bold">STRETCHED</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 오른쪽: 설명 */}
      <div className="w-[55%] h-full flex flex-col gap-5 overflow-y-auto pr-2 custom-scrollbar">
        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(6, 182, 212, 0.1);
            border-radius: 10px;
            margin: 8px 0;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #06b6d4 0%, #0891b2 100%);
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, #22d3ee 0%, #06b6d4 100%);
            box-shadow: 0 0 15px rgba(34, 211, 238, 0.8);
          }
        `}</style>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-red-400 font-mono mb-3">Attempt #2</h2>
          <p className="text-xl text-gray-300 font-mono">Verlet Integration</p>
        </motion.div>

        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">📝</div>
            <div>
              <h3 className="text-base font-bold text-blue-400 font-mono mb-2">개선된 아이디어</h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 속도 없이 위치만으로 시뮬레이션</li>
                <li>• p_new = 2p - p_old + a·dt²</li>
                <li>• 암시적 속도 계산</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-purple-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🤔</div>
            <div>
              <h3 className="text-base font-bold text-purple-400 font-mono mb-2">왜 Verlet?</h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• <span className="text-purple-400">안정성 향상</span>: Spring-Mass보다 덜 폭발</li>
                <li>• <span className="text-purple-400">간단함</span>: 속도 변수 불필요</li>
                <li>• <span className="text-purple-400">에너지 보존</span>: 수치 오차 적음</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-orange-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚠️</div>
            <div>
              <h3 className="text-base font-bold text-orange-400 font-mono mb-2">대안들의 문제</h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• <span className="text-orange-400">Euler Integration</span>: 여전히 불안정</li>
                <li>• <span className="text-orange-400">Runge-Kutta</span>: 너무 느림 (4단계)</li>
                <li>• <span className="text-orange-400">Implicit Methods</span>: 구현 복잡</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-4 bg-red-950/30 border-2 border-red-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">❌</div>
            <div>
              <h3 className="text-base font-bold text-red-400 font-mono mb-2">실패 원인</h3>
              <ul className="space-y-1.5 text-gray-300 font-mono text-xs">
                <li>• <span className="text-red-400 font-bold">형태 유지 어려움</span>: 쭉쭉 늘어남</li>
                <li>• <span className="text-red-400 font-bold">제약 조건 부족</span>: 원래 모양으로 안 돌아옴</li>
                <li>• <span className="text-red-400 font-bold">Constraint Solving 필요</span>: 거리 제약만으로는 부족</li>
                <li>• 전체적으로 스파게티처럼 됨</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-4 bg-yellow-950/30 border-l-4 border-yellow-500 rounded-r-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p className="text-gray-300 font-mono text-xs italic leading-relaxed">
            "안정성은 개선됐지만 형태 보존 실패 → <span className="text-yellow-400 font-bold">Constraint 시스템 필요</span>"
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function VerletAnimation() {
  const particleCount = 8;
  const radius = 60;

  const points = [...Array(particleCount)].map((_, i) => {
    const angle = (i * Math.PI * 2) / particleCount;
    return {
      x: 200 + Math.cos(angle) * radius,
      y: 170 + Math.sin(angle) * radius,
    };
  });

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg className="absolute inset-0" viewBox="0 0 400 400">
        {[...Array(particleCount)].map((_, i) => {
          const nextI = (i + 1) % particleCount;
          
          return (
            <motion.line
              key={`edge-${i}`}
              x1={points[i].x}
              y1={points[i].y}
              x2={points[nextI].x}
              y2={points[nextI].y}
              stroke="#06b6d4"
              strokeWidth="2"
              animate={{
                x1: [points[i].x, points[i].x, points[i].x + (Math.random() - 0.5) * 100],
                y1: [points[i].y, points[i].y, points[i].y + (Math.random() - 0.5) * 100],
                x2: [points[nextI].x, points[nextI].x, points[nextI].x + (Math.random() - 0.5) * 100],
                y2: [points[nextI].y, points[nextI].y, points[nextI].y + (Math.random() - 0.5) * 100],
                opacity: [0.3, 0.8, 0.5],
              }}
              transition={{
                duration: 8,
                times: [0, 0.4, 1],
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          );
        })}

        {points.map((p, i) => (
          <motion.circle
            key={`point-${i}`}
            cx={p.x}
            cy={p.y}
            r="6"
            style={{ filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.8))' }}
            animate={{
              fill: ['rgb(6, 182, 212)', 'rgb(6, 182, 212)', 'rgb(234, 179, 8)'],
              cx: [p.x, p.x, p.x + (Math.random() - 0.5) * 100],
              cy: [p.y, p.y, p.y + (Math.random() - 0.5) * 100],
              r: [6, 8, 6],
            }}
            transition={{
              duration: 8,
              times: [0, 0.4, 1],
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}

        <motion.text
          x="200"
          y="300"
          textAnchor="middle"
          fill="#f87171"
          fontSize="12"
          fontFamily="monospace"
          animate={{
            opacity: [0, 0, 0, 1, 1, 0],
          }}
          transition={{
            duration: 8,
            times: [0, 0.3, 0.4, 0.5, 0.7, 1],
            repeat: Infinity,
          }}
        >
          Shape Lost!
        </motion.text>
      </svg>
    </div>
  );
}
