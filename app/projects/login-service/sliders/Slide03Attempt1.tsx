'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Slide03Attempt1() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16 pb-32">
      {/* 왼쪽: DB 플래그 애니메이션 */}
      <div className="w-[45%] h-full flex items-center justify-center">
        <div className="relative w-full h-[80%] border-2 border-red-500/30 rounded-2xl bg-red-950/20 overflow-hidden">
          <DbFlagAnimation />

          {/* 실패 표시 */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{
              opacity: [0, 0, 0, 0, 1, 1, 0],
              scale: [0, 0, 0, 0, 1.2, 1, 0],
            }}
            transition={{
              duration: 10,
              times: [0, 0.55, 0.6, 0.65, 0.67, 0.75, 1],
              repeat: Infinity,
            }}
          >
            <div className="flex flex-col items-center gap-4">
              <span className="text-8xl">❌</span>
              <span className="text-red-400 font-mono text-3xl font-bold">FAILED</span>
              <span className="text-red-400 font-mono text-sm">네트워크 끊김!</span>
            </div>
          </motion.div>

          {/* DB 상태 표시 */}
          <motion.div
            className="absolute top-4 right-4 px-4 py-2 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-lg"
            animate={{
              opacity: [0, 0, 1, 1, 1, 0],
            }}
            transition={{
              duration: 10,
              times: [0, 0.3, 0.35, 0.6, 0.75, 1],
              repeat: Infinity,
            }}
          >
            <DbStatusCounter />
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
          <h2 className="flex text-5xl font-bold text-red-400 font-mono mb-3">
            Attempt #1
            <div className="text-xl text-red-300 font-mono ml-4 mt-3">
              DB Flag (IsLoggedIn)
            </div>
          </h2>
        </motion.div>

        {/* 왜 이 방법? */}
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
                왜 DB 플래그 방식?
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 직관적: User 테이블에 bool 컬럼 추가</li>
                <li>• 간단한 구현: Login → true, Logout → false</li>
                <li>• 영구 저장: DB에 상태 보존</li>
                <li>• 익숙한 패턴: 많은 시스템에서 사용</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 구현 방식 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">📍</div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-purple-400 font-mono mb-2">
                구현 방식
              </h3>
              <div className="bg-black/50 p-3 rounded font-mono text-xs text-gray-300 leading-relaxed">
                <span className="text-blue-400">public class</span> User<br />
                {'{'}<br />
                &nbsp;&nbsp;<span className="text-green-400">public bool</span> IsLoggedIn {'{ get; set; }'}<br />
                {'}'}<br /><br />
                <span className="text-purple-400">// Login</span><br />
                user.IsLoggedIn = <span className="text-yellow-400">true</span>;<br />
                <span className="text-purple-400">// Logout</span><br />
                user.IsLoggedIn = <span className="text-yellow-400">false</span>;
              </div>
            </div>
          </div>
        </motion.div>

        {/* 문제점 1 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-red-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚠️</div>
            <div>
              <h3 className="text-base font-bold text-red-400 font-mono mb-2">
                1. 비정상 종료 처리 불가
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 앱 강제 종료 (Task Kill)</li>
                <li>• 네트워크 끊김</li>
                <li>• 서버 다운</li>
                <li>• 결과: <span className="text-red-400">DB에 true 영구 남음</span></li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 문제점 2 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-orange-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">💥</div>
            <div>
              <h3 className="text-base font-bold text-orange-400 font-mono mb-2">
                2. DB 부하 문제
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 로그인마다 UPDATE 쿼리</li>
                <li>• 중복 체크에도 SELECT 쿼리</li>
                <li>• <span className="text-orange-400">동시 접속 1000명 → DB 병목</span></li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 문제점 3 */}
        <motion.div
          className="p-4 bg-red-950/30 border-2 border-red-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🔥</div>
            <div>
              <h3 className="text-base font-bold text-red-400 font-mono mb-2">
                3. 동기화 문제
              </h3>
              <ul className="space-y-1.5 text-gray-300 font-mono text-xs">
                <li>• 서버가 여러 대일 때 불일치</li>
                <li>• DB 업데이트 지연 (수십~수백 ms)</li>
                <li>• Race Condition 발생 가능</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 결론 */}
        <motion.div
          className="p-4 bg-yellow-950/30 border-l-4 border-yellow-500 rounded-r-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <h3 className="text-sm font-bold text-yellow-400 font-mono mb-2">
                핵심 문제
              </h3>
              <p className="text-gray-300 font-mono text-xs leading-relaxed">
                "DB 상태는 <span className="text-yellow-400 font-bold">'과거'</span>의 기록일 뿐<br />
                실시간 세션 관리에는 <span className="text-yellow-400 font-bold">'현재'</span> 상태가 필요<br />
                → 메모리 기반 세션 관리로 전환 필요"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// DB 플래그 애니메이션
function DbFlagAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* DB 테이블 */}
      <div className="absolute w-64 h-48 border-2 border-purple-500 rounded-xl bg-purple-950/30">
        <div className="p-4">
          <div className="text-purple-400 font-mono text-sm mb-2">Users Table</div>
          <div className="space-y-2">
            {/* Header */}
            <div className="flex gap-2 text-xs font-mono text-purple-300 border-b border-purple-500/50 pb-1">
              <div className="w-20">Username</div>
              <div className="w-24">IsLoggedIn</div>
            </div>
            {/* Row */}
            <motion.div
              className="flex gap-2 text-xs font-mono"
              animate={{
                backgroundColor: [
                  'rgba(168, 85, 247, 0.1)',
                  'rgba(168, 85, 247, 0.1)',
                  'rgba(239, 68, 68, 0.2)',
                  'rgba(239, 68, 68, 0.2)',
                ],
              }}
              transition={{
                duration: 10,
                times: [0, 0.3, 0.35, 1],
                repeat: Infinity,
              }}
            >
              <div className="w-20 text-gray-400">Player1</div>
              <motion.div
                className="w-24"
                animate={{
                  color: ['#9ca3af', '#9ca3af', '#ef4444', '#ef4444'],
                }}
                transition={{
                  duration: 10,
                  times: [0, 0.3, 0.35, 1],
                  repeat: Infinity,
                }}
              >
                <FlagStatus />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Login 버튼 */}
      <motion.div
        className="absolute bottom-20 left-8 px-6 py-3 bg-blue-500 rounded-lg font-mono text-white font-bold shadow-lg"
        animate={{
          opacity: [0, 1, 1, 0, 0],
          scale: [0.8, 1, 1, 0.8, 0.8],
        }}
        transition={{
          duration: 10,
          times: [0, 0.1, 0.25, 0.3, 1],
          repeat: Infinity,
        }}
      >
        LOGIN
      </motion.div>

      {/* 네트워크 끊김 */}
      <motion.div
        className="absolute top-20 right-8 flex flex-col items-center"
        animate={{
          opacity: [0, 0, 1, 1, 0],
        }}
        transition={{
          duration: 10,
          times: [0, 0.5, 0.55, 0.65, 1],
          repeat: Infinity,
        }}
      >
        <svg className="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
        </svg>
        <span className="text-red-400 font-mono text-xs mt-2">Network Error</span>
      </motion.div>
    </div>
  );
}

function DbStatusCounter() {
  const [status, setStatus] = useState('false');

  useEffect(() => {
    const startTime = Date.now();

    const animate = () => {
      const elapsed = ((Date.now() - startTime) % 10000) / 10000;

      if (elapsed < 0.3) {
        setStatus('false');
      } else if (elapsed < 0.6) {
        setStatus('true');
      } else {
        setStatus('true (stuck!)');
      }

      requestAnimationFrame(animate);
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="font-mono text-xs">
      <span className={status.includes('stuck') ? 'text-red-400 font-bold' : 'text-gray-400'}>
        IsLoggedIn: {status}
      </span>
    </div>
  );
}

function FlagStatus() {
  const [status, setStatus] = useState('false');

  useEffect(() => {
    const startTime = Date.now();

    const animate = () => {
      const elapsed = ((Date.now() - startTime) % 10000) / 10000;

      if (elapsed < 0.3) {
        setStatus('false');
      } else {
        setStatus('true');
      }

      requestAnimationFrame(animate);
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return <span>{status}</span>;
}
