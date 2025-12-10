// app/projects/mesh-creation/slides/Slide03Attempt1.tsx
'use client';

import { motion } from 'framer-motion';

export default function Slide03Attempt1() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16 pb-32">
      {/* 왼쪽: Point Cloud 애니메이션 */}
      <div className="w-[45%] h-full flex items-center justify-center">
        <div className="relative w-full h-[80%] border-2 border-red-500/30 rounded-2xl bg-red-950/20 overflow-hidden">
          <PointCloudAnimation />

          {/* 실패 표시 */}
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
          <h2 className="text-5xl font-bold text-red-400 font-mono mb-3">Attempt #1</h2>
          <p className="text-xl text-red-300 font-mono">
            Point Cloud Reconstruction
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
                초기 아이디어
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• Boundary 정점들을 점 구름으로 취급</li>
                <li>• Delaunay Triangulation 적용</li>
                <li>• 자동으로 최적 삼각형 생성</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 시도한 알고리즘 */}
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
                시도한 알고리즘
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/20 border border-purple-500 rounded text-purple-300 font-mono text-xs">
                  Delaunay Triangulation
                </span>
                <span className="px-3 py-1 bg-purple-500/20 border border-purple-500 rounded text-purple-300 font-mono text-xs">
                  Poisson Surface
                </span>
              </div>
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
          <p className="text-blue-400 font-mono text-xs mb-3">시도한 코드</p>
          <pre className="bg-black/50 p-3 rounded text-[10px] overflow-x-auto">
            <code className="text-gray-300 font-mono">
{`// Point Cloud Reconstruction
List<Vector3> points = ExtractBoundaryVertices();
DelaunayTriangulation dt = new DelaunayTriangulation();
dt.AddPoints(points);
Mesh capMesh = dt.GenerateMesh();`}
            </code>
          </pre>
        </motion.div>

        {/* 실패 원인 */}
        <motion.div
          className="p-4 bg-red-950/30 border-2 border-red-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">❌</div>
            <div>
              <h3 className="text-base font-bold text-red-400 font-mono mb-2">
                실패 원인
              </h3>
              <ul className="space-y-1.5 text-gray-300 font-mono text-xs">
                <li>• <span className="text-red-400 font-bold">너무 복잡함</span>: 구현 난이도 높음</li>
                <li>• <span className="text-red-400 font-bold">성능 문제</span>: 계산 시간 ~50ms</li>
                <li>• <span className="text-red-400 font-bold">실시간 불가능</span>: 목표 1ms 대비 50배 느림</li>
                <li>• Unity에 라이브러리 부재</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 결론 */}
        <motion.div
          className="p-4 bg-yellow-950/30 border-l-4 border-yellow-500 rounded-r-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <h3 className="text-sm font-bold text-yellow-400 font-mono mb-2">
                배운 점
              </h3>
              <p className="text-gray-300 font-mono text-xs leading-relaxed">
                "학술적으로 완벽한 방법이<br />
                실무에서 항상 좋은 건 아님<br />
                → <span className="text-yellow-400 font-bold">더 단순한 접근 필요</span>"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Point Cloud 애니메이션
function PointCloudAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Boundary 점들 (원형 배치) */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * Math.PI * 2) / 12;
        const radius = 60;
        return (
          <motion.div
            key={`point-${i}`}
            className="absolute w-3 h-3 bg-cyan-400 rounded-full"
            style={{
              left: `calc(50% + ${Math.cos(angle) * radius}px)`,
              top: `calc(50% + ${Math.sin(angle) * radius}px)`,
              boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)',
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              delay: i * 0.1,
              repeat: Infinity,
            }}
          />
        );
      })}

      {/* Delaunay 삼각형들 (복잡하게) */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`tri-${i}`}
          className="absolute border border-purple-400/30"
          style={{
            width: 40 + Math.random() * 20,
            height: 40 + Math.random() * 20,
            left: `${40 + Math.random() * 20}%`,
            top: `${40 + Math.random() * 20}%`,
          }}
          animate={{
            opacity: [0, 0, 0.5, 0.5, 0],
            rotate: [0, 0, 360, 360, 0],
          }}
          transition={{
            duration: 8,
            times: [0, 0.3, 0.4, 0.6, 1],
            delay: i * 0.1,
            repeat: Infinity,
          }}
        />
      ))}

      {/* 처리 시간 경고 */}
      <motion.div
        className="absolute bottom-8 px-4 py-2 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-lg"
        animate={{
          opacity: [0, 0, 1, 1, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.4, 0.5, 0.65, 1],
          repeat: Infinity,
        }}
      >
        <span className="text-red-400 font-mono text-xs">Processing: ~50ms</span>
      </motion.div>
    </div>
  );
}