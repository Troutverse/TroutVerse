'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Slide09Performance() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16 pb-32">
      {/* 왼쪽: 성능 비교 그래프 */}
      <div className="w-[45%] h-full flex items-center justify-center">
        <div className="relative w-full h-[85%]">
          <PerformanceChart />
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
            Performance & Results
          </h2>
          <p className="text-xl text-green-300 font-mono">
            90fps 달성 및 최적화
          </p>
        </motion.div>

        {/* 최종 성능 */}
        <motion.div
          className="p-4 bg-green-950/30 border-2 border-green-500/70 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-3xl">🎯</div>
            <div>
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">
                목표 달성!
              </h3>
              <div className="space-y-2 text-gray-300 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">FPS:</span>
                  <span className="text-green-400 font-bold text-lg">90 fps</span>
                  <span className="text-green-400">✓</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">처리 시간:</span>
                  <span className="text-green-400 font-bold">~2ms</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">안정성:</span>
                  <span className="text-green-400 font-bold">100%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 최적화 기법 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-purple-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚡</div>
            <div>
              <h3 className="text-base font-bold text-purple-400 font-mono mb-2">
                적용된 최적화
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• <span className="text-purple-400">Job System</span>: 병렬 처리</li>
                <li>• <span className="text-purple-400">Burst Compiler</span>: 네이티브 코드 변환</li>
                <li>• <span className="text-purple-400">Object Pooling</span>: 메모리 재사용</li>
                <li>• <span className="text-purple-400">Spatial Hashing</span>: 교차 검사 가속</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 개선 과정 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-cyan-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">📈</div>
            <div>
              <h3 className="text-base font-bold text-cyan-400 font-mono mb-2">
                성능 개선 히스토리
              </h3>
              <ul className="space-y-2 text-gray-400 font-mono text-xs">
                <li>• Attempt #1 (Ray): <span className="text-red-400">15fps</span></li>
                <li>• Attempt #2 (Edge): <span className="text-orange-400">45fps</span></li>
                <li>• Attempt #3 (Triangle): <span className="text-yellow-400">60fps</span></li>
                <li>• Final + Optimization: <span className="text-green-400 font-bold">90fps</span></li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 테스트 환경 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-blue-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🔬</div>
            <div>
              <h3 className="text-base font-bold text-blue-400 font-mono mb-2">
                테스트 환경
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 플랫폼: <span className="text-blue-400">Meta Quest 2</span></li>
                <li>• 메쉬 복잡도: <span className="text-blue-400">2,000~5,000 삼각형</span></li>
                <li>• 테스트 케이스: <span className="text-blue-400">1,000+ 슬라이스</span></li>
                <li>• 안정성: <span className="text-green-400">0건 크래시</span></li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 메모리 사용량 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-green-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">💾</div>
            <div>
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">
                메모리 효율성
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• Before: <span className="text-red-400">~80MB 할당</span></li>
                <li>• After: <span className="text-green-400">~15MB 할당</span></li>
                <li>• 개선: <span className="text-green-400 font-bold">81% 감소</span></li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 실사용 사례 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-yellow-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🏥</div>
            <div>
              <h3 className="text-base font-bold text-yellow-400 font-mono mb-2">
                실제 활용
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• VR 수술 시뮬레이션 훈련</li>
                <li>• 실시간 조직 절개 가능</li>
                <li>• 자연스러운 사용자 경험</li>
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
            <div className="text-2xl">🏆</div>
            <div>
              <h3 className="text-sm font-bold text-green-400 font-mono mb-2">
                완벽한 성능 달성
              </h3>
              <p className="text-gray-300 font-mono text-xs leading-relaxed">
                "목표했던 90fps를 안정적으로 달성<br />
                실제 VR 환경에서 완벽하게 작동<br />
                → <span className="text-green-400 font-bold">Production Ready!</span>"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// 성능 비교 차트
function PerformanceChart() {
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const targetValues = [15, 45, 60, 90];
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const eased = 1 - Math.pow(1 - progress, 3);

      setAnimatedValues(targetValues.map(val => Math.floor(val * eased)));

      if (currentStep >= steps) {
        clearInterval(interval);
        setAnimatedValues(targetValues);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  const attempts = [
    { label: 'Attempt #1', fps: animatedValues[0], color: 'red' },
    { label: 'Attempt #2', fps: animatedValues[1], color: 'orange' },
    { label: 'Attempt #3', fps: animatedValues[2], color: 'yellow' },
    { label: 'Final', fps: animatedValues[3], color: 'green' },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-end p-8 bg-gray-900/30 rounded-2xl border border-gray-700">
      {/* Y축 라벨 */}
      <div className="absolute left-2 top-8 bottom-16 flex flex-col justify-between text-gray-500 font-mono text-xs">
        <span>90</span>
        <span>60</span>
        <span>30</span>
        <span>0</span>
      </div>

      {/* 목표선 (90fps) */}
      <div className="absolute left-12 right-8 top-8 border-t-2 border-dashed border-green-400/50">
        <span className="absolute -top-6 right-0 text-green-400 font-mono text-xs">
          목표: 90fps
        </span>
      </div>

      {/* 차트 */}
      <div className="flex items-end justify-around gap-4 h-full pt-20">
        {attempts.map((attempt, index) => (
          <motion.div
            key={attempt.label}
            className="flex flex-col items-center gap-2 flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {/* FPS 라벨 */}
            <motion.div
              className={`text-${attempt.color}-400 font-mono font-bold text-lg`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.2 + 0.5, type: 'spring' }}
            >
              {attempt.fps}fps
            </motion.div>

            {/* 바 */}
            <motion.div
              className={`w-full bg-${attempt.color}-500 rounded-t-lg relative`}
              style={{
                height: `${(attempt.fps / 90) * 100}%`,
                minHeight: '8px',
                boxShadow: `0 0 20px rgba(${
                  attempt.color === 'red' ? '239, 68, 68' :
                  attempt.color === 'orange' ? '251, 146, 60' :
                  attempt.color === 'yellow' ? '234, 179, 8' :
                  '74, 222, 128'
                }, 0.5)`
              }}
              initial={{ height: 0 }}
              animate={{ height: `${(attempt.fps / 90) * 100}%` }}
              transition={{ delay: index * 0.2, duration: 1, ease: 'easeOut' }}
            />

            {/* X축 라벨 */}
            <div className="text-gray-400 font-mono text-xs text-center whitespace-nowrap">
              {attempt.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}