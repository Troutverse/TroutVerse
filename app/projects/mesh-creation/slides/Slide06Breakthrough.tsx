// app/projects/mesh-creation/slides/Slide06Breakthrough.tsx
'use client';

import { motion } from 'framer-motion';

export default function Slide06Breakthrough() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16 pb-32">
      {/* 왼쪽: Arc-length 비교 애니메이션 */}
      <div className="w-[45%] h-full flex flex-col justify-center gap-6">
        {/* 상단: Index 기반 (문제) */}
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

        {/* 중앙 구분선 */}
        <div className="relative flex items-center py-2">
          <div className="flex-1 h-px bg-gray-700"></div>
          <div className="mx-4 text-2xl text-green-500 font-bold">→</div>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* 하단: Arc-length 기반 (해결) */}
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

      {/* 오른쪽: 설명 */}
      <div className="w-[55%] h-full flex flex-col gap-4 overflow-y-auto pr-2 pb-8 custom-scrollbar">
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
            The Breakthrough
          </h2>
          <p className="text-xl text-green-300 font-mono">
            Arc-length Based Triangulation
          </p>
        </motion.div>

        {/* 핵심 발견 */}
        <motion.div
          className="p-4 bg-yellow-950/30 border-2 border-yellow-500/70 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-3xl">💡</div>
            <div>
              <h3 className="text-base font-bold text-yellow-400 font-mono mb-2">
                결정적 발견
              </h3>
              <p className="text-gray-300 font-mono text-xs leading-relaxed">
                정점의 <span className="text-red-400">인덱스 순서</span>가 아닌<br />
                <span className="text-green-400 font-bold">실제 거리(Arc-length)</span>로 정렬하면<br />
                자연스러운 삼각형 생성!
              </p>
            </div>
          </div>
        </motion.div>

        {/* 문제 분석 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-red-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">❌</div>
            <div>
              <h3 className="text-base font-bold text-red-400 font-mono mb-2">
                Index 기반의 문제
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 정점 배열 순서 ≠ 실제 공간 순서</li>
                <li>• 멀리 떨어진 점들끼리 연결</li>
                <li>• 부자연스러운 삼각형 생성</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 해결 방법 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-green-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">✓</div>
            <div>
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">
                Arc-length 해결책
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 중심점에서 각 정점까지 실제 거리 계산</li>
                <li>• 거리 순으로 정렬</li>
                <li>• 인접한 점들끼리만 연결</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 코드 비교 */}
        <motion.div
          className="p-4 bg-gray-900/80 border border-blue-500/30 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="space-y-3">
            <div>
              <p className="text-red-400 font-mono text-xs mb-2">❌ Before (Index)</p>
              <pre className="bg-black/50 p-3 rounded text-[10px] overflow-x-auto">
                <code className="text-gray-300 font-mono">
{`// 배열 순서대로 연결
for (int i = 0; i < points.Count; i++) {
    AddTriangle(center, points[i], points[i+1]);
}`}
                </code>
              </pre>
            </div>
            
            <div>
              <p className="text-green-400 font-mono text-xs mb-2">✓ After (Arc-length)</p>
              <pre className="bg-black/50 p-3 rounded text-[10px] overflow-x-auto">
                <code className="text-gray-300 font-mono">
{`// 실제 거리로 정렬
points.Sort((a, b) => {
    float distA = Vector3.Distance(center, a);
    float distB = Vector3.Distance(center, b);
    float angleA = Mathf.Atan2(a.z - center.z, a.x - center.x);
    float angleB = Mathf.Atan2(b.z - center.z, b.x - center.x);
    return angleA.CompareTo(angleB);
});`}
                </code>
              </pre>
            </div>
          </div>
        </motion.div>

        {/* 결과 */}
        <motion.div
          className="p-4 bg-green-950/30 border-2 border-green-500/70 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🎯</div>
            <div>
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">
                완벽한 결과
              </h3>
              <ul className="space-y-1.5 text-gray-300 font-mono text-xs">
                <li>• <span className="text-green-400 font-bold">자연스러운</span> 삼각형 배치</li>
                <li>• <span className="text-green-400 font-bold">시각적으로</span> 완벽함</li>
                <li>• <span className="text-green-400 font-bold">성능</span>: ~1ms</li>
                <li>• 모든 형태에서 안정적</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 결론 */}
        <motion.div
          className="p-4 bg-green-950/30 border-l-4 border-green-500 rounded-r-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🎉</div>
            <div>
              <h3 className="text-sm font-bold text-green-400 font-mono mb-2">
                돌파구 발견!
              </h3>
              <p className="text-gray-300 font-mono text-xs leading-relaxed">
                "공간적 정보를 활용하는 것이 핵심<br />
                단순한 정렬 방식 변경으로 완벽한 해결<br />
                → <span className="text-green-400 font-bold">Production Ready!</span>"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Index 기반 애니메이션 (문제)
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
      {/* 중심점 */}
      <div className="absolute w-3 h-3 bg-red-400 rounded-full z-10" />

      {/* 점들 */}
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

      {/* 잘못된 연결 (Index 순) */}
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

// Arc-length 기반 애니메이션 (해결)
function ArcLengthAnimation() {
  // 각도 순으로 정렬된 점들
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
      {/* 중심점 */}
      <div className="absolute w-3 h-3 bg-green-400 rounded-full z-10" />

      {/* 점들 */}
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

      {/* 올바른 연결 (Arc-length 순) */}
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

      {/* 삼각형 채우기 */}
      {points.map((p, i) => {
        const next = points[(i + 1) % points.length];
        return (
          <motion.div
            key={`tri-${i}`}
            className="absolute w-0 h-0"
            style={{
              borderLeft: '15px solid transparent',
              borderRight: '15px solid transparent',
              borderBottom: '25px solid rgba(34, 197, 94, 0.2)',
              left: `calc(50% + ${(p.x + next.x) / 3}px)`,
              top: `calc(50% + ${(p.y + next.y) / 3}px)`,
              transform: `rotate(${Math.atan2(next.y - p.y, next.x - p.x) * 180 / Math.PI}deg)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 0, 0.6, 0.6] }}
            transition={{
              duration: 6,
              times: [0, 0.4, 0.5, 0.6, 1],
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        );
      })}
    </div>
  );
}