'use client';

import { motion } from 'framer-motion';

export default function Slide05TechnicalDeepDive() {
  return (
    <div className="w-full h-full flex items-center justify-between px-16 py-12 overflow-hidden">
      {/* 배경 그리드 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#22c55e 1px, transparent 1px),
            linear-gradient(90deg, #22c55e 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* 헤더 (상단) */}
      <motion.div
        className="absolute top-12 left-1/2 -translate-x-1/2 text-center z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-6xl font-bold text-green-400 font-mono mb-3">
          Technical Deep Dive
        </h2>
        <p className="text-xl text-green-300 font-mono">
          핵심 구조 및 구현 세부사항
        </p>
      </motion.div>

      {/* 왼쪽: Server Side */}
      <motion.div
        className="w-[48%] space-y-6 z-10 mt-24"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Server Side 헤더 */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-12 bg-gradient-to-b from-green-400 to-green-600 rounded-full" />
          <div>
            <h3 className="text-3xl font-bold text-green-400 font-mono">Server Side</h3>
            <p className="text-sm text-gray-400 font-mono">ASP.NET Core + SignalR</p>
          </div>
        </div>

        {/* MatchmakingHub */}
        <ComponentCard
          title="MatchmakingHub"
          subtitle="SignalR Hub"
          color="green"
          methods={[
            'FindOrCreateLobby()',
            'LeaveLobby()',
            'OnDisconnectedAsync()'
          ]}
          description="SignalR 실시간 통신 처리"
          delay={0.3}
        />

        {/* LobbiesManager */}
        <ComponentCard
          title="LobbiesManager"
          subtitle="Lobby Management Service"
          color="green"
          methods={[
            'FindLobby()',
            'CreateLobby()',
            'RemoveLobby()',
            'RemovePlayerFromAllLobbies()'
          ]}
          description="Thread-safe 로비 관리"
          delay={0.5}
        />

        {/* Lobby Model */}
        <ComponentCard
          title="Lobby"
          subtitle="Data Model"
          color="green"
          methods={[
            'AddMember(connectionId)',
            'RemoveMember(connectionId)',
            'IsFull { get; }',
            'MemberCount { get; }'
          ]}
          description="Lock 기반 동시성 제어"
          delay={0.7}
        />

        {/* 핵심 특징 */}
        <motion.div
          className="p-5 bg-green-950/30 border border-green-500/50 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <h4 className="text-green-400 font-mono text-sm font-bold mb-3">
            Server Features
          </h4>
          <ul className="space-y-2 text-gray-300 font-mono text-xs">
            <li className="flex items-start gap-2">
              <span className="text-green-400">→</span>
              <span>ConcurrentDictionary로 Thread-safe 보장</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">→</span>
              <span>SignalR Groups로 로비별 메시징</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">→</span>
              <span>자동 연결 해제 시 정리 (OnDisconnected)</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* 중앙 구분선 */}
      <div className="relative h-full flex items-center z-10">
        <motion.div
          className="w-px h-[80%] bg-gradient-to-b from-transparent via-green-500 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* 데이터 플로우 애니메이션 */}
        <motion.div
          className="absolute w-4 h-4 bg-green-400 rounded-full"
          animate={{
            y: ['-40%', '40%', '-40%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>

      {/* 오른쪽: Client Side */}
      <motion.div
        className="w-[48%] space-y-6 z-10 mt-24"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Client Side 헤더 */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-12 bg-gradient-to-b from-green-400 to-green-600 rounded-full" />
          <div>
            <h3 className="text-3xl font-bold text-green-400 font-mono">Client Side</h3>
            <p className="text-sm text-gray-400 font-mono">Unity C#</p>
          </div>
        </div>

        {/* MatchmakingClient */}
        <ComponentCard
          title="MatchmakingClient"
          subtitle="SignalR Client Wrapper"
          color="green"
          methods={[
            'ConnectAsync()',
            'StartMatchmakingAsync()',
            'CancelMatchmakingAsync()',
            'DisconnectAsync()'
          ]}
          description="SignalR 연결 및 매칭 로직"
          delay={0.3}
        />

        {/* MatchmakingView */}
        <ComponentCard
          title="MatchmakingView"
          subtitle="UI Controller"
          color="green"
          methods={[
            'OnFindMatchButtonClicked()',
            'OnLobbyUpdated()',
            'OnMatchFound()',
            'UpdateStatus()'
          ]}
          description="UI 이벤트 처리 및 표시"
          delay={0.5}
        />

        {/* UnityMainThreadDispatcher */}
        <ComponentCard
          title="UnityMainThreadDispatcher"
          subtitle="Thread Sync Utility"
          color="green"
          methods={[
            'Enqueue(Action)',
            'Update()',
            'Instance { get; }'
          ]}
          description="SignalR → Unity 메인 스레드 전달"
          delay={0.7}
        />

        {/* 핵심 특징 */}
        <motion.div
          className="p-5 bg-green-950/30 border border-green-500/50 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <h4 className="text-green-400 font-mono text-sm font-bold mb-3">
            Client Features
          </h4>
          <ul className="space-y-2 text-gray-300 font-mono text-xs">
            <li className="flex items-start gap-2">
              <span className="text-green-400">→</span>
              <span>HubConnection 자동 재연결</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">→</span>
              <span>Event 기반 아키텍처 (OnLobbyUpdated 등)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">→</span>
              <span>MainThread Dispatcher로 Unity API 호출 안전</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* 하단 데이터 플로우 */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <FlowBadge text="Client Request" />
        <FlowArrow />
        <FlowBadge text="SignalR Hub" />
        <FlowArrow />
        <FlowBadge text="LobbiesManager" />
        <FlowArrow />
        <FlowBadge text="Response" />
      </motion.div>
    </div>
  );
}

// Component Card
function ComponentCard({ title, subtitle, color, methods, description, delay }: {
  title: string;
  subtitle: string;
  color: string;
  methods: string[];
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      className="group p-5 bg-green-950/20 border-2 border-green-400/50 rounded-xl backdrop-blur-md transition-all hover:bg-green-950/40"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(34, 197, 94, 0.3)' }}
    >
      {/* 헤더 */}
      <div className="mb-3">
        <h4 className="text-xl font-bold text-green-400 font-mono mb-1">
          {title}
        </h4>
        <p className="text-xs text-gray-400 font-mono">{subtitle}</p>
      </div>

      {/* 메서드 목록 */}
      <div className="space-y-1 mb-3">
        {methods.map((method, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-gray-300 font-mono text-xs"
          >
            <span className="text-green-400">•</span>
            <code className="bg-black/40 px-2 py-0.5 rounded">{method}</code>
          </div>
        ))}
      </div>

      {/* 설명 */}
      <p className="text-xs text-gray-400 font-mono pt-2 border-t border-gray-700">
        {description}
      </p>
    </motion.div>
  );
}

// Flow Badge
function FlowBadge({ text }: { text: string }) {
  return (
    <div className="px-4 py-2 bg-black/60 border border-green-400/50 rounded-lg">
      <span className="text-green-400 font-mono text-xs">{text}</span>
    </div>
  );
}

// Flow Arrow
function FlowArrow() {
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="text-green-400"
      animate={{
        x: [0, 5, 0]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    >
      <path
        d="M5 12 L19 12 M14 7 L19 12 L14 17"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}
