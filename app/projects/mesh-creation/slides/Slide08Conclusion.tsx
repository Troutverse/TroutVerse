// app/projects/mesh-creation/slides/Slide08Conclusion.tsx
'use client';

import { motion } from 'framer-motion';

export default function Slide08Conclusion() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-20 py-16 pb-32">
      <div className="max-w-4xl w-full space-y-8">
        {/* 헤더 */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-bold text-cyan-400 font-mono mb-4">
            Conclusion
          </h2>
          <p className="text-2xl text-cyan-300 font-mono">
            배운 것들과 완성된 시스템
          </p>
        </motion.div>

        {/* 여정 요약 */}
        <motion.div
          className="p-6 bg-gradient-to-r from-red-950/30 via-yellow-950/30 to-green-950/30 border-2 border-cyan-500/50 rounded-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h3 className="text-xl font-bold text-cyan-400 font-mono mb-4 flex items-center gap-3">
            <span className="text-3xl">🗺️</span>
            개발 여정
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-red-950/30 rounded-lg border border-red-500/30">
              <p className="text-red-400 font-mono text-sm font-bold">❌ Attempt #1</p>
              <p className="text-gray-400 font-mono text-xs mt-1">Point Cloud → 너무 복잡</p>
            </div>
            <div className="p-3 bg-red-950/30 rounded-lg border border-red-500/30">
              <p className="text-red-400 font-mono text-sm font-bold">❌ Attempt #2</p>
              <p className="text-gray-400 font-mono text-xs mt-1">Ear Clipping → Loop 실패</p>
            </div>
            <div className="p-3 bg-yellow-950/30 rounded-lg border border-yellow-500/30">
              <p className="text-yellow-400 font-mono text-sm font-bold">⚠️ Attempt #3</p>
              <p className="text-gray-400 font-mono text-xs mt-1">Fan → 부자연스러움</p>
            </div>
            <div className="p-3 bg-green-950/30 rounded-lg border border-green-500/50">
              <p className="text-green-400 font-mono text-sm font-bold">✓ Final</p>
              <p className="text-gray-300 font-mono text-xs mt-1">Arc-length → 완벽!</p>
            </div>
          </div>
        </motion.div>

        {/* 핵심 배움 */}
        <motion.div
          className="p-6 bg-gray-900/50 backdrop-blur-sm border border-purple-700/50 rounded-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-purple-400 font-mono mb-4 flex items-center gap-3">
            <span className="text-3xl">📚</span>
            핵심 배움
          </h3>
          <ul className="space-y-3 text-gray-300 font-mono text-sm">
            <li className="flex items-start gap-3">
              <span className="text-cyan-400">•</span>
              <span><span className="text-cyan-400 font-bold">Floating Point 정밀도</span>의 중요성</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400">•</span>
              <span>공간 정보 활용 (Index → Arc-length)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400">•</span>
              <span>단순한 해결책의 가치 (Fan Triangulation)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400">•</span>
              <span>학술적 완벽함 vs 실무 적용성</span>
            </li>
          </ul>
        </motion.div>

        {/* 기술 스택 */}
        <motion.div
          className="p-6 bg-gray-900/50 backdrop-blur-sm border border-blue-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-blue-400 font-mono mb-4 flex items-center gap-3">
            <span className="text-3xl">🛠️</span>
            핵심 기술
          </h3>
          <div className="flex flex-wrap gap-3">
            {['Arc-length Sorting', 'Boundary Loop', 'Fan Triangulation', 'Mesh Builder', 'UV Mapping'].map((tech, i) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-lg text-blue-300 font-mono text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* 성과 */}
        <motion.div
          className="p-6 bg-green-950/30 border-2 border-green-500/70 rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-green-400 font-mono mb-4 flex items-center gap-3">
            <span className="text-3xl">🏆</span>
            최종 성과
          </h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-green-400 font-mono text-3xl font-bold">~1ms</p>
              <p className="text-gray-400 font-mono text-xs mt-1">처리 시간</p>
            </div>
            <div>
              <p className="text-green-400 font-mono text-3xl font-bold">100%</p>
              <p className="text-gray-400 font-mono text-xs mt-1">완전성</p>
            </div>
            <div>
              <p className="text-green-400 font-mono text-3xl font-bold">4번</p>
              <p className="text-gray-400 font-mono text-xs mt-1">시도</p>
            </div>
          </div>
        </motion.div>

        {/* 통합 시스템 */}
        <motion.div
          className="p-6 bg-cyan-950/30 border border-cyan-500/50 rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-cyan-400 font-mono mb-4 flex items-center gap-3">
            <span className="text-3xl">🔗</span>
            완성된 통합 시스템
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4">
              <div className="px-4 py-2 bg-purple-500/20 border border-purple-500 rounded-lg text-purple-400 font-mono text-sm font-bold">
                Mesh Slicing
              </div>
              <span className="text-gray-500 text-2xl">+</span>
              <div className="px-4 py-2 bg-green-500/20 border border-green-500 rounded-lg text-green-400 font-mono text-sm font-bold">
                Cap Mesh Creation
              </div>
            </div>
            <div className="text-center">
              <span className="text-gray-500 text-3xl">↓</span>
            </div>
            <div className="px-6 py-4 bg-gradient-to-r from-purple-500/20 to-green-500/20 border-2 border-cyan-500 rounded-xl text-center">
              <p className="text-cyan-400 font-mono text-xl font-bold">완전한 메쉬 절단 시스템</p>
              <p className="text-gray-400 font-mono text-xs mt-2">Real-time Surgical Simulation Ready</p>
            </div>
          </div>
        </motion.div>

        {/* 실제 활용 */}
        <motion.div
          className="p-6 bg-gray-900/50 backdrop-blur-sm border border-yellow-700/50 rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-yellow-400 font-mono mb-4 flex items-center gap-3">
            <span className="text-3xl">🏥</span>
            실제 활용
          </h3>
          <ul className="space-y-2 text-gray-300 font-mono text-sm">
            <li className="flex items-center gap-3">
              <span className="text-yellow-400">→</span>
              <span>VR 수술 시뮬레이션 훈련</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-yellow-400">→</span>
              <span>실시간 조직 절개 및 재구성</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-yellow-400">→</span>
              <span>자연스러운 시각적 결과</span>
            </li>
          </ul>
        </motion.div>

        {/* 마무리 */}
        <motion.div
          className="text-center p-8 bg-gradient-to-r from-cyan-950/30 to-green-950/30 border-2 border-cyan-500/50 rounded-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.1, duration: 0.8 }}
        >
          <p className="text-2xl text-cyan-400 font-mono font-bold mb-3">
            "공간 정보의 힘"
          </p>
          <p className="text-gray-300 font-mono text-base">
            단순한 인덱스가 아닌 실제 거리를 활용하여<br />
            자연스럽고 완벽한 메쉬 재구성 달성
          </p>
          <motion.div
            className="mt-6 text-5xl"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            ✨
          </motion.div>
        </motion.div>

        {/* 프로젝트 링크 */}
        <motion.div
          className="text-center space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.8 }}
        >
          <p className="text-gray-400 font-mono text-sm">
            Mesh Slicing + Mesh Creation
          </p>
          <p className="text-gray-500 font-mono text-sm">
            Thank you for watching!
          </p>
        </motion.div>
      </div>
    </div>
  );
}