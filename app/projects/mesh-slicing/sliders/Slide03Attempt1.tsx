'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Slide03Attempt1() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-20">
      {/* 왼쪽: Ray Intersection 애니메이션 */}
      <div className="w-[45%] h-full flex items-center justify-center">
        <div className="relative w-full h-[80%] border-2 border-red-500/30 rounded-2xl bg-red-950/20 overflow-hidden">
          <RayIntersectionAnimation />

          {/* 실패 표시 */}
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
              <span className="text-8xl">❌</span>
              <span className="text-red-400 font-mono text-3xl font-bold">FAILED</span>
            </div>
          </motion.div>

          {/* 삼각형 카운터 */}
          <motion.div
            className="absolute top-4 right-4 px-4 py-2 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-lg"
            animate={{
              opacity: [0, 0, 0, 0, 1, 1, 1, 0],
            }}
            transition={{
              duration: 8,
              times: [0, 0.5, 0.6, 0.62, 0.65, 0.75, 0.85, 1],
              repeat: Infinity,
            }}
          >
            <TriangleCounter />
          </motion.div>
        </div>
      </div>

      {/* 오른쪽: 설명 */}
      <div className="w-[55%] h-full flex flex-col gap-4 overflow-y-auto pr-2 pb-24 custom-scrollbar">
        {/* 사이버펑크 스타일 스크롤바 */}
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
          <h2 className="flex text-5xl font-bold text-red-400 font-mono mb-3">Attempt #1
            <div className="text-2xl text-red-300 font-mono ml-4 mt-3">
              Ray-based Intersection Detection
            </div>
          </h2>
        </motion.div>

        {/* 왜 이 방법? - NEW */}
        <motion.div
          className="p-5 bg-blue-950/30 backdrop-blur-sm border border-blue-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🤔</div>
            <div>
              <h3 className="text-lg font-bold text-blue-400 font-mono mb-2">
                왜 Ray 방식을?
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• Unity의 Raycast 시스템에 익숙함</li>
                <li>• 직관적인 접근: "칼이 지나간 경로를 따라가면 되겠다"</li>
                <li>• Easy Slice 등 기존 Asset들도 유사한 방식 사용</li>
                <li>• 구현이 간단해 보임 (초기 판단)</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 배제한 대안들 - NEW */}
        <motion.div
          className="p-5 bg-gray-900/70 backdrop-blur-sm border border-gray-600/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🚫</div>
            <div>
              <h3 className="text-lg font-bold text-gray-400 font-mono mb-2">
                배제한 대안들
              </h3>
              <ul className="space-y-1.5 text-gray-500 font-mono text-xs">
                <li>• <span className="text-gray-400">Voxel 기반</span>: 메모리 과다 사용, 성능 저하 예상</li>
                <li>• <span className="text-gray-400">CSG (Constructive Solid Geometry)</span>: 복잡도 높음, 실시간 부적합</li>
                <li>• <span className="text-gray-400">Physics-based Cut</span>: Unity에 기본 지원 없음</li>
                <li>• <span className="text-gray-400">Marching Cubes</span>: PBD Soft body와 결합 시 계산량 폭증</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 구현 방식 */}
        <motion.div
          className="p-5 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">📍</div>
            <div>
              <h3 className="text-lg font-bold text-purple-400 font-mono mb-2">
                구현 방식
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-sm">
                <li>• 칼날 이동 경로를 따라 Ray 발사</li>
                <li>• 메쉬와의 교차점(Intersection Points) 감지</li>
                <li>• 교차점 기반으로 메쉬 분리</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 실패 원인 1 */}
        <motion.div
          className="p-5 bg-gray-900/50 backdrop-blur-sm border border-red-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚠️</div>
            <div>
              <h3 className="text-lg font-bold text-red-400 font-mono mb-2">
                1. 교차점 감지 불안정
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 일부 교차점 누락 발생</li>
                <li>• 복잡한 지오메트리에서 정확도 저하</li>
                <li>• 결과: <span className="text-red-400">불완전한 절단</span></li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 실패 원인 2 */}
        <motion.div
          className="p-5 bg-gray-900/50 backdrop-blur-sm border border-orange-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">💥</div>
            <div>
              <h3 className="text-lg font-bold text-orange-400 font-mono mb-2">
                2. 과도한 교차점 생성
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 하나의 Ray가 수십~수백 개 교차점 생성</li>
                <li>• 메모리 사용량 폭증</li>
                <li>• 데이터 처리 <span className="text-orange-400">병목 발생</span></li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 실패 원인 3 - 치명적 */}
        <motion.div
          className="p-5 bg-red-950/30 border-2 border-red-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🔥</div>
            <div>
              <h3 className="text-lg font-bold text-red-400 font-mono mb-2">
                3. 삼각형 폭발 (Triangle Explosion)
              </h3>
              <ul className="space-y-1.5 text-gray-300 font-mono text-xs">
                <li>• 교차점마다 새로운 삼각형 생성</li>
                <li>• 원본 메쉬: <span className="text-blue-400">2,000개</span> → 절단 후: <span className="text-red-400 font-bold">15,000개+</span></li>
                <li>• 성능: <span className="text-green-400">90fps</span> → <span className="text-red-400 font-bold">12fps</span>로 급락</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 결론 */}
        <motion.div
          className="p-5 bg-yellow-950/30 border-l-4 border-yellow-500 rounded-r-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 1.2,
            duration: 0.8,
          }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <h3 className="text-base font-bold text-yellow-400 font-mono mb-2">
                핵심 문제
              </h3>
              <p className="text-gray-300 font-mono text-xs leading-relaxed">
                "Ray 기반 접근은 교차점 <span className="text-yellow-400 font-bold">'감지'</span>는 가능하지만,<br />
                효율적인 메쉬 <span className="text-yellow-400 font-bold">'재구성'</span>에는 부적합<br />
                → 삼각형 단위 접근으로 전환 필요"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Ray Intersection 애니메이션
function RayIntersectionAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 메쉬 (구) */}
      <div className="absolute w-40 h-40 bg-purple-500 rounded-full" />

      {/* Ray (칼날에서 발사되는 선) */}
      <motion.div
        className="absolute w-1 bg-blue-400"
        style={{
          boxShadow: '0 0 10px rgba(96,165,250,0.8)',
          left: '50%',
          top: '50%',
          marginLeft: -2,
          transformOrigin: 'left center',
        }}
        animate={{
          height: [0, 0, 200, 200, 200, 0],
          opacity: [0, 1, 1, 1, 0.3, 0],
          rotate: [0, 0, 90, 90, 90, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.25, 0.3, 0.5, 0.6, 1],
          repeat: Infinity,
        }}
      />

      {/* 교차점들 (너무 많음) */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-green-400 rounded-full"
          style={{ boxShadow: '0 0 8px rgba(74,222,128,0.8)' }}
          animate={{
            x: [0, 0, (i - 10) * 8, (i - 10) * 8, (i - 10) * 8, 0],
            y: [0, 0, (Math.random() - 0.5) * 80, (Math.random() - 0.5) * 80, (Math.random() - 0.5) * 80, 0],
            opacity: [0, 0, 1, 1, 0.3, 0],
            scale: [0, 0, 1, 1, 0.5, 0],
          }}
          transition={{
            duration: 8,
            times: [0, 0.3, 0.35, 0.5, 0.6, 1],
            delay: i * 0.02,
            repeat: Infinity,
          }}
        />
      ))}

      {/* 누락된 교차점 (빨간 X) */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`miss-${i}`}
          className="absolute text-red-500 text-2xl font-bold"
          animate={{
            x: [0, 0, (i - 2) * 20, (i - 2) * 20, (i - 2) * 20, 0],
            y: [0, 0, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100, 0],
            opacity: [0, 0, 0, 1, 1, 0],
            scale: [0, 0, 0, 1.2, 1, 0],
          }}
          transition={{
            duration: 8,
            times: [0, 0.45, 0.5, 0.52, 0.6, 1],
            delay: i * 0.05,
            repeat: Infinity,
          }}
        >
          ✗
        </motion.div>
      ))}

      {/* 칼날 */}
      <motion.div
        className="absolute w-2 h-40 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full"
        style={{ boxShadow: '0 0 15px rgba(255,255,255,0.5)' }}
        animate={{
          x: [-150, -150, 100, 100, 100, -150],
          y: [0, 0, 0, 0, 0, 0],
          rotate: [0, 0, 90, 90, 90, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.1, 0.3, 0.5, 0.7, 1],
          repeat: Infinity,
        }}
      />
    </div>
  );
}

function TriangleCounter() {
  const [count, setCount] = useState(2000);

  useEffect(() => {
    const startTime = Date.now();

    const animate = () => {
      const elapsed = ((Date.now() - startTime) % 8000) / 8000;

      if (elapsed < 0.6) {
        setCount(2000);
      } else if (elapsed < 0.7) {
        const progress = (elapsed - 0.6) / 0.1;
        setCount(Math.floor(2000 + 13000 * progress));
      } else if (elapsed < 0.85) {
        setCount(15000);
      } else {
        setCount(15000);
      }

      requestAnimationFrame(animate);
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="font-mono text-sm">
      <span className={count > 10000 ? 'text-red-400' : 'text-blue-400'}>
        Triangles: <span className="font-bold">{count.toLocaleString()}</span>
      </span>
    </div>
  );
}