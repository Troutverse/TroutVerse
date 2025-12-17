'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Slide05Attempt3() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16 pb-32">
      {/* 왼쪽: Triangle Detection 애니메이션 */}
      <div className="w-[45%] h-full flex items-center justify-center">
        <div className="relative w-full h-[80%] border-2 border-yellow-500/30 rounded-2xl bg-yellow-950/20 overflow-hidden">
          <TriangleDetectionAnimation />

          {/* 성공 표시 */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{
              opacity: [0, 0, 0, 0, 1, 1, 0, 0],
              scale: [0, 0, 0, 0, 1.2, 1, 1, 0],
            }}
            transition={{
              duration: 8,
              times: [0, 0.48, 0.5, 0.52, 0.54, 0.58, 0.62, 1],
              repeat: Infinity,
            }}
          >
            <div className="flex flex-col items-center gap-3">
              <span className="text-7xl">✓</span>
              <span className="text-green-400 font-mono text-2xl font-bold">SUCCESS!</span>
            </div>
          </motion.div>

          {/* 그룹 카운터 */}
          <motion.div
            className="absolute top-4 right-4 px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-lg"
            animate={{
              opacity: [0, 0, 0, 1, 1, 1, 0],
            }}
            transition={{
              duration: 8,
              times: [0, 0.35, 0.4, 0.45, 0.58, 0.65, 1],
              repeat: Infinity,
            }}
          >
            <GroupCounter />
          </motion.div>
        </div>
      </div>

      {/* 오른쪽: 설명 */}
      <div className="w-[55%] h-full flex flex-col gap-4 overflow-y-auto pr-2 pb-8 custom-scrollbar">
        {/* 사이버펑크 스크롤바 */}
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
          <h2 className="flex text-5xl font-bold text-yellow-400 font-mono mb-3">
            Attempt #3
            <div className="text-xl text-yellow-300 font-mono ml-4 mt-3">
              Triangle-based Detection & Grouping
            </div>
          </h2>
        </motion.div>

        {/* 왜 이 방법? - NEW */}
        <motion.div
          className="p-4 bg-blue-950/30 backdrop-blur-sm border border-blue-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🤔</div>
            <div>
              <h3 className="text-base font-bold text-blue-400 font-mono mb-2">
                왜 Triangle로?
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• Edge = "선" → Triangle = "면"</li>
                <li>• 메쉬의 최소 구성 단위 (Unity의 기본 단위)</li>
                <li>• 연결 관계 완벽 파악 가능 (Topology 정보 포함)</li>
                <li>• 면 단위 그룹화로 완전한 분리 가능</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 배제한 대안들 - NEW */}
        <motion.div
          className="p-4 bg-gray-900/70 backdrop-blur-sm border border-gray-600/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🚫</div>
            <div>
              <h3 className="text-base font-bold text-gray-400 font-mono mb-2">
                배제한 대안들
              </h3>
              <ul className="space-y-1.5 text-gray-500 font-mono text-xs">
                <li>• <span className="text-gray-400">Edge 방식 개선</span>: 면 정보 없이는 한계</li>
                <li>• <span className="text-gray-400">Quad-based</span>: Unity는 Triangle만 지원</li>
                <li>• <span className="text-gray-400">Vertex 보간법</span>: 정확도 떨어지고 구멍 발생</li>
                <li>• <span className="text-gray-400">Half-edge 구조</span>: 오버엔지니어링, 구현 복잡</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 구현 방식 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-purple-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🔧</div>
            <div>
              <h3 className="text-base font-bold text-purple-400 font-mono mb-2">
                구현 방식
              </h3>
              <ol className="space-y-1.5 text-gray-400 font-mono text-xs list-decimal list-inside">
                <li>교차되지 않은 삼각형 하나를 시드(Seed)로 선택</li>
                <li>시드로부터 이웃 삼각형을 순차적으로 탐색</li>
                <li>교차된 삼각형(경계)이 나올 때까지 확장 → Group A</li>
                <li>남은 모든 삼각형들 → Group B</li>
                <li>두 그룹을 별도 메쉬로 생성</li>
              </ol>
            </div>
          </div>
        </motion.div>

        {/* 획기적 개선 */}
        <motion.div
          className="p-4 bg-green-950/30 border-2 border-green-500/70 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">✓✓</div>
            <div>
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">
                큰 진전!
              </h3>
              <ul className="space-y-1.5 text-gray-300 font-mono text-xs">
                <li>• <span className="text-green-400 font-bold">드디어 메쉬 분리 성공!</span></li>
                <li>• 교차 삼각형을 경계로 명확한 그룹 구분</li>
                <li>• Triangle 단위 접근이 올바른 방향임을 확인</li>
                <li>• 구조적으로 완전한 접근</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 문제점 1: 좌표계 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-red-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚠️</div>
            <div>
              <h3 className="text-base font-bold text-red-400 font-mono mb-2">
                1. 좌표계 불일치
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• Ray는 World 좌표계 사용</li>
                <li>• Mesh는 Local 좌표계 사용</li>
                <li>• <span className="text-red-400">교차 판정이 부정확</span></li>
                <li>• Transform.TransformPoint() 필요</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 문제점 2: Flood-fill */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-orange-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚠️</div>
            <div>
              <h3 className="text-base font-bold text-orange-400 font-mono mb-2">
                2. 그룹 탐색 알고리즘 필요
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 단순 이웃 탐색으로는 부족</li>
                <li>• 경계를 넘지 않고 연결된 모든 삼각형 필요</li>
                <li>• <span className="text-orange-400">Flood-fill 알고리즘 도입 필요</span></li>
                <li>• Queue 기반 BFS 구조로 구현</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 결론 */}
        <motion.div
          className="p-4 bg-green-950/30 border-l-4 border-green-500 rounded-r-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <h3 className="text-sm font-bold text-green-400 font-mono mb-2">
                중요한 진전
              </h3>
              <p className="text-gray-300 font-mono text-xs leading-relaxed">
                "Triangle 기반 접근이 <span className="text-green-400 font-bold">올바른 방향</span>!<br />
                좌표계 통일 + Flood-fill 알고리즘만 추가하면<br />
                → <span className="text-green-400 font-bold">완벽한 메쉬 분리 가능!</span>"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Triangle Detection 애니메이션
function TriangleDetectionAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 메쉬 배경 */}
      <div className="absolute w-40 h-40 bg-purple-500/20 rounded-full blur-xl" />

      {/* 삼각형 와이어프레임 (12개) */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * Math.PI * 2) / 12;
        const radius = 80;
        const isCrossed = i >= 4 && i <= 7;
        
        return (
          <motion.div
            key={`tri-${i}`}
            className="absolute"
            style={{
              width: 0,
              height: 0,
              borderLeft: '12px solid transparent',
              borderRight: '12px solid transparent',
              borderBottom: '21px solid rgba(156, 163, 175, 0.3)',
              left: `calc(50% + ${Math.cos(angle) * radius}px)`,
              top: `calc(50% + ${Math.sin(angle) * radius}px)`,
              transform: `translate(-50%, -50%) rotate(${angle * 180 / Math.PI}deg)`,
            }}
            animate={{
              borderBottomColor: [
                'rgba(156, 163, 175, 0.3)',
                'rgba(156, 163, 175, 0.3)',
                isCrossed ? 'rgba(239, 68, 68, 0.8)' : 'rgba(156, 163, 175, 0.3)',
                isCrossed ? 'rgba(239, 68, 68, 0.8)' : 'rgba(156, 163, 175, 0.3)',
                isCrossed ? 'rgba(239, 68, 68, 0.5)' : (i < 4 ? 'rgba(74, 222, 128, 0.8)' : 'rgba(59, 130, 246, 0.8)'),
                isCrossed ? 'rgba(239, 68, 68, 0.5)' : (i < 4 ? 'rgba(74, 222, 128, 0.8)' : 'rgba(59, 130, 246, 0.8)'),
                'rgba(156, 163, 175, 0.3)',
              ],
            }}
            transition={{
              duration: 8,
              times: [0, 0.15, 0.25, 0.35, 0.45, 0.58, 1],
              repeat: Infinity,
            }}
          />
        );
      })}

      {/* 스캔 라인 (Ray) */}
      <motion.div
        className="absolute w-1 bg-cyan-400 h-56"
        style={{ 
          boxShadow: '0 0 20px rgba(34, 211, 238, 0.8)',
          transformOrigin: 'center',
        }}
        animate={{
          x: [-140, -140, 140, 140, -140],
          opacity: [0, 1, 1, 0, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.12, 0.28, 0.32, 1],
          repeat: Infinity,
        }}
      />

      {/* 교차 마크 (경계 삼각형) */}
      {[4, 5, 6, 7].map((i) => {
        const angle = (i * Math.PI * 2) / 12;
        const radius = 80;
        
        return (
          <motion.div
            key={`cross-${i}`}
            className="absolute text-red-400 text-xl font-bold"
            style={{
              left: `calc(50% + ${Math.cos(angle) * radius}px)`,
              top: `calc(50% + ${Math.sin(angle) * radius}px)`,
            }}
            animate={{
              opacity: [0, 0, 1, 1, 0.3, 0.3, 0],
              scale: [0, 0, 1.2, 1, 1, 1, 0],
            }}
            transition={{
              duration: 8,
              times: [0, 0.22, 0.26, 0.3, 0.35, 0.58, 1],
              delay: (i - 4) * 0.03,
              repeat: Infinity,
            }}
          >
            ✗
          </motion.div>
        );
      })}

      {/* Flood-fill 확산 효과 (Group A) */}
      {[0, 1, 2, 3].map((i) => {
        const angle = (i * Math.PI * 2) / 12;
        const radius = 80;
        
        return (
          <motion.div
            key={`flood-${i}`}
            className="absolute w-8 h-8 border-2 border-green-400 rounded-full"
            style={{
              left: `calc(50% + ${Math.cos(angle) * radius}px)`,
              top: `calc(50% + ${Math.sin(angle) * radius}px)`,
              boxShadow: '0 0 15px rgba(74, 222, 128, 0.5)',
            }}
            animate={{
              opacity: [0, 0, 0, 1, 0],
              scale: [0, 0, 0, 1.5, 2],
            }}
            transition={{
              duration: 8,
              times: [0, 0.35, 0.38, 0.42, 0.5],
              delay: i * 0.05,
              repeat: Infinity,
            }}
          />
        );
      })}

      {/* 그룹 분리 효과 */}
      <motion.div
        className="absolute w-36 h-36 border-2 border-green-400 rounded-lg"
        style={{ boxShadow: '0 0 20px rgba(74, 222, 128, 0.5)' }}
        animate={{
          x: [0, 0, 0, -40, -40, 0],
          opacity: [0, 0, 0.5, 1, 0.5, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.48, 0.52, 0.56, 0.6, 1],
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute w-36 h-36 border-2 border-blue-400 rounded-lg"
        style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
        animate={{
          x: [0, 0, 0, 40, 40, 0],
          opacity: [0, 0, 0.5, 1, 0.5, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.48, 0.52, 0.56, 0.6, 1],
          repeat: Infinity,
        }}
      />

      {/* 좌표계 표시 */}
      <motion.div
        className="absolute top-6 left-6 flex flex-col gap-2"
        animate={{
          opacity: [0, 0, 0, 1, 1, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.6, 0.65, 0.7, 0.8, 1],
          repeat: Infinity,
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-cyan-400 rounded-full" />
          <div className="text-cyan-400 font-mono text-xs">Ray: World</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-purple-400 rounded-full" />
          <div className="text-purple-400 font-mono text-xs">Mesh: Local</div>
        </div>
        <div className="text-red-400 font-mono text-xs mt-1">⚠️ 불일치!</div>
      </motion.div>

      {/* 칼날 */}
      <motion.div
        className="absolute w-2 h-48 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full"
        style={{ boxShadow: '0 0 15px rgba(255,255,255,0.5)' }}
        animate={{
          x: [-160, -160, 160, 160, -160],
          rotate: [0, 0, 90, 90, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.1, 0.3, 0.5, 1],
          repeat: Infinity,
        }}
      />
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

      if (elapsed < 0.35) {
        setGroupA(0);
        setGroupB(0);
      } else if (elapsed < 0.45) {
        const progress = (elapsed - 0.35) / 0.1;
        setGroupA(Math.floor(4 * progress));
        setGroupB(Math.floor(8 * progress));
      } else if (elapsed < 0.58) {
        setGroupA(4);
        setGroupB(8);
      } else {
        setGroupA(4);
        setGroupB(8);
      }

      requestAnimationFrame(animate);
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="font-mono text-xs space-y-1">
      <div className="text-green-400">
        <span className="font-bold">Group A: {groupA}</span>
      </div>
      <div className="text-blue-400">
        <span className="font-bold">Group B: {groupB}</span>
      </div>
      {groupA > 0 && (
        <div className="text-gray-400 text-[10px] mt-1">
          triangles detected
        </div>
      )}
    </div>
  );
}