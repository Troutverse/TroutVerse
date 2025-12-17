'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Slide07FloodFill() {
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
              opacity: [0, 0, 0, 0, 1, 1, 0],
              scale: [0, 0, 0, 0, 1.2, 1, 0],
            }}
            transition={{
              duration: 10,
              times: [0, 0.65, 0.7, 0.72, 0.74, 0.8, 1],
              repeat: Infinity,
            }}
          >
            <div className="flex flex-col items-center gap-3">
              <span className="text-8xl">🎉</span>
              <span className="text-green-400 font-mono text-3xl font-bold">COMPLETE!</span>
            </div>
          </motion.div>

          {/* 진행 상황 */}
          <motion.div
            className="absolute top-4 right-4 px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-lg"
            animate={{
              opacity: [0, 0, 1, 1, 1, 0],
            }}
            transition={{
              duration: 10,
              times: [0, 0.3, 0.35, 0.7, 0.8, 1],
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
          <h2 className="flex text-5xl font-bold text-green-400 font-mono mb-3">
            Final Solution
            <div className="text-xl text-green-300 font-mono ml-4 mt-3">
              Flood-fill Algorithm (DFS)
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
                왜 Flood-fill?
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 연결된 삼각형 그룹을 체계적으로 찾기</li>
                <li>• 경계(교차 삼각형)를 넘지 않고 확장</li>
                <li>• DFS로 구현 - Stack 기반 반복문 (재귀 아님)</li>
                <li>• 이미지 처리의 Paint Bucket과 동일한 원리</li>
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
                <li>• <span className="text-gray-400">재귀 DFS</span>: Stack overflow 위험 (메쉬 크기 제한)</li>
                <li>• <span className="text-gray-400">BFS (Queue)</span>: 메모리 사용 많음, 깊이 우선이 더 효율적</li>
                <li>• <span className="text-gray-400">단순 이웃 탐색</span>: 불완전한 그룹, 고립된 영역 발생</li>
                <li>• <span className="text-gray-400">Union-Find</span>: 오버엔지니어링, 구현 복잡</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 알고리즘 단계 */}
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
                알고리즘 단계
              </h3>
              <ol className="space-y-1.5 text-gray-400 font-mono text-xs list-decimal list-inside">
                <li><span className="text-blue-400">시드 선택</span>: 교차되지 않은 삼각형 하나</li>
                <li><span className="text-cyan-400">Stack 초기화</span>: 시드를 Stack에 Push</li>
                <li><span className="text-green-400">탐색 시작</span>: Stack에서 삼각형 Pop</li>
                <li><span className="text-yellow-400">이웃 확인</span>: 3개 이웃 삼각형 검사</li>
                <li><span className="text-purple-400">경계 체크</span>: 교차 안됐으면 Stack에 Push</li>
                <li><span className="text-pink-400">반복</span>: Stack이 빌 때까지 3-5 반복</li>
              </ol>
            </div>
          </div>
        </motion.div>

        {/* 코드 예시 */}
        <motion.div
          className="p-4 bg-gray-900/80 border border-green-500/30 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="space-y-2">
            <p className="text-green-400 font-mono text-xs mb-2">✓ Flood-fill 핵심 로직 (DFS)</p>
            <pre className="bg-black/50 p-3 rounded text-xs overflow-x-auto">
              <code className="text-gray-300 font-mono">
{`Stack<int> stack = new Stack<int>();
HashSet<int> targetGroup = new HashSet<int>();

stack.Push(startTriIdx);
targetGroup.Add(startTriIdx);

while (stack.Count > 0) {
    int currentIdx = stack.Pop();
    Triangle currentTri = allTriangles[currentIdx];
    
    // 3개 이웃 삼각형 검사
    for (int i = 0; i < 3; i++) {
        int neighborIdx = currentTri.GetNeighbor(i);
        if (neighborIdx == -1) continue;
        
        if (!barriers.Contains(neighborIdx) 
            && !targetGroup.Contains(neighborIdx)) {
            targetGroup.Add(neighborIdx);
            stack.Push(neighborIdx);
        }
    }
}`}
              </code>
            </pre>
          </div>
        </motion.div>

        {/* 최종 성공 */}
        <motion.div
          className="p-4 bg-green-950/30 border-2 border-green-500/70 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🎉</div>
            <div>
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">
                최종 성공!
              </h3>
              <ul className="space-y-1.5 text-gray-300 font-mono text-xs">
                <li>• <span className="text-green-400 font-bold">완벽한 그룹 분리</span> 달성</li>
                <li>• 안정적인 메쉬 생성 보장</li>
                <li>• 성능: O(n) - 모든 삼각형 1회씩만 방문</li>
                <li>• 메모리: O(n) - Stack + HashSet</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 성능 비교 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-cyan-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">📊</div>
            <div>
              <h3 className="text-base font-bold text-cyan-400 font-mono mb-2">
                성능 지표
              </h3>
              <div className="space-y-2 text-gray-400 font-mono text-xs">
                <div className="flex justify-between">
                  <span>메쉬 분리 성공률:</span>
                  <span className="text-green-400 font-bold">100%</span>
                </div>
                <div className="flex justify-between">
                  <span>평균 처리 시간:</span>
                  <span className="text-green-400 font-bold">~5ms</span>
                </div>
                <div className="flex justify-between">
                  <span>프레임 드롭:</span>
                  <span className="text-green-400 font-bold">없음</span>
                </div>
                <div className="flex justify-between">
                  <span>VR 환경 안정성:</span>
                  <span className="text-green-400 font-bold">90fps 유지</span>
                </div>
              </div>
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
                여정의 완성
              </h3>
              <p className="text-gray-300 font-mono text-xs leading-relaxed">
                "Ray → Edge → Triangle → Transform → Flood-fill<br />
                5번의 시도 끝에 완벽한 솔루션 달성<br />
                → <span className="text-green-400 font-bold">VR 수술 시뮬레이션 실현!</span>"
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
      <div className="absolute w-44 h-44 bg-purple-500/10 rounded-full blur-2xl" />

      {/* 삼각형 그리드 (16개) */}
      {[...Array(16)].map((_, i) => {
        const row = Math.floor(i / 4);
        const col = i % 4;
        const x = (col - 1.5) * 50;
        const y = (row - 1.5) * 50;
        
        // 경계 삼각형 (가운데 세로줄)
        const isBoundary = col === 1 || col === 2;
        // Group A (왼쪽)
        const isGroupA = col < 1;
        // Seed 삼각형
        const isSeed = i === 0;
        
        return (
          <motion.div
            key={`tri-${i}`}
            className="absolute"
            style={{
              width: 0,
              height: 0,
              borderLeft: '15px solid transparent',
              borderRight: '15px solid transparent',
              borderBottom: '26px solid rgba(156, 163, 175, 0.3)',
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              borderBottomColor: [
                'rgba(156, 163, 175, 0.3)',  // 초기
                'rgba(156, 163, 175, 0.3)',  // 스캔 전
                isBoundary ? 'rgba(239, 68, 68, 0.8)' : 'rgba(156, 163, 175, 0.3)',  // 경계 감지
                isBoundary ? 'rgba(239, 68, 68, 0.8)' : 'rgba(156, 163, 175, 0.3)',
                // Flood-fill 시작
                isSeed ? 'rgba(34, 211, 238, 1)' :  // Seed: 밝은 cyan
                isBoundary ? 'rgba(239, 68, 68, 0.8)' : 
                isGroupA ? 'rgba(74, 222, 128, 0)' : 'rgba(156, 163, 175, 0.3)',
                // Flood-fill 확산
                isSeed ? 'rgba(34, 211, 238, 0.5)' :
                isBoundary ? 'rgba(239, 68, 68, 0.8)' :
                isGroupA ? 'rgba(74, 222, 128, 0.8)' : 'rgba(59, 130, 246, 0.8)',
                // 완료
                isBoundary ? 'rgba(239, 68, 68, 0.5)' :
                isGroupA ? 'rgba(74, 222, 128, 0.8)' : 'rgba(59, 130, 246, 0.8)',
                'rgba(156, 163, 175, 0.3)',  // 리셋
              ],
            }}
            transition={{
              duration: 10,
              times: [0, 0.15, 0.25, 0.35, 0.4, 0.6, 0.8, 1],
              delay: isGroupA ? (col === 0 ? i * 0.05 : (i - 1) * 0.05) : 0,
              repeat: Infinity,
            }}
          />
        );
      })}

      {/* 스캔 라인 */}
      <motion.div
        className="absolute w-1 bg-cyan-400 h-64"
        style={{ 
          boxShadow: '0 0 20px rgba(34, 211, 238, 0.8)',
        }}
        animate={{
          x: [-140, -140, 140, 140, -140],
          opacity: [0, 1, 1, 0, 0],
        }}
        transition={{
          duration: 10,
          times: [0, 0.12, 0.28, 0.32, 1],
          repeat: Infinity,
        }}
      />

      {/* Seed 표시 */}
      <motion.div
        className="absolute w-12 h-12 border-2 border-cyan-400 rounded-full"
        style={{ 
          left: 'calc(50% - 75px)',
          top: 'calc(50% - 75px)',
          boxShadow: '0 0 20px rgba(34, 211, 238, 0.8)',
        }}
        animate={{
          opacity: [0, 0, 0, 1, 0.5, 0, 0],
          scale: [0, 0, 0, 1.2, 1, 1, 0],
        }}
        transition={{
          duration: 10,
          times: [0, 0.37, 0.4, 0.42, 0.5, 0.8, 1],
          repeat: Infinity,
        }}
      />

      {/* Flood-fill 확산 웨이브 */}
      {[0, 1, 2, 3].map((wave) => (
        <motion.div
          key={`wave-${wave}`}
          className="absolute border-2 border-green-400 rounded-lg"
          style={{
            left: 'calc(50% - 75px)',
            top: 'calc(50% - 75px)',
            width: 150,
            height: 200,
          }}
          animate={{
            opacity: [0, 0, 0, 0.8, 0],
            scale: [1, 1, 1, 1.3, 1.5],
          }}
          transition={{
            duration: 10,
            times: [0, 0.4, 0.42, 0.5, 0.6],
            delay: wave * 0.05,
            repeat: Infinity,
          }}
        />
      ))}

      {/* 그룹 분리 효과 */}
      <motion.div
        className="absolute border-2 border-green-400 rounded-lg"
        style={{ 
          left: 'calc(50% - 100px)',
          top: 'calc(50% - 100px)',
          width: 100,
          height: 200,
          boxShadow: '0 0 20px rgba(74, 222, 128, 0.5)',
        }}
        animate={{
          x: [0, 0, 0, -30, -30, 0],
          opacity: [0, 0, 0.5, 1, 0.5, 0],
        }}
        transition={{
          duration: 10,
          times: [0, 0.62, 0.66, 0.7, 0.75, 1],
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute border-2 border-blue-400 rounded-lg"
        style={{ 
          left: 'calc(50%)',
          top: 'calc(50% - 100px)',
          width: 100,
          height: 200,
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
        }}
        animate={{
          x: [0, 0, 0, 30, 30, 0],
          opacity: [0, 0, 0.5, 1, 0.5, 0],
        }}
        transition={{
          duration: 10,
          times: [0, 0.62, 0.66, 0.7, 0.75, 1],
          repeat: Infinity,
        }}
      />

      {/* Stack 시각화 */}
      <motion.div
        className="absolute bottom-6 left-6 px-3 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/50 rounded-lg"
        animate={{
          opacity: [0, 0, 1, 1, 0],
        }}
        transition={{
          duration: 10,
          times: [0, 0.4, 0.45, 0.65, 1],
          repeat: Infinity,
        }}
      >
        <div className="flex items-center gap-2">
          <div className="text-purple-400 font-mono text-xs">Stack:</div>
          <motion.div 
            className="flex flex-col gap-1"
            animate={{
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 10,
              times: [0, 0.42, 0.6, 1],
              repeat: Infinity,
            }}
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-6 h-2 bg-purple-400 rounded-sm" />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* 칼날 */}
      <motion.div
        className="absolute w-2 h-56 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full"
        style={{ boxShadow: '0 0 15px rgba(255,255,255,0.5)' }}
        animate={{
          x: [-160, -160, 160, 160, -160],
          rotate: [0, 0, 90, 90, 0],
        }}
        transition={{
          duration: 10,
          times: [0, 0.1, 0.3, 0.5, 1],
          repeat: Infinity,
        }}
      />
    </div>
  );
}

// Flood-fill 카운터
function FloodFillCounter() {
  const [visited, setVisited] = useState(0);
  const [total] = useState(8);

  useEffect(() => {
    const startTime = Date.now();

    const animate = () => {
      const elapsed = ((Date.now() - startTime) % 10000) / 10000;

      if (elapsed < 0.4) {
        setVisited(0);
      } else if (elapsed < 0.6) {
        const progress = (elapsed - 0.4) / 0.2;
        setVisited(Math.floor(8 * progress));
      } else if (elapsed < 0.8) {
        setVisited(8);
      } else {
        setVisited(8);
      }

      requestAnimationFrame(animate);
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="font-mono text-xs space-y-1">
      <div className="text-cyan-400">
        <span className="font-bold">Visited: {visited}/{total}</span>
      </div>
      {visited > 0 && visited < total && (
        <div className="text-green-400 text-[10px]">
          Expanding...
        </div>
      )}
      {visited === total && (
        <div className="text-green-400 text-[10px] font-bold">
          Complete!
        </div>
      )}
    </div>
  );
}