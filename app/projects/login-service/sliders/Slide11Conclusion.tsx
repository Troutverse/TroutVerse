'use client';

import { motion } from 'framer-motion';

export default function Slide11Conclusion() {
  return (
    <div className="w-full h-full flex flex-col items-center overflow-y-auto px-20 pt-12 pb-32 custom-scrollbar">
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
            개발 여정과 배운 것들
          </p>
        </motion.div>

        {/* 개발 여정 */}
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
              <p className="text-gray-400 font-mono text-xs mt-1">DB Flag (IsLoggedIn)</p>
            </div>
            <div className="p-3 bg-green-950/30 rounded-lg border border-green-500/50">
              <p className="text-green-400 font-mono text-sm font-bold">✓ Attempt #2</p>
              <p className="text-gray-300 font-mono text-xs mt-1">Memory Session</p>
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
              <span><span className="text-cyan-400 font-bold">실시간 상태는 메모리가 최선</span> - DB는 과거의 기록일 뿐</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400">•</span>
              <span>Repository 패턴의 유연성과 테스트 용이성</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400">•</span>
              <span>EF Core Migration으로 스키마 관리 자동화</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400">•</span>
              <span>JWT의 Stateless 인증 장점 (확장성)</span>
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
            {['ASP.NET Core 8.0', 'PostgreSQL', 'EF Core', 'JWT', 'Npgsql', 'Render.com'].map((tech, i) => (
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
              <p className="text-green-400 font-mono text-3xl font-bold">50ms</p>
              <p className="text-gray-400 font-mono text-xs mt-1">응답 속도</p>
            </div>
            <div>
              <p className="text-green-400 font-mono text-3xl font-bold">100%</p>
              <p className="text-gray-400 font-mono text-xs mt-1">중복 차단</p>
            </div>
            <div>
              <p className="text-green-400 font-mono text-3xl font-bold">1000+</p>
              <p className="text-gray-400 font-mono text-xs mt-1">동시 접속</p>
            </div>
          </div>
        </motion.div>

        {/* 다음 단계 */}
        <motion.div
          className="p-6 bg-yellow-950/30 border border-yellow-500/50 rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-yellow-400 font-mono mb-4 flex items-center gap-3">
            <span className="text-3xl">🚀</span>
            다음 단계
          </h3>
          <ul className="space-y-2 text-gray-300 font-mono text-sm">
            <li className="flex items-center gap-3">
              <span className="text-yellow-400">→</span>
              <span>Redis 도입 (다중 서버 세션 공유)</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-yellow-400">→</span>
              <span>bcrypt 비밀번호 해싱</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-yellow-400">→</span>
              <span>Refresh Token 구현</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-yellow-400">→</span>
              <span>Rate Limiting (DDoS 방어)</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-yellow-400">→</span>
              <span>로그 시스템 (Serilog)</span>
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
            "메모리 기반 세션으로"
          </p>
          <p className="text-xl text-green-400 font-mono font-bold mb-3">
            "빠르고 안전한 인증 시스템 구축"
          </p>
          <p className="text-gray-300 font-mono text-base">
            DB 플래그의 한계를 극복하고<br />
            실시간 중복 로그인 차단 성공
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

        {/* GitHub 링크 */}
        <motion.div
          className="text-center pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.8 }}
        >
          <a
            href="https://github.com/yourusername/login-service"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="text-gray-300 font-mono text-sm">View on GitHub</span>
          </a>
          <p className="text-gray-500 font-mono text-sm mt-4">
            Thank you for watching!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
