'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Slide06PlayFabIntegration() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16 pb-32">
      {/* 왼쪽: 서버 할당 과정 애니메이션 */}
      <div className="w-1/2 h-full flex items-center justify-center">
        <div className="relative w-full h-[80%] border-2 border-blue-500/30 rounded-2xl bg-blue-950/20 overflow-hidden">
          <ServerAllocationAnimation />
        </div>
      </div>

      {/* 오른쪽: 설명 */}
      <div className="w-1/2 h-full flex flex-col gap-4 overflow-y-auto pr-2 pb-8 custom-scrollbar">
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
          <h2 className="text-5xl font-bold text-blue-400 font-mono mb-3">
            PlayFab
          </h2>
          <p className="text-xl text-blue-300 font-mono">
            Multiplayer Server Allocation
          </p>
        </motion.div>

        {/* 왜 PlayFab? */}
        <motion.div
          className="p-4 bg-cyan-950/30 backdrop-blur-sm border border-cyan-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🤔</div>
            <div>
              <h3 className="text-base font-bold text-cyan-400 font-mono mb-2">
                왜 PlayFab?
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 자동 서버 할당/해제 (Auto Scaling)</li>
                <li>• 글로벌 리전 지원 (지연 시간↓)</li>
                <li>• 사용한 만큼만 과금 (비용↓)</li>
                <li>• Azure 인프라 (안정성↑)</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 서버 할당 과정 */}
        <motion.div
          className="p-4 bg-blue-950/30 backdrop-blur-sm border border-blue-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🔧</div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-blue-400 font-mono mb-2">
                RequestServer 과정
              </h3>
              <div className="bg-black/50 p-3 rounded font-mono text-[10px] text-gray-300 leading-relaxed">
                <span className="text-purple-400">// 1. EntityToken 획득</span><br />
                <span className="text-blue-400">var</span> authResult = <span className="text-blue-400">await</span><br />
                &nbsp;&nbsp;PlayFabAuthenticationAPI.GetEntityTokenAsync();<br /><br />
                
                <span className="text-purple-400">// 2. 서버 요청</span><br />
                <span className="text-blue-400">var</span> request = <span className="text-blue-400">new</span> RequestMultiplayerServerRequest<br />
                {'{'}<br />
                &nbsp;&nbsp;BuildId = _buildId,<br />
                &nbsp;&nbsp;SessionId = sessionId,<br />
                &nbsp;&nbsp;PreferredRegions = [<span className="text-green-300">"KoreaCentral"</span>]<br />
                {'}'};<br /><br />
                
                <span className="text-purple-400">// 3. 응답 (IP, Port)</span><br />
                lobby.GameServerIP = result.IPV4Address;<br />
                lobby.GameServerPort = result.Ports[<span className="text-yellow-400">0</span>].Num;
              </div>
            </div>
          </div>
        </motion.div>

        {/* 상태 체크 */}
        <motion.div
          className="p-4 bg-green-950/30 backdrop-blur-sm border border-green-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">⏱️</div>
            <div>
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">
                WaitForServerReady
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• GetMultiplayerServerDetails()</li>
                <li>• State == "Active" 까지 대기</li>
                <li>• 최대 30초 타임아웃</li>
                <li>• 1초마다 폴링</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 서버 종료 */}
        <motion.div
          className="p-4 bg-red-950/30 backdrop-blur-sm border border-red-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🔴</div>
            <div>
              <h3 className="text-base font-bold text-red-400 font-mono mb-2">
                ShutdownServer
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 로비가 비면 자동 호출</li>
                <li>• ShutdownMultiplayerServerAsync()</li>
                <li>• 비용 절감 (유휴 서버↓)</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 리전 선택 */}
        <motion.div
          className="p-4 bg-purple-950/30 backdrop-blur-sm border border-purple-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🌏</div>
            <div>
              <h3 className="text-base font-bold text-purple-400 font-mono mb-2">
                리전 선택
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• PreferredRegions: ["KoreaCentral"]</li>
                <li>• 지연 시간 최소화 (Ping↓)</li>
                <li>• 여러 리전 지원 가능</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 응답 데이터 */}
        <motion.div
          className="p-4 bg-yellow-950/30 backdrop-blur-sm border border-yellow-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">📦</div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-yellow-400 font-mono mb-2">
                ServerAllocationResponse
              </h3>
              <div className="bg-black/50 p-3 rounded font-mono text-[10px] text-gray-300 leading-relaxed">
                {'{'}<br />
                &nbsp;&nbsp;<span className="text-yellow-300">SessionId</span>: "guid",<br />
                &nbsp;&nbsp;<span className="text-yellow-300">IPV4Address</span>: "20.214.x.x",<br />
                &nbsp;&nbsp;<span className="text-yellow-300">Port</span>: <span className="text-blue-400">7777</span>,<br />
                &nbsp;&nbsp;<span className="text-yellow-300">Region</span>: "KoreaCentral"<br />
                {'}'}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ServerAllocationAnimation() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-8 p-8">
      {/* 매칭 서버 */}
      <motion.div
        className="w-48 px-4 py-3 bg-orange-500/20 border-2 border-orange-400 rounded-xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="text-center">
          <div className="text-2xl mb-1">🔌</div>
          <div className="text-orange-400 font-mono text-xs font-bold">SignalR Hub</div>
        </div>
      </motion.div>

      {/* Arrow */}
      <motion.div
        className="flex flex-col items-center"
        animate={{
          opacity: [0, 0, 1, 1, 0],
          scaleY: [0, 0, 1, 1, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.1, 0.15, 0.4, 0.45],
          repeat: Infinity,
        }}
      >
        <svg className="w-6 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
        <div className="text-cyan-400 font-mono text-xs">RequestServer</div>
      </motion.div>

      {/* PlayFab */}
      <motion.div
        className="w-48 px-4 py-3 bg-blue-500/20 border-2 border-blue-400 rounded-xl"
        animate={{
          opacity: [0, 0, 1, 1, 1],
          scale: [0.8, 0.8, 1, 1, 1],
        }}
        transition={{
          duration: 8,
          times: [0, 0.15, 0.2, 0.5, 1],
          repeat: Infinity,
        }}
      >
        <div className="text-center">
          <div className="text-2xl mb-1">🎮</div>
          <div className="text-blue-400 font-mono text-xs font-bold">PlayFab API</div>
          <ServerState />
        </div>
      </motion.div>

      {/* Arrow */}
      <motion.div
        className="flex flex-col items-center"
        animate={{
          opacity: [0, 0, 0, 0, 1, 1, 0],
          scaleY: [0, 0, 0, 0, 1, 1, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.4, 0.45, 0.5, 0.55, 0.7, 0.75],
          repeat: Infinity,
        }}
      >
        <svg className="w-6 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
        <div className="text-cyan-400 font-mono text-xs">IP + Port</div>
      </motion.div>

      {/* Game Server */}
      <motion.div
        className="w-48 px-4 py-3 bg-green-500/20 border-2 border-green-400 rounded-xl"
        animate={{
          opacity: [0, 0, 0, 0, 0, 1, 1],
          scale: [0.8, 0.8, 0.8, 0.8, 0.8, 1, 1],
        }}
        transition={{
          duration: 8,
          times: [0, 0.5, 0.55, 0.6, 0.65, 0.7, 1],
          repeat: Infinity,
        }}
      >
        <div className="text-center">
          <div className="text-2xl mb-1">🖥️</div>
          <div className="text-green-400 font-mono text-xs font-bold">Game Server</div>
          <div className="text-gray-400 font-mono text-[8px]">20.214.x.x:7777</div>
        </div>
      </motion.div>

      {/* Success */}
      <motion.div
        className="absolute bottom-4 left-0 right-0 flex justify-center"
        animate={{
          opacity: [0, 0, 0, 0, 0, 0, 1, 1, 0],
          scale: [0, 0, 0, 0, 0, 0, 1.2, 1, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.65, 0.7, 0.72, 0.74, 0.76, 0.78, 0.85, 1],
          repeat: Infinity,
        }}
      >
        <div className="px-6 py-2 bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-lg">
          <span className="text-green-400 font-mono text-sm font-bold">✓ Allocated!</span>
        </div>
      </motion.div>
    </div>
  );
}

function ServerState() {
  const [state, setState] = useState('Standby');

  useEffect(() => {
    const startTime = Date.now();

    const animate = () => {
      const elapsed = ((Date.now() - startTime) % 8000) / 8000;

      if (elapsed < 0.2) {
        setState('Standby');
      } else if (elapsed < 0.5) {
        setState('StandingBy');
      } else if (elapsed < 0.7) {
        setState('Active');
      } else {
        setState('Active');
      }

      requestAnimationFrame(animate);
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className={`font-mono text-[10px] ${
      state === 'Active' ? 'text-green-400' : 
      state === 'StandingBy' ? 'text-yellow-400' : 
      'text-gray-400'
    }`}>
      State: {state}
    </div>
  );
}
