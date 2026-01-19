'use client';

import { motion } from 'framer-motion';

export default function Slide09Demo() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16">
      {/* 왼쪽: Unity → SignalR 통신 */}
      <div className="w-[55%] h-full flex flex-col justify-center gap-4 overflow-y-auto pr-2 pb-8 custom-scrollbar">
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
          <h2 className="text-5xl font-bold text-cyan-400 font-mono mb-3">Demo</h2>
          <p className="text-xl text-cyan-300 font-mono">
            실제 작동 예시
          </p>
        </motion.div>

        {/* Unity Client Code */}
        <motion.div
          className="p-4 bg-gradient-to-br from-blue-950/40 to-blue-900/20 border-2 border-blue-500/50 rounded-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🎮</div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-blue-400 font-mono mb-2">
                Unity Client (C#)
              </h3>
              <div className="bg-black/50 p-3 rounded font-mono text-[10px] text-gray-300 leading-relaxed">
                <span className="text-purple-400">// SignalR 연결</span><br />
                connection = <span className="text-blue-400">new</span> HubConnectionBuilder()<br />
                &nbsp;&nbsp;.WithUrl(<span className="text-green-300">"https://matchmaking.onrender.com</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">/matchmaking"</span>)<br />
                &nbsp;&nbsp;.Build();<br /><br />
                
                <span className="text-blue-400">await</span> connection.StartAsync();<br /><br />
                
                <span className="text-purple-400">// 매칭 요청</span><br />
                <span className="text-blue-400">var</span> result = <span className="text-blue-400">await</span> connection<br />
                &nbsp;&nbsp;.InvokeAsync&lt;MatchmakingResult&gt;(<br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">"FindOrCreateLobby"</span>, maxPlayers<br />
                &nbsp;&nbsp;);<br /><br />
                
                <span className="text-purple-400">// 게임 서버 연결</span><br />
                NetworkManager.Singleton.GetComponent&lt;UnityTransport&gt;()<br />
                &nbsp;&nbsp;.SetConnectionData(result.GameServerIP, result.GameServerPort);<br />
                NetworkManager.Singleton.StartClient();
              </div>
            </div>
          </div>
        </motion.div>

        {/* Server Response */}
        <motion.div
          className="p-4 bg-gradient-to-br from-green-950/40 to-green-900/20 border-2 border-green-500/50 rounded-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">📦</div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">
                MatchmakingResult
              </h3>
              <div className="bg-black/50 p-3 rounded font-mono text-[10px] text-gray-300 leading-relaxed">
                {'{'}<br />
                &nbsp;&nbsp;<span className="text-green-300">"lobbyId"</span>: <span className="text-yellow-400">1</span>,<br />
                &nbsp;&nbsp;<span className="text-green-300">"gameServerIP"</span>: <span className="text-green-300">"20.214.x.x"</span>,<br />
                &nbsp;&nbsp;<span className="text-green-300">"gameServerPort"</span>: <span className="text-yellow-400">7777</span>,<br />
                &nbsp;&nbsp;<span className="text-green-300">"success"</span>: <span className="text-blue-400">true</span><br />
                {'}'}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Lobby Update Event */}
        <motion.div
          className="p-4 bg-gradient-to-br from-purple-950/40 to-purple-900/20 border-2 border-purple-500/50 rounded-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🔔</div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-purple-400 font-mono mb-2">
                Lobby Update (Real-time)
              </h3>
              <div className="bg-black/50 p-3 rounded font-mono text-[10px] text-gray-300 leading-relaxed">
                <span className="text-purple-400">// 로비 상태 업데이트 수신</span><br />
                connection.On&lt;LobbyStatus&gt;(<span className="text-green-300">"LobbyUpdated"</span>, status =&gt; {'{'}<br />
                &nbsp;&nbsp;Debug.Log(<span className="text-green-300">"Lobby: "</span> + status.Id + <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">" Players: "</span> + status.CurrentPlayers + <span className="text-green-300">"/"</span> + status.MaxPlayers);<br />
                {'}'});
              </div>
            </div>
          </div>
        </motion.div>

        {/* Leave Lobby */}
        <motion.div
          className="p-4 bg-gradient-to-br from-red-950/40 to-red-900/20 border-2 border-red-500/50 rounded-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🚪</div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-red-400 font-mono mb-2">
                Leave Lobby
              </h3>
              <div className="bg-black/50 p-3 rounded font-mono text-[10px] text-gray-300 leading-relaxed">
                <span className="text-purple-400">// 로비 나가기</span><br />
                <span className="text-blue-400">var</span> success = <span className="text-blue-400">await</span> connection<br />
                &nbsp;&nbsp;.InvokeAsync&lt;<span className="text-blue-400">bool</span>&gt;(<span className="text-green-300">"LeaveLobby"</span>, lobbyId);<br /><br />
                
                <span className="text-purple-400">// 자동 정리: 마지막 플레이어 → 로비 삭제</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 오른쪽: 실시간 매칭 시뮬레이션 */}
      <div className="w-[45%] h-full flex flex-col justify-center gap-4">
        <LiveMatchingSimulation />
      </div>
    </div>
  );
}

