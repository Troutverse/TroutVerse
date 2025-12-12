'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Slide08Solution() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16 pb-32">
      {/* 왼쪽: 3단계 프로세스 애니메이션 */}
      <div className="w-[55%] h-full flex items-center justify-center">
        <div className="relative w-full h-[85%] border-2 border-cyan-500/30 rounded-2xl bg-cyan-950/20 overflow-hidden">
          <SliceProcessAnimation />
          
          {/* 단계 표시기 */}
          <StageIndicator />
        </div>
      </div>

      {/* 오른쪽: 솔루션 설명 */}
      <div className="w-[45%] h-full flex flex-col gap-4 overflow-y-auto pr-2 pb-8 custom-scrollbar">
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
          <h2 className="text-5xl font-bold text-cyan-400 font-mono mb-3">
            The Solution
          </h2>
          <p className="text-xl text-cyan-300 font-mono">
            완성된 메쉬 슬라이스 시스템
          </p>
        </motion.div>

        {/* 핵심 기술 1 */}
        <motion.div
          className="p-4 bg-gradient-to-br from-purple-950/40 to-purple-900/20 border-2 border-purple-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-3xl">🌍</div>
            <div>
              <h3 className="text-lg font-bold text-purple-400 font-mono mb-2">
                Coordinate Unification
              </h3>
              <p className="text-gray-300 font-mono text-xs leading-relaxed">
                Ray와 Mesh를 같은 World 공간에서 처리<br />
                <span className="text-purple-300">→ Transform.TransformPoint() 활용</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* 핵심 기술 2 */}
        <motion.div
          className="p-4 bg-gradient-to-br from-green-950/40 to-green-900/20 border-2 border-green-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-3xl">🎯</div>
            <div>
              <h3 className="text-lg font-bold text-green-400 font-mono mb-2">
                Triangle Detection
              </h3>
              <p className="text-gray-300 font-mono text-xs leading-relaxed">
                Edge가 아닌 Face(삼각형) 단위로 검사<br />
                <span className="text-green-300">→ Ray-Triangle Intersection</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* 핵심 기술 3 */}
        <motion.div
          className="p-4 bg-gradient-to-br from-yellow-950/40 to-yellow-900/20 border-2 border-yellow-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-3xl">🌊</div>
            <div>
              <h3 className="text-lg font-bold text-yellow-400 font-mono mb-2">
                Flood-fill Algorithm
              </h3>
              <p className="text-gray-300 font-mono text-xs leading-relaxed">
                경계를 넘지 않는 연결된 삼각형 그룹화<br />
                <span className="text-yellow-300">→ Queue 기반 BFS 탐색</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* 성과 */}
        <motion.div
          className="p-5 bg-gradient-to-br from-cyan-950/40 to-cyan-900/20 border-2 border-cyan-500/70 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-3xl">✨</div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-cyan-400 font-mono mb-3">
                성과
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-green-400 text-lg">✓</span>
                  <span className="text-gray-300 font-mono text-sm">
                    100% 정확한 메쉬 분리
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400 text-lg">✓</span>
                  <span className="text-gray-300 font-mono text-sm">
                    복잡한 형상도 처리 가능
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-400 text-lg">✓</span>
                  <span className="text-gray-300 font-mono text-sm">
                    실시간 처리 (~3ms)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 최종 메시지 */}
        <motion.div
          className="p-5 bg-gradient-to-r from-cyan-950/50 to-purple-950/50 border-l-4 border-cyan-500 rounded-r-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-3xl">🎯</div>
            <div>
              <h3 className="text-base font-bold text-cyan-400 font-mono mb-2">
                최종 결과
              </h3>
              <p className="text-gray-300 font-mono text-sm leading-relaxed">
                모든 시행착오가<br />
                하나의 완성된 솔루션으로<br />
                <span className="text-cyan-400 font-bold text-base">
                  → VR 수술 시뮬레이션 완성!
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// 슬라이스 프로세스 애니메이션
function SliceProcessAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Step 1: Input - 메쉬 표시 (0-2초) */}
      <motion.div
        className="absolute"
        animate={{
          opacity: [1, 1, 0.3, 0.3, 0.3, 0.3, 1],
        }}
        transition={{
          duration: 8,
          times: [0, 0.2, 0.25, 0.5, 0.75, 0.9, 1],
          repeat: Infinity,
        }}
      >
        <MeshVisualization />
      </motion.div>

      {/* World Space 라벨 (0-2초) */}
      <motion.div
        className="absolute top-8 left-8 px-4 py-2 bg-purple-500/30 border border-purple-400 rounded-lg backdrop-blur-sm"
        animate={{
          opacity: [0, 1, 1, 0, 0, 0, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.05, 0.2, 0.25, 0.5, 0.75, 1],
          repeat: Infinity,
        }}
      >
        <div className="text-purple-300 font-mono text-xs">World Space</div>
      </motion.div>

      {/* Step 2: Detection - Ray casting (2-4초) */}
      <motion.div
        className="absolute w-1 h-64 bg-cyan-400 rounded-full"
        style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.8)' }}
        animate={{
          x: [-150, -150, 150, 150, -150],
          opacity: [0, 0, 1, 1, 0, 0, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.25, 0.3, 0.45, 0.5, 0.75, 1],
          repeat: Infinity,
        }}
      />

      {/* 교차된 삼각형 표시 */}
      <IntersectedTriangles />

      {/* 교차 카운터 (2-4초) */}
      <motion.div
        className="absolute top-8 right-8 px-4 py-2 bg-red-500/30 border border-red-400 rounded-lg backdrop-blur-sm"
        animate={{
          opacity: [0, 0, 1, 1, 0, 0, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.3, 0.35, 0.48, 0.5, 0.75, 1],
          repeat: Infinity,
        }}
      >
        <CrossedCounter />
      </motion.div>

      {/* Step 3: Grouping - Flood-fill (4-6초) */}
      <FloodFillVisualization />

      {/* 그룹 카운터 (4-6초) */}
      <motion.div
        className="absolute top-8 right-8 px-4 py-3 bg-green-500/30 border border-green-400 rounded-lg backdrop-blur-sm"
        animate={{
          opacity: [0, 0, 0, 1, 1, 0, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.5, 0.55, 0.6, 0.73, 0.75, 1],
          repeat: Infinity,
        }}
      >
        <GroupCounter />
      </motion.div>

      {/* Step 4: Result - 분리 (6-8초) */}
      <SeparatedMeshes />

      {/* SUCCESS 표시 (6.5-7.5초) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{
          opacity: [0, 0, 0, 1, 1, 0, 0],
          scale: [0, 0, 0, 1.2, 1, 0, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.75, 0.8, 0.82, 0.88, 0.9, 1],
          repeat: Infinity,
        }}
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-8xl">✓</span>
          <span className="text-green-400 font-mono text-3xl font-bold">SUCCESS!</span>
        </div>
      </motion.div>
    </div>
  );
}

// 메쉬 시각화
function MeshVisualization() {
  return (
    <div className="relative">
      {/* 중앙 메쉬 (18개 삼각형) */}
      {[...Array(18)].map((_, i) => {
        const angle = (i * Math.PI * 2) / 18;
        const radius = 100;
        
        return (
          <div
            key={`mesh-tri-${i}`}
            className="absolute"
            style={{
              width: 0,
              height: 0,
              borderLeft: '12px solid transparent',
              borderRight: '12px solid transparent',
              borderBottom: '21px solid rgba(156, 163, 175, 0.5)',
              left: `${Math.cos(angle) * radius}px`,
              top: `${Math.sin(angle) * radius}px`,
              transform: `translate(-50%, -50%) rotate(${angle * 180 / Math.PI}deg)`,
            }}
          />
        );
      })}

      {/* 중앙 코어 */}
      <div className="absolute w-20 h-20 -left-10 -top-10 bg-gray-500/30 rounded-full" />
    </div>
  );
}

