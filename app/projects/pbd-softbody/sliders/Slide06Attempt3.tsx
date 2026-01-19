'use client';

import { motion } from 'framer-motion';

export default function Slide06Attempt3() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 pt-20 pb-28">
      {/* 왼쪽: 애니메이션 */}
      <div className="w-[45%] h-full flex items-center justify-center">
        <div className="relative w-full h-[80%] border-2 border-yellow-500/30 rounded-2xl bg-yellow-950/20 overflow-hidden">
          <DistanceConstraintsAnimation />

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
              <span className="text-7xl">⚠️</span>
              <span className="text-yellow-400 font-mono text-2xl font-bold">PARTIAL</span>
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
          <h2 className="text-5xl font-bold text-yellow-400 font-mono mb-3">Attempt #3</h2>
          <p className="text-xl text-gray-300 font-mono">Distance Constraints Only</p>
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
              <h3 className="text-base font-bold text-blue-400 font-mono mb-2">단순화된 접근</h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• Verlet + 거리 제약만 사용</li>
                <li>• 각 엣지의 길이만 유지</li>
                <li>• 반복적으로 보정 (Iterative Solving)</li>
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
              <h3 className="text-base font-bold text-purple-400 font-mono mb-2">왜 Distance Constraints?</h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• <span className="text-purple-400">단순함</span>: 엣지 길이만 유지</li>
                <li>• <span className="text-purple-400">빠름</span>: O(n) 복잡도</li>
                <li>• <span className="text-purple-400">작동함</span>: 더 이상 폭발 안 함</li>
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
              <h3 className="text-base font-bold text-orange-400 font-mono mb-2">대안 제약들</h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• <span className="text-orange-400">Bending Constraints</span>: 구현 복잡, 느림</li>
                <li>• <span className="text-orange-400">Volume Constraints</span>: 부피 계산 오버헤드</li>
                <li>• <span className="text-orange-400">Area Preservation</span>: 삼각형마다 계산</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-4 bg-green-950/30 border border-green-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">✔</div>
            <div>
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">성공한 점</h3>
              <ul className="space-y-1.5 text-gray-300 font-mono text-xs">
                <li>• <span className="text-green-400 font-bold">안정적으로 작동</span>: 폭발 없음</li>
                <li>• <span className="text-green-400 font-bold">72fps 달성</span>: 실시간 가능</li>
                <li>• <span className="text-green-400 font-bold">엣지 길이 유지</span>: 구조적 강성 확보</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-4 bg-orange-950/30 border-2 border-orange-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚠️</div>
            <div>
              <h3 className="text-base font-bold text-orange-400 font-mono mb-2">문제점</h3>
              <ul className="space-y-1.5 text-gray-300 font-mono text-xs">
                <li>• <span className="text-orange-400 font-bold">전체 형태 손실</span>: 부분은 유지, 전체는 뭉개짐</li>
                <li>• <span className="text-orange-400 font-bold">Shape Matching 필요</span>: 글로벌 제약 부재</li>
                <li>• 엣지는 OK, 전체 형태는 NG</li>
                <li>• 납작해지거나 비틀림</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-4 bg-yellow-950/30 border-l-4 border-yellow-500 rounded-r-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <p className="text-gray-300 font-mono text-xs italic leading-relaxed">
            "Local Constraints는 성공, Global Constraint 필요 → <span className="text-yellow-400 font-bold">Shape Matching 추가!</span>"
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function DistanceConstraintsAnimation() {
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
        {/* Edge constraints - 유지됨 */}
        {[...Array(particleCount)].map((_, i) => {
          const nextI = (i + 1) % particleCount;
          
          return (
            <motion.line
              key={`edge-${i}`}
              x1={points[i].x}
              y1={points[i].y}
              x2={points[nextI].x}
              y2={points[nextI].y}
              stroke="#22c55e"
              strokeWidth="2"
              animate={{
                opacity: [0.3, 0.8, 0.8, 0.8],
                strokeWidth: [2, 2, 2, 2],
              }}
              transition={{
                duration: 8,
                times: [0, 0.3, 0.6, 1],
                repeat: Infinity,
              }}
            />
          );
        })}

        {/* Particles - 전체적으로 뭉개짐 */}
        {points.map((p, i) => {
          const squashY = i < particleCount / 2 ? -20 : 20;
          
          return (
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
                  'rgb(6, 182, 212)',
                  'rgb(234, 179, 8)',
                ],
                cy: [p.y, p.y, p.y + squashY, p.y + squashY],
                r: [6, 6, 7, 7],
              }}
              transition={{
                duration: 8,
                times: [0, 0.3, 0.5, 1],
                repeat: Infinity,
                delay: i * 0.05,
              }}
            />
          );
        })}

        {/* Edge lengths OK 표시 */}
        <motion.text
          x="200"
          y="280"
          textAnchor="middle"
          fill="#22c55e"
          fontSize="11"
          fontFamily="monospace"
          animate={{
            opacity: [0, 0, 1, 1, 1, 0],
          }}
          transition={{
            duration: 8,
            times: [0, 0.25, 0.3, 0.45, 0.6, 1],
            repeat: Infinity,
          }}
        >
          ✓ Edge Lengths OK
        </motion.text>

        {/* Global shape NG 표시 */}
        <motion.text
          x="200"
          y="300"
          textAnchor="middle"
          fill="#f97316"
          fontSize="11"
          fontFamily="monospace"
          animate={{
            opacity: [0, 0, 0, 0, 1, 1, 0],
          }}
          transition={{
            duration: 8,
            times: [0, 0.4, 0.45, 0.5, 0.55, 0.7, 1],
            repeat: Infinity,
          }}
        >
          ⚠ Global Shape Lost
        </motion.text>
      </svg>
    </div>
  );
}
