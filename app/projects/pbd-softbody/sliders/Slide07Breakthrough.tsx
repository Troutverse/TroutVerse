'use client';

import { motion } from 'framer-motion';

export default function Slide07Breakthrough() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 pt-20 pb-28">
      {/* 왼쪽: 애니메이션 */}
      <div className="w-[45%] h-full flex items-center justify-center">
        <div className="relative w-full h-[80%] border-2 border-green-500/30 rounded-2xl bg-green-950/20 overflow-hidden">
          <PBDShapeMatchingAnimation />

          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{
              opacity: [0, 0, 0, 0, 1, 1, 0],
              scale: [0, 0, 0, 0, 1.2, 1, 0],
            }}
            transition={{
              duration: 10,
              times: [0, 0.5, 0.6, 0.65, 0.7, 0.85, 1],
              repeat: Infinity,
            }}
          >
            <div className="flex flex-col items-center gap-4">
              <span className="text-8xl">✨</span>
              <span className="text-green-400 font-mono text-3xl font-bold">SUCCESS</span>
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
          <h2 className="text-5xl font-bold text-green-400 font-mono mb-3">Breakthrough!</h2>
          <p className="text-xl text-gray-300 font-mono">PBD + Shape Matching</p>
        </motion.div>

        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <h3 className="text-base font-bold text-blue-400 font-mono mb-2">결정적 발견</h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• <span className="text-cyan-400 font-bold">Local Constraints</span> (Distance): 엣지 길이 유지</li>
                <li>• <span className="text-purple-400 font-bold">Global Constraint</span> (Shape Matching): 전체 형태 복원</li>
                <li>• 두 가지 조합으로 완벽한 시뮬레이션!</li>
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
            <div className="text-2xl">🔬</div>
            <div>
              <h3 className="text-base font-bold text-purple-400 font-mono mb-2">Shape Matching 원리</h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• <span className="text-purple-400">원래 형태 기억</span>: Rest Configuration 저장</li>
                <li>• <span className="text-purple-400">Polar Decomposition</span>: 회전 행렬 추출</li>
                <li>• <span className="text-purple-400">목표 위치 계산</span>: 원래 형태로 당김</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-purple-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">📐</div>
            <div>
              <h3 className="text-base font-bold text-purple-400 font-mono mb-2">수학적 배경</h3>
              <div className="space-y-2 text-gray-400 font-mono text-xs">
                <div className="bg-black/30 p-2 rounded">
                  <code>1. cm = Σ(p_i · m_i) / Σm_i</code>
                  <div className="text-gray-500 text-[10px] mt-1">질량중심 계산</div>
                </div>
                <div className="bg-black/30 p-2 rounded">
                  <code>2. A = Σ[(p_i - cm) ⊗ q_i · m_i]</code>
                  <div className="text-gray-500 text-[10px] mt-1">변형 행렬</div>
                </div>
                <div className="bg-black/30 p-2 rounded">
                  <code>3. A = R · S (Polar Decomp.)</code>
                  <div className="text-gray-500 text-[10px] mt-1">회전 추출</div>
                </div>
                <div className="bg-black/30 p-2 rounded">
                  <code>4. goal_i = cm + R · q_i</code>
                  <div className="text-gray-500 text-[10px] mt-1">목표 위치</div>
                </div>
                <div className="bg-black/30 p-2 rounded">
                  <code>5. p_i += (goal - p_i) · stiffness</code>
                  <div className="text-gray-500 text-[10px] mt-1">보정 적용</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-4 bg-green-950/30 border-2 border-green-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">✔</div>
            <div>
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">왜 완벽한가?</h3>
              <ul className="space-y-1.5 text-gray-300 font-mono text-xs">
                <li>• <span className="text-green-400 font-bold">안정적</span>: 폭발 없음</li>
                <li>• <span className="text-green-400 font-bold">형태 유지</span>: 원래 모양으로 복원</li>
                <li>• <span className="text-green-400 font-bold">빠름</span>: 72fps 달성</li>
                <li>• <span className="text-green-400 font-bold">자연스러움</span>: 부드러운 변형</li>
                <li>• 모든 문제 해결!</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-cyan-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚙️</div>
            <div>
              <h3 className="text-base font-bold text-cyan-400 font-mono mb-2">핵심 파라미터</h3>
              <ul className="space-y-1.5 text-gray-300 font-mono text-xs">
                <li>• <span className="text-cyan-400">DistanceStiffness</span>: 0.9 (엣지 강도)</li>
                <li>• <span className="text-cyan-400">ShapeMatchingStiffness</span>: 0.1 (형태 복원)</li>
                <li>• <span className="text-cyan-400">NumSubsteps</span>: 5 (안정성)</li>
                <li>• <span className="text-cyan-400">Mass</span>: 1.0 (파티클 질량)</li>
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
            "Local + Global의 완벽한 조합 → <span className="text-yellow-400 font-bold">Position Based Dynamics 완성!</span>"
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function PBDShapeMatchingAnimation() {
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
        {/* Distance Constraints - 초록색 엣지 */}
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
                opacity: [0, 0.3, 0.8, 0.8, 0.8],
              }}
              transition={{
                duration: 10,
                times: [0, 0.2, 0.3, 0.7, 1],
                repeat: Infinity,
              }}
            />
          );
        })}

        {/* Shape Matching - 보라색 원형 가이드 */}
        <motion.circle
          cx="200"
          cy="170"
          r={radius}
          fill="none"
          stroke="#a855f7"
          strokeWidth="1"
          strokeDasharray="5,5"
          animate={{
            opacity: [0, 0, 0, 0, 0.5, 0.5, 0.5],
          }}
          transition={{
            duration: 10,
            times: [0, 0.3, 0.35, 0.4, 0.45, 0.7, 1],
            repeat: Infinity,
          }}
        />

        {/* Particles */}
        {points.map((p, i) => {
          const squashY = i < particleCount / 2 ? -25 : 25;
          
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
                  'rgb(234, 179, 8)',
                  'rgb(168, 85, 247)',
                  'rgb(34, 197, 94)',
                  'rgb(34, 197, 94)',
                ],
                cy: [p.y, p.y, p.y + squashY, p.y + squashY * 0.5, p.y, p.y],
                r: [6, 6, 7, 7, 8, 8],
              }}
              transition={{
                duration: 10,
                times: [0, 0.2, 0.35, 0.5, 0.65, 1],
                repeat: Infinity,
                delay: i * 0.03,
              }}
            />
          );
        })}

        {/* Distance Constraints 라벨 */}
        <motion.text
          x="200"
          y="280"
          textAnchor="middle"
          fill="#22c55e"
          fontSize="11"
          fontFamily="monospace"
          animate={{
            opacity: [0, 0, 1, 1, 1, 0.5],
          }}
          transition={{
            duration: 10,
            times: [0, 0.25, 0.3, 0.4, 0.7, 1],
            repeat: Infinity,
          }}
        >
          ✓ Distance Constraints
        </motion.text>

        {/* Shape Matching 라벨 */}
        <motion.text
          x="200"
          y="300"
          textAnchor="middle"
          fill="#a855f7"
          fontSize="11"
          fontFamily="monospace"
          animate={{
            opacity: [0, 0, 0, 0, 1, 1, 0.5],
          }}
          transition={{
            duration: 10,
            times: [0, 0.35, 0.4, 0.45, 0.5, 0.7, 1],
            repeat: Infinity,
          }}
        >
          ✓ Shape Matching
        </motion.text>

        {/* Perfect! 라벨 */}
        <motion.text
          x="200"
          y="320"
          textAnchor="middle"
          fill="#22c55e"
          fontSize="12"
          fontFamily="monospace"
          fontWeight="bold"
          animate={{
            opacity: [0, 0, 0, 0, 0, 0, 1, 1],
            scale: [0, 0, 0, 0, 0, 0, 1.2, 1],
          }}
          transition={{
            duration: 10,
            times: [0, 0.55, 0.6, 0.62, 0.64, 0.66, 0.68, 1],
            repeat: Infinity,
          }}
          style={{ transformOrigin: '200px 320px' }}
        >
          🎯 Perfect!
        </motion.text>
      </svg>
    </div>
  );
}
