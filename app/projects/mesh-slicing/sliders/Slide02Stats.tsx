'use client';

import { motion } from 'framer-motion';

export default function Slide02Problem() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-10 pb-30">
      {/* 왼쪽: 3D 비교 애니메이션 */}
      <div className="w-1/2 h-full flex flex-col justify-center gap-6">
        {/* 상단: Easy Slice (기존 부분 절개 애니메이션) */}
        <div className="relative h-[42%] border-2 border-orange-500/30 rounded-2xl bg-orange-950/20 overflow-hidden">
          <PartialIncisionAnimation />

          {/* 라벨 */}
          <motion.div
            className="absolute top-4 left-4 px-4 py-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/50 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-orange-400 font-mono text-sm">Easy Slice의 동작</p>
          </motion.div>

          {/* 결과 표시 - 하단 텍스트로 변경 */}
          <motion.div
            className="absolute bottom-8 left-0 right-0 flex justify-center pointer-events-none"
            animate={{
              opacity: [0, 0, 1, 1, 0, 0],
              y: [10, 10, 0, 0, 10, 10]
            }}
            transition={{
              duration: 7,
              times: [0, 0.44, 0.45, 0.6, 0.62, 1],
              repeat: Infinity,
            }}
          >
            <div className="flex items-center justify-center gap-2 px-4 py-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/50 rounded-lg">
              <span className="text-2xl">⚠️</span>
              <span className="text-orange-400 font-mono text-sm font-bold mt-2">제한적</span>
            </div>
          </motion.div>
        </div>

        {/* 중앙 구분선 */}
        <div className="relative flex items-center py-2">
          <div className="flex-1 h-px bg-gray-700"></div>
          <div className="mx-4 text-3xl text-gray-500 font-bold">≠</div>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* 하단: 필요한 기능 (부채꼴 절단) */}
        <div className="relative h-[42%] border-2 border-green-500/30 rounded-2xl bg-green-950/20 overflow-hidden">
          <FanShapeCutAnimation />

          {/* 라벨 */}
          <motion.div
            className="absolute top-4 left-4 px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-green-400 font-mono text-sm">필요한 정밀 절개</p>
          </motion.div>

          {/* 결과 표시 - 하단 텍스트로 변경 */}
          <motion.div
            className="absolute bottom-8 left-0 right-0 flex justify-center pointer-events-none"
            animate={{
              opacity: [0, 0, 1, 1, 0, 0],
              y: [10, 10, 0, 0, 10, 10]
            }}
            transition={{
              duration: 7,
              times: [0, 0.49, 0.55, 0.65, 0.70, 1],
              repeat: Infinity,
            }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-lg">
              <span className="text-2xl">✓</span>
              <span className="text-green-400 font-mono text-sm font-bold mt-1">부분 절단</span>
            </div>
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
            수술 시뮬레이션을 위한 메쉬 절개 알고리즘의 부재
          </p>
        </motion.div>

        {/* 문제점 카드 1 */}
        <motion.div
          className="p-5 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">📦</div>
            <div>
              <h3 className="text-lg font-bold text-red-400 font-mono mb-2">
                기존 솔루션의 한계
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• Unity Asset Store: Easy Slice, Mesh Cutter 등 존재</li>
                <li>• <span className="text-red-400">✗ 완전 절단(Complete Cut)만 지원</span></li>
                <li>• <span className="text-red-400">✗ 부분 절개(Partial Incision) 불가능</span></li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 문제점 카드 2 */}
        <motion.div
          className="p-5 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🏥</div>
            <div>
              <h3 className="text-lg font-bold text-green-400 font-mono mb-2">
                수술 시뮬레이션의 요구사항
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• <span className="text-green-400">✓ 조직을 부분 절개</span></li>
                <li>• <span className="text-green-400">✓ 메쉬 연결 상태 유지</span></li>
                <li>• <span className="text-green-400">✓ 절개선에 따라 절개</span></li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 문제점 카드 3 */}
        <motion.div
          className="p-5 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🔍</div>
            <div>
              <h3 className="text-lg font-bold text-yellow-400 font-mono mb-2">
                해결책의 부재
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 상용 알고리즘: <span className="text-yellow-400">없음</span></li>
                <li>• 학술 논문: 이론적, 비실용적</li>
                <li>• → <span className="text-yellow-400 font-bold">직접 개발 필요</span></li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 인용구 */}
        <motion.div
          className="p-5 bg-orange-950/30 border-l-4 border-orange-500 rounded-r-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-gray-300 font-mono text-l italic leading-relaxed">
            <br />
            기존 Asset들은 과일을 자르거나 오브젝트를 파괴하는데는 완벽하지만,
            <br />수술처럼 정밀한 절개에는 사용 불가능"
            <br />
            <br />

          </p>
        </motion.div>
      </div>
    </div>
  );
}

