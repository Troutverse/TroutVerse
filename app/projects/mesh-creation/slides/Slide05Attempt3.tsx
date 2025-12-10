// app/projects/mesh-creation/slides/Slide05Attempt3.tsx
'use client';

import { motion } from 'framer-motion';

export default function Slide05Attempt3() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16 pb-32">
      {/* 왼쪽: Fan Triangulation 애니메이션 */}
      <div className="w-[45%] h-full flex items-center justify-center">
        <div className="relative w-full h-[80%] border-2 border-yellow-500/30 rounded-2xl bg-yellow-950/20 overflow-hidden">
          <FanTriangulationAnimation />

          {/* 부분 성공 표시 */}
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
              <span className="text-yellow-400 font-mono text-2xl font-bold">PARTIAL SUCCESS</span>
            </div>
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
          <h2 className="text-5xl font-bold text-yellow-400 font-mono mb-3">Attempt #3</h2>
          <p className="text-xl text-yellow-300 font-mono">
            Fan Triangulation (부채꼴 방식)
          </p>
        </motion.div>

        {/* 접근 방법 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">📍</div>
            <div>
              <h3 className="text-base font-bold text-blue-400 font-mono mb-2">
                단순화된 아이디어
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• Boundary 정점들의 중심점 계산</li>
                <li>• 중심점에서 각 정점으로 방사형 연결</li>
                <li>• 부채꼴(Fan) 모양의 삼각형 생성</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 알고리즘 설명 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-purple-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🔧</div>
            <div>
              <h3 className="text-base font-bold text-purple-400 font-mono mb-2">
                구현 방식
              </h3>
              <ol className="space-y-1.5 text-gray-400 font-mono text-xs list-decimal list-inside">
                <li>모든 Boundary 정점의 평균 계산</li>
                <li>중심점(Center) 생성</li>
                <li>인접한 두 정점과 중심점으로 삼각형</li>
                <li>순환하며 모든 삼각형 생성</li>
              </ol>
            </div>
          </div>
        </motion.div>

        {/* 코드 예시 */}
        <motion.div
          className="p-4 bg-gray-900/80 border border-blue-500/30 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <p className="text-blue-400 font-mono text-xs mb-3">구현 코드</p>
          <pre className="bg-black/50 p-3 rounded text-[10px] overflow-x-auto">
            <code className="text-gray-300 font-mono">
{`Vector3 center = Vector3.zero;
foreach (var v in boundaryLoop)
    center += v;
center /= boundaryLoop.Count;

for (int i = 0; i < boundaryLoop.Count; i++) {
    int next = (i + 1) % boundaryLoop.Count;
    AddTriangle(center, boundaryLoop[i], boundaryLoop[next]);
}`}
            </code>
          </pre>
        </motion.div>

        {/* 개선 사항 */}
        <motion.div
          className="p-4 bg-green-950/30 border border-green-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">✓</div>
            <div>
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">
                성공한 점
              </h3>
              <ul className="space-y-1.5 text-gray-300 font-mono text-xs">
                <li>• <span className="text-green-400 font-bold">매우 간단함</span>: 코드 10줄</li>
                <li>• <span className="text-green-400 font-bold">안정적</span>: 항상 작동</li>
                <li>• <span className="text-green-400 font-bold">빠름</span>: ~0.5ms</li>
                <li>• Loop 닫힘 문제 해결</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 한계점 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-orange-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚠️</div>
            <div>
              <h3 className="text-base font-bold text-orange-400 font-mono mb-2">
                문제점
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 부자연스러운 방사형 패턴</li>
                <li>• 중심점이 최적 위치가 아닐 수 있음</li>
                <li>• 시각적으로 인위적임</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 결론 */}
        <motion.div
          className="p-4 bg-yellow-950/30 border-l-4 border-yellow-500 rounded-r-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <h3 className="text-sm font-bold text-yellow-400 font-mono mb-2">
                배운 점
              </h3>
              <p className="text-gray-300 font-mono text-xs leading-relaxed">
                "간단한 해결책도 때로는 유효함<br />
                실용성 {">"} 완벽함<br />
                → <span className="text-yellow-400 font-bold">하지만 더 나은 방법 존재</span>"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Fan Triangulation 애니메이션
function FanTriangulationAnimation() {
  const vertexCount = 10;
  
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 중심점 */}
      <motion.div
        className="absolute w-4 h-4 bg-yellow-400 rounded-full z-10"
        style={{ boxShadow: '0 0 20px rgba(234, 179, 8, 0.8)' }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      {/* Boundary 정점들 */}
      {[...Array(vertexCount)].map((_, i) => {
        const angle = (i * Math.PI * 2) / vertexCount;
        const radius = 70;
        
        return (
          <motion.div
            key={`vertex-${i}`}
            className="absolute w-3 h-3 bg-cyan-400 rounded-full"
            style={{
              left: `calc(50% + ${Math.cos(angle) * radius}px)`,
              top: `calc(50% + ${Math.sin(angle) * radius}px)`,
              boxShadow: '0 0 10px rgba(6, 182, 212, 0.8)',
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
            }}
          />
        );
      })}

      {/* 방사형 선들 */}
      {[...Array(vertexCount)].map((_, i) => {
        const angle = (i * Math.PI * 2) / vertexCount;
        const radius = 70;
        
        return (
          <motion.div
            key={`line-${i}`}
            className="absolute w-0.5 bg-gradient-to-t from-yellow-400 to-transparent"
            style={{
              height: radius,
              left: '50%',
              top: '50%',
              transformOrigin: 'bottom center',
              rotate: `${(angle * 180 / Math.PI) - 90}deg`,
            }}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{
              opacity: [0, 0, 0.6, 0.6],
              scaleY: [0, 0, 1, 1],
            }}
            transition={{
              duration: 8,
              times: [0, 0.2 + i * 0.02, 0.3 + i * 0.02, 1],
              repeat: Infinity,
            }}
          />
        );
      })}

      {/* 삼각형들 (부채꼴) */}
      {[...Array(vertexCount)].map((_, i) => {
        const angle1 = (i * Math.PI * 2) / vertexCount;
        const angle2 = ((i + 1) * Math.PI * 2) / vertexCount;
        const radius = 70;
        
        return (
          <motion.div
            key={`tri-${i}`}
            className="absolute"
            style={{
              width: 0,
              height: 0,
              borderLeft: `${radius * 0.3}px solid transparent`,
              borderRight: `${radius * 0.3}px solid transparent`,
              borderBottom: `${radius * 0.5}px solid rgba(234, 179, 8, 0.2)`,
              left: `calc(50% + ${Math.cos((angle1 + angle2) / 2) * radius * 0.4}px)`,
              top: `calc(50% + ${Math.sin((angle1 + angle2) / 2) * radius * 0.4}px)`,
              transform: `translate(-50%, -50%) rotate(${((angle1 + angle2) / 2) * 180 / Math.PI + 90}deg)`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0, 0.8, 0.8],
            }}
            transition={{
              duration: 8,
              times: [0, 0.35 + i * 0.02, 0.4 + i * 0.02, 1],
              repeat: Infinity,
            }}
          />
        );
      })}
    </div>
  );
}