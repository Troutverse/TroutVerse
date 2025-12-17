'use client';

import { motion } from 'framer-motion';

export default function Slide03Attempt1() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-10 pb-30">
      {/* 왼쪽: 애니메이션 (45%) */}
      <div className="w-[45%] h-full flex items-center justify-center">
        <div className="relative w-full h-[80%] border-2 border-red-500/30 rounded-2xl bg-red-950/20 overflow-hidden">
          <SpringMassAnimation />

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
              <span className="text-8xl">💥</span>
              <span className="text-red-400 font-mono text-3xl font-bold">EXPLODED</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 오른쪽: 설명 (55%) */}
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
          <h2 className="text-5xl font-bold text-red-400 font-mono mb-3">Attempt #1</h2>
          <p className="text-xl text-gray-300 font-mono">Spring-Mass System</p>
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
              <h3 className="text-base font-bold text-blue-400 font-mono mb-2">초기 아이디어</h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 파티클들을 스프링으로 연결</li>
                <li>• Hooke's Law: F = -k × Δx</li>
                <li>• 질량-스프링 모델 적용</li>
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
              <h3 className="text-base font-bold text-purple-400 font-mono mb-2">왜 이 방법을?</h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• <span className="text-purple-400">직관적</span>: 물리학 101 - Hooke's Law</li>
                <li>• <span className="text-purple-400">구현 쉬움</span>: 간단한 공식</li>
                <li>• <span className="text-purple-400">널리 사용</span>: 천 시뮬레이션 기본</li>
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
                <li>• <span className="text-orange-400">FEM</span>: 너무 복잡, 실시간 불가능</li>
                <li>• <span className="text-orange-400">Bullet Physics</span>: Unity 통합 어려움</li>
                <li>• <span className="text-orange-400">Havok</span>: 라이선스 문제</li>
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
                <li>• <span className="text-red-400 font-bold">불안정함</span>: 스프링 상수 조절 지옥</li>
                <li>• <span className="text-red-400 font-bold">폭발 현상</span>: Time step 민감</li>
                <li>• <span className="text-red-400 font-bold">성능 문제</span>: 매 프레임 수천 개 스프링 계산</li>
                <li>• Stiffness 높이면 → 폭발</li>
                <li>• Stiffness 낮추면 → 흐물흐물</li>
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
            "물리학적으로는 맞지만 수치 안정성이 최악 → <span className="text-yellow-400 font-bold">다른 접근 필요</span>"
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function SpringMassAnimation() {
  const particleCount = 6;
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
              key={`spring-${i}`}
              x1={points[i].x}
              y1={points[i].y}
              x2={points[nextI].x}
              y2={points[nextI].y}
              stroke="#eab308"
              strokeWidth="2"
              strokeDasharray="5,5"
              animate={{
                opacity: [0, 0.3, 0.8, 0.8, 1, 0],
                strokeWidth: [2, 2, 2, 4, 8, 0],
              }}
              transition={{
                duration: 8,
                times: [0, 0.2, 0.4, 0.5, 0.6, 1],
                repeat: Infinity,
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
              fill: [
                'rgb(6, 182, 212)',
                'rgb(6, 182, 212)',
                'rgb(234, 179, 8)',
                'rgb(239, 68, 68)',
                'rgb(239, 68, 68)',
                'rgb(239, 68, 68)',
              ],
              r: [6, 6, 8, 12, 20, 0],
              cx: [p.x, p.x, p.x + (Math.random() - 0.5) * 50, p.x + (Math.random() - 0.5) * 150, p.x + (Math.random() - 0.5) * 300, p.x],
              cy: [p.y, p.y, p.y + (Math.random() - 0.5) * 50, p.y + (Math.random() - 0.5) * 150, p.y + (Math.random() - 0.5) * 300, p.y],
            }}
            transition={{
              duration: 8,
              times: [0, 0.3, 0.4, 0.5, 0.65, 1],
              repeat: Infinity,
              delay: i * 0.05,
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
            opacity: [0, 0, 0, 0, 1, 1, 0],
          }}
          transition={{
            duration: 8,
            times: [0, 0.4, 0.45, 0.5, 0.55, 0.65, 1],
            repeat: Infinity,
          }}
        >
          Numerical Instability!
        </motion.text>
      </svg>
    </div>
  );
}