// 교차된 삼각형
function IntersectedTriangles() {
  return (
    <>
      {[7, 8, 9, 10, 11].map((i) => {
        const angle = (i * Math.PI * 2) / 18;
        const radius = 100;
        
        return (
          <motion.div
            key={`intersect-${i}`}
            className="absolute"
            style={{
              width: 0,
              height: 0,
              borderLeft: '12px solid transparent',
              borderRight: '12px solid transparent',
              borderBottom: '21px solid rgba(239, 68, 68, 0.8)',
              left: `calc(50% + ${Math.cos(angle) * radius}px)`,
              top: `calc(50% + ${Math.sin(angle) * radius}px)`,
              transform: `translate(-50%, -50%) rotate(${angle * 180 / Math.PI}deg)`,
            }}
            animate={{
              opacity: [0, 0, 0, 1, 1, 0.3, 0.3, 0],
              borderBottomColor: [
                'rgba(239, 68, 68, 0)',
                'rgba(239, 68, 68, 0)',
                'rgba(239, 68, 68, 0)',
                'rgba(239, 68, 68, 0.8)',
                'rgba(239, 68, 68, 0.8)',
                'rgba(239, 68, 68, 0.3)',
                'rgba(239, 68, 68, 0.3)',
                'rgba(239, 68, 68, 0)',
              ],
            }}
            transition={{
              duration: 8,
              times: [0, 0.25, 0.3, 0.35, 0.48, 0.5, 0.75, 1],
              delay: (i - 7) * 0.03,
              repeat: Infinity,
            }}
          />
        );
      })}
    </>
  );
}

