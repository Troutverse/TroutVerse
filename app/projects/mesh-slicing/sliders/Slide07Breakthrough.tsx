'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Slide07Breakthrough() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16 pb-32">
      {/* 왼쪽: Flood-fill 애니메이션 */}
      <div className="w-[45%] h-full flex items-center justify-center">
        <div className="relative w-full h-[80%] border-2 border-green-500/30 rounded-2xl bg-green-950/20 overflow-hidden">
          <FloodFillAnimation />

          {/* 성공 표시 */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{
              opacity: [0, 0, 0, 0, 0, 0, 1, 1, 0],
              scale: [0, 0, 0, 0, 0, 0, 1.3, 1, 0],
            }}
            transition={{
              duration: 10,
              times: [0, 0.6, 0.65, 0.68, 0.7, 0.72, 0.75, 0.8, 1],
              repeat: Infinity,
            }}
          >
            <div className="flex flex-col items-center gap-4">
              <span className="text-8xl">🎉</span>
              <span className="text-green-400 font-mono text-3xl font-bold">SUCCESS!</span>
            </div>
          </motion.div>

          {/* 그룹 카운터 */}
          <motion.div
            className="absolute top-4 right-4 flex flex-col gap-2"
            animate={{
              opacity: [0, 0, 0, 1, 1, 1, 0],
            }}
            transition={{
              duration: 10,
              times: [0, 0.4, 0.5, 0.55, 0.7, 0.75, 1],
              repeat: Infinity,
            }}
          >
            <FloodFillCounter />
          </motion.div>
        </div>
      </div>

      {/* 오른쪽: 설명 */}
      <div className="w-[55%] h-full flex flex-col gap-4 overflow-y-auto pr-2 pb-8 custom-scrollbar">
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
          <h2 className="text-5xl font-bold text-green-400 font-mono mb-3">
            The Breakthrough
          </h2>
          <p className="text-xl text-green-300 font-mono">
            Flood-fill Algorithm for Triangle Grouping
          </p>
        </motion.div>

        {/* 핵심 아이디어 */}
        <motion.div
          className="p-4 bg-yellow-950/30 border-2 border-yellow-500/70 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <h3 className="text-base font-bold text-yellow-400 font-mono mb-2">
                결정적 발견
              </h3>
              <ul className="space-y-1.5 text-gray-300 font-mono text-xs">
                <li>• 교차된 삼각형 = 경계선</li>
                <li>• 경계선을 기준으로 그룹 분리</li>
                <li>• <span className="text-yellow-400 font-bold">Flood-fill로 연결된 모든 삼각형 탐색</span></li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 알고리즘 설명 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-purple-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🔧</div>
            <div>
              <h3 className="text-base font-bold text-purple-400 font-mono mb-2">
                Flood-fill 프로세스
              </h3>
              <ol className="space-y-1.5 text-gray-400 font-mono text-xs list-decimal list-inside">
                <li>시드(Seed): 교차 안된 임의의 삼각형</li>
                <li>큐에 시드 추가</li>
                <li>큐에서 삼각형 꺼내기</li>
                <li>인접 삼각형 검사:
                  <ul className="ml-4 mt-1 space-y-1">
                    <li>• 교차 안됨 + 미방문 → 큐에 추가</li>
                    <li>• 교차됨 → 건너뛰기 (경계)</li>
                  </ul>
                </li>
                <li>큐가 빌 때까지 반복</li>
                <li>같은 그룹 완성!</li>
              </ol>
            </div>
          </div>
        </motion.div>

        {/* 코드 스니펫 */}
        <motion.div
          className="p-4 bg-gray-900/80 border border-blue-500/30 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <p className="text-blue-400 font-mono text-xs mb-3">핵심 코드</p>
          <pre className="bg-black/50 p-3 rounded text-[10px] overflow-x-auto">
            <code className="text-gray-300 font-mono">
{`Queue<int> queue = new Queue<int>();
queue.Enqueue(seedTriangle);

while (queue.Count > 0) {
    int current = queue.Dequeue();
    group.Add(current);
    
    foreach (int neighbor in GetNeighbors(current)) {
        if (!visited[neighbor] && 
            !isCrossed[neighbor]) {
            queue.Enqueue(neighbor);
            visited[neighbor] = true;
        }
    }
}`}
            </code>
          </pre>
        </motion.div>

        {/* 획기적 결과 */}
        <motion.div
          className="p-4 bg-green-950/30 border-2 border-green-500/70 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">✓✓✓</div>
            <div>
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">
                완벽한 성공!
              </h3>
              <ul className="space-y-1.5 text-gray-300 font-mono text-xs">
                <li>• 모든 연결된 삼각형 감지</li>
                <li>• 완전한 메쉬 분리 달성</li>
                <li>• 구멍 없는 깨끗한 절단</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 성능 지표 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-cyan-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">📊</div>
            <div>
              <h3 className="text-base font-bold text-cyan-400 font-mono mb-2">
                테스트 결과
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 메쉬: <span className="text-cyan-400">2,000 삼각형</span></li>
                <li>• 처리 시간: <span className="text-cyan-400">~3ms</span></li>
                <li>• 정확도: <span className="text-green-400 font-bold">100%</span></li>
                <li>• FPS: <span className="text-yellow-400">60fps</span> (목표의 2/3)</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 남은 최적화 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-orange-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚡</div>
            <div>
              <h3 className="text-base font-bold text-orange-400 font-mono mb-2">
                추가 개선 필요
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 아직 60fps (목표 <span className="text-orange-400">90fps</span>)</li>
                <li>• Job System 도입 검토</li>
                <li>• 추가 최적화 필요</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 결론 */}
        <motion.div
          className="p-4 bg-green-950/30 border-l-4 border-green-500 rounded-r-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🎉</div>
            <div>
              <h3 className="text-sm font-bold text-green-400 font-mono mb-2">
                드디어 완성!
              </h3>
              <p className="text-gray-300 font-mono text-xs leading-relaxed">
                "Flood-fill이 모든 것을 해결<br />
                Triangle 기반 + 좌표 통일 + Flood-fill<br />
                = <span className="text-green-400 font-bold">완벽한 메쉬 절단!</span><br />
                → 이제 최적화만 남았다"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Flood-fill 애니메이션
function FloodFillAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 메쉬 배경 */}
      <div className="absolute w-48 h-48 bg-purple-500/20 rounded-full" />

      {/* 삼각형들 (16개) */}
      {[...Array(16)].map((_, i) => {
        const angle = (i * Math.PI * 2) / 16;
        const radius = 80;
        const isLeft = i < 8;
        const isBoundary = i === 7 || i === 8;
        
        return (
          <motion.div
            key={`tri-${i}`}
            className="absolute"
            style={{
              width: 0,
              height: 0,
              borderLeft: '12px solid transparent',
              borderRight: '12px solid transparent',
              borderBottom: '20px solid rgba(156, 163, 175, 0.3)',
              left: `calc(50% + ${Math.cos(angle) * radius}px)`,
              top: `calc(50% + ${Math.sin(angle) * radius}px)`,
              transform: `translate(-50%, -50%) rotate(${angle * 180 / Math.PI}deg)`,
            }}
            animate={{
              borderBottomColor: isBoundary 
                ? [
                    'rgba(156, 163, 175, 0.3)',
                    'rgba(156, 163, 175, 0.3)',
                    'rgba(239, 68, 68, 0.8)',
                    'rgba(239, 68, 68, 0.8)',
                    'rgba(239, 68, 68, 0.8)',
                    'rgba(156, 163, 175, 0.3)',
                  ]
                : isLeft
                ? [
                    'rgba(156, 163, 175, 0.3)',
                    'rgba(156, 163, 175, 0.3)',
                    'rgba(156, 163, 175, 0.3)',
                    'rgba(251, 146, 60, 0.6)',
                    'rgba(74, 222, 128, 0.8)',
                    'rgba(74, 222, 128, 0.8)',
                    'rgba(156, 163, 175, 0.3)',
                  ]
                : [
                    'rgba(156, 163, 175, 0.3)',
                    'rgba(156, 163, 175, 0.3)',
                    'rgba(156, 163, 175, 0.3)',
                    'rgba(251, 146, 60, 0.6)',
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(59, 130, 246, 0.8)',
                    'rgba(156, 163, 175, 0.3)',
                  ],
            }}
            transition={{
              duration: 10,
              times: [0, 0.15, 0.2, 0.35 + (isLeft ? i : i - 8) * 0.02, 0.6, 0.75, 1],
              repeat: Infinity,
            }}
          />
        );
      })}

      {/* 칼날 */}
      <motion.div
        className="absolute w-2 h-52 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full"
        style={{ boxShadow: '0 0 15px rgba(255,255,255,0.5)' }}
        animate={{
          x: [-120, -120, 120, 120, -120],
          y: [0, 0, 0, 0, 0],
          rotate: [0, 0, 90, 90, 0],
          opacity: [0, 1, 1, 0, 0],
        }}
        transition={{
          duration: 10,
          times: [0, 0.1, 0.2, 0.25, 1],
          repeat: Infinity,
        }}
      />

      {/* Flood-fill 확산 효과 (물결) */}
      {[0, 1, 2].map((wave) => (
        <motion.div
          key={`wave-${wave}`}
          className="absolute w-32 h-32 border-2 border-green-400 rounded-full"
          style={{ boxShadow: '0 0 20px rgba(74, 222, 128, 0.5)' }}
          animate={{
            scale: [0, 0, 2, 3, 0],
            opacity: [0, 0, 0.8, 0.3, 0],
          }}
          transition={{
            duration: 10,
            times: [0, 0.3, 0.35, 0.5, 1],
            delay: wave * 0.15,
            repeat: Infinity,
          }}
        />
      ))}

      {/* 그룹 분리 */}
      <motion.div
        className="absolute w-40 h-40 border-2 border-green-400 rounded-lg"
        style={{ boxShadow: '0 0 20px rgba(74, 222, 128, 0.5)' }}
        animate={{
          x: [0, 0, 0, 0, -40, -40, 0],
          opacity: [0, 0, 0, 0.5, 1, 0.5, 0],
        }}
        transition={{
          duration: 10,
          times: [0, 0.55, 0.6, 0.62, 0.68, 0.73, 1],
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute w-40 h-40 border-2 border-blue-400 rounded-lg"
        style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
        animate={{
          x: [0, 0, 0, 0, 40, 40, 0],
          opacity: [0, 0, 0, 0.5, 1, 0.5, 0],
        }}
        transition={{
          duration: 10,
          times: [0, 0.55, 0.6, 0.62, 0.68, 0.73, 1],
          repeat: Infinity,
        }}
      />
    </div>
  );
}

// Flood-fill 카운터
function FloodFillCounter() {
  const [groupA, setGroupA] = useState(0);
  const [groupB, setGroupB] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    const animate = () => {
      const elapsed = ((Date.now() - startTime) % 10000) / 10000;

      if (elapsed < 0.35) {
        setGroupA(0);
        setGroupB(0);
      } else if (elapsed < 0.6) {
        const progress = (elapsed - 0.35) / 0.25;
        setGroupA(Math.floor(850 * progress));
        setGroupB(Math.floor(850 * progress));
      } else if (elapsed < 0.75) {
        setGroupA(850);
        setGroupB(850);
      } else {
        setGroupA(850);
        setGroupB(850);
      }

      requestAnimationFrame(animate);
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <div className="px-3 py-2 bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-lg">
        <div className="text-green-400 font-mono text-xs">
          <span className="font-bold">Group A: {groupA}</span>
        </div>
      </div>
      <div className="px-3 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/50 rounded-lg">
        <div className="text-blue-400 font-mono text-xs">
          <span className="font-bold">Group B: {groupB}</span>
        </div>
      </div>
    </>
  );
}