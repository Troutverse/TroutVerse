'use client';

import { motion } from 'framer-motion';

export default function Slide10Results() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16">
      {/* 왼쪽: Before/After 비교 */}
      <div className="w-1/2 h-full flex flex-col justify-center gap-6">
        <BeforeAfterComparison />
      </div>

      {/* 오른쪽: 성과 카드들 */}
      <div className="w-1/2 flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-cyan-400 font-mono mb-3">Results</h2>
          <p className="text-xl text-cyan-300 font-mono">
            성과 및 개선 사항
          </p>
        </motion.div>

        {/* 매칭 속도 */}
        <motion.div
          className="p-5 bg-gradient-to-br from-green-950/40 to-green-900/20 border-2 border-green-500/70 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-3xl">⚡</div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-green-400 font-mono mb-3">
                서버 할당 속도
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-black/30 rounded text-center">
                  <div className="text-green-400 font-mono text-2xl font-bold">30s</div>
                  <div className="text-gray-400 font-mono text-xs">평균 할당</div>
                </div>
                <div className="p-3 bg-black/30 rounded text-center">
                  <div className="text-green-400 font-mono text-2xl font-bold">95%+</div>
                  <div className="text-gray-400 font-mono text-xs">성공률</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 동시 접속 */}
        <motion.div
          className="p-4 bg-gradient-to-br from-blue-950/40 to-blue-900/20 border-2 border-blue-500/70 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">👥</div>
            <div>
              <h3 className="text-base font-bold text-blue-400 font-mono mb-2">
                동시 서버 관리
              </h3>
              <ul className="space-y-1 text-gray-400 font-mono text-xs">
                <li>• 10+ 동시 서버 운영</li>
                <li>• ConcurrentDictionary로 Thread-safe</li>
                <li>• Race Condition 0건</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 서버 할당 */}
        <motion.div
          className="p-4 bg-gradient-to-br from-purple-950/40 to-purple-900/20 border-2 border-purple-500/70 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🖥️</div>
            <div>
              <h3 className="text-base font-bold text-purple-400 font-mono mb-2">
                자동 서버 할당
              </h3>
              <ul className="space-y-1 text-gray-400 font-mono text-xs">
                <li>• PlayFab 성공률: 95%+</li>
                <li>• Render Fallback: 5%</li>
                <li>• <span className="text-green-400">전체 가용성: 100%</span></li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 비용 최적화 */}
        <motion.div
          className="p-4 bg-gradient-to-br from-yellow-950/40 to-yellow-900/20 border-2 border-yellow-500/70 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">💰</div>
            <div>
              <h3 className="text-base font-bold text-yellow-400 font-mono mb-2">
                비용 최적화
              </h3>
              <ul className="space-y-1 text-gray-400 font-mono text-xs">
                <li>• 자동 서버 종료 (유휴 0%)</li>
                <li>• PlayFab 사용량 기반 과금</li>
                <li>• Render 무료 티어 활용</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 사용자 경험 */}
        <motion.div
          className="p-4 bg-gradient-to-br from-orange-950/40 to-orange-900/20 border-2 border-orange-500/70 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">😊</div>
            <div>
              <h3 className="text-base font-bold text-orange-400 font-mono mb-2">
                사용자 경험
              </h3>
              <ul className="space-y-1 text-gray-400 font-mono text-xs">
                <li>• 실시간 로비 상태 업데이트</li>
                <li>• 자동 재연결 (Resilience)</li>
                <li>• 빠른 매칭 (2초)</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function BeforeAfterComparison() {
  return (
    <div className="relative w-full">
      {/* Before */}
      <motion.div
        className="w-full p-6 bg-red-950/30 border-2 border-red-500/50 rounded-xl mb-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">❌</span>
          <div>
            <h3 className="text-red-400 font-mono text-lg font-bold">Before (HTTP Polling)</h3>
            <p className="text-gray-400 font-mono text-xs">느리고 비효율적</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center p-2 bg-black/30 rounded">
            <span className="text-gray-400 font-mono text-xs">매칭 속도</span>
            <div className="flex items-center gap-2">
              <div className="w-32 h-2 bg-red-500/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-red-500"
                  initial={{ width: 0 }}
                  animate={{ width: '90%' }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </div>
              <span className="text-red-400 font-mono text-xs w-12">5s+</span>
            </div>
          </div>

          <div className="flex justify-between items-center p-2 bg-black/30 rounded">
            <span className="text-gray-400 font-mono text-xs">서버 부하</span>
            <div className="flex items-center gap-2">
              <div className="w-32 h-2 bg-red-500/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-red-500"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                />
              </div>
              <span className="text-red-400 font-mono text-xs w-12">높음</span>
            </div>
          </div>

          <div className="flex justify-between items-center p-2 bg-black/30 rounded">
            <span className="text-gray-400 font-mono text-xs">사용자 경험</span>
            <div className="flex items-center gap-2">
              <div className="w-32 h-2 bg-red-500/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-red-500"
                  initial={{ width: 0 }}
                  animate={{ width: '50%' }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                />
              </div>
              <span className="text-red-400 font-mono text-xs w-12">나쁨</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Arrow */}
      <motion.div
        className="flex justify-center mb-6"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="px-6 py-3 bg-gradient-to-r from-orange-600 to-cyan-600 rounded-full">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>

      {/* After */}
      <motion.div
        className="w-full p-6 bg-green-950/30 border-2 border-green-500/50 rounded-xl"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">✓</span>
          <div>
            <h3 className="text-green-400 font-mono text-lg font-bold">After (SignalR + PlayFab)</h3>
            <p className="text-gray-400 font-mono text-xs">실시간 + 자동 할당</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center p-2 bg-black/30 rounded">
            <span className="text-gray-400 font-mono text-xs">매칭 속도</span>
            <div className="flex items-center gap-2">
              <div className="w-32 h-2 bg-green-500/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-green-500"
                  initial={{ width: 0 }}
                  animate={{ width: '20%' }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </div>
              <span className="text-green-400 font-mono text-xs w-12">2s</span>
            </div>
          </div>

          <div className="flex justify-between items-center p-2 bg-black/30 rounded">
            <span className="text-gray-400 font-mono text-xs">서버 부하</span>
            <div className="flex items-center gap-2">
              <div className="w-32 h-2 bg-green-500/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-green-500"
                  initial={{ width: 0 }}
                  animate={{ width: '10%' }}
                  transition={{ delay: 1.3, duration: 0.8 }}
                />
              </div>
              <span className="text-green-400 font-mono text-xs w-12">낮음</span>
            </div>
          </div>

          <div className="flex justify-between items-center p-2 bg-black/30 rounded">
            <span className="text-gray-400 font-mono text-xs">사용자 경험</span>
            <div className="flex items-center gap-2">
              <div className="w-32 h-2 bg-green-500/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-green-500"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                />
              </div>
              <span className="text-green-400 font-mono text-xs w-12">좋음</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
