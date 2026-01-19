'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Slide04Attempt2() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16 pb-32">
      {/* 왼쪽: Before/After */}
      <div className="w-[45%] h-full flex flex-col justify-center gap-4">
        {/* Before (DB 플래그) */}
        <div className="relative h-[42%] border-2 border-red-500/30 rounded-2xl bg-red-950/20 overflow-hidden">
          <DbFlagBefore />
          
          <motion.div
            className="absolute top-4 left-4 px-4 py-2 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-red-400 font-mono text-sm">Before: DB Flag</p>
          </motion.div>

          <motion.div
            className="absolute bottom-6 left-0 right-0 flex justify-center"
            animate={{
              opacity: [0, 0, 1, 1, 0],
            }}
            transition={{
              duration: 8,
              times: [0, 0.3, 0.35, 0.5, 1],
              repeat: Infinity,
            }}
          >
            <div className="px-4 py-2 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-lg">
              <span className="text-red-400 font-mono text-sm font-bold">❌ DB 부하</span>
            </div>
          </motion.div>
        </div>

        {/* 변환 표시 */}
        <div className="relative flex items-center justify-center py-3">
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-lg">
              <code className="text-green-400 font-mono text-xs">
                ConcurrentDictionary
              </code>
            </div>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* After (메모리 세션) */}
        <div className="relative h-[42%] border-2 border-green-500/30 rounded-2xl bg-green-950/20 overflow-hidden">
          <MemorySessionAfter />
          
          <motion.div
            className="absolute top-4 left-4 px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-green-400 font-mono text-sm">After: Memory Session</p>
          </motion.div>

          <motion.div
            className="absolute bottom-6 left-0 right-0 flex justify-center"
            animate={{
              opacity: [0, 0, 1, 1, 0],
            }}
            transition={{
              duration: 8,
              times: [0, 0.5, 0.55, 0.7, 1],
              repeat: Infinity,
            }}
          >
            <div className="px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-lg">
              <span className="text-green-400 font-mono text-sm font-bold">✓ 실시간</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 오른쪽: 설명 */}
      <div className="w-[55%] h-full flex flex-col gap-4 overflow-y-auto pr-2 pb-8 custom-scrollbar">
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="flex text-5xl font-bold text-green-400 font-mono mb-3">
            Attempt #2
            <div className="text-xl text-green-300 font-mono ml-4 mt-3">
              Memory Session
            </div>
          </h2>
        </motion.div>

        {/* 왜 메모리 세션? */}
        <motion.div
          className="p-4 bg-blue-950/30 backdrop-blur-sm border border-blue-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🤔</div>
            <div>
              <h3 className="text-base font-bold text-blue-400 font-mono mb-2">
                왜 메모리 세션?
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 실시간 상태 관리 (즉시 반영)</li>
                <li>• DB 쿼리 불필요 (메모리 접근만)</li>
                <li>• 빠른 중복 체크 (1ms 이하)</li>
                <li>• 서버 재시작 시 자동 초기화 (장점!)</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 구현 방식 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-purple-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🔧</div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-purple-400 font-mono mb-2">
                구현 방식
              </h3>
              <div className="bg-black/50 p-3 rounded font-mono text-[10px] text-gray-300 leading-relaxed">
                <span className="text-blue-400">private static readonly</span><br />
                ConcurrentDictionary&lt;Guid, User&gt; _loginSessions<br /><br />
                
                <span className="text-purple-400">// Login</span><br />
                <span className="text-blue-400">var</span> alreadyLoggedIn = _loginSessions.Values<br />
                &nbsp;&nbsp;.Any(u =&gt; u.Username == dto.id);<br />
                <span className="text-blue-400">if</span> (alreadyLoggedIn) <span className="text-blue-400">return</span> Conflict();<br />
                _loginSessions.TryAdd(sessionId, user);<br /><br />
                
                <span className="text-purple-400">// Logout</span><br />
                _loginSessions.TryRemove(sessionId, <span className="text-blue-400">out</span> _);
              </div>
            </div>
          </div>
        </motion.div>

        {/* 개선 사항 */}
        <motion.div
          className="p-4 bg-green-950/30 border border-green-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">✓</div>
            <div>
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">
                DB 방식보다 나은 점
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• <span className="text-green-400">실시간 중복 로그인 방지</span></li>
                <li>• DB 쿼리 90% 감소</li>
                <li>• 응답 속도 3배 향상 (15ms)</li>
                <li>• Thread-safe (ConcurrentDictionary)</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 핵심 개념 */}
        <motion.div
          className="p-4 bg-cyan-950/30 border border-cyan-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <h3 className="text-base font-bold text-cyan-400 font-mono mb-2">
                핵심 개념
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• <span className="text-cyan-400">static</span>: 컨트롤러 인스턴스 간 공유</li>
                <li>• <span className="text-cyan-400">ConcurrentDictionary</span>: 동시 접근 안전</li>
                <li>• <span className="text-cyan-400">sessionId</span>: Guid로 유니크 식별</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 한계점 */}
        <motion.div
          className="p-4 bg-yellow-950/30 border border-yellow-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚠️</div>
            <div>
              <h3 className="text-base font-bold text-yellow-400 font-mono mb-2">
                한계점 (향후 개선)
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 서버 재시작 시 세션 초기화</li>
                <li>• 다중 서버 환경: Redis 필요</li>
                <li>• 메모리 사용량 증가 (1000명 = ~1MB)</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 결론 */}
        <motion.div
          className="p-4 bg-gradient-to-r from-green-950/40 to-cyan-950/40 border-2 border-green-500/70 rounded-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-3xl">🎉</div>
            <div>
              <h3 className="text-lg font-bold text-green-400 font-mono mb-2">
                성공!
              </h3>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                "메모리 세션으로 <span className="text-green-400 font-bold">실시간</span> 중복 로그인 차단 성공<br />
                DB 부하는 줄이고 속도는 3배 향상<br />
                → <span className="text-cyan-400 font-bold">최종 솔루션 완성</span>"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// DB 플래그 Before 애니메이션
