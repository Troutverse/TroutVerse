'use client';

import { motion } from 'framer-motion';

export default function Slide05Attempt3() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16 pb-32">
      <div className="w-[45%] h-full flex items-center justify-center">
        <div className="relative w-full h-[80%] border-2 border-yellow-500/30 rounded-2xl bg-yellow-950/20 overflow-hidden">
          <FanTriangulationAnimation />

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
          <p className="text-xl text-yellow-300 font-mono">
            Fan Triangulation (부채꼴 방식)
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
              <h3 className="text-base font-bold text-blue-400 font-mono mb-2">단순화된 아이디어</h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• Boundary 정점들의 중심점 계산</li>
                <li>• 중심점에서 각 정점으로 방사형 연결</li>
                <li>• 부채꼴(Fan) 모양의 삼각형 생성</li>
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
              <h3 className="text-base font-bold text-purple-400 font-mono mb-2">왜 Fan 방식?</h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• <span className="text-purple-400">극도로 단순</span>: 10줄 코드로 구현</li>
                <li>• <span className="text-purple-400">항상 작동</span>: Convex/Concave 무관</li>
                <li>• <span className="text-purple-400">빠름</span>: Loop 문제 완전 회피</li>
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
              <h3 className="text-base font-bold text-orange-400 font-mono mb-2">왜 복잡한 방법 포기?</h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• Delaunay: 구현 실패 (너무 복잡)</li>
                <li>• Ear Clipping: Loop 추출 실패 (Floating point)</li>
                <li>• → <span className="text-orange-400 font-bold">완전히 다른 접근 필요</span></li>
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
            <div className="text-2xl">✓</div>
            <div>
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">성공한 점</h3>
              <ul className="space-y-1.5 text-gray-300 font-mono text-xs">
                <li>• <span className="text-green-400 font-bold">매우 간단함</span>: 코드 10줄</li>
                <li>• <span className="text-green-400 font-bold">안정적</span>: 항상 작동</li>
                <li>• <span className="text-green-400 font-bold">빠름</span>: ~0.5ms</li>
                <li>• Loop 닫힘 문제 해결</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-4 bg-orange-950/30 border border-orange-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚠️</div>
            <div>
              <h3 className="text-base font-bold text-orange-400 font-mono mb-2">문제점</h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 부자연스러운 방사형 패턴</li>
                <li>• 중심점이 최적 위치가 아닐 수 있음</li>
                <li>• 시각적으로 인위적임</li>
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
            "간단한 해결책도 때로는 유효함. 하지만 더 나은 방법 존재"
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function FanTriangulationAnimation() {
  const vertexCount = 10;
  const points = [...Array(vertexCount)].map((_, i) => {
    const angle = (i * Math.PI * 2) / vertexCount;
    const radius = 70;
    return {
      x: 200 + Math.cos(angle) * radius,
      y: 170 + Math.sin(angle) * radius,
    };
  });

  const center = { x: 200, y: 170 };

  const problematicTriangles = [2, 5, 8];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg className="absolute inset-0" viewBox="0 0 400 400">
        {[...Array(vertexCount)].map((_, i) => {
          const nextI = (i + 1) % vertexCount;
          const isProblematic = problematicTriangles.includes(i);

          return (
            <motion.path
              key={`triangle-${i}`}
              d={`M ${center.x} ${center.y} L ${points[i].x} ${points[i].y} L ${points[nextI].x} ${points[nextI].y} Z`}
              strokeWidth="1"
              initial={{ opacity: 0 }}
              animate={{
                fill: isProblematic
                  ? [
                      'rgba(234, 179, 8, 0)',
                      'rgba(234, 179, 8, 0)',
                      'rgba(234, 179, 8, 0.3)',
                      'rgba(234, 179, 8, 0.3)',
                      'rgba(234, 179, 8, 0.3)',
                      'rgba(249, 115, 22, 0.5)',
                      'rgba(249, 115, 22, 0.5)',
                      'rgba(249, 115, 22, 0)',
                    ]
                  : [
                      'rgba(234, 179, 8, 0)',
                      'rgba(234, 179, 8, 0)',
                      'rgba(234, 179, 8, 0.3)',
                      'rgba(234, 179, 8, 0.3)',
                      'rgba(234, 179, 8, 0.3)',
                      'rgba(234, 179, 8, 0.3)',
                      'rgba(234, 179, 8, 0.3)',
                      'rgba(234, 179, 8, 0)',
                    ],
                stroke: isProblematic
                  ? ['#eab308', '#eab308', '#eab308', '#eab308', '#eab308', '#f97316', '#f97316', '#f97316']
                  : ['#eab308', '#eab308', '#eab308', '#eab308', '#eab308', '#eab308', '#eab308', '#eab308'],
                opacity: [0, 0, 1, 1, 1, 1, 1, 0],
              }}
              transition={{
                duration: 8,
                times: [0, 0.125 + i * 0.15, 0.2 + i * 0.15, 0.375, 0.5, 0.625, 0.75, 1],
                repeat: Infinity,
              }}
            />
          );
        })}

        {[...Array(vertexCount)].map((_, i) => (
          <motion.line
            key={`line-${i}`}
            x1={center.x}
            y1={center.y}
            x2={points[i].x}
            y2={points[i].y}
            stroke="#eab308"
            strokeWidth="1.5"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{
              opacity: [0, 0, 0.8, 0.8, 0.8, 0.8, 0.8, 0],
              pathLength: [0, 0, 1, 1, 1, 1, 1, 1],
            }}
            transition={{
              duration: 8,
              times: [0, 0.125 + i * 0.15, 0.2 + i * 0.15, 0.375, 0.5, 0.75, 0.875, 1],
              repeat: Infinity,
            }}
          />
        ))}

        <motion.circle
          cx={center.x}
          cy={center.y}
          r="6"
          style={{ filter: 'drop-shadow(0 0 15px rgba(234, 179, 8, 0.8))' }}
          animate={{
            fill: ['rgb(234, 179, 8)', 'rgb(234, 179, 8)', 'rgb(234, 179, 8)'],
            r: [6, 8, 6],
          }}
          transition={{
            fill: {
              duration: 8,
              repeat: Infinity,
            },
            r: {
              duration: 2,
              repeat: Infinity,
            },
          }}
        />

        {points.map((p, i) => (
          <motion.circle
            key={`point-${i}`}
            cx={p.x}
            cy={p.y}
            r="5"
            style={{ filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.8))' }}
            animate={{
              fill: ['rgb(6, 182, 212)', 'rgb(6, 182, 212)', 'rgb(6, 182, 212)'],
              r: [5, 7, 5],
            }}
            transition={{
              fill: {
                duration: 8,
                repeat: Infinity,
              },
              r: {
                duration: 2,
                delay: i * 0.1,
                repeat: Infinity,
              },
            }}
          />
        ))}

        <motion.text
          x="200"
          y="300"
          textAnchor="middle"
          fill="#22c55e"
          fontSize="12"
          fontFamily="monospace"
          animate={{
            opacity: [0, 0, 0, 0, 1, 1, 0, 0],
          }}
          transition={{
            duration: 8,
            times: [0, 0.35, 0.375, 0.4, 0.45, 0.5, 0.55, 1],
            repeat: Infinity,
          }}
        >
          ~0.5ms
        </motion.text>

        

        <motion.text
          x="200"
          y="300"
          textAnchor="middle"
          fill="#f97316"
          fontSize="12"
          fontFamily="monospace"
          animate={{
            opacity: [0, 0, 0, 0, 0, 0, 1, 0.8, 0],
          }}
          transition={{
            duration: 8,
            times: [0, 0.5, 0.55, 0.6, 0.625, 0.65, 0.7, 0.75, 1],
            repeat: Infinity,
          }}
        >
          Unnatural Pattern
        </motion.text>
      </svg>
    </div>
  );
}