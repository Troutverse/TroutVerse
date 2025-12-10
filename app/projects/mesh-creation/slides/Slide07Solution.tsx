// app/projects/mesh-creation/slides/Slide07Solution.tsx
'use client';

import { motion } from 'framer-motion';

export default function Slide07Solution() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16 pb-32">
      {/* 왼쪽: 시스템 다이어그램 */}
      <div className="w-[45%] h-full flex items-center justify-center">
        <div className="relative w-full h-[85%]">
          <CapMeshSystemDiagram />
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
          <h2 className="text-5xl font-bold text-cyan-400 font-mono mb-3">
            Final Solution
          </h2>
          <p className="text-xl text-cyan-300 font-mono">
            Cap Mesh Generation System
          </p>
        </motion.div>

        {/* 시스템 구조 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-cyan-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🏗️</div>
            <div>
              <h3 className="text-base font-bold text-cyan-400 font-mono mb-2">
                핵심 컴포넌트
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• <span className="text-cyan-400">BoundaryExtractor</span>: 경계선 추출</li>
                <li>• <span className="text-purple-400">CenterCalculator</span>: 중심점 계산</li>
                <li>• <span className="text-green-400">ArcLengthSorter</span>: 거리 기반 정렬</li>
                <li>• <span className="text-yellow-400">TriangleMeshBuilder</span>: 메쉬 생성</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 처리 파이프라인 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-purple-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚙️</div>
            <div>
              <h3 className="text-base font-bold text-purple-400 font-mono mb-2">
                처리 파이프라인
              </h3>
              <ol className="space-y-2 text-gray-400 font-mono text-xs list-decimal list-inside">
                <li><span className="text-cyan-400">입력</span>: 절단된 메쉬 정점 리스트</li>
                <li><span className="text-purple-400">추출</span>: Boundary Loop 생성</li>
                <li><span className="text-green-400">정렬</span>: Arc-length 기반 정렬</li>
                <li><span className="text-yellow-400">생성</span>: 삼각형 메쉬 구성</li>
                <li><span className="text-blue-400">출력</span>: Cap Mesh 완성</li>
              </ol>
            </div>
          </div>
        </motion.div>

        {/* 핵심 기능 */}
        <motion.div
          className="p-4 bg-green-950/30 border border-green-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">✨</div>
            <div>
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">
                주요 특징
              </h3>
              <ul className="space-y-1.5 text-gray-300 font-mono text-xs">
                <li>• <span className="text-green-400 font-bold">완전 자동화</span>: 한 번 호출로 Cap 생성</li>
                <li>• <span className="text-green-400 font-bold">빠른 속도</span>: ~1ms 처리</li>
                <li>• <span className="text-green-400 font-bold">자연스러움</span>: Arc-length 정렬</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 평면 생성 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-blue-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">📐</div>
            <div>
              <h3 className="text-base font-bold text-blue-400 font-mono mb-2">
                절단면 평면 생성
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 4개 정점으로 Quad 생성</li>
                <li>• 2개 삼각형으로 분할</li>
                <li>• UV 좌표 자동 계산</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 코드 예시 */}
        <motion.div
          className="p-4 bg-gray-900/80 border border-blue-500/30 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <p className="text-blue-400 font-mono text-xs mb-3">사용 예시</p>
          <pre className="bg-black/50 p-3 rounded text-[10px] overflow-x-auto">
            <code className="text-gray-300 font-mono">
{`// Cap Mesh 생성
CapMeshGenerator capGen = new CapMeshGenerator();
Mesh capMesh = capGen.GenerateCap(
    boundaryVertices,
    cutNormal
);

// 결과: 완벽하게 메워진 메쉬
// - 자연스러운 삼각형 배치
// - 빈틈 없음
// - 1ms 이내 생성`}
            </code>
          </pre>
        </motion.div>

        {/* 결론 */}
        <motion.div
          className="p-4 bg-cyan-950/30 border-l-4 border-cyan-500 rounded-r-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🎯</div>
            <div>
              <h3 className="text-sm font-bold text-cyan-400 font-mono mb-2">
                완성된 시스템
              </h3>
              <p className="text-gray-300 font-mono text-xs leading-relaxed">
                "Mesh Slicing + Cap Mesh Generation<br />
                = 완전한 메쉬 절단 시스템<br />
                → <span className="text-cyan-400 font-bold">Production Ready!</span>"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Cap Mesh 시스템 다이어그램
function CapMeshSystemDiagram() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-8">
      {/* 입력 */}
      <motion.div
        className="relative px-6 py-4 bg-cyan-500/20 border-2 border-cyan-400 rounded-xl backdrop-blur-sm"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="text-cyan-400 font-mono text-sm font-bold">Boundary Vertices</div>
        <div className="text-cyan-300 font-mono text-xs mt-1">절단 경계선</div>
      </motion.div>

      {/* 화살표 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <svg className="w-6 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>

      {/* 중간 처리 */}
      <div className="flex gap-4">
        <motion.div
          className="px-4 py-3 bg-purple-500/20 border border-purple-400 rounded-lg backdrop-blur-sm"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-purple-400 font-mono text-xs font-bold">Center</div>
          <div className="text-purple-300 font-mono text-[10px]">Calc</div>
        </motion.div>

        <motion.div
          className="px-4 py-3 bg-green-500/20 border border-green-400 rounded-lg backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="text-green-400 font-mono text-xs font-bold">Arc-Sort</div>
          <div className="text-green-300 font-mono text-[10px]">정렬</div>
        </motion.div>

        <motion.div
          className="px-4 py-3 bg-yellow-500/20 border border-yellow-400 rounded-lg backdrop-blur-sm"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-yellow-400 font-mono text-xs font-bold">Triangle</div>
          <div className="text-yellow-300 font-mono text-[10px]">생성</div>
        </motion.div>
      </div>

      {/* 화살표 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
      >
        <svg className="w-6 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>

      {/* 출력 */}
      <motion.div
        className="px-6 py-4 bg-green-500/20 border-2 border-green-400 rounded-xl backdrop-blur-sm"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <div className="text-green-400 font-mono text-sm font-bold">Cap Mesh</div>
        <div className="text-green-300 font-mono text-xs mt-1">완성된 메쉬</div>
      </motion.div>

      {/* 처리 시간 표시 */}
      <motion.div
        className="absolute bottom-4 right-4 px-4 py-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/50 rounded-lg"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: 'spring' }}
      >
        <span className="text-cyan-400 font-mono text-xs">~1ms</span>
      </motion.div>
    </div>
  );
}