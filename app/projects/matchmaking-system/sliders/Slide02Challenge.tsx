'use client';

import { motion } from 'framer-motion';

export default function Slide02Challenge() {
  return (
    <div className="w-full h-full flex items-center justify-center px-16 gap-12 pt-16 pb-24 overflow-hidden">
      {/* 배경 그리드 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* 왼쪽: 문제점 */}
      <motion.div
        className="relative w-1/2 flex flex-col gap-6 z-10"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <motion.div
            className="inline-block px-4 py-2 bg-red-500/20 border border-red-400/50 rounded-lg mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-red-400 font-mono text-sm">CHALLENGES</span>
          </motion.div>

          <h2 className="text-6xl font-bold text-red-400 font-mono mb-4">
            The Problem
          </h2>
          <p className="text-xl text-gray-300 font-mono">
            멀티플레이어 게임의 핵심 과제들
          </p>
        </div>

        {/* 문제점 카드들 */}
        <div className="space-y-4">
          <ProblemCard
            icon="🔄"
            title="Real-time Synchronization"
            description="플레이어 간 실시간 상태 동기화 필요"
            delay={0.5}
          />
          <ProblemCard
            icon="🎯"
            title="Lobby Management"
            description="4인 로비 생성 및 자동 매칭 시스템"
            delay={0.7}
          />
          <ProblemCard
            icon="🔌"
            title="Connection Handling"
            description="갑작스런 연결 끊김 및 재접속 처리"
            delay={0.9}
          />
          <ProblemCard
            icon="📈"
            title="Scalability"
            description="동시 다수 플레이어 처리 능력"
            delay={1.1}
          />
        </div>

        {/* Unity Netcode의 한계 강조 */}
        <motion.div
          className="p-4 bg-yellow-950/30 border-l-4 border-yellow-500 rounded-r-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3 }}
        >
          <p className="text-yellow-400 font-mono text-sm font-bold mb-2">
            Unity Netcode의 한계
          </p>
          <p className="text-gray-300 font-mono text-xs leading-relaxed">
            기본 Netcode는 매칭 기능을 제공하지 않음<br />
            → 커스텀 매칭 서버 필요
          </p>
        </motion.div>
      </motion.div>

      {/* 중앙 구분선 */}
      <div className="relative h-[80%]">
        <motion.div
          className="w-px h-full bg-gradient-to-b from-transparent via-green-500 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full"
          animate={{
            boxShadow: [
              '0 0 0px rgba(34, 197, 94, 0)',
              '0 0 20px rgba(34, 197, 94, 0.8)',
              '0 0 0px rgba(34, 197, 94, 0)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* 오른쪽: 요구사항 & 솔루션 */}
      <motion.div
        className="relative w-1/2 flex flex-col gap-6 z-10"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <motion.div
            className="inline-block px-4 py-2 bg-green-500/20 border border-green-400/50 rounded-lg mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-green-400 font-mono text-sm">REQUIREMENTS</span>
          </motion.div>

          <h2 className="text-6xl font-bold text-green-400 font-mono mb-4">
            The Solution
          </h2>
          <p className="text-xl text-gray-300 font-mono">
            SignalR 기반 매칭 시스템 설계
          </p>
        </div>

        {/* 요구사항 카드들 */}
        <div className="space-y-4">
          <SolutionCard
            icon="⚡"
            title="SignalR WebSocket"
            description="실시간 양방향 통신"
            tech="Real-time Updates"
            delay={0.5}
          />
          <SolutionCard
            icon="🎮"
            title="Automatic Matching"
            description="FIFO 기반 자동 로비 할당"
            tech="4-Player Lobbies"
            delay={0.7}
          />
          <SolutionCard
            icon="🔄"
            title="Auto Reconnect"
            description="SignalR 내장 재연결 기능"
            tech="Connection Restore"
            delay={0.9}
          />
          <SolutionCard
            icon="🧹"
            title="Clean Disconnect"
            description="연결 해제 시 자동 정리"
            tech="Auto Cleanup"
            delay={1.1}
          />
        </div>

        {/* 기술 선택 이유 */}
        <motion.div
          className="p-5 bg-green-950/30 border border-green-500/50 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <p className="text-green-400 font-mono text-sm font-bold mb-3">
            Why SignalR?
          </p>
          <ul className="space-y-2 text-gray-300 font-mono text-xs">
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">→</span>
              <span>실시간 양방향 통신 (WebSocket)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">→</span>
              <span>자동 재연결 및 폴백 메커니즘</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">→</span>
              <span>그룹 기반 메시징 (로비별 통신)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 mt-1">→</span>
              <span>.NET 생태계와 완벽한 통합</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}

// 문제점 카드
function ProblemCard({ icon, title, description, delay }: {
  icon: string;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      className="group p-4 bg-black/40 backdrop-blur-sm border border-red-400/30 rounded-xl hover:border-red-400/60 transition-all"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ x: 10, boxShadow: '0 0 20px rgba(248, 113, 113, 0.2)' }}
    >
      <div className="flex items-start gap-3">
        <div className="text-3xl">{icon}</div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-red-400 font-mono mb-1">
            {title}
          </h3>
          <p className="text-gray-400 font-mono text-sm">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// 솔루션 카드
function SolutionCard({ icon, title, description, tech, delay }: {
  icon: string;
  title: string;
  description: string;
  tech: string;
  delay: number;
}) {
  return (
    <motion.div
      className="group p-4 bg-black/40 backdrop-blur-sm border border-green-400/30 rounded-xl hover:border-green-400/60 transition-all"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ x: -10, boxShadow: '0 0 20px rgba(74, 222, 128, 0.2)' }}
    >
      <div className="flex items-start gap-3">
        <div className="text-3xl">{icon}</div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-lg font-bold text-green-400 font-mono">
              {title}
            </h3>
            <span className="text-xs font-mono text-green-400 bg-green-500/10 px-2 py-1 rounded">
              {tech}
            </span>
          </div>
          <p className="text-gray-400 font-mono text-sm">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