// Flood-fill 시각화
function FloodFillVisualization() {
  // Group A (0-6)
  const groupAIndices = [0, 1, 2, 3, 4, 5, 6];
  // Group B (12-17)
  const groupBIndices = [12, 13, 14, 15, 16, 17];

  return (
    <>
      {/* Group A - 초록 물결 */}
      {groupAIndices.map((i) => {
        const angle = (i * Math.PI * 2) / 18;
        const radius = 100;
        
        return (
          <motion.div
            key={`flood-a-${i}`}
            className="absolute w-10 h-10 border-2 border-green-400 rounded-full"
            style={{
              left: `calc(50% + ${Math.cos(angle) * radius}px)`,
              top: `calc(50% + ${Math.sin(angle) * radius}px)`,
              boxShadow: '0 0 15px rgba(74, 222, 128, 0.6)',
            }}
            animate={{
              opacity: [0, 0, 0, 1, 0, 0, 0],
              scale: [0, 0, 0, 1.5, 2, 0, 0],
            }}
            transition={{
              duration: 8,
              times: [0, 0.5, 0.52, 0.56, 0.62, 0.75, 1],
              delay: i * 0.03,
              repeat: Infinity,
            }}
          />
        );
      })}

      {/* Group B - 파랑 물결 */}
      {groupBIndices.map((i) => {
        const angle = (i * Math.PI * 2) / 18;
        const radius = 100;
        
        return (
          <motion.div
            key={`flood-b-${i}`}
            className="absolute w-10 h-10 border-2 border-blue-400 rounded-full"
            style={{
              left: `calc(50% + ${Math.cos(angle) * radius}px)`,
              top: `calc(50% + ${Math.sin(angle) * radius}px)`,
              boxShadow: '0 0 15px rgba(59, 130, 246, 0.6)',
            }}
            animate={{
              opacity: [0, 0, 0, 1, 0, 0, 0],
              scale: [0, 0, 0, 1.5, 2, 0, 0],
            }}
            transition={{
              duration: 8,
              times: [0, 0.5, 0.52, 0.56, 0.62, 0.75, 1],
              delay: (i - 12) * 0.03,
              repeat: Infinity,
            }}
          />
        );
      })}
    </>
  );
}