function DbFlagBefore() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-48 h-32 border-2 border-red-500 rounded-lg bg-red-950/30 p-3">
        <div className="text-red-400 font-mono text-xs mb-2">Database</div>
        <motion.div
          className="text-xs font-mono text-gray-400"
          animate={{
            opacity: [0, 1, 1, 1],
          }}
          transition={{
            duration: 8,
            times: [0, 0.2, 0.5, 1],
            repeat: Infinity,
          }}
        >
          UPDATE Users<br />
          SET IsLoggedIn = true
        </motion.div>
      </div>

      {/* DB 아이콘 */}
      <motion.div
        className="absolute -bottom-4 text-4xl"
        animate={{
          scale: [1, 1.2, 1, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.25, 0.4, 1],
          repeat: Infinity,
        }}
      >
        💾
      </motion.div>
    </div>
  );
}

// 메모리 세션 After 애니메이션
function MemorySessionAfter() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-56 h-36 border-2 border-green-500 rounded-lg bg-green-950/30 p-3">
        <div className="text-green-400 font-mono text-xs mb-2">Memory (RAM)</div>
        <div className="text-[10px] font-mono text-gray-400 leading-relaxed">
          ConcurrentDictionary<br />
          <motion.div
            animate={{
              opacity: [0, 1, 1, 1],
            }}
            transition={{
              duration: 8,
              times: [0, 0.3, 0.6, 1],
              repeat: Infinity,
            }}
          >
            {'{'} sessionId, User {'}'}
          </motion.div>
        </div>
      </div>

      {/* 번개 아이콘 (빠름) */}
      <motion.div
        className="absolute -top-4 -right-4 text-4xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.4, 1],
          repeat: Infinity,
        }}
      >
        ⚡
      </motion.div>
    </div>
  );
}