// Easy Slice 애니메이션 (부분 절개)
function PartialIncisionAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 메쉬 (왼쪽 절반) */}
      <motion.div
        className="absolute w-28 h-28 bg-orange-500 rounded-l-full"
        style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
        initial={{ x: 0 }}
        animate={{
          x: [0, 0, -12, -12, 0],
        }}
        transition={{
          duration: 7,
          times: [0, 0.3, 0.45, 0.75, 1],
          repeat: Infinity,
        }}
      />

      {/* 메쉬 (오른쪽 절반) */}
      <motion.div
        className="absolute w-28 h-28 bg-orange-500 rounded-r-full"
        style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)' }}
        initial={{ x: 0 }}
        animate={{
          x: [0, 0, 12, 12, 0],
        }}
        transition={{
          duration: 7,
          times: [0, 0.3, 0.45, 0.75, 1],
          repeat: Infinity,
        }}
      />

      {/* 절개선 (발광) */}
      <motion.div
        className="absolute w-0.5 h-28 bg-cyan-400 rounded-full"
        style={{ boxShadow: '0 0 15px rgba(34,211,238,0.8)' }}
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{
          opacity: [0, 0, 1, 1, 1, 0],
          scaleY: [0, 0, 1, 1, 1, 0],
        }}
        transition={{
          duration: 7,
          times: [0, 0.28, 0.32, 0.45, 0.75, 1],
          repeat: Infinity,
        }}
      />

      {/* 칼날 */}
      <motion.div
        className="absolute w-1.5 h-32 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full"
        style={{ boxShadow: '0 0 15px rgba(255,255,255,0.5)' }}
        initial={{ y: -120, rotate: -45 }}
        animate={{
          y: [-120, -120, 80, 80, -120],
          rotate: -45,
        }}
        transition={{
          duration: 7,
          times: [0, 0.1, 0.28, 0.6, 1],
          repeat: Infinity,
        }}
      />


    </div>
  );
}

// 부채꼴 절단 애니메이션
function FanShapeCutAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 메인 메쉬 배경 (완전한 원) */}
      <div className="absolute w-32 h-32 bg-green-500 rounded-full" />

      {/* 부채꼴 조각 (잘려나갈 부분) */}
      <motion.div
        className="absolute"
        style={{ width: 128, height: 128 }}
        initial={{ x: 0, y: 0, opacity: 1 }}
        animate={{
          x: [0, 0, 0, 0, 30, 45, 45],
          y: [0, 0, 0, 0, -30, -45, -45],
          opacity: [1, 1, 1, 1, 0.8, 0.3, 0],
          rotate: [0, 0, 0, 0, -10, -15, -15],
        }}
        transition={{
          duration: 7,
          times: [0, 0.45, 0.5, 0.55, 0.7, 0.85, 1],
          repeat: Infinity,
        }}
      >
        <svg width="128" height="128" viewBox="0 0 128 128">
          <path
            d="M 64 64 L 64 0 A 64 64 0 0 1 118 46 Z"
            fill="#10B981"
          />
        </svg>
      </motion.div>


      {/* 칼날 */}
      <motion.div
        className="absolute w-1.5 h-32 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full"
        style={{ boxShadow: '0 0 15px rgba(255,255,255,0.5)' }}
        initial={{ x: 0, y: -100, rotate: 0 }}
        animate={{
          x: [0, 0, 0, 38, 55, 55],
          y: [-100, -100, -30, -68, -100, -100],
          rotate: [0, 0, 0, -45, -45, -45],
        }}
        transition={{
          duration: 7,
          times: [0, 0.1, 0.3, 0.5, 0.65, 1],
          repeat: Infinity,
        }}
      />
    </div>
  );
}