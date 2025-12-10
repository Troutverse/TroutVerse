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

          {/* 좌표계 경고 */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{
              opacity: [0, 0, 0, 0, 0, 1, 1, 0],
              scale: [0, 0, 0, 0, 0, 1.2, 1, 0],
            }}
            transition={{
              duration: 8,
              times: [0, 0.6, 0.65, 0.68, 0.7, 0.72, 0.8, 1],
              repeat: Infinity,
            }}
          >
            <div className="flex flex-col items-center gap-3">
              <span className="text-6xl">⚠️</span>
              <span className="text-orange-400 font-mono text-xl font-bold">Coordinate Issue</span>
              <div className="flex gap-4 mt-2">
                <span className="text-cyan-400 font-mono text-sm">World</span>
                <span className="text-red-400 font-mono text-sm">≠</span>
                <span className="text-purple-400 font-mono text-sm">Local</span>
              </div>
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

        {/* 접근 방법 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">📍</div>
            <div>
              <h3 className="text-base font-bold text-blue-400 font-mono mb-2">
                새로운 접근
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• Edge가 아닌 Triangle(삼각형) 단위로 검사</li>
                <li>• 칼날과 교차하는 삼각형 찾기</li>
                <li>• 교차된 삼각형들을 그룹으로 분리</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 구현 로직 */}
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
                구현 방식
              </h3>
              <ol className="space-y-1.5 text-gray-400 font-mono text-xs list-decimal list-inside">
                <li>메쉬의 모든 삼각형 순회</li>
                <li>각 삼각형과 칼날의 교차 검사</li>
                <li>교차된 삼각형 → Group A</li>
                <li>교차 안된 삼각형 → Group B</li>
                <li>두 그룹을 별도 메쉬로 분리</li>
              </ol>
            </div>
          </div>
        </motion.div>

        {/* 획기적 개선 */}
        <motion.div
          className="p-4 bg-green-950/30 border-2 border-green-500/70 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">✓✓</div>
            <div>
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">
                큰 진전!
              </h3>
              <ul className="space-y-1.5 text-gray-300 font-mono text-xs">
                <li>• <span className="text-green-400 font-bold">드디어 메쉬 분리 성공!</span></li>
                <li>• Face 정보 유지됨</li>
                <li>• 구조적으로 완전한 접근</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 문제점 1 - 좌표계 */}
        <motion.div
          className="p-4 bg-red-950/30 border-2 border-red-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🔥</div>
            <div>
              <h3 className="text-base font-bold text-red-400 font-mono mb-2">
                1. 좌표계 혼동 (Critical)
              </h3>
              <ul className="space-y-1.5 text-gray-300 font-mono text-xs">
                <li>• <span className="text-cyan-400">World 좌표</span>와 <span className="text-purple-400">Local 좌표</span> 혼재</li>
                <li>• 칼날: World 좌표</li>
                <li>• 메쉬 정점: Local 좌표</li>
                <li>• 결과: <span className="text-red-400 font-bold">엉뚱한 삼각형 검출</span></li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 문제점 2 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-orange-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚠️</div>
            <div>
              <h3 className="text-base font-bold text-orange-400 font-mono mb-2">
                2. Flood-fill 필요성 인식
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 교차된 삼각형만으로는 부족</li>
                <li>• 연결된 모든 삼각형 찾아야 함</li>
                <li>• <span className="text-orange-400">Flood-fill 알고리즘 필요</span></li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 결론 */}
        <motion.div
          className="p-4 bg-green-950/30 border-l-4 border-green-500 rounded-r-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <h3 className="text-sm font-bold text-green-400 font-mono mb-2">
                중요한 진전
              </h3>
              <p className="text-gray-300 font-mono text-xs leading-relaxed">
                "Triangle 기반 접근이 <span className="text-green-400 font-bold">올바른 방향</span>!<br />
                하지만 좌표계 변환과 그룹 탐색 문제 해결 필요<br />
                → <span className="text-green-400 font-bold">거의 다 왔다!</span>"
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
      <div className="absolute w-40 h-40 bg-purple-500/30 rounded-full" />

      {/* 삼각형 와이어프레임 (8개) */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * Math.PI * 2) / 8;
        const radius = 70;
        return (
          <motion.div
            key={`tri-${i}`}
            className="absolute"
            style={{
              width: 0,
              height: 0,
              borderLeft: '15px solid transparent',
              borderRight: '15px solid transparent',
              borderBottom: '26px solid rgba(74, 222, 128, 0.3)',
              left: `calc(50% + ${Math.cos(angle) * radius}px)`,
              top: `calc(50% + ${Math.sin(angle) * radius}px)`,
              transform: `translate(-50%, -50%) rotate(${angle * 180 / Math.PI}deg)`,
            }}
            animate={{
              borderBottomColor: [
                'rgba(156, 163, 175, 0.3)',
                'rgba(156, 163, 175, 0.3)',
                i < 3 ? 'rgba(74, 222, 128, 0.8)' : 'rgba(156, 163, 175, 0.3)',
                i < 3 ? 'rgba(74, 222, 128, 0.8)' : 'rgba(156, 163, 175, 0.3)',
                'rgba(156, 163, 175, 0.3)',
              ],
            }}
            transition={{
              duration: 8,
              times: [0, 0.2, 0.35, 0.5, 1],
              repeat: Infinity,
            }}
          />
        );
      })}

      {/* 스캔 라인 */}
      <motion.div
        className="absolute w-1 bg-cyan-400 h-48"
        style={{ 
          boxShadow: '0 0 20px rgba(34, 211, 238, 0.8)',
          transformOrigin: 'center',
        }}
        animate={{
          x: [-120, -120, 120, 120, -120],
          opacity: [0, 1, 1, 0, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.15, 0.35, 0.4, 1],
          repeat: Infinity,
        }}
      />

      {/* 체크 마크 (교차 성공) */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={`check-${i}`}
          className="absolute text-green-400 text-2xl font-bold"
          style={{
            left: `calc(50% + ${Math.cos(i * Math.PI * 2 / 8) * 70}px)`,
            top: `calc(50% + ${Math.sin(i * Math.PI * 2 / 8) * 70}px)`,
          }}
          animate={{
            opacity: [0, 0, 1, 1, 0],
            scale: [0, 0, 1.2, 1, 0],
          }}
          transition={{
            duration: 8,
            times: [0, 0.3, 0.35, 0.45, 1],
            delay: i * 0.05,
            repeat: Infinity,
          }}
        >
          ✓
        </motion.div>
      ))}

      {/* 그룹 분리 효과 */}
      <motion.div
        className="absolute w-32 h-32 border-2 border-green-400 rounded-lg"
        style={{ boxShadow: '0 0 20px rgba(74, 222, 128, 0.5)' }}
        animate={{
          x: [0, 0, 0, -30, -30, 0],
          y: [0, 0, 0, 0, 0, 0],
          opacity: [0, 0, 0.5, 1, 0.5, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.45, 0.5, 0.55, 0.6, 1],
          repeat: Infinity,
        }}
      />

      {/* 좌표계 표시 (World/Local) */}
      <motion.div
        className="absolute top-8 left-8 flex gap-4"
        animate={{
          opacity: [0, 0, 0, 0, 1, 1, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.6, 0.65, 0.68, 0.7, 0.8, 1],
          repeat: Infinity,
        }}
      >
        <div className="text-cyan-400 font-mono text-xs">World</div>
        <div className="text-purple-400 font-mono text-xs">Local</div>
      </motion.div>

      {/* 칼날 */}
      <motion.div
        className="absolute w-2 h-40 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full"
        style={{ boxShadow: '0 0 15px rgba(255,255,255,0.5)' }}
        animate={{
          x: [-140, -140, 140, 140, -140],
          y: [0, 0, 0, 0, 0],
          rotate: [0, 0, 90, 90, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.12, 0.35, 0.5, 1],
          repeat: Infinity,
        }}
      />
    </div>
  );
}

// 그룹 카운터
function GroupCounter() {
  const [groupA, setGroupA] = useState(0);

  useEffect(() => {
    const startTime = Date.now();

    const animate = () => {
      const elapsed = ((Date.now() - startTime) % 8000) / 8000;

      if (elapsed < 0.35) {
        setGroupA(0);
      } else if (elapsed < 0.45) {
        const progress = (elapsed - 0.35) / 0.1;
        setGroupA(Math.floor(12 * progress));
      } else if (elapsed < 0.58) {
        setGroupA(12);
      } else {
        setGroupA(12);
      }

      requestAnimationFrame(animate);
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="font-mono text-xs">
      <div className="text-green-400">
        <span className="font-bold">Group A: {groupA}</span>
      </div>
      {groupA > 0 && (
        <div className="text-gray-400 text-[10px] mt-1">
          triangles detected
        </div>
      )}
    </div>
  );
}