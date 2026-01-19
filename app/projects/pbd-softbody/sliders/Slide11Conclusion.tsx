'use client';

import { motion } from 'framer-motion';

export default function Slide11Conclusion() {
  return (
    <div className="w-full h-full flex flex-col items-center px-20 pt-20 pb-32 overflow-y-auto custom-scrollbar">
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
              <p className="text-red-400 font-mono text-sm font-bold">✗ Attempt #1</p>
              <p className="text-gray-400 font-mono text-xs mt-1">Spring-Mass</p>
            </div>
            <div className="p-3 bg-red-950/30 rounded-lg border border-red-500/30">
              <p className="text-red-400 font-mono text-sm font-bold">✗ Attempt #2</p>
              <p className="text-gray-400 font-mono text-xs mt-1">Verlet</p>
            </div>
            <div className="p-3 bg-orange-950/30 rounded-lg border border-orange-500/30">
              <p className="text-orange-400 font-mono text-sm font-bold">✗ Rejected</p>
              <p className="text-gray-400 font-mono text-xs mt-1">Tetrahedral</p>
            </div>
            <div className="p-3 bg-yellow-950/30 rounded-lg border border-yellow-500/30">
              <p className="text-yellow-400 font-mono text-sm font-bold">⚠️ Attempt #3</p>
              <p className="text-gray-400 font-mono text-xs mt-1">Distance Only</p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-green-950/30 rounded-lg border border-green-500/50">
            <p className="text-green-400 font-mono text-sm font-bold">✓ Final Solution</p>
            <p className="text-gray-300 font-mono text-xs mt-1">PBD + Shape Matching</p>
          </div>
        </motion.div>

        {/* 핵심 배움 */}
        <div className="grid grid-cols-3 gap-6">
          <motion.div
            className="p-6 bg-gray-900/50 backdrop-blur-sm border border-purple-700/50 rounded-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-4xl mb-4">🧪</div>
            <h3 className="text-xl font-bold text-purple-400 font-mono mb-3">물리 시뮬레이션의 복잡성</h3>
            <ul className="space-y-2 text-gray-400 font-mono text-sm">
              <li>• Spring-Mass → 불안정</li>
              <li>• Verlet → 형태 손실</li>
              <li>• Distance Only → 부분 성공</li>
              <li>• <span className="text-purple-400 font-bold">PBD + Shape Matching → 완벽</span></li>
            </ul>
          </motion.div>

          <motion.div
            className="p-6 bg-gray-900/50 backdrop-blur-sm border border-cyan-700/50 rounded-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-cyan-400 font-mono mb-3">최적화의 중요성</h3>
            <ul className="space-y-2 text-gray-400 font-mono text-sm">
              <li>• Unity Job System 필수</li>
              <li>• Burst Compiler 10배 향상</li>
              <li>• NativeArray GC 제로</li>
              <li>• <span className="text-cyan-400 font-bold">16ms → 2ms (8배)</span></li>
            </ul>
          </motion.div>

          <motion.div
            className="p-6 bg-gray-900/50 backdrop-blur-sm border border-green-700/50 rounded-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-bold text-green-400 font-mono mb-3">VR 통합의 어려움</h3>
            <ul className="space-y-2 text-gray-400 font-mono text-sm">
              <li>• Rigidbody와 PBD 조화</li>
              <li>• 좌표계 변환</li>
              <li>• 실시간 성능 유지</li>
              <li>• <span className="text-green-400 font-bold">완벽한 통합 달성</span></li>
            </ul>
          </motion.div>
        </div>

        {/* 최종 성과 */}
        <motion.div
          className="p-6 bg-gradient-to-br from-green-950/30 to-green-900/20 border-2 border-green-500/50 rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h3 className="text-2xl font-bold text-green-400 font-mono mb-4 text-center">최종 성과</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <div>
                <div className="text-green-400 font-mono text-base font-bold mb-1">실시간 소프트바디 시뮬레이션</div>
                <div className="text-gray-400 font-mono text-xs">PBD + Shape Matching</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <div>
                <div className="text-green-400 font-mono text-base font-bold mb-1">VR Grab 완벽 통합</div>
                <div className="text-gray-400 font-mono text-xs">Rigidbody + PBD</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <div>
                <div className="text-green-400 font-mono text-base font-bold mb-1">메쉬 절단과 결합</div>
                <div className="text-gray-400 font-mono text-xs">Dynamic Object Creation</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">✅</span>
              <div>
                <div className="text-green-400 font-mono text-base font-bold mb-1">72fps 안정적 유지</div>
                <div className="text-gray-400 font-mono text-xs">Quest 2/3 Mobile</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 향후 개선 */}
        <motion.div
          className="p-6 bg-yellow-950/30 border border-yellow-500/50 rounded-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4 }}
        >
          <h3 className="text-2xl font-bold text-yellow-400 font-mono mb-4 text-center">향후 개선</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl mb-2">🔧</div>
              <div className="text-yellow-400 font-mono text-sm font-bold mb-1">Collision Mesh 개선</div>
              <div className="text-gray-400 font-mono text-xs">더 정확한 충돌 처리</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🤝</div>
              <div className="text-yellow-400 font-mono text-sm font-bold mb-1">Self-Collision 추가</div>
              <div className="text-gray-400 font-mono text-xs">파티클 간 충돌</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📳</div>
              <div className="text-yellow-400 font-mono text-sm font-bold mb-1">Haptic Feedback</div>
              <div className="text-gray-400 font-mono text-xs">촉각 피드백 연동</div>
            </div>
          </div>
        </motion.div>

        {/* 마무리 */}
        <motion.div
          className="text-center p-8 bg-gradient-to-r from-cyan-950/30 to-green-950/30 border-2 border-cyan-500/50 rounded-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6 }}
        >
          <p className="text-2xl text-cyan-400 font-mono font-bold mb-3">
            "실패는 성공의 어머니"
          </p>
          <p className="text-gray-300 font-mono text-base leading-relaxed">
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

        {/* Thank you */}
        <motion.div
          className="text-center pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <p className="text-gray-500 font-mono text-sm">
            Thank you for watching!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
