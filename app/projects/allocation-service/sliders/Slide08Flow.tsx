'use client';

import { motion } from 'framer-motion';

export default function Slide08Flow() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16">
      {/* 왼쪽: 시퀀스 다이어그램 */}
      <div className="w-[55%] h-full flex items-center justify-center">
        <div className="relative w-full h-[90%]">
          <SequenceDiagram />
        </div>
      </div>

      {/* 오른쪽: 플로우 설명 */}
      <div className="w-[45%] flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-cyan-400 font-mono mb-3">Flow</h2>
          <p className="text-xl text-cyan-300 font-mono">
            전체 매칭 과정
          </p>
        </motion.div>

        {/* Step 1 */}
        <motion.div
          className="p-4 bg-gradient-to-br from-blue-950/40 to-blue-900/20 border-2 border-blue-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">1️⃣</div>
            <div>
              <h3 className="text-base font-bold text-blue-400 font-mono mb-2">
                FindOrCreateLobby 요청
              </h3>
              <ul className="space-y-1 text-gray-400 font-mono text-xs">
                <li>• Unity → SignalR Hub 연결</li>
                <li>• FindOrCreateLobby(maxPlayers)</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          className="p-4 bg-gradient-to-br from-purple-950/40 to-purple-900/20 border-2 border-purple-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">2️⃣</div>
            <div>
              <h3 className="text-base font-bold text-purple-400 font-mono mb-2">
                로비 찾기/생성
              </h3>
              <ul className="space-y-1 text-gray-400 font-mono text-xs">
                <li>• LobbiesManager.FindLobby()</li>
                <li>• 없으면 CreateLobby()</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Step 3 */}
        <motion.div
          className="p-4 bg-gradient-to-br from-orange-950/40 to-orange-900/20 border-2 border-orange-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">3️⃣</div>
            <div>
              <h3 className="text-base font-bold text-orange-400 font-mono mb-2">
                PlayFab 서버 할당
              </h3>
              <ul className="space-y-1 text-gray-400 font-mono text-xs">
                <li>• RequestServer(sessionId)</li>
                <li>• WaitForServerReady()</li>
                <li>• 실패 시 Render.com</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Step 4 */}
        <motion.div
          className="p-4 bg-gradient-to-br from-green-950/40 to-green-900/20 border-2 border-green-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">4️⃣</div>
            <div>
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">
                플레이어 추가 & 응답
              </h3>
              <ul className="space-y-1 text-gray-400 font-mono text-xs">
                <li>• lobby.AddMember(connectionId)</li>
                <li>• Groups.AddToGroupAsync()</li>
                <li>• return IP + Port</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Step 5 */}
        <motion.div
          className="p-4 bg-gradient-to-br from-cyan-950/40 to-cyan-900/20 border-2 border-cyan-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">5️⃣</div>
            <div>
              <h3 className="text-base font-bold text-cyan-400 font-mono mb-2">
                게임 서버 연결
              </h3>
              <ul className="space-y-1 text-gray-400 font-mono text-xs">
                <li>• Unity → Game Server 연결</li>
                <li>• Unity Netcode 통신</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 소요 시간 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-yellow-500/50 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <h3 className="text-sm font-bold text-yellow-400 font-mono mb-2">Total Time</h3>
          <div className="grid grid-cols-2 gap-2 font-mono text-xs">
            <div className="p-2 bg-yellow-500/20 rounded text-center">
              <div className="text-yellow-400 font-bold">PlayFab</div>
              <div className="text-gray-400 text-[10px]">~2s</div>
            </div>
            <div className="p-2 bg-green-500/20 rounded text-center">
              <div className="text-green-400 font-bold">Render</div>
              <div className="text-gray-400 text-[10px]">~0.5s</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function SequenceDiagram() {
  return (
    <div className="relative w-full h-full flex justify-between items-start pt-16 px-8">
      {/* Actors */}
      <div className="flex flex-col items-center gap-4">
        <ActorBox icon="🎮" label="Unity" color="blue" delay={0.1} />
        <VerticalLine delay={0.3} />
      </div>

      <div className="flex flex-col items-center gap-4">
        <ActorBox icon="🔌" label="SignalR" color="orange" delay={0.2} />
        <VerticalLine delay={0.4} />
      </div>

      <div className="flex flex-col items-center gap-4">
        <ActorBox icon="📦" label="Lobby" color="purple" delay={0.3} />
        <VerticalLine delay={0.5} />
      </div>

      <div className="flex flex-col items-center gap-4">
        <ActorBox icon="🎮" label="PlayFab" color="blue" delay={0.4} />
        <VerticalLine delay={0.6} />
      </div>

      {/* Messages */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 1. FindOrCreateLobby */}
        <Message
          from={15}
          to={35}
          top={25}
          label="FindOrCreateLobby(4)"
          delay={0.8}
        />

        {/* 2. FindLobby */}
        <Message
          from={35}
          to={55}
          top={32}
          label="FindLobby()"
          delay={1.2}
        />

        {/* 3. CreateLobby */}
        <MessageReturn
          from={55}
          to={35}
          top={39}
          label="lobby"
          delay={1.6}
        />

        {/* 4. RequestServer */}
        <Message
          from={35}
          to={75}
          top={46}
          label="RequestServer()"
          delay={2.0}
        />

        {/* 5. IP + Port */}
        <MessageReturn
          from={75}
          to={35}
          top={53}
          label="IP + Port"
          delay={2.4}
        />

        {/* 6. AddMember */}
        <Message
          from={35}
          to={55}
          top={60}
          label="AddMember()"
          delay={2.8}
        />

        {/* 7. Return Result */}
        <MessageReturn
          from={35}
          to={15}
          top={67}
          label="{IP, Port, LobbyId}"
          delay={3.2}
        />

        {/* 8. Connect to Game Server */}
        <Message
          from={15}
          to={75}
          top={74}
          label="Connect"
          delay={3.6}
          color="green"
        />
      </div>
    </div>
  );
}

