'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Slide05LobbyManagement() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16 pb-32">
      {/* 왼쪽: Race Condition 시각화 */}
      <div className="w-[45%] h-full flex flex-col justify-center gap-4">
        {/* Before (일반 Dictionary) */}
        <div className="relative h-[42%] border-2 border-red-500/30 rounded-2xl bg-red-950/20 overflow-hidden">
          <RaceConditionAnimation />
          
          <motion.div
            className="absolute top-4 left-4 px-4 py-2 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-red-400 font-mono text-sm">일반 Dictionary</p>
          </motion.div>

          <motion.div
            className="absolute bottom-6 left-0 right-0 flex justify-center"
            animate={{
              opacity: [0, 0, 1, 1, 0],
            }}
            transition={{
              duration: 6,
              times: [0, 0.4, 0.45, 0.7, 1],
              repeat: Infinity,
            }}
          >
            <div className="px-4 py-2 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-lg">
              <span className="text-red-400 font-mono text-xs font-bold">❌ Race Condition</span>
            </div>
          </motion.div>
        </div>

        {/* 구분선 */}
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

        {/* After (ConcurrentDictionary) */}
        <div className="relative h-[42%] border-2 border-green-500/30 rounded-2xl bg-green-950/20 overflow-hidden">
          <ThreadSafeAnimation />
          
          <motion.div
            className="absolute top-4 left-4 px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-green-400 font-mono text-sm">ConcurrentDictionary</p>
          </motion.div>

          <motion.div
            className="absolute bottom-6 left-0 right-0 flex justify-center"
            animate={{
              opacity: [0, 0, 1, 1, 0],
            }}
            transition={{
              duration: 6,
              times: [0, 0.6, 0.65, 0.9, 1],
              repeat: Infinity,
            }}
          >
            <div className="px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-lg">
              <span className="text-green-400 font-mono text-xs font-bold">✓ Thread-safe</span>
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
          <h2 className="text-5xl font-bold text-purple-400 font-mono mb-3">
            Lobby Management
          </h2>
          <p className="text-xl text-purple-300 font-mono">
            Thread-safe 로비 관리
          </p>
        </motion.div>

        {/* 문제점 */}
        <motion.div
          className="p-4 bg-red-950/30 backdrop-blur-sm border border-red-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚠️</div>
            <div>
              <h3 className="text-base font-bold text-red-400 font-mono mb-2">
                Race Condition 문제
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 여러 플레이어가 동시에 입장</li>
                <li>• 정원 4명 로비에 5명 입장</li>
                <li>• 일반 Dictionary는 Thread-safe 아님</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 해결 방법 */}
        <motion.div
          className="p-4 bg-green-950/30 backdrop-blur-sm border border-green-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">✓</div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">
                ConcurrentDictionary
              </h3>
              <div className="bg-black/50 p-3 rounded font-mono text-[10px] text-gray-300 leading-relaxed">
                <span className="text-blue-400">private readonly</span><br />
                ConcurrentDictionary&lt;<span className="text-blue-400">int</span>, Lobby&gt; _lobbies<br /><br />
                
                <span className="text-purple-400">// Thread-safe operations</span><br />
                _lobbies[lobbyId] = lobby;<br />
                _lobbies.TryRemove(lobbyId, <span className="text-blue-400">out</span> _);
              </div>
            </div>
          </div>
        </motion.div>

        {/* Lobby 클래스 */}
        <motion.div
          className="p-4 bg-blue-950/30 backdrop-blur-sm border border-blue-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🔒</div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-blue-400 font-mono mb-2">
                Lobby Class (lock)
              </h3>
              <div className="bg-black/50 p-3 rounded font-mono text-[10px] text-gray-300 leading-relaxed">
                <span className="text-blue-400">private readonly object</span> _gate;<br />
                <span className="text-blue-400">private readonly</span> HashSet&lt;<span className="text-blue-400">string</span>&gt; _members;<br /><br />
                
                <span className="text-blue-400">public bool</span> AddMember(...) {'{'}<br />
                &nbsp;&nbsp;<span className="text-purple-400">lock</span> (_gate) {'{'}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">if</span> (_members.Count &gt;= MaxPlayers)<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">return false</span>;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;_members.Add(connectionId);<br />
                &nbsp;&nbsp;{'}'}<br />
                {'}'}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 핵심 메서드 */}
        <motion.div
          className="p-4 bg-purple-950/30 backdrop-blur-sm border border-purple-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">📋</div>
            <div>
              <h3 className="text-base font-bold text-purple-400 font-mono mb-2">
                LobbiesManager 메서드
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• FindLobby() - 빈 로비 찾기</li>
                <li>• CreateLobby() - 신규 생성</li>
                <li>• RemoveLobby() - 자동 정리</li>
                <li>• RemovePlayerFromAllLobbies()</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 자동 정리 */}
        <motion.div
          className="p-4 bg-cyan-950/30 backdrop-blur-sm border border-cyan-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🗑️</div>
            <div>
              <h3 className="text-base font-bold text-cyan-400 font-mono mb-2">
                자동 정리
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 플레이어 나갈 때마다 체크</li>
                <li>• MemberCount == 0 → 로비 삭제</li>
                <li>• PlayFab 서버도 자동 종료</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Race Condition 애니메이션
function RaceConditionAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 로비 (정원 초과) */}
      <div className="w-32 h-32 border-4 border-red-500 rounded-xl bg-red-950/30 flex flex-col items-center justify-center">
        <span className="text-red-400 font-mono text-xs">Lobby (4/4)</span>
        <LobbyCounter max={4} shouldOverflow={true} />
      </div>

      {/* 5명의 플레이어가 동시에 입장 */}
      {[0, 72, 144, 216, 288].map((angle, i) => (
        <motion.div
          key={angle}
          className="absolute w-8 h-8 bg-red-500 rounded-full"
          style={{
            left: '50%',
            top: '50%',
            marginLeft: -16,
            marginTop: -16,
          }}
          animate={{
            x: [
              Math.cos((angle * Math.PI) / 180) * 100,
              Math.cos((angle * Math.PI) / 180) * 100,
              0,
              0,
            ],
            y: [
              Math.sin((angle * Math.PI) / 180) * 100,
              Math.sin((angle * Math.PI) / 180) * 100,
              0,
              0,
            ],
            scale: [1, 1, 0.5, 0.5],
          }}
          transition={{
            duration: 6,
            times: [0, 0.2, 0.4, 1],
            delay: i * 0.05,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}

// Thread-safe 애니메이션
function ThreadSafeAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 로비 (정상) */}
      <div className="w-32 h-32 border-4 border-green-500 rounded-xl bg-green-950/30 flex flex-col items-center justify-center">
        <span className="text-green-400 font-mono text-xs">Lobby (4/4)</span>
        <LobbyCounter max={4} shouldOverflow={false} />
      </div>

      {/* 4명만 입장, 1명은 대기 */}
      {[0, 90, 180, 270].map((angle, i) => (
        <motion.div
          key={angle}
          className="absolute w-8 h-8 bg-green-500 rounded-full"
          style={{
            left: '50%',
            top: '50%',
            marginLeft: -16,
            marginTop: -16,
          }}
          animate={{
            x: [
              Math.cos((angle * Math.PI) / 180) * 100,
              Math.cos((angle * Math.PI) / 180) * 100,
              0,
              0,
            ],
            y: [
              Math.sin((angle * Math.PI) / 180) * 100,
              Math.sin((angle * Math.PI) / 180) * 100,
              0,
              0,
            ],
            scale: [1, 1, 0.5, 0.5],
          }}
          transition={{
            duration: 6,
            times: [0, 0.3, 0.5, 1],
            delay: i * 0.1,
            repeat: Infinity,
          }}
        />
      ))}

      {/* 거부된 플레이어 */}
      <motion.div
        className="absolute w-8 h-8 bg-red-500 rounded-full"
        style={{
          left: '50%',
          top: '50%',
          marginLeft: -16,
          marginTop: -16,
        }}
        animate={{
          x: [120, 120, 60, 60, 120],
          y: [0, 0, 0, 0, 0],
          opacity: [0, 1, 1, 0.3, 0],
        }}
        transition={{
          duration: 6,
          times: [0, 0.4, 0.5, 0.6, 1],
          repeat: Infinity,
        }}
      />

      {/* X 표시 */}
      <motion.div
        className="absolute text-3xl text-red-400"
        style={{ left: '70%', top: '45%' }}
        animate={{
          opacity: [0, 0, 1, 1, 0],
          scale: [0, 0, 1.2, 1, 0],
        }}
        transition={{
          duration: 6,
          times: [0, 0.48, 0.52, 0.6, 1],
          repeat: Infinity,
        }}
      >
        ❌
      </motion.div>
    </div>
  );
}

function LobbyCounter({ max, shouldOverflow }: { max: number; shouldOverflow: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    const animate = () => {
      const elapsed = ((Date.now() - startTime) % 6000) / 6000;

      if (elapsed < 0.4) {
        setCount(0);
      } else if (elapsed < 0.5) {
        const progress = (elapsed - 0.4) / 0.1;
        setCount(Math.min(Math.floor(4 * progress), shouldOverflow ? 5 : 4));
      } else {
        setCount(shouldOverflow ? 5 : 4);
      }

      requestAnimationFrame(animate);
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [shouldOverflow]);

  return (
    <span className={`font-mono text-xl font-bold ${count > max ? 'text-red-400' : 'text-green-400'}`}>
      {count}/{max}
    </span>
  );
}
