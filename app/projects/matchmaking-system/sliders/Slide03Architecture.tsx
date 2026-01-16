'use client';

import { motion } from 'framer-motion';

export default function Slide03Architecture() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-12 py-16 overflow-hidden">
      {/* 배경 그리드 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#22c55e 2px, transparent 2px),
            linear-gradient(90deg, #22c55e 2px, transparent 2px)
          `,
          backgroundSize: '100px 100px'
        }} />
      </div>

      {/* 헤더 */}
      <motion.div
        className="text-center mb-12 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-6xl font-bold text-green-400 font-mono mb-3">
          System Architecture
        </h2>
        <p className="text-xl text-green-300 font-mono">
          SignalR 기반 실시간 매칭 시스템
        </p>
      </motion.div>

      {/* 아키텍처 다이어그램 */}
      <div className="relative w-full max-w-6xl h-[600px] flex items-center justify-center z-10">

        {/* Unity Clients (상단) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-8">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
            >
              <ClientNode label={`Client ${i}`} />

              {/* 연결선 (Client → Hub) */}
              <motion.div
                className="absolute top-full left-1/2 w-px h-32 bg-gradient-to-b from-green-400 to-transparent"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 1 + i * 0.1, duration: 0.8 }}
              />

              {/* 데이터 패킷 애니메이션 */}
              <motion.div
                className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-green-400 rounded-full"
                animate={{
                  y: [0, 128, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* MatchmakingHub (중앙) */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <HubNode />
        </motion.div>

        {/* 연결선 (Hub → Manager) */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-px h-32 bg-gradient-to-b from-green-400 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        />

        {/* LobbiesManager (중하단) */}
        <motion.div
          className="absolute bottom-32 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <ManagerNode />
        </motion.div>

        {/* Lobbies (하단) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-12">
          <LobbyNode
            id={1}
            players={4}
            maxPlayers={4}
            status="full"
            delay={2.2}
          />
          <LobbyNode
            id={2}
            players={2}
            maxPlayers={4}
            status="waiting"
            delay={2.4}
          />
          <LobbyNode
            id={3}
            players={1}
            maxPlayers={4}
            status="waiting"
            delay={2.6}
          />
        </div>
      </div>

      {/* 하단 기술 스택 */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.8 }}
      >
        {[
          { name: 'Unity Client', color: 'green' },
          { name: 'SignalR Hub', color: 'green' },
          { name: 'ASP.NET Core', color: 'green' },
          { name: 'WebSocket', color: 'green' }
        ].map((tech) => (
          <div
            key={tech.name}
            className="px-4 py-2 bg-green-500/10 border border-green-400/40 rounded-lg"
          >
            <span className="text-green-400 font-mono text-sm">
              {tech.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Client Node
function ClientNode({ label }: { label: string }) {
  return (
    <div className="relative group">
      <div className="w-20 h-20 bg-green-500/20 border-2 border-green-400/60 rounded-lg flex flex-col items-center justify-center backdrop-blur-md hover:bg-green-500/30 transition-all">
        <div className="text-2xl mb-1">👤</div>
        <div className="text-xs text-green-400 font-mono">{label}</div>
      </div>

      {/* 글로우 */}
      <div className="absolute inset-0 bg-green-500/30 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />

      {/* 펄스 */}
      <motion.div
        className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [1, 0, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
      />
    </div>
  );
}

// Hub Node
function HubNode() {
  return (
    <div className="relative group">
      <div className="w-48 h-32 bg-green-500/20 border-2 border-green-400/60 rounded-xl flex flex-col items-center justify-center backdrop-blur-md hover:bg-green-500/30 transition-all">
        <div className="text-4xl mb-2">🔷</div>
        <div className="text-xl text-green-400 font-mono font-bold">MatchmakingHub</div>
        <div className="text-xs text-gray-400 font-mono mt-1">SignalR WebSocket</div>
      </div>

      {/* 글로우 */}
      <div className="absolute inset-0 bg-green-500/40 rounded-xl blur-2xl opacity-50 group-hover:opacity-100 transition-opacity -z-10" />

      {/* 회전하는 링 */}
      <motion.div
        className="absolute inset-0 border-2 border-green-400/30 rounded-xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

// Manager Node
function ManagerNode() {
  return (
    <div className="relative group">
      <div className="w-40 h-24 bg-green-500/20 border-2 border-green-400/60 rounded-xl flex flex-col items-center justify-center backdrop-blur-md hover:bg-green-500/30 transition-all">
        <div className="text-3xl mb-1">📊</div>
        <div className="text-lg text-green-400 font-mono font-bold">LobbiesManager</div>
        <div className="text-xs text-gray-400 font-mono">ConcurrentDictionary</div>
      </div>

      {/* 글로우 */}
      <div className="absolute inset-0 bg-green-500/30 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
    </div>
  );
}

// Lobby Node
function LobbyNode({ id, players, maxPlayers, status, delay }: {
  id: number;
  players: number;
  maxPlayers: number;
  status: 'full' | 'waiting';
  delay: number;
}) {
  const color = status === 'full' ? 'green' : 'yellow';

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      <div className={`w-32 h-24 ${status === 'full' ? 'bg-green-500/20 border-green-400/60' : 'bg-yellow-500/20 border-yellow-400/60'} border-2 rounded-lg flex flex-col items-center justify-center backdrop-blur-md transition-all`}>
        <div className="text-2xl mb-1">
          {status === 'full' ? '✓' : '⏳'}
        </div>
        <div className={`text-sm ${status === 'full' ? 'text-green-400' : 'text-yellow-400'} font-mono font-bold`}>
          Lobby #{id}
        </div>
        <div className={`text-xs ${status === 'full' ? 'text-green-400' : 'text-yellow-400'} font-mono`}>
          {players}/{maxPlayers} Players
        </div>

        {/* 플레이어 아이콘 */}
        <div className="flex gap-1 mt-1">
          {Array.from({ length: maxPlayers }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i < players ? (status === 'full' ? 'bg-green-400' : 'bg-yellow-400') : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Full 상태일 때 체크 애니메이션 */}
      {status === 'full' && (
        <motion.div
          className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: delay + 0.3, type: "spring" }}
        >
          <span className="text-white text-xs">✓</span>
        </motion.div>
      )}
    </motion.div>
  );
}
