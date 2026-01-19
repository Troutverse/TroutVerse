'use client';

import { motion } from 'framer-motion';

export default function Slide04SignalR() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16">
      {/* 왼쪽: HTTP vs WebSocket 비교 */}
      <div className="w-1/2 h-full flex flex-col justify-center gap-6">
        {/* HTTP 폴링 */}
        <div className="relative h-[42%] border-2 border-red-500/30 rounded-2xl bg-red-950/20 overflow-hidden">
          <HttpPollingAnimation />
          
          <motion.div
            className="absolute top-4 left-4 px-4 py-2 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-red-400 font-mono text-sm">HTTP Polling</p>
          </motion.div>

          <motion.div
            className="absolute bottom-6 left-0 right-0 flex justify-center"
            animate={{
              opacity: [0, 0, 1, 1, 0],
            }}
            transition={{
              duration: 5,
              times: [0, 0.3, 0.35, 0.6, 1],
              repeat: Infinity,
            }}
          >
            <div className="px-4 py-2 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-lg">
              <span className="text-red-400 font-mono text-xs font-bold">느림 + 비효율적</span>
            </div>
          </motion.div>
        </div>

        {/* 구분선 */}
        <div className="relative flex items-center py-2">
          <div className="flex-1 h-px bg-gray-700"></div>
          <div className="mx-4 text-2xl text-gray-500 font-bold">vs</div>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* WebSocket */}
        <div className="relative h-[42%] border-2 border-green-500/30 rounded-2xl bg-green-950/20 overflow-hidden">
          <WebSocketAnimation />
          
          <motion.div
            className="absolute top-4 left-4 px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-green-400 font-mono text-sm">WebSocket (SignalR)</p>
          </motion.div>

          <motion.div
            className="absolute bottom-6 left-0 right-0 flex justify-center"
            animate={{
              opacity: [0, 0, 1, 1, 0],
            }}
            transition={{
              duration: 5,
              times: [0, 0.5, 0.55, 0.8, 1],
              repeat: Infinity,
            }}
          >
            <div className="px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-lg">
              <span className="text-green-400 font-mono text-xs font-bold">빠름 + 양방향</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 오른쪽: SignalR 설명 */}
      <div className="w-1/2 flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-orange-400 font-mono mb-3">SignalR</h2>
          <p className="text-xl text-orange-300 font-mono">
            Real-time WebSocket Communication
          </p>
        </motion.div>

        {/* 장점 */}
        <motion.div
          className="p-4 bg-gradient-to-br from-green-950/40 to-green-900/20 border-2 border-green-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">✓</div>
            <div>
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">
                장점
              </h3>
              <ul className="space-y-1 text-gray-400 font-mono text-xs">
                <li>• 양방향 실시간 통신</li>
                <li>• 자동 재연결 (Resilience)</li>
                <li>• Group 관리 (로비별)</li>
                <li>• HTTP 폴링보다 10배 빠름</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 핵심 메서드 */}
        <motion.div
          className="p-4 bg-gradient-to-br from-blue-950/40 to-blue-900/20 border-2 border-blue-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">📋</div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-blue-400 font-mono mb-2">
                Hub Methods
              </h3>
              <div className="bg-black/50 p-3 rounded font-mono text-[10px] text-gray-300 leading-relaxed">
                <span className="text-blue-400">public async Task</span><br />
                FindOrCreateLobby(<span className="text-blue-400">int</span> maxPlayers)<br /><br />
                
                <span className="text-blue-400">public async Task</span><br />
                LeaveLobby(<span className="text-blue-400">int</span> lobbyId)<br /><br />
                
                <span className="text-purple-400">// Client Callback</span><br />
                <span className="text-blue-400">await</span> Clients.Group(<span className="text-green-300">"lobby_1"</span>)<br />
                &nbsp;&nbsp;.SendAsync(<span className="text-green-300">"LobbyUpdated"</span>, status);
              </div>
            </div>
          </div>
        </motion.div>

        {/* 연결 생명주기 */}
        <motion.div
          className="p-4 bg-gradient-to-br from-purple-950/40 to-purple-900/20 border-2 border-purple-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🔄</div>
            <div>
              <h3 className="text-base font-bold text-purple-400 font-mono mb-2">
                Connection Lifecycle
              </h3>
              <ul className="space-y-1 text-gray-400 font-mono text-xs">
                <li>• OnConnectedAsync() → 연결 시</li>
                <li>• OnDisconnectedAsync() → 자동 정리</li>
                <li>• Groups.AddToGroupAsync() → 로비 입장</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* HTTP vs WebSocket 비교 표 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/50 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <h3 className="text-sm font-bold text-cyan-400 font-mono mb-2">Performance</h3>
          <div className="grid grid-cols-2 gap-2 font-mono text-xs">
            <div className="p-2 bg-red-500/20 rounded text-center">
              <div className="text-red-400 font-bold">HTTP</div>
              <div className="text-gray-400 text-[10px]">~500ms</div>
            </div>
            <div className="p-2 bg-green-500/20 rounded text-center">
              <div className="text-green-400 font-bold">WebSocket</div>
              <div className="text-gray-400 text-[10px]">~50ms</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// HTTP 폴링 애니메이션
function HttpPollingAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center gap-20">
      {/* Client */}
      <div className="text-5xl">💻</div>

      {/* 반복되는 HTTP 요청 */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: '35%' }}
          animate={{
            x: [0, 0, 80, 80, 0],
            opacity: [0, 1, 1, 0, 0],
          }}
          transition={{
            duration: 5,
            times: [0, 0.1, 0.4, 0.5, 1],
            delay: i * 1.5,
            repeat: Infinity,
          }}
        >
          <div className="px-3 py-1 bg-red-500 rounded text-white font-mono text-xs">
            GET /status
          </div>
        </motion.div>
      ))}

      {/* Server */}
      <div className="text-5xl">🖥️</div>
    </div>
  );
}

// WebSocket 애니메이션
function WebSocketAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center gap-20">
      {/* Client */}
      <div className="text-5xl">💻</div>

      {/* 지속적인 연결 */}
      <motion.div
        className="absolute w-40 h-1 bg-green-500"
        style={{ left: '35%', top: '50%' }}
        animate={{
          opacity: [0, 1, 1, 1],
          scaleX: [0, 1, 1, 1],
        }}
        transition={{
          duration: 5,
          times: [0, 0.2, 0.8, 1],
          repeat: Infinity,
        }}
      >
        <motion.div
          className="absolute -top-2 text-green-400 font-mono text-xs whitespace-nowrap"
          animate={{
            opacity: [0, 0, 1, 1],
          }}
          transition={{
            duration: 5,
            times: [0, 0.2, 0.3, 1],
            repeat: Infinity,
          }}
        >
          WebSocket Connected
        </motion.div>
      </motion.div>

      {/* 양방향 메시지 */}
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          className="absolute px-2 py-1 bg-green-500 rounded text-white font-mono text-[10px]"
          style={{ left: i === 0 ? '35%' : '55%', top: '50%' }}
          animate={{
            x: i === 0 ? [0, 80] : [0, -80],
            y: [0, -20, -20, 0],
            opacity: [0, 0, 1, 1, 0],
          }}
          transition={{
            duration: 5,
            times: [0, 0.4, 0.5, 0.7, 1],
            delay: 0.5 + i * 0.3,
            repeat: Infinity,
          }}
        >
          {i === 0 ? 'JOIN' : 'UPDATE'}
        </motion.div>
      ))}

      {/* Server */}
      <div className="text-5xl">🖥️</div>
    </div>
  );
}