// 분리된 메쉬
function SeparatedMeshes() {
  return (
    <>
      {/* Group A - 왼쪽으로 이동 */}
      <motion.div
        className="absolute w-32 h-32 border-2 border-green-400 rounded-xl bg-green-500/20"
        style={{ boxShadow: '0 0 30px rgba(74, 222, 128, 0.4)' }}
        animate={{
          x: [0, 0, 0, -80, -80, 0],
          opacity: [0, 0, 0, 1, 1, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.75, 0.78, 0.82, 0.9, 1],
          repeat: Infinity,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-green-400 font-mono text-sm font-bold">Group A</div>
        </div>
      </motion.div>

      {/* Group B - 오른쪽으로 이동 */}
      <motion.div
        className="absolute w-32 h-32 border-2 border-blue-400 rounded-xl bg-blue-500/20"
        style={{ boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)' }}
        animate={{
          x: [0, 0, 0, 80, 80, 0],
          opacity: [0, 0, 0, 1, 1, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.75, 0.78, 0.82, 0.9, 1],
          repeat: Infinity,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-blue-400 font-mono text-sm font-bold">Group B</div>
        </div>
      </motion.div>
    </>
  );
}

// 단계 표시기
function StageIndicator() {
  const [stage, setStage] = useState(1);

  useEffect(() => {
    const startTime = Date.now();

    const animate = () => {
      const elapsed = ((Date.now() - startTime) % 8000) / 8000;

      if (elapsed < 0.25) {
        setStage(1);
      } else if (elapsed < 0.5) {
        setStage(2);
      } else if (elapsed < 0.75) {
        setStage(3);
      } else {
        setStage(4);
      }

      requestAnimationFrame(animate);
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const stages = [
    { num: 1, name: 'Input', color: 'purple' },
    { num: 2, name: 'Detection', color: 'green' },
    { num: 3, name: 'Grouping', color: 'yellow' },
    { num: 4, name: 'Result', color: 'cyan' },
  ];

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
      {stages.map((s) => (
        <div
          key={s.num}
          className={`px-3 py-2 rounded-lg backdrop-blur-sm transition-all duration-300 ${
            stage === s.num
              ? `bg-${s.color}-500/40 border-2 border-${s.color}-400 scale-110`
              : 'bg-gray-800/40 border border-gray-600'
          }`}
        >
          <div
            className={`font-mono text-xs font-bold ${
              stage === s.num ? `text-${s.color}-300` : 'text-gray-500'
            }`}
          >
            {s.num}. {s.name}
          </div>
        </div>
      ))}
    </div>
  );
}

// 교차 카운터
function CrossedCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    const animate = () => {
      const elapsed = ((Date.now() - startTime) % 8000) / 8000;

      if (elapsed >= 0.3 && elapsed < 0.48) {
        const progress = (elapsed - 0.3) / 0.18;
        setCount(Math.min(5, Math.floor(progress * 5)));
      } else if (elapsed < 0.3) {
        setCount(0);
      } else if (elapsed >= 0.48 && elapsed < 0.5) {
        setCount(5);
      } else {
        setCount(0);
      }

      requestAnimationFrame(animate);
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="font-mono text-sm">
      <div className="text-red-300 font-bold">{count} triangles</div>
      <div className="text-red-400 text-xs">crossed</div>
    </div>
  );
}

// 그룹 카운터
function GroupCounter() {
  const [groupA, setGroupA] = useState(0);
  const [groupB, setGroupB] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    const animate = () => {
      const elapsed = ((Date.now() - startTime) % 8000) / 8000;

      if (elapsed >= 0.5 && elapsed < 0.73) {
        const progress = (elapsed - 0.5) / 0.23;
        setGroupA(Math.floor(progress * 7));
        setGroupB(Math.floor(progress * 6));
      } else if (elapsed < 0.5) {
        setGroupA(0);
        setGroupB(0);
      } else if (elapsed >= 0.73 && elapsed < 0.75) {
        setGroupA(7);
        setGroupB(6);
      } else {
        setGroupA(0);
        setGroupB(0);
      }

      requestAnimationFrame(animate);
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="font-mono text-sm space-y-1">
      <div className="flex items-center gap-2">
        <span className="text-green-300 font-bold">{groupA}</span>
        <span className="text-green-400 text-xs">|</span>
        <span className="text-blue-300 font-bold">{groupB}</span>
      </div>
      <div className="text-gray-300 text-xs">triangles</div>
    </div>
  );
}