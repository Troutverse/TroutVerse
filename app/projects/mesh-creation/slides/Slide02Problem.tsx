// app/projects/mesh-creation/slides/Slide02Problem.tsx
'use client';

import { motion } from 'framer-motion';

export default function Slide02Problem() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-20">
      {/* 왼쪽: 3D 비교 애니메이션 */}
      <div className="w-1/2 h-full flex flex-col justify-center gap-6">
        {/* 상단: 문제 상황 */}
        <div className="relative h-[45%] border-2 border-red-500/30 rounded-2xl bg-red-950/20 overflow-hidden">
          <HoleProblemAnimation />

          <motion.div
            className="absolute top-4 left-4 px-4 py-2 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-red-400 font-mono text-sm">절단 후: 구멍 발생</p>
          </motion.div>
        </div>

        {/* 중앙 구분선 */}
        <div className="relative flex items-center py-2">
          <div className="flex-1 h-px bg-gray-700"></div>
          <div className="mx-4 text-2xl text-gray-500 font-bold">→</div>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* 하단: 해결 목표 */}
        <div className="relative h-[45%] border-2 border-green-500/30 rounded-2xl bg-green-950/20 overflow-hidden">
          <CapMeshSolutionAnimation />

          <motion.div
            className="absolute top-4 left-4 px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-green-400 font-mono text-sm">목표: Cap Mesh 생성</p>
          </motion.div>
        </div>
      </div>

      {/* 오른쪽: 문제 설명 */}
      <div className="w-1/2 flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-red-400 font-mono mb-3">The Problem</h2>
          <p className="text-xl text-gray-300 font-mono">
            절단된 메쉬의 빈 공간을 어떻게 메울 것인가?
          </p>
        </motion.div>

        {/* 문제점 카드 1 */}
        <motion.div
          className="p-5 bg-gray-900/50 backdrop-blur-sm border border-red-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🕳️</div>
            <div>
              <h3 className="text-lg font-bold text-red-400 font-mono mb-2">
                구멍 문제
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 메쉬를 자르면 내부가 노출됨</li>
                <li>• <span className="text-red-400">✗ 시각적으로 부자연스러움</span></li>
                <li>• <span className="text-red-400">✗ 물리 충돌 문제 발생</span></li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 문제점 카드 2 */}
        <motion.div
          className="p-5 bg-gray-900/50 backdrop-blur-sm border border-orange-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🎯</div>
            <div>
              <h3 className="text-lg font-bold text-orange-400 font-mono mb-2">
                Cap Mesh 필요성
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 절단면을 막는 새로운 메쉬 필요</li>
                <li>• 기존 메쉬와 완벽하게 연결</li>
                <li>• 빈틈없이 채워야 함</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 문제점 카드 3 */}
        <motion.div
          className="p-5 bg-gray-900/50 backdrop-blur-sm border border-yellow-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚡</div>
            <div>
              <h3 className="text-lg font-bold text-yellow-400 font-mono mb-2">
                기술적 도전
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• Boundary Loop 추출</li>
                <li>• 자연스러운 Triangulation</li>
                <li>• <span className="text-yellow-400">실시간 생성 (~1ms)</span></li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 인용구 */}
        <motion.div
          className="p-5 bg-cyan-950/30 border-l-4 border-cyan-500 rounded-r-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-gray-300 font-mono text-xs italic leading-relaxed">
            "메쉬 절단은 Slicing만으로 끝나지 않는다.<br />
            절단면을 완벽하게 재구성해야만<br />
            진정한 완성이다."
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// 구멍 문제 애니메이션
function HoleProblemAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 메쉬 (절반만) */}
      <motion.div
        className="absolute w-32 h-32 bg-purple-500 rounded-l-full"
        style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
      />

      {/* 구멍 표시 (점선) */}
      <motion.div
        className="absolute w-0.5 h-32 border-l-2 border-dashed border-red-500"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      {/* 내부 노출 표시 */}
      <motion.div
        className="absolute text-red-500 text-4xl"
        animate={{
          opacity: [0, 1, 0],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        ⚠️
      </motion.div>
    </div>
  );
}

// Cap Mesh 솔루션 애니메이션
function CapMeshSolutionAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 메쉬 (절반) */}
      <motion.div
        className="absolute w-32 h-32 bg-purple-500 rounded-l-full"
        style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
      />

      {/* Cap Mesh (절단면) */}
      <motion.div
        className="absolute w-16 h-32 bg-green-500/80"
        style={{ clipPath: 'polygon(0 0, 100% 20%, 100% 80%, 0 100%)' }}
        initial={{ opacity: 0, x: 20 }}
        animate={{
          opacity: [0, 0, 1, 1],
          x: [20, 20, 0, 0],
        }}
        transition={{
          duration: 3,
          times: [0, 0.3, 0.5, 1],
          repeat: Infinity,
        }}
      />

      {/* 삼각형 구조 표시 */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-0 h-0 border-l-8 border-r-8 border-b-14 border-transparent border-b-green-400/50"
          style={{
            left: `calc(50% + ${i * 5}px)`,
            top: `calc(50% - ${15 - i * 10}px)`,
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0, 0, 1, 1],
          }}
          transition={{
            duration: 3,
            times: [0, 0.4, 0.5, 0.6, 1],
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}

      {/* 완성 체크 */}
      <motion.div
        className="absolute text-green-500 text-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 0, 0, 1, 1, 0],
          scale: [0, 0, 0, 1.2, 1, 0],
        }}
        transition={{
          duration: 3,
          times: [0, 0.6, 0.65, 0.7, 0.85, 1],
          repeat: Infinity,
        }}
      >
        ✓
      </motion.div>
    </div>
  );
}