function ActorBox({ icon, label, color, delay }: { icon: string; label: string; color: string; delay: number }) {
  const colorMap: Record<string, string> = {
    blue: 'border-blue-400 bg-blue-500/20',
    orange: 'border-orange-400 bg-orange-500/20',
    purple: 'border-purple-400 bg-purple-500/20',
    green: 'border-green-400 bg-green-500/20',
  };

  return (
    <motion.div
      className={`w-20 h-16 border-2 ${colorMap[color]} rounded-lg flex flex-col items-center justify-center`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="text-2xl">{icon}</div>
      <div className={`text-${color}-400 font-mono text-[10px] font-bold`}>{label}</div>
    </motion.div>
  );
}

function VerticalLine({ delay }: { delay: number }) {
  return (
    <motion.div
      className="w-0.5 h-[500px] bg-gray-700"
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 1 }}
      transition={{ delay, duration: 0.8 }}
      style={{ transformOrigin: 'top' }}
    />
  );
}

function Message({ from, to, top, label, delay, color = 'cyan' }: {
  from: number;
  to: number;
  top: number;
  label: string;
  delay: number;
  color?: string;
}) {
  const colorMap: Record<string, string> = {
    cyan: 'text-cyan-400',
    green: 'text-green-400',
  };

  return (
    <>
      <motion.div
        className={`absolute h-0.5 bg-${color}-400`}
        style={{ left: `${from}%`, top: `${top}%`, width: `${to - from}%` }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay, duration: 0.4 }}
        style={{ transformOrigin: 'left' }}
      />
      <motion.div
        className={`absolute ${colorMap[color]} font-mono text-[9px]`}
        style={{ left: `${from + 2}%`, top: `${top - 2}%` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.2 }}
      >
        {label}
      </motion.div>
      <motion.div
        className={`absolute text-${color}-400`}
        style={{ left: `${to - 1}%`, top: `${top - 1.5}%` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.3 }}
      >
        ▶
      </motion.div>
    </>
  );
}

function MessageReturn({ from, to, top, label, delay }: {
  from: number;
  to: number;
  top: number;
  label: string;
  delay: number;
}) {
  return (
    <>
      <motion.div
        className="absolute h-0.5 border-t-2 border-dashed border-gray-500"
        style={{ left: `${to}%`, top: `${top}%`, width: `${from - to}%` }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay, duration: 0.4 }}
        style={{ transformOrigin: 'left' }}
      />
      <motion.div
        className="absolute text-gray-400 font-mono text-[9px]"
        style={{ left: `${to + 2}%`, top: `${top - 2}%` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.2 }}
      >
        {label}
      </motion.div>
      <motion.div
        className="absolute text-gray-400"
        style={{ left: `${to + 0.5}%`, top: `${top - 1.5}%` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.3 }}
      >
        ◀
      </motion.div>
    </>
  );
}
