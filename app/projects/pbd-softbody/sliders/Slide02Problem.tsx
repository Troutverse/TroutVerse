'use client';

import { motion } from 'framer-motion';

export default function Slide02Problem() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-20 py-10 pb-30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-6xl font-bold text-red-400 font-mono mb-4">Problem</h2>
        <p className="text-2xl text-gray-300 font-mono max-w-4xl mx-auto leading-relaxed">
          수술 시뮬레이션에서 장기 조직의<br />부드러운 변형을 어떻게 구현할 것인가?
        </p>
      </motion.div>

      <div className="grid grid-cols-3 gap-6 max-w-7xl">
        <motion.div
          className="p-6 bg-gray-900/50 backdrop-blur-sm border border-red-500/30 rounded-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-4xl mb-3">🎮</div>
          <h3 className="text-xl font-bold text-red-400 font-mono mb-3">기존 Unity Physics 한계</h3>
          <ul className="space-y-2 text-gray-400 font-mono text-sm">
            <li>• Rigidbody는 단단한 물체만</li>
            <li>• 소프트바디 기본 지원 없음</li>
            <li>• 메쉬 변형 불가능</li>
          </ul>
        </motion.div>

        <motion.div
          className="p-6 bg-gray-900/50 backdrop-blur-sm border border-yellow-500/30 rounded-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-4xl mb-3">⚡</div>
          <h3 className="text-xl font-bold text-yellow-400 font-mono mb-3">성능 요구사항</h3>
          <ul className="space-y-2 text-gray-400 font-mono text-sm">
            <li>• VR 환경: 최소 72fps</li>
            <li>• 실시간 상호작용 필수</li>
            <li>• Quest 2/3 모바일 환경</li>
          </ul>
        </motion.div>

        <motion.div
          className="p-6 bg-gray-900/50 backdrop-blur-sm border border-green-500/30 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="text-4xl mb-3">🎯</div>
          <h3 className="text-xl font-bold text-green-400 font-mono mb-3">구현 목표</h3>
          <ul className="space-y-2 text-gray-400 font-mono text-sm">
            <li>• 자연스러운 물렁물렁한 느낌</li>
            <li>• 중력, 충돌, 마찰 반응</li>
            <li>• VR Grab과 통합</li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        className="mt-12 p-5 bg-purple-950/30 border-l-4 border-purple-500 rounded-r-xl max-w-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-gray-300 font-mono text-lg italic leading-relaxed">
          "기존 물리 엔진으로는 부드러운 조직의 실시간 시뮬레이션이 불가능 → <span className="text-purple-400 font-bold">새로운 접근 필요</span>"
        </p>
      </motion.div>
    </div>
  );
}
