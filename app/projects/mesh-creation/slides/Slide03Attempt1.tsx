'use client';

import { motion } from 'framer-motion';

export default function Slide03Attempt1() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16 pb-32">
      {/* 왼쪽: Point Cloud 애니메이션 */}
      <div className="w-[45%] h-full flex items-center justify-center">
        <div className="relative w-full h-[80%] border-2 border-red-500/30 rounded-2xl bg-red-950/20 overflow-hidden">
          <PointCloudAnimation />

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
          <h2 className="text-5xl font-bold text-red-400 font-mono mb-3">Attempt #1</h2>
          <p className="text-xl text-red-300 font-mono">
            Point Cloud Reconstruction
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
              <h3 className="text-base font-bold text-blue-400 font-mono mb-2">초기 아이디어</h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• Boundary 정점들을 점 구름으로 취급</li>
                <li>• Delaunay Triangulation 적용</li>
                <li>• 자동으로 최적 삼각형 생성</li>
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
                <li>• <span className="text-purple-400">학술적으로 검증됨</span>: 논문에서 많이 사용</li>
                <li>• <span className="text-purple-400">이론적으로 완벽</span>: 최적의 삼각형 보장</li>
                <li>• 다른 대안: Ear Clipping (복잡), Sweep Line (2D 한정)</li>
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
              <h3 className="text-base font-bold text-orange-400 font-mono mb-2">대안들의 문제</h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• <span className="text-orange-400">Ear Clipping</span>: O(n²) 복잡도, 느림</li>
                <li>• <span className="text-orange-400">Sweep Line</span>: 3D에서 작동 안 함</li>
                <li>• <span className="text-orange-400">Constrained Delaunay</span>: 더 복잡함</li>
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
                <li>• <span className="text-red-400 font-bold">너무 복잡함</span>: 구현 난이도 높음</li>
                <li>• <span className="text-red-400 font-bold">성능 문제</span>: 이상한 메쉬의 삼각형 생성</li>
                <li>• <span className="text-red-400 font-bold">실시간 불가능</span>: 목표 1ms 대비 50배 느림</li>
                <li>• Unity에 라이브러리 부재</li>
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
            "학술적으로 완벽한 방법이 실무에서 항상 좋은 건 아님 → <span className="text-yellow-400 font-bold">더 단순한 접근 필요</span>"
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function PointCloudAnimation() {
  const points = [...Array(12)].map((_, i) => {
    const angle = (i * Math.PI * 2) / 12;
    const radius = 60;
    return {
      x: 200 + Math.cos(angle) * radius,
      y: 170 + Math.sin(angle) * radius,
    };
  });

  const goodTriangles = [
    [0, 1, 2],
    [2, 3, 4],
    [4, 5, 6],
  ];

  const badTriangles = [
    [0, 4, 8],
    [1, 6, 10],
    [2, 7, 11],
    [3, 8, 0],
    [5, 10, 2],
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg className="absolute inset-0" viewBox="0 0 400 400">
        {goodTriangles.map((tri, i) => (
          <motion.path
            key={`good-${i}`}
            d={`M ${points[tri[0]].x} ${points[tri[0]].y} L ${points[tri[1]].x} ${points[tri[1]].y} L ${points[tri[2]].x} ${points[tri[2]].y} Z`}
            fill="rgba(34, 197, 94, 0.3)"
            stroke="#22c55e"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0, 0.3, 0.3, 0.3, 0, 0, 0],
            }}
            transition={{
              duration: 8,
              times: [0, 0.125 + i * 0.1, 0.15 + i * 0.1, 0.625, 0.75, 0.875, 0.9, 1],
              repeat: Infinity,
            }}
          />
        ))}

        {badTriangles.map((tri, i) => (
          <motion.path
            key={`bad-${i}`}
            d={`M ${points[tri[0]].x} ${points[tri[0]].y} L ${points[tri[1]].x} ${points[tri[1]].y} L ${points[tri[2]].x} ${points[tri[2]].y} Z`}
            stroke="#ef4444"
            strokeWidth="2"
            initial={{ opacity: 0 }}
            animate={{
              fill: [
                'rgba(234, 179, 8, 0)',
                'rgba(234, 179, 8, 0)',
                'rgba(234, 179, 8, 0.3)',
                'rgba(249, 115, 22, 0.35)',
                'rgba(239, 68, 68, 0.4)',
                'rgba(239, 68, 68, 0.4)',
                'rgba(239, 68, 68, 0.6)',
                'rgba(239, 68, 68, 0)',
              ],
              opacity: [0, 0, 0, 0.4, 0.6, 0.4, 0.6, 0],
            }}
            transition={{
              duration: 8,
              times: [0, 0.375 + i * 0.08, 0.4 + i * 0.08, 0.5, 0.625, 0.75, 0.875, 1],
              repeat: Infinity,
            }}
          />
        ))}

        {points.map((p, i) => (
          <motion.circle
            key={`point-${i}`}
            cx={p.x}
            cy={p.y}
            r="6"
            style={{ filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.8))' }}
            animate={{
              fill: [
                'rgb(34, 211, 238)',
                'rgb(34, 211, 238)',
                'rgb(34, 211, 238)',
                'rgb(34, 211, 238)',
                'rgb(34, 211, 238)',
                'rgb(34, 211, 238)',
                'rgb(239, 68, 68)',
                'rgb(239, 68, 68)',
              ],
              r: [6, 8, 6],
            }}
            transition={{
              fill: {
                duration: 8,
                times: [0, 0.5, 0.625, 0.75, 0.8, 0.875, 0.9, 1],
                repeat: Infinity,
              },
              r: {
                duration: 2,
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
            opacity: [0, 0, 1, 1, 1, 0, 0, 0],
          }}
          transition={{
            duration: 8,
            times: [0, 0.125, 0.15, 0.5, 0.625, 0.75, 0.8, 1],
            repeat: Infinity,
          }}
        >
          Processing: ~50ms
        </motion.text>

        <motion.text
          x="200"
          y="300"
          textAnchor="middle"
          fill="#f87171"
          fontSize="12"
          fontFamily="monospace"
          animate={{
            opacity: [0, 0, 0, 0, 0, 0, 1, 1, 0],
          }}
          transition={{
            duration: 8,
            times: [0, 0.625, 0.7, 0.72, 0.75, 0.8, 0.82, 0.875, 1],
            repeat: Infinity,
          }}
        >
          Invalid Triangles Detected
        </motion.text>

      </svg>
    </div>
  );
}