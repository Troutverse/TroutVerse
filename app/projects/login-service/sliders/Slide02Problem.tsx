'use client';

import { motion } from 'framer-motion';

export default function Slide02Problem() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-10">
      {/* 왼쪽: Before/After 비교 */}
      <div className="w-1/2 h-full flex flex-col justify-center gap-6">
        {/* 상단: 일반 로그인 (문제) */}
        <div className="relative h-[42%] border-2 border-red-500/30 rounded-2xl bg-red-950/20 overflow-hidden">
          <MultipleLoginAnimation />
          
          <motion.div
            className="absolute top-4 left-4 px-4 py-2 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-red-400 font-mono text-sm">일반 로그인</p>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-0 right-0 flex justify-center pointer-events-none"
            animate={{
              opacity: [0, 0, 1, 1, 0, 0],
            }}
            transition={{
              duration: 6,
              times: [0, 0.3, 0.35, 0.6, 0.65, 1],
              repeat: Infinity,
            }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-lg">
              <span className="text-2xl">❌</span>
              <span className="text-red-400 font-mono text-sm font-bold">중복 로그인</span>
            </div>
          </motion.div>
        </div>

        {/* 구분선 */}
        <div className="relative flex items-center py-2">
          <div className="flex-1 h-px bg-gray-700"></div>
          <div className="mx-4 text-3xl text-gray-500 font-bold">≠</div>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* 하단: 필요한 시스템 */}
        <div className="relative h-[42%] border-2 border-green-500/30 rounded-2xl bg-green-950/20 overflow-hidden">
          <SingleLoginAnimation />
          
          <motion.div
            className="absolute top-4 left-4 px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-green-400 font-mono text-sm">필요한 시스템</p>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-0 right-0 flex justify-center pointer-events-none"
            animate={{
              opacity: [0, 0, 1, 1, 0, 0],
            }}
            transition={{
              duration: 6,
              times: [0, 0.5, 0.55, 0.8, 0.85, 1],
              repeat: Infinity,
            }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-lg">
              <span className="text-2xl">✓</span>
              <span className="text-green-400 font-mono text-sm font-bold">1개 디바이스만</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 오른쪽: 문제점 설명 */}
      <div className="w-1/2 flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-red-400 font-mono mb-3">The Problem</h2>
          <p className="text-xl text-gray-300 font-mono">
            멀티플레이 게임의 중복 로그인 문제
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
            <div className="text-2xl">🎮</div>
            <div>
              <h3 className="text-lg font-bold text-purple-400 font-mono mb-2">
                게임의 요구사항
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-sm">
                <li>• <span className="text-red-400">중복 로그인 방지 필수</span></li>
                <li>• 계정 공유 차단</li>
                <li>• 실시간 세션 관리</li>
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
            <div className="text-2xl">🔒</div>
            <div>
              <h3 className="text-lg font-bold text-blue-400 font-mono mb-2">
                보안 문제
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-sm">
                <li>• 안전한 인증 토큰 필요 (JWT)</li>
                <li>• 비밀번호 평문 저장 금지</li>
                <li>• HTTPS 통신 필수</li>
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
            <div className="text-2xl">⚡</div>
            <div>
              <h3 className="text-lg font-bold text-yellow-400 font-mono mb-2">
                성능 문제
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-sm">
                <li>• DB 부하 최소화</li>
                <li>• 빠른 로그인 응답 (&lt;50ms)</li>
                <li>• 동시 접속자 1000+ 처리</li>
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
          <p className="text-gray-300 font-mono text-sm italic leading-relaxed">
            "한 계정으로 여러 기기에서 동시 접속하면<br />
            게임 밸런스가 무너지고 부정행위가 발생한다.<br />
            → <span className="text-orange-400 font-bold">실시간 중복 로그인 차단 필수</span>"
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// 다중 로그인 애니메이션
function MultipleLoginAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 중앙 사용자 아이콘 */}
      <div className="absolute w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>

      {/* 여러 디바이스들 */}
      {[0, 120, 240].map((angle, i) => (
        <motion.div
          key={angle}
          className="absolute w-12 h-12 border-2 border-red-400 rounded-lg bg-red-950/50 flex items-center justify-center"
          style={{
            left: '50%',
            top: '50%',
            marginLeft: -24,
            marginTop: -24,
          }}
          animate={{
            x: [0, Math.cos((angle * Math.PI) / 180) * 80],
            y: [0, Math.sin((angle * Math.PI) / 180) * 80],
            opacity: [0, 1, 1, 1],
          }}
          transition={{
            duration: 6,
            times: [0, 0.2, 0.6, 1],
            delay: i * 0.1,
            repeat: Infinity,
          }}
        >
          <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

// 단일 로그인 애니메이션
function SingleLoginAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 사용자 아이콘 */}
      <div className="absolute w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>

      {/* 하나의 디바이스만 */}
      <motion.div
        className="absolute w-12 h-12 border-2 border-green-400 rounded-lg bg-green-950/50 flex items-center justify-center"
        style={{
          left: '50%',
          top: '50%',
          marginLeft: -24,
          marginTop: -24,
        }}
        animate={{
          x: [0, 80],
          opacity: [0, 1, 1],
        }}
        transition={{
          duration: 6,
          times: [0, 0.3, 1],
          repeat: Infinity,
        }}
      >
        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      </motion.div>

      {/* 차단된 디바이스들 */}
      {[1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-12 h-12 border-2 border-red-500 rounded-lg bg-red-950/30 flex items-center justify-center"
          style={{
            left: '50%',
            top: '50%',
            marginLeft: -24,
            marginTop: -24,
          }}
          animate={{
            x: [0, 0, 80, 80],
            y: [0, 0, i === 1 ? 50 : -50, i === 1 ? 50 : -50],
            opacity: [0, 0, 1, 0],
            scale: [1, 1, 1.2, 0.8],
          }}
          transition={{
            duration: 6,
            times: [0, 0.45, 0.55, 0.7],
            delay: 0.2 * i,
            repeat: Infinity,
          }}
        >
          <span className="text-2xl">🚫</span>
        </motion.div>
      ))}
    </div>
  );
}