function LiveMatchingSimulation() {
  return (
    <div className="relative w-full">
      {/* 헤더 */}
      <motion.div
        className="w-full p-4 bg-gradient-to-r from-orange-600 to-orange-500 rounded-t-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center gap-3">
          <div className="text-3xl">🎮</div>
          <div>
            <div className="text-white font-mono text-lg font-bold">Live Matching</div>
            <div className="text-orange-100 font-mono text-xs">Real-time Lobby Status</div>
          </div>
        </div>
      </motion.div>

      {/* 로비 상태 */}
      <motion.div
        className="w-full p-6 bg-gray-900 border-2 border-gray-700 rounded-b-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {/* Lobby 1 */}
        <motion.div
          className="mb-6 p-4 bg-green-500/10 border-l-4 border-green-500 rounded"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-green-400 font-mono text-sm font-bold">Lobby #1</span>
              <span className="text-gray-400 font-mono text-xs ml-3">Seoul Server</span>
            </div>
            <div className="px-3 py-1 bg-green-500/20 rounded">
              <span className="text-green-400 font-mono text-xs font-bold">ACTIVE</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-green-500"
                initial={{ width: 0 }}
                animate={{ width: '75%' }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </div>
            <span className="text-green-400 font-mono text-sm">3/4</span>
          </div>
          <div className="mt-2 text-gray-400 font-mono text-xs">
            20.214.x.x:7777 (PlayFab)
          </div>
        </motion.div>

        {/* Lobby 2 */}
        <motion.div
          className="mb-6 p-4 bg-yellow-500/10 border-l-4 border-yellow-500 rounded"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-between mb-2">
            <div>
              <span className="text-yellow-400 font-mono text-sm font-bold">Lobby #2</span>
              <span className="text-gray-400 font-mono text-xs ml-3">Render Fallback</span>
            </div>
            <div className="px-3 py-1 bg-yellow-500/20 rounded">
              <span className="text-yellow-400 font-mono text-xs font-bold">WAITING</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-yellow-500"
                initial={{ width: 0 }}
                animate={{ width: '50%' }}
                transition={{ delay: 1.0, duration: 0.8 }}
              />
            </div>
            <span className="text-yellow-400 font-mono text-sm">2/4</span>
          </div>
          <div className="mt-2 text-gray-400 font-mono text-xs">
            stupidguysserver.onrender.com:7777
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="p-3 bg-blue-500/20 rounded text-center">
            <div className="text-blue-400 font-mono text-2xl font-bold">2</div>
            <div className="text-gray-400 font-mono text-xs">Active Lobbies</div>
          </div>
          <div className="p-3 bg-purple-500/20 rounded text-center">
            <div className="text-purple-400 font-mono text-2xl font-bold">5</div>
            <div className="text-gray-400 font-mono text-xs">Players</div>
          </div>
          <div className="p-3 bg-green-500/20 rounded text-center">
            <div className="text-green-400 font-mono text-2xl font-bold">1.2s</div>
            <div className="text-gray-400 font-mono text-xs">Avg Match</div>
          </div>
        </motion.div>

        {/* GitHub 버튼 */}
        <motion.a
          href="https://github.com/yourusername/allocation-service"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group mt-6 block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-mono font-bold flex items-center justify-center gap-3 border-2 border-orange-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View Source Code
          </div>
        </motion.a>
      </motion.div>
    </div>
  );
}