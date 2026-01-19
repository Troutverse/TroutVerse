'use client';

import { motion } from 'framer-motion';

export default function Slide10Results() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16">
      {/* 왼쪽: Before/After 비교 차트 */}
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

        {/* 성능 */}
        <motion.div
          className="p-5 bg-gradient-to-br from-green-950/40 to-green-900/20 border-2 border-green-500/70 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-3xl">📊</div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-green-400 font-mono mb-3">
                성능
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-black/30 rounded text-center">
                  <div className="text-green-400 font-mono text-2xl font-bold">50ms</div>
                  <div className="text-gray-400 font-mono text-xs">로그인 응답</div>
                </div>
                <div className="p-3 bg-black/30 rounded text-center">
                  <div className="text-green-400 font-mono text-2xl font-bold">1ms</div>
                  <div className="text-gray-400 font-mono text-xs">중복 체크</div>
                </div>
                <div className="p-3 bg-black/30 rounded text-center">
                  <div className="text-green-400 font-mono text-2xl font-bold">90%</div>
                  <div className="text-gray-400 font-mono text-xs">DB 쿼리 감소</div>
                </div>
                <div className="p-3 bg-black/30 rounded text-center">
                  <div className="text-green-400 font-mono text-2xl font-bold">3x</div>
                  <div className="text-gray-400 font-mono text-xs">속도 향상</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 보안 */}
        <motion.div
          className="p-4 bg-gradient-to-br from-purple-950/40 to-purple-900/20 border-2 border-purple-500/70 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🔒</div>
            <div>
              <h3 className="text-base font-bold text-purple-400 font-mono mb-2">
                보안
              </h3>
              <ul className="space-y-1 text-gray-400 font-mono text-xs">
                <li>• JWT 기반 무상태 인증</li>
                <li>• PostgreSQL 연결 암호화</li>
                <li>• 메모리 세션으로 중복 로그인 차단</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 확장성 */}
        <motion.div
          className="p-4 bg-gradient-to-br from-blue-950/40 to-blue-900/20 border-2 border-blue-500/70 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚡</div>
            <div>
              <h3 className="text-base font-bold text-blue-400 font-mono mb-2">
                확장성
              </h3>
              <ul className="space-y-1 text-gray-400 font-mono text-xs">
                <li>• Repository 패턴</li>
                <li>• DI 컨테이너</li>
                <li>• Async/Await 전면 적용</li>
                <li>• Layered Architecture</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 비즈니스 요구사항 */}
        <motion.div
          className="p-4 bg-gradient-to-br from-cyan-950/40 to-cyan-900/20 border-2 border-cyan-500/70 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🎯</div>
            <div>
              <h3 className="text-base font-bold text-cyan-400 font-mono mb-2">
                비즈니스 요구사항
              </h3>
              <ul className="space-y-1 text-gray-400 font-mono text-xs">
                <li>• <span className="text-green-400">✓</span> 중복 로그인 완벽 차단</li>
                <li>• <span className="text-green-400">✓</span> 동시 접속 1000+ 지원</li>
                <li>• <span className="text-green-400">✓</span> Render.com 배포 완료</li>
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
            <h3 className="text-red-400 font-mono text-lg font-bold">Before (DB Flag)</h3>
            <p className="text-gray-400 font-mono text-xs">문제가 많았던 초기 방식</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center p-2 bg-black/30 rounded">
            <span className="text-gray-400 font-mono text-xs">로그인 응답</span>
            <div className="flex items-center gap-2">
              <div className="w-32 h-2 bg-red-500/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-red-500"
                  initial={{ width: 0 }}
                  animate={{ width: '90%' }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </div>
              <span className="text-red-400 font-mono text-xs w-12">150ms</span>
            </div>
          </div>

          <div className="flex justify-between items-center p-2 bg-black/30 rounded">
            <span className="text-gray-400 font-mono text-xs">DB 쿼리</span>
            <div className="flex items-center gap-2">
              <div className="w-32 h-2 bg-red-500/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-red-500"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                />
              </div>
              <span className="text-red-400 font-mono text-xs w-12">많음</span>
            </div>
          </div>

          <div className="flex justify-between items-center p-2 bg-black/30 rounded">
            <span className="text-gray-400 font-mono text-xs">안정성</span>
            <div className="flex items-center gap-2">
              <div className="w-32 h-2 bg-red-500/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-red-500"
                  initial={{ width: 0 }}
                  animate={{ width: '60%' }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                />
              </div>
              <span className="text-red-400 font-mono text-xs w-12">60%</span>
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
        <div className="px-6 py-3 bg-gradient-to-r from-green-600 to-cyan-600 rounded-full">
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
            <h3 className="text-green-400 font-mono text-lg font-bold">After (Memory Session)</h3>
            <p className="text-gray-400 font-mono text-xs">최적화된 현재 방식</p>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center p-2 bg-black/30 rounded">
            <span className="text-gray-400 font-mono text-xs">로그인 응답</span>
            <div className="flex items-center gap-2">
              <div className="w-32 h-2 bg-green-500/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-green-500"
                  initial={{ width: 0 }}
                  animate={{ width: '30%' }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </div>
              <span className="text-green-400 font-mono text-xs w-12">50ms</span>
            </div>
          </div>

          <div className="flex justify-between items-center p-2 bg-black/30 rounded">
            <span className="text-gray-400 font-mono text-xs">DB 쿼리</span>
            <div className="flex items-center gap-2">
              <div className="w-32 h-2 bg-green-500/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-green-500"
                  initial={{ width: 0 }}
                  animate={{ width: '10%' }}
                  transition={{ delay: 1.3, duration: 0.8 }}
                />
              </div>
              <span className="text-green-400 font-mono text-xs w-12">적음</span>
            </div>
          </div>

          <div className="flex justify-between items-center p-2 bg-black/30 rounded">
            <span className="text-gray-400 font-mono text-xs">안정성</span>
            <div className="flex items-center gap-2">
              <div className="w-32 h-2 bg-green-500/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-green-500"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                />
              </div>
              <span className="text-green-400 font-mono text-xs w-12">100%</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
