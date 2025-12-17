'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Slide04Attempt2() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16 pb-32">
      {/* 왼쪽: Edge Detection 애니메이션 */}
      <div className="w-[45%] h-full flex items-center justify-center">
        <div className="relative w-full h-[80%] border-2 border-orange-500/30 rounded-2xl bg-orange-950/20 overflow-hidden">
          <EdgeDetectionAnimation />

          {/* 불완전 표시 */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{
              opacity: [0, 0, 0, 0, 0, 1, 1, 0],
              scale: [0, 0, 0, 0, 0, 1.2, 1, 0],
            }}
            transition={{
              duration: 8,
              times: [0, 0.6, 0.65, 0.7, 0.75, 0.78, 0.85, 1],
              repeat: Infinity,
            }}
          >
            <div className="flex flex-col items-center gap-4">
              <span className="text-7xl">⚠️</span>
              <span className="text-orange-400 font-mono text-2xl font-bold">INCOMPLETE</span>
            </div>
          </motion.div>

          {/* 포인트 카운터 */}
          <motion.div
            className="absolute top-4 right-4 px-4 py-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/50 rounded-lg"
            animate={{
              opacity: [0, 0, 0, 1, 1, 1, 0],
            }}
            transition={{
              duration: 8,
              times: [0, 0.35, 0.4, 0.45, 0.6, 0.7, 1],
              repeat: Infinity,
            }}
          >
            <PointCounter />
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
          <h2 className="flex text-5xl font-bold text-orange-400 font-mono mb-3">
            Attempt #2
            <div className="text-xl text-orange-300 font-mono ml-4 mt-3">
              Edge-based Detection with Range Threshold
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
                왜 Edge로 전환?
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• Ray는 "점"만 찾음 → 구조 정보 부족</li>
                <li>• Edge는 "선" 정보 제공 → 메쉬 연결 관계 파악 가능</li>
                <li>• 삼각형의 구성 요소에 더 가까움</li>
                <li>• 교차점 수 감소 기대</li>
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
                <li>• <span className="text-gray-400">Ray 방식 개선</span>: 근본적 한계 존재</li>
                <li>• <span className="text-gray-400">Vertex-based</span>: 점만으로는 정보 부족</li>
                <li>• <span className="text-gray-400">Triangle 직접 접근</span>: 너무 복잡해 보임 (당시 판단)</li>
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
                <li>칼날에서 Ray 발사</li>
                <li>모든 Edge와의 거리 계산</li>
                <li>거리 &lt; 0.1cm → Edge 위 점 저장</li>
                <li>저장된 점들을 List로 수집</li>
                <li>List 기반 메쉬 분리 시도</li>
              </ol>
            </div>
          </div>
        </motion.div>

        {/* 개선 사항 */}
        <motion.div
          className="p-4 bg-green-950/30 border border-green-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">✓</div>
            <div>
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">
                Ray 방식보다 나은 점
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• Edge 정보 활용으로 구조 파악 가능</li>
                <li>• 교차점 개수 대폭 감소</li>
                <li>• 더 정확한 위치 정보</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 문제점 1 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-orange-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚠️</div>
            <div>
              <h3 className="text-base font-bold text-orange-400 font-mono mb-2">
                1. Edge 누락 문제
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 0.1cm 범위로도 일부 Edge 누락</li>
                <li>• 복잡한 메쉬에서 감지율 <span className="text-orange-400">~70%</span></li>
                <li>• 범위 늘리면 → 잘못된 Edge 포함</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 문제점 2 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-orange-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">❌</div>
            <div>
              <h3 className="text-base font-bold text-orange-400 font-mono mb-2">
                2. 포인트 저장의 한계
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• Edge 위 점들만으로는 정보 부족</li>
                <li>• 삼각형(Face) 연결 관계 알 수 없음</li>
                <li>• 어떤 점들끼리 연결해야 할지 불명확</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 문제점 3 - 치명적 */}
        <motion.div
          className="p-4 bg-red-950/30 border-2 border-red-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🔥</div>
            <div>
              <h3 className="text-base font-bold text-red-400 font-mono mb-2">
                3. 메쉬 분리 실패
              </h3>
              <ul className="space-y-1.5 text-gray-300 font-mono text-xs">
                <li>• 저장된 점 List → 메쉬 재구성 불가능</li>
                <li>• 면(Face) 정보 없이 점만으로 분리 어려움</li>
                <li>• 결과: <span className="text-red-400 font-bold">구멍, 깨진 메쉬, 불완전한 절단</span></li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 결론 */}
        <motion.div
          className="p-4 bg-yellow-950/30 border-l-4 border-yellow-500 rounded-r-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <h3 className="text-sm font-bold text-yellow-400 font-mono mb-2">
                핵심 깨달음
              </h3>
              <p className="text-gray-300 font-mono text-xs leading-relaxed">
                "Edge 정보만으로는 충분하지 않음<br />
                점 위치를 저장해도 삼각형 재구성 불가<br />
                → <span className="text-yellow-400 font-bold">Triangle(삼각형) 단위로 직접 접근 필요</span>"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Edge Detection 애니메이션
function EdgeDetectionAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 메쉬 (구) */}
      <div className="absolute w-40 h-40 bg-purple-500 rounded-full" />

      {/* Edge 선들 (메쉬 구조) */}
      {[0, 45, 90, 135].map((angle) => (
        <motion.div
          key={`edge-${angle}`}
          className="absolute w-40 h-0.5 bg-green-400"
          style={{
            boxShadow: '0 0 8px rgba(74,222,128,0.6)',
            transformOrigin: 'center',
            rotate: angle,
          }}
          animate={{
            opacity: [0.3, 0.3, 0.8, 0.8, 0.3],
          }}
          transition={{
            duration: 8,
            times: [0, 0.1, 0.15, 0.5, 1],
            repeat: Infinity,
          }}
        />
      ))}

      {/* 감지 범위 (원형) */}
      <motion.div
        className="absolute w-16 h-16 border-2 border-cyan-400 rounded-full"
        style={{ boxShadow: '0 0 15px rgba(34,211,238,0.5)' }}
        animate={{
          x: [-100, -100, 0, 60, 100, -100],
          y: [0, 0, 0, 0, 0, 0],
          opacity: [0, 1, 1, 1, 0, 0],
          scale: [1, 1, 1.2, 1, 1, 1],
        }}
        transition={{
          duration: 8,
          times: [0, 0.15, 0.3, 0.45, 0.5, 1],
          repeat: Infinity,
        }}
      />

      {/* 감지된 포인트들 */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`point-${i}`}
          className="absolute w-2 h-2 bg-green-400 rounded-full"
          style={{ boxShadow: '0 0 6px rgba(74,222,128,0.8)' }}
          animate={{
            x: [0, 0, (i - 6) * 12, (i - 6) * 12, (i - 6) * 12, 0],
            y: [0, 0, Math.sin(i) * 60, Math.sin(i) * 60, Math.sin(i) * 60, 0],
            opacity: [0, 0, 1, 1, 0.3, 0],
            scale: [0, 0, 1, 1, 0.5, 0],
          }}
          transition={{
            duration: 8,
            times: [0, 0.35, 0.4, 0.5, 0.6, 1],
            delay: i * 0.03,
            repeat: Infinity,
          }}
        />
      ))}

      {/* 누락된 Edge (빨간 X) */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`miss-${i}`}
          className="absolute text-red-500 text-xl font-bold"
          animate={{
            x: [0, 0, (i - 2) * 30, (i - 2) * 30, 0],
            y: [0, 0, Math.cos(i) * 70, Math.cos(i) * 70, 0],
            opacity: [0, 0, 0, 1, 0],
            scale: [0, 0, 0, 1.2, 0],
          }}
          transition={{
            duration: 8,
            times: [0, 0.48, 0.5, 0.55, 1],
            delay: i * 0.05,
            repeat: Infinity,
          }}
        >
          ✗
        </motion.div>
      ))}

      {/* 구멍 표시 (불완전한 메쉬) */}
      <motion.div
        className="absolute w-12 h-12 border-4 border-red-500 rounded-full"
        style={{ borderStyle: 'dashed' }}
        animate={{
          opacity: [0, 0, 0, 0, 1, 1, 0],
          scale: [1, 1, 1, 1, 1.2, 1, 1],
        }}
        transition={{
          duration: 8,
          times: [0, 0.6, 0.62, 0.65, 0.68, 0.75, 1],
          repeat: Infinity,
        }}
      />

      {/* 칼날 */}
      <motion.div
        className="absolute w-2 h-40 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full"
        style={{ boxShadow: '0 0 15px rgba(255,255,255,0.5)' }}
        animate={{
          x: [-120, -120, 0, 80, 120, -120],
          y: [0, 0, 0, 0, 0, 0],
          rotate: [0, 0, 90, 90, 90, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.12, 0.3, 0.5, 0.6, 1],
          repeat: Infinity,
        }}
      />
    </div>
  );
}

// 포인트 카운터
function PointCounter() {
  const [collected, setCollected] = useState(0);
  const [total] = useState(78);

  useEffect(() => {
    const startTime = Date.now();

    const animate = () => {
      const elapsed = ((Date.now() - startTime) % 8000) / 8000;

      if (elapsed < 0.35) {
        setCollected(0);
      } else if (elapsed < 0.5) {
        const progress = (elapsed - 0.35) / 0.15;
        setCollected(Math.floor(55 * progress));
      } else if (elapsed < 0.6) {
        setCollected(55);
      } else {
        setCollected(55);
      }

      requestAnimationFrame(animate);
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="font-mono text-xs">
      <span className={collected < total ? 'text-orange-400' : 'text-green-400'}>
        Points: <span className="font-bold">{collected}/{total}</span>
      </span>
      {collected > 0 && collected < total && (
        <div className="text-red-400 text-[10px] mt-1">
          {total - collected} missed
        </div>
      )}
    </div>
  );
}