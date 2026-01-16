'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Slide06Concurrency() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-12 py-12 overflow-hidden relative">
      {/* 배경 그리드 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#22c55e 1px, transparent 1px),
            linear-gradient(90deg, #22c55e 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* 헤더 */}
      <motion.div
        className="text-center mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-6xl font-bold text-green-400 font-mono mb-3">
          Concurrency & Thread Safety
        </h2>
        <p className="text-xl text-green-300 font-mono">
          멀티스레드 환경에서의 안전한 데이터 처리
        </p>
      </motion.div>

      {/* 메인 콘텐츠 */}
      <div className="w-full max-w-6xl flex items-center justify-between gap-12 z-10">

        {/* 왼쪽: 동시 요청 시각화 */}
        <div className="w-1/2">
          <ConcurrentRequestsVisualization />
        </div>

        {/* 오른쪽: 솔루션 */}
        <div className="w-1/2 space-y-6">
          {/* Server Side */}
          <motion.div
            className="p-6 bg-green-950/30 border-2 border-green-400/50 rounded-xl backdrop-blur-md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">🔒</div>
              <div>
                <h3 className="text-2xl font-bold text-green-400 font-mono">Server Side</h3>
                <p className="text-sm text-gray-400 font-mono">Thread-Safe Mechanisms</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* ConcurrentDictionary */}
              <CodeBlock
                title="1. ConcurrentDictionary"
                code="private readonly ConcurrentDictionary<int, Lobby> _lobbies;"
                description="스레드 안전한 로비 저장소"
                color="green"
              />

              {/* Lock */}
              <CodeBlock
                title="2. Lock Statement"
                code={`lock (_gate) {
    _members.Add(connectionId);
}`}
                description="Lobby 내부 멤버 관리"
                color="green"
              />

              {/* Interlocked */}
              <CodeBlock
                title="3. Interlocked"
                code="lock (_idLock) { lobbyId = _nextLobbyId++; }"
                description="원자적 ID 증가"
                color="green"
              />
            </div>
          </motion.div>

          {/* Client Side */}
          <motion.div
            className="p-6 bg-green-950/30 border-2 border-green-400/50 rounded-xl backdrop-blur-md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="text-3xl">🔄</div>
              <div>
                <h3 className="text-2xl font-bold text-green-400 font-mono">Client Side</h3>
                <p className="text-sm text-gray-400 font-mono">Unity Main Thread</p>
              </div>
            </div>

            <CodeBlock
              title="UnityMainThreadDispatcher"
              code={`UnityMainThreadDispatcher.Enqueue(() => {
    OnLobbyUpdated?.Invoke(status);
});`}
              description="SignalR 콜백을 Unity 메인 스레드로 전달"
              color="green"
            />

            <div className="mt-4 p-3 bg-yellow-950/30 border border-yellow-500/50 rounded-lg">
              <p className="text-yellow-400 font-mono text-xs">
                Unity API는 메인 스레드에서만 호출 가능<br />
                SignalR 콜백은 다른 스레드에서 실행됨
              </p>
            </div>
          </motion.div>

          {/* 보장 사항 */}
          <motion.div
            className="p-5 bg-green-950/30 border-2 border-green-400/50 rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h4 className="text-green-400 font-mono text-lg font-bold mb-3 flex items-center gap-2">
              <span>✓</span>
              Thread Safety Guarantees
            </h4>
            <ul className="space-y-2 text-gray-300 font-mono text-sm">
              <li className="flex items-start gap-2">
                <span className="text-green-400">→</span>
                <span>동시 로비 접근 시 데이터 무결성 보장</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">→</span>
                <span>Race Condition 방지</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">→</span>
                <span>Unity API 호출 안전성 확보</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// 동시 요청 시각화
function ConcurrentRequestsVisualization() {
  const [requests, setRequests] = useState<Array<{ id: number; y: number; opacity: number }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newRequest = {
        id: Date.now(),
        y: Math.random() * 60 - 30,
        opacity: 1
      };

      setRequests(prev => [...prev.slice(-4), newRequest]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative h-[600px] flex flex-col items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* 타이틀 */}
      <div className="absolute top-0 left-0 right-0 text-center">
        <h3 className="text-2xl font-bold text-green-400 font-mono mb-2">
          Multiple Concurrent Requests
        </h3>
        <p className="text-sm text-gray-400 font-mono">
          여러 클라이언트의 동시 요청 처리
        </p>
      </div>

      {/* 클라이언트들 (왼쪽) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-8">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="w-16 h-16 bg-green-500/20 border-2 border-green-400/60 rounded-full flex items-center justify-center backdrop-blur-md"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <span className="text-2xl">👤</span>
          </motion.div>
        ))}
      </div>

      {/* 요청 패킷들 */}
      {requests.map((req) => (
        <motion.div
          key={req.id}
          className="absolute left-20 w-8 h-8 bg-green-400 rounded"
          style={{ top: `calc(50% + ${req.y}px)` }}
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: 200, opacity: 0 }}
          transition={{ duration: 2, ease: 'linear' }}
        />
      ))}

      {/* Lock 레이어 (중앙) */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
      >
        <div className="relative w-32 h-32 bg-green-500/20 border-4 border-green-400/60 rounded-2xl flex flex-col items-center justify-center backdrop-blur-md">
          <div className="text-5xl mb-2">🔒</div>
          <div className="text-green-400 font-mono text-sm font-bold">LOCK</div>

          {/* 펄스 */}
          <motion.div
            className="absolute inset-0 border-4 border-green-400 rounded-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />
        </div>

        {/* 대기 큐 표시 */}
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 space-y-2">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-6 h-6 bg-yellow-500/50 border border-yellow-400 rounded"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 + i * 0.2 }}
            />
          ))}
        </div>
      </motion.div>

      {/* 처리된 요청 (오른쪽) */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="w-24 h-24 bg-green-500/20 border-2 border-green-400/60 rounded-full flex items-center justify-center backdrop-blur-md">
          <div className="text-center">
            <div className="text-3xl">✓</div>
            <div className="text-green-400 font-mono text-xs mt-1">Safe</div>
          </div>
        </div>
      </motion.div>

      {/* 설명 텍스트 */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60 border border-green-400/50 rounded-xl backdrop-blur-md">
        <p className="text-green-300 font-mono text-sm text-center">
          <span className="text-green-400 font-bold">동시 요청</span>
          {' → '}
          <span className="text-green-400 font-bold">Lock 레이어</span>
          {' → '}
          <span className="text-green-400 font-bold">순차 처리</span>
        </p>
      </div>
    </motion.div>
  );
}

// 코드 블록
function CodeBlock({ title, code, description, color }: {
  title: string;
  code: string;
  description: string;
  color: string;
}) {
  return (
    <div className="space-y-2">
      <h4 className="text-green-400 font-mono text-sm font-bold">
        {title}
      </h4>
      <div className="p-3 bg-green-950/40 border border-green-400/30 rounded-lg overflow-x-auto">
        <pre className="text-xs font-mono whitespace-pre-wrap text-green-300">
          {code}
        </pre>
      </div>
      <p className="text-xs text-gray-400 font-mono">
        {description}
      </p>
    </div>
  );
}
