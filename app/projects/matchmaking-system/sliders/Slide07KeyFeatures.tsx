'use client';

import { motion } from 'framer-motion';

export default function Slide07KeyFeatures() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-12 py-16 overflow-hidden relative">
      {/* 배경 */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, #22c55e 2px, transparent 2px)`,
            backgroundSize: '80px 80px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '80px 80px']
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {/* 헤더 */}
      <motion.div
        className="text-center mb-20 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-6xl font-bold text-green-400 font-mono mb-3">
          Key Features
        </h2>
        <p className="text-xl text-green-300 font-mono">
          매칭 시스템의 핵심 기능
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 gap-8 w-full max-w-6xl z-10">

        {/* Feature 1: Smart Match */}
        <FeatureCard
          icon="🎯"
          title="Smart Matching"
          subtitle="FIFO 기반 자동 매칭"
          delay={0.2}
          features={[
            '먼저 들어온 로비에 우선 배정',
            'FindLobby() → 없으면 CreateLobby()',
            '4명 모이면 자동 게임 시작',
            'IsFull 체크로 즉시 매칭'
          ]}
        />

        {/* Feature 2: Auto Reconnect */}
        <FeatureCard
          icon="🔄"
          title="Auto Reconnect"
          subtitle="자동 재연결 시스템"
          delay={0.4}
          features={[
            'SignalR 내장 재연결 기능',
            'WithAutomaticReconnect() 활용',
            '연결 끊김 시 자동 복구 시도',
            'WebSocket → Long Polling 폴백'
          ]}
        />

        {/* Feature 3: Auto Cleanup */}
        <FeatureCard
          icon="🧹"
          title="Auto Cleanup"
          subtitle="자동 리소스 정리"
          delay={0.6}
          features={[
            'OnDisconnectedAsync 이벤트 처리',
            'RemovePlayerFromAllLobbies 자동 실행',
            '빈 로비 자동 삭제',
            '메모리 누수 방지'
          ]}
        />

        {/* Feature 4: Real-time Sync */}
        <FeatureCard
          icon="⚡"
          title="Real-time Sync"
          subtitle="즉각적 상태 동기화"
          delay={0.8}
          features={[
            'SignalR Groups로 로비별 메시징',
            'LobbyUpdated 이벤트 브로드캐스트',
            'Sub-100ms 응답 속도',
            '모든 클라이언트 동시 업데이트'
          ]}
        />
      </div>

      {/* 하단 통계 */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-8 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <StatBadge value="100%" label="Reliability" />
        <StatBadge value="<100ms" label="Response Time" />
        <StatBadge value="4-Player" label="Lobby Size" />
        <StatBadge value="∞" label="Scalability" />
      </motion.div>
    </div>
  );
}

// Feature Card
function FeatureCard({ icon, title, subtitle, delay, features }: {
  icon: string;
  title: string;
  subtitle: string;
  delay: number;
  features: string[];
}) {
  return (
    <motion.div
      className="group relative p-8 bg-green-950/30 border-2 border-green-400/50 rounded-2xl backdrop-blur-md hover:bg-green-950/50 hover:border-green-400 transition-all duration-300"
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{
        scale: 1.05,
        boxShadow: '0 20px 60px rgba(34, 197, 94, 0.3)'
      }}
    >
      {/* 아이콘 */}
      <motion.div
        className="text-7xl mb-6"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        {icon}
      </motion.div>

      {/* 제목 */}
      <h3 className="text-3xl font-bold text-green-400 font-mono mb-2">
        {title}
      </h3>
      <p className="text-gray-400 font-mono text-sm mb-6">
        {subtitle}
      </p>

      {/* 기능 목록 */}
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <motion.li
            key={i}
            className="flex items-start gap-3 text-gray-300 font-mono text-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.2 + i * 0.1 }}
          >
            <span className="text-green-400">•</span>
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>

      {/* 글로우 효과 */}
      <div className="absolute inset-0 bg-green-950/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity -z-10" />
    </motion.div>
  );
}

// Stat Badge
function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      className="px-6 py-4 bg-green-950/30 border-2 border-green-400/50 rounded-xl backdrop-blur-md min-w-[140px]"
      whileHover={{ scale: 1.1, boxShadow: '0 10px 30px rgba(34, 197, 94, 0.3)' }}
    >
      <p className="text-gray-400 font-mono text-xs mb-1 text-center uppercase tracking-wider">
        {label}
      </p>
      <p className="text-green-400 font-mono text-3xl font-bold text-center">
        {value}
      </p>
    </motion.div>
  );
}
