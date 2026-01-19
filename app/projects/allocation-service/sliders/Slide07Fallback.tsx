'use client';

import { motion } from 'framer-motion';

export default function Slide07Fallback() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16">
      {/* 왼쪽: Fallback 시나리오 */}
      <div className="w-1/2 h-full flex flex-col justify-center gap-6">
        {/* PlayFab 시도 (실패) */}
        <div className="relative h-[42%] border-2 border-red-500/30 rounded-2xl bg-red-950/20 overflow-hidden">
          <PlayFabFailAnimation />
          
          <motion.div
            className="absolute top-4 left-4 px-4 py-2 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-red-400 font-mono text-sm">PlayFab 요청 실패</p>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-0 right-0 flex justify-center"
            animate={{
              opacity: [0, 0, 1, 1, 0],
            }}
            transition={{
              duration: 7,
              times: [0, 0.4, 0.45, 0.6, 1],
              repeat: Infinity,
            }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-lg">
              <span className="text-2xl">❌</span>
              <span className="text-red-400 font-mono text-sm font-bold">Timeout / Error</span>
            </div>
          </motion.div>
        </div>

        {/* 구분선 */}
        <div className="relative flex items-center py-2">
          <div className="flex-1 h-px bg-gray-700"></div>
          <div className="mx-4 px-4 py-2 bg-yellow-500/20 border border-yellow-500/50 rounded-lg">
            <span className="text-yellow-400 font-mono text-xs font-bold">Fallback</span>
          </div>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* Render.com 대체 (성공) */}
        <div className="relative h-[42%] border-2 border-green-500/30 rounded-2xl bg-green-950/20 overflow-hidden">
          <RenderFallbackAnimation />
          
          <motion.div
            className="absolute top-4 left-4 px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-green-400 font-mono text-sm">Render.com 대체</p>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-0 right-0 flex justify-center"
            animate={{
              opacity: [0, 0, 1, 1, 0],
            }}
            transition={{
              duration: 7,
              times: [0, 0.6, 0.65, 0.85, 1],
              repeat: Infinity,
            }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-lg">
              <span className="text-2xl">✓</span>
              <span className="text-green-400 font-mono text-sm font-bold">Success</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 오른쪽: 설명 */}
      <div className="w-1/2 flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-yellow-400 font-mono mb-3">Fallback</h2>
          <p className="text-xl text-yellow-300 font-mono">
            장애 대응 전략
          </p>
        </motion.div>

        {/* 왜 Fallback? */}
        <motion.div
          className="p-5 bg-orange-950/30 backdrop-blur-sm border border-orange-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚠️</div>
            <div>
              <h3 className="text-lg font-bold text-orange-400 font-mono mb-2">
                PlayFab 실패 시나리오
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-sm">
                <li>• API 타임아웃 (30초 초과)</li>
                <li>• 서버 할당 실패 (리소스 부족)</li>
                <li>• 네트워크 오류</li>
                <li>• → <span className="text-red-400">게임을 못 하는 상황 발생!</span></li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 해결 방법 */}
        <motion.div
          className="p-5 bg-green-950/30 backdrop-blur-sm border-2 border-green-500/70 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">💡</div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-green-400 font-mono mb-2">
                Render.com 대체 서버
              </h3>
              <div className="bg-black/50 p-3 rounded font-mono text-xs text-gray-300 leading-relaxed">
                <span className="text-blue-400">try</span> {'{'}<br />
                &nbsp;&nbsp;<span className="text-blue-400">var</span> allocation = <span className="text-blue-400">await</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;_playFabService.RequestServer();<br />
                &nbsp;&nbsp;lobby.GameServerIP = allocation.IPV4Address;<br />
                {'}'}<br />
                <span className="text-blue-400">catch</span> (Exception ex) {'{'}<br />
                &nbsp;&nbsp;<span className="text-purple-400">// Fallback to Render.com</span><br />
                &nbsp;&nbsp;lobby.GameServerIP = <span className="text-green-300">"stupidguysserver</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">.onrender.com"</span>;<br />
                &nbsp;&nbsp;lobby.GameServerPort = <span className="text-yellow-400">7777</span>;<br />
                {'}'}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 장점 */}
        <motion.div
          className="p-4 bg-blue-950/30 backdrop-blur-sm border border-blue-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">✓</div>
            <div>
              <h3 className="text-base font-bold text-blue-400 font-mono mb-2">
                Fallback 장점
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• <span className="text-green-400">100% 가용성</span> 보장</li>
                <li>• 사용자 경험 개선 (오류 방지)</li>
                <li>• 점진적 마이그레이션 가능</li>
                <li>• 개발 초기에 유용 (비용↓)</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 단점 */}
        <motion.div
          className="p-4 bg-yellow-950/30 backdrop-blur-sm border border-yellow-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚠️</div>
            <div>
              <h3 className="text-base font-bold text-yellow-400 font-mono mb-2">
                Render.com 한계
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 단일 서버 (확장성↓)</li>
                <li>• 글로벌 리전 없음 (Ping↑)</li>
                <li>• Auto Scaling 없음</li>
                <li>• → <span className="text-yellow-400">PlayFab 우선, Render는 백업</span></li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 우선순위 */}
        <motion.div
          className="p-4 bg-gradient-to-r from-blue-950/40 to-yellow-950/40 border-2 border-cyan-500/70 rounded-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="flex items-center gap-4">
            <div className="text-3xl">🎯</div>
            <div>
              <h3 className="text-base font-bold text-cyan-400 font-mono mb-1">
                서버 선택 우선순위
              </h3>
              <p className="text-gray-300 font-mono text-sm">
                <span className="text-blue-400 font-bold">1순위: PlayFab</span> (Auto Scaling + 글로벌)<br />
                <span className="text-yellow-400 font-bold">2순위: Render.com</span> (안정적 백업)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// PlayFab 실패 애니메이션
function PlayFabFailAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center gap-16">
      {/* SignalR */}
      <div className="text-5xl">🔌</div>

      {/* 요청 화살표 */}
      <motion.div
        className="absolute"
        style={{ left: '35%' }}
        animate={{
          x: [0, 60, 60, 0],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 7,
          times: [0, 0.2, 0.4, 0.5],
          repeat: Infinity,
        }}
      >
        <svg className="w-12 h-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </motion.div>

      {/* PlayFab (X) */}
      <motion.div
        className="relative"
        animate={{
          scale: [1, 1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          times: [0, 0.3, 0.35, 1],
          repeat: Infinity,
        }}
      >
        <div className="text-5xl">🎮</div>
        <motion.div
          className="absolute -top-2 -right-2 text-4xl"
          animate={{
            opacity: [0, 0, 1, 1, 0],
            scale: [0, 0, 1.2, 1, 0],
          }}
          transition={{
            duration: 7,
            times: [0, 0.35, 0.4, 0.5, 1],
            repeat: Infinity,
          }}
        >
          ❌
        </motion.div>
      </motion.div>
    </div>
  );
}

// Render Fallback 애니메이션
function RenderFallbackAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center gap-16">
      {/* SignalR */}
      <div className="text-5xl">🔌</div>

      {/* 요청 화살표 */}
      <motion.div
        className="absolute"
        style={{ left: '35%' }}
        animate={{
          x: [0, 0, 60, 60, 0],
          opacity: [0, 0, 1, 1, 0],
        }}
        transition={{
          duration: 7,
          times: [0, 0.5, 0.6, 0.8, 1],
          repeat: Infinity,
        }}
      >
        <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </motion.div>

      {/* Render.com (✓) */}
      <motion.div
        className="relative"
        animate={{
          scale: [1, 1, 1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          times: [0, 0.5, 0.6, 0.65, 1],
          repeat: Infinity,
        }}
      >
        <div className="text-5xl">☁️</div>
        <motion.div
          className="absolute -bottom-2 left-0 right-0 text-center text-green-400 font-mono text-xs"
          animate={{
            opacity: [0, 0, 0, 1, 1],
          }}
          transition={{
            duration: 7,
            times: [0, 0.55, 0.6, 0.65, 1],
            repeat: Infinity,
          }}
        >
          Render
        </motion.div>
      </motion.div>
    </div>
  );
}
