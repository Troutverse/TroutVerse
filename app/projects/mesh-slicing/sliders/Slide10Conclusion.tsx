'use client';

import { motion } from 'framer-motion';

export default function Slide10Conclusion() {
  return (
    <div className="w-full h-full flex flex-col items-center overflow-y-auto px-20 pt-12 pb-32 custom-scrollbar">
      {/* 사이버펑크 스크롤바 */}
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
            배운 것들과 다음 도전
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
              <p className="text-gray-400 font-mono text-xs mt-1">Ray-based</p>
            </div>
            <div className="p-3 bg-orange-950/30 rounded-lg border border-orange-500/30">
              <p className="text-orange-400 font-mono text-sm font-bold">⚠️ Attempt #2</p>
              <p className="text-gray-400 font-mono text-xs mt-1">Edge-based</p>
            </div>
            <div className="p-3 bg-yellow-950/30 rounded-lg border border-yellow-500/30">
              <p className="text-yellow-400 font-mono text-sm font-bold">💡 Attempt #3</p>
              <p className="text-gray-400 font-mono text-xs mt-1">Triangle</p>
            </div>
            <div className="p-3 bg-green-950/30 rounded-lg border border-green-500/50">
              <p className="text-green-400 font-mono text-sm font-bold">✓ Final</p>
              <p className="text-gray-300 font-mono text-xs mt-1">+ Flood-fill</p>
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
              <span><span className="text-cyan-400 font-bold">Computational Geometry</span>를 실전에서 적용</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400">•</span>
              <span>좌표계 변환의 중요성 (World ↔ Local)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400">•</span>
              <span>알고리즘 선택이 성능에 미치는 영향 (6배 차이)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400">•</span>
              <span>실패를 통한 학습과 반복적 개선</span>
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
            사용 기술
          </h3>
          <div className="flex flex-wrap gap-3">
            {['Unity', 'DFS', "C#", "Meta Quest",].map((tech, i) => (
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
              <p className="text-green-400 font-mono text-3xl font-bold">90fps</p>
              <p className="text-gray-400 font-mono text-xs mt-1">성능 목표 달성</p>
            </div>
            <div>
              <p className="text-green-400 font-mono text-3xl font-bold">100%</p>
              <p className="text-gray-400 font-mono text-xs mt-1">안정성</p>
            </div>
            <div>
              <p className="text-green-400 font-mono text-3xl font-bold">3주</p>
              <p className="text-gray-400 font-mono text-xs mt-1">개발 기간</p>
            </div>
          </div>
        </motion.div>

        {/* 다음 도전 */}
        <motion.div
          className="p-6 bg-yellow-950/30 border border-yellow-500/50 rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-yellow-400 font-mono mb-4 flex items-center gap-3">
            <span className="text-3xl">🚀</span>
            다음 도전
          </h3>
          <ul className="space-y-2 text-gray-300 font-mono text-sm">
            <li className="flex items-center gap-3">
              <span className="text-yellow-400">→</span>
              <span>Soft Body Physics 통합</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-yellow-400">→</span>
              <span>실시간 조직 변형 시뮬레이션</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-yellow-400">→</span>
              <span>햅틱 피드백 구현</span>
            </li>
          </ul>
        </motion.div>

        {/* 마무리 */}
        <motion.div
          className="text-center p-8 bg-gradient-to-r from-cyan-950/30 to-green-950/30 border-2 border-cyan-500/50 rounded-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <p className="text-2xl text-cyan-400 font-mono font-bold mb-3">
            "실패는 성공의 어머니"
          </p>
          <p className="text-gray-300 font-mono text-base">
            4번의 시도 끝에 완벽한 솔루션 발견<br />
            모든 실패가 최종 성공으로 이어졌습니다
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
            🎉
          </motion.div>
        </motion.div>

        {/* GitHub 링크 (선택) */}
        <motion.div
          className="text-center pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.8 }}
        >
          <p className="text-gray-500 font-mono text-sm">
            Thank you for watching!
          </p>
        </motion.div>
      </div>
    </div>
  );
}