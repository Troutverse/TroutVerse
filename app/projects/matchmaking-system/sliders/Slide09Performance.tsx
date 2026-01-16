'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Slide09Performance() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-12 py-12 overflow-hidden relative">
      {/* 배경 애니메이션 */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(#22c55e 2px, transparent 2px),
              linear-gradient(90deg, #22c55e 2px, transparent 2px)
            `,
            backgroundSize: '100px 100px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px']
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {/* 헤더 */}
      <motion.div
        className="text-center mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-6xl font-bold text-green-400 font-mono mb-3">
          Performance & Stats
        </h2>
        <p className="text-xl text-green-300 font-mono">
          시스템 성능 지표 및 아키텍처 장점
        </p>
      </motion.div>

      <div className="w-full max-w-6xl space-y-12 z-10">

        {/* Metrics Dashboard */}
        <div className="grid grid-cols-4 gap-6">
          <MetricCard
            value="<100ms"
            label="Connection Time"
            description="SignalR 연결 시간"
            icon="⚡"
            color="green"
            delay={0.2}
          />
          <MetricCard
            value="<2s"
            label="Match Time"
            description="평균 매칭 완료 시간"
            icon="🎯"
            color="green"
            delay={0.4}
          />
          <MetricCard
            value="100+"
            label="Concurrent Users"
            description="동시 접속 처리 가능"
            icon="👥"
            color="green"
            delay={0.6}
          />
          <MetricCard
            value="99.8%"
            label="Success Rate"
            description="매칭 성공률"
            icon="✓"
            color="green"
            delay={0.8}
          />
        </div>

        {/* Real-time Performance Monitor */}
        <motion.div
          className="p-8 bg-green-950/30 border-2 border-green-400/50 rounded-2xl backdrop-blur-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-green-400 font-mono mb-1">
                Real-time Performance Monitor
              </h3>
              <p className="text-sm text-gray-400 font-mono">
                실시간 시스템 모니터링
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 font-mono text-sm">LIVE</span>
            </div>
          </div>

          <PerformanceGraph />
        </motion.div>

        {/* Architecture Benefits */}
        <div className="grid grid-cols-2 gap-6">

          {/* 왼쪽: Technical Benefits */}
          <motion.div
            className="p-6 bg-green-950/30 border-2 border-green-400/50 rounded-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            <h4 className="text-xl font-bold text-green-400 font-mono mb-4 flex items-center gap-2">
              <span className="text-2xl">🏗️</span>
              Architecture Benefits
            </h4>
            <ul className="space-y-3">
              {[
                'Horizontal Scalability',
                'Auto Load Balancing',
                'Zero Downtime Deploy',
                'Cloud-Ready (Render.com)'
              ].map((benefit, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3 text-gray-300 font-mono text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + i * 0.1 }}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* 오른쪽: Performance Optimizations */}
          <motion.div
            className="p-6 bg-green-950/30 border-2 border-green-400/50 rounded-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            <h4 className="text-xl font-bold text-green-400 font-mono mb-4 flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              Performance Optimizations
            </h4>
            <ul className="space-y-3">
              {[
                'ConcurrentDictionary 사용',
                'Lock 최소화 전략',
                'SignalR Groups 활용',
                'Async/Await 패턴'
              ].map((opt, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3 text-gray-300 font-mono text-sm"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 + i * 0.1 }}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  {opt}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Resource Usage */}
        <motion.div
          className="p-6 bg-green-950/30 border-2 border-green-400/50 rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          <h4 className="text-xl font-bold text-green-400 font-mono mb-6 flex items-center gap-2">
            <span className="text-2xl">📊</span>
            Resource Efficiency
          </h4>
          <div className="grid grid-cols-3 gap-6">
            <ResourceBar
              label="CPU Usage"
              value={35}
              color="green"
            />
            <ResourceBar
              label="Memory"
              value={42}
              color="green"
            />
            <ResourceBar
              label="Network"
              value={28}
              color="green"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Metric Card
function MetricCard({ value, label, description, icon, color, delay }: {
  value: string;
  label: string;
  description: string;
  icon: string;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      className="group p-6 bg-green-950/30 border-2 border-green-400/50 rounded-xl backdrop-blur-md hover:scale-105 transition-all"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: 'spring' }}
      whileHover={{ boxShadow: '0 20px 40px rgba(34, 197, 94, 0.3)' }}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <div className="text-4xl font-bold text-green-400 font-mono mb-2">
        {value}
      </div>
      <div className="text-sm text-gray-300 font-mono font-bold mb-1">
        {label}
      </div>
      <div className="text-xs text-gray-500 font-mono">
        {description}
      </div>
    </motion.div>
  );
}

// Performance Graph
function PerformanceGraph() {
  const [dataPoints, setDataPoints] = useState<number[]>(Array(20).fill(0));

  useEffect(() => {
    const interval = setInterval(() => {
      setDataPoints(prev => {
        const newPoints = [...prev.slice(1), 70 + Math.random() * 25];
        return newPoints;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-48 flex items-end gap-2">
      {dataPoints.map((point, i) => (
        <motion.div
          key={i}
          className="flex-1 bg-gradient-to-t from-green-500 to-green-400 rounded-t"
          initial={{ height: 0 }}
          animate={{ height: `${point}%` }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full h-full relative">
            {i === dataPoints.length - 1 && (
              <motion.div
                className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-green-500 rounded text-white font-mono text-xs whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {Math.round(point)}ms
              </motion.div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Resource Bar
function ResourceBar({ label, value, color }: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 font-mono text-sm">{label}</span>
        <span className="text-green-400 font-mono text-sm font-bold">
          {value}%
        </span>
      </div>
      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </div>
  );
}
