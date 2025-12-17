'use client';

import { motion } from 'framer-motion';

export default function Slide04Attempt2() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16 pb-32">
      <div className="w-[45%] h-full flex items-center justify-center">
        <div className="relative w-full h-[80%] border-2 border-red-500/30 rounded-2xl bg-red-950/20 overflow-hidden">
          <EarClippingAnimation />

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
              <span className="text-8xl">❌</span>
              <span className="text-red-400 font-mono text-3xl font-bold">FAILED</span>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-4 right-4 px-4 py-2 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-lg"
            animate={{
              opacity: [0, 0, 0, 0, 0, 1, 1, 0],
            }}
            transition={{
              duration: 8,
              times: [0, 0.5, 0.6, 0.62, 0.625, 0.65, 0.75, 1],
              repeat: Infinity,
            }}
          >
            <span className="text-red-400 font-mono text-xs">Loop Not Closed!</span>
          </motion.div>
        </div>
      </div>

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
          <p className="text-xl text-red-300 font-mono">
            Ear Clipping Algorithm
          </p>
        </motion.div>

        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">📍</div>
            <div>
              <h3 className="text-base font-bold text-blue-400 font-mono mb-2">개선된 아이디어</h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• Boundary Loop을 순차적으로 추출</li>
                <li>• Ear Clipping으로 삼각형화</li>
                <li>• 표준 알고리즘으로 안정성 확보</li>
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
              <h3 className="text-base font-bold text-purple-400 font-mono mb-2">왜 Ear Clipping?</h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• <span className="text-purple-400">단순함</span>: Delaunay보다 구현 쉬움</li>
                <li>• <span className="text-purple-400">2D 변환 가능</span>: Plane projection 적용</li>
                <li>• <span className="text-purple-400">안정성</span>: 잘 알려진 알고리즘</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-4 bg-orange-950/30 border border-orange-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚠️</div>
            <div>
              <h3 className="text-base font-bold text-orange-400 font-mono mb-2">다른 방법들</h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• <span className="text-orange-400">Monotone Polygon</span>: Boundary가 단조롭지 않음</li>
                <li>• <span className="text-orange-400">Greedy Triangulation</span>: 품질 보장 없음</li>
                <li>• <span className="text-orange-400">Constrained Delaunay</span>: 여전히 복잡</li>
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
              <h3 className="text-base font-bold text-red-400 font-mono mb-2">치명적 문제</h3>
              <ul className="space-y-1.5 text-gray-300 font-mono text-xs">
                <li>• <span className="text-red-400 font-bold">Boundary Loop이 닫히지 않음</span></li>
                <li>• Floating point 오차로 인한 불일치</li>
                <li>• Vector3를 Dictionary Key로 사용 → 실패</li>
                <li>• GetHashCode() 불안정</li>
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
          <p className="text-gray-300 font-mono text-lg italic leading-relaxed">
            "Floating point 정밀도 문제의 심각성. Vector3를 Dictionary key로 절대 사용 금지 → <span className="text-yellow-400 font-bold">다른 방식의 Loop 추출 필요</span>"
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function EarClippingAnimation() {
  const points = [...Array(10)].map((_, i) => {
    const angle = (i * Math.PI * 2) / 10;
    const radius = 70;
    return {
      x: 200 + Math.cos(angle) * radius,
      y: 170 + Math.sin(angle) * radius,
    };
  });

  const ears = [
    [0, 1, 2],
    [2, 3, 4],
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg className="absolute inset-0" viewBox="0 0 400 400">
        {[...Array(9)].map((_, i) => (
          <motion.line
            key={`line-${i}`}
            x1={points[i].x}
            y1={points[i].y}
            x2={points[i + 1].x}
            y2={points[i + 1].y}
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 0, 1, 1, 1, 1, 1, 1],
              opacity: [0, 0, 1, 1, 1, 1, 1, 0],
              stroke: [
                '#22c55e',
                '#22c55e',
                '#22c55e',
                '#22c55e',
                '#22c55e',
                '#ef4444',
                '#ef4444',
                '#ef4444',
              ],
            }}
            transition={{
              duration: 8,
              times: [0, 0.05 + i * 0.15, 0.1 + i * 0.15, 0.5, 0.625, 0.65, 0.75, 1],
              repeat: Infinity,
            }}
          />
        ))}

        <motion.line
          x1={points[9].x}
          y1={points[9].y}
          x2={points[0].x}
          y2={points[0].y}
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0, 0, 0, 1, 1, 1, 0],
            stroke: ['#ef4444', '#ef4444', '#ef4444', '#ef4444', '#ef4444', '#ef4444', '#ef4444', '#ef4444'],
          }}
          transition={{
            duration: 8,
            times: [0, 0.2, 0.24, 0.25, 0.27, 0.5, 0.75, 1],
            repeat: Infinity,
          }}
        />

        {ears.map((tri, i) => (
          <motion.path
            key={`ear-${i}`}
            d={`M ${points[tri[0]].x} ${points[tri[0]].y} L ${points[tri[1]].x} ${points[tri[1]].y} L ${points[tri[2]].x} ${points[tri[2]].y} Z`}
            fill="rgba(234, 179, 8, 0.2)"
            stroke="#eab308"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0, 0, 0, 0, 0.3, 0, 0, 0],
            }}
            transition={{
              duration: 8,
              times: [0, 0.48, 0.49, 0.5, 0.51, 0.53, 0.55, 0.6, 1],
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}

        {points.map((p, i) => (
          <motion.circle
            key={`point-${i}`}
            cx={p.x}
            cy={p.y}
            r="6"
            style={{ filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.8))' }}
            animate={{
              fill: i === 9
                ? [
                    'rgb(6, 182, 212)',
                    'rgb(6, 182, 212)',
                    'rgb(6, 182, 212)',
                    'rgb(239, 68, 68)',
                    'rgb(239, 68, 68)',
                    'rgb(239, 68, 68)',
                    'rgb(239, 68, 68)',
                    'rgb(239, 68, 68)',
                  ]
                : [
                    'rgb(6, 182, 212)',
                    'rgb(6, 182, 212)',
                    'rgb(6, 182, 212)',
                    'rgb(6, 182, 212)',
                    'rgb(6, 182, 212)',
                    'rgb(239, 68, 68)',
                    'rgb(239, 68, 68)',
                    'rgb(239, 68, 68)',
                  ],
              r: i === 9 ? [6, 6, 6, 8, 6, 8, 6, 6] : [6, 8, 6],
            }}
            transition={{
              fill: {
                duration: 8,
                times: [0, 0.24, 0.25, 0.27, 0.5, 0.625, 0.75, 1],
                repeat: Infinity,
              },
              r: {
                duration: i === 9 ? 8 : 2,
                repeat: Infinity,
              },
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
            opacity: [0, 0, 0, 0, 1, 1, 0, 0],
          }}
          transition={{
            duration: 8,
            times: [0, 0.24, 0.25, 0.27, 0.3, 0.5, 0.6, 1],
            repeat: Infinity,
          }}
        >
          Gap: 0.0001 units
        </motion.text>
      </svg>
    </div>
  );
}