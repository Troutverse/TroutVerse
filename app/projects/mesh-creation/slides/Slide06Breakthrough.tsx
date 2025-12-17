'use client';

import { motion } from 'framer-motion';

export default function Slide06Breakthrough() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16 pb-32">
      <div className="w-[45%] h-full flex flex-col justify-center gap-6">
        <div className="relative h-[42%] border-2 border-red-500/30 rounded-2xl bg-red-950/20 overflow-hidden">
          <IndexBasedAnimation />
          
          <motion.div
            className="absolute top-4 left-4 px-4 py-2 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-red-400 font-mono text-sm">Index 기반</p>
          </motion.div>
        </div>

        <div className="relative flex items-center py-2">
          <div className="flex-1 h-px bg-gray-700"></div>
          <div className="mx-4 text-2xl text-green-500 font-bold">→</div>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        <div className="relative h-[42%] border-2 border-green-500/30 rounded-2xl bg-green-950/20 overflow-hidden">
          <ArcLengthAnimation />
          
          <motion.div
            className="absolute top-4 left-4 px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-green-400 font-mono text-sm">Arc-length 기반</p>
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
          <h2 className="text-5xl font-bold text-green-400 font-mono mb-3">
            Breakthrough
          </h2>
          <p className="text-xl text-green-300 font-mono">
            Arc-length Based Triangulation
          </p>
        </motion.div>

        <motion.div
          className="p-4 bg-yellow-950/30 border-2 border-yellow-500/70 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-3xl">💡</div>
            <div>
              <h3 className="text-base font-bold text-yellow-400 font-mono mb-2">결정적 발견</h3>
              <p className="text-gray-300 font-mono text-xs leading-relaxed">
                정점의 <span className="text-red-400">인덱스 순서</span>가 아닌<br />
                <span className="text-green-400 font-bold">실제 거리(Arc-length)</span>로 정렬하면<br />
                자연스러운 삼각형 생성!
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-red-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">❌</div>
            <div>
              <h3 className="text-base font-bold text-red-400 font-mono mb-2">Index 기반의 문제</h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 정점 배열 순서 ≠ 실제 공간 순서</li>
                <li>• 멀리 떨어진 점들끼리 연결</li>
                <li>• 부자연스러운 삼각형 생성</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-green-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">✓</div>
            <div>
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">Arc-length 해결책</h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 중심점에서 각 정점까지 실제 거리 계산</li>
                <li>• 거리 순으로 정렬</li>
                <li>• 인접한 점들끼리만 연결</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-4 bg-green-950/30 border-2 border-green-500/70 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🎯</div>
            <div>
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">완벽한 결과</h3>
              <ul className="space-y-1.5 text-gray-300 font-mono text-xs">
                <li>• <span className="text-green-400 font-bold">자연스러운</span> 삼각형 배치</li>
                <li>• <span className="text-green-400 font-bold">시각적으로</span> 완벽함</li>
                <li>• <span className="text-green-400 font-bold">성능</span>: ~1ms</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-4 bg-green-950/30 border-l-4 border-green-500 rounded-r-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p className="text-gray-300 font-mono text-xs italic leading-relaxed">
            "공간적 정보를 활용하는 것이 핵심. 단순한 정렬 방식 변경으로 완벽한 해결!"
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function IndexBasedAnimation() {
  const points = [
    { x: 0, y: -60, idx: 0 },
    { x: 50, y: -40, idx: 1 },
    { x: 70, y: 10, idx: 2 },
    { x: 40, y: 60, idx: 3 },
    { x: -40, y: 60, idx: 4 },
    { x: -70, y: 10, idx: 5 },
    { x: -50, y: -40, idx: 6 },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute w-3 h-3 bg-red-400 rounded-full z-10" />

      {points.map((p) => (
        <div
          key={p.idx}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full"
          style={{
            left: `calc(50% + ${p.x}px)`,
            top: `calc(50% + ${p.y}px)`,
          }}
        />
      ))}

      {points.map((p, i) => {
        const next = points[(i + 1) % points.length];
        return (
          <motion.svg
            key={`line-${i}`}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 0.5, 0.5] }}
            transition={{
              duration: 6,
              times: [0, 0.3, 0.4, 1],
              repeat: Infinity,
              delay: i * 0.1,
            }}
          >
            <line
              x1={`calc(50% + ${p.x}px)`}
              y1={`calc(50% + ${p.y}px)`}
              x2={`calc(50% + ${next.x}px)`}
              y2={`calc(50% + ${next.y}px)`}
              stroke="#ef4444"
              strokeWidth="1"
              strokeDasharray="3,3"
            />
          </motion.svg>
        );
      })}
    </div>
  );
}

function ArcLengthAnimation() {
  const points = [
    { x: 0, y: -60 },
    { x: 50, y: -40 },
    { x: 70, y: 10 },
    { x: 40, y: 60 },
    { x: -40, y: 60 },
    { x: -70, y: 10 },
    { x: -50, y: -40 },
  ].sort((a, b) => {
    const angleA = Math.atan2(a.y, a.x);
    const angleB = Math.atan2(b.y, b.x);
    return angleA - angleB;
  });

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute w-3 h-3 bg-green-400 rounded-full z-10" />

      {points.map((p, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full"
          style={{
            left: `calc(50% + ${p.x}px)`,
            top: `calc(50% + ${p.y}px)`,
          }}
        />
      ))}

      {points.map((p, i) => {
        const next = points[(i + 1) % points.length];
        return (
          <motion.svg
            key={`line-${i}`}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 1, 1] }}
            transition={{
              duration: 6,
              times: [0, 0.3, 0.4, 1],
              repeat: Infinity,
              delay: i * 0.1,
            }}
          >
            <line
              x1={`calc(50% + ${p.x}px)`}
              y1={`calc(50% + ${p.y}px)`}
              x2={`calc(50% + ${next.x}px)`}
              y2={`calc(50% + ${next.y}px)`}
              stroke="#22c55e"
              strokeWidth="2"
            />
          </motion.svg>
        );
      })}
    </div>
  );
}
