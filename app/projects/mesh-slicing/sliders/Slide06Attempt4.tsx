'use client';

import { motion } from 'framer-motion';

export default function Slide06Attempt4() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16 pb-32">
      {/* 왼쪽: Before/After 비교 */}
      <div className="w-[45%] h-full flex flex-col justify-center gap-4">
        {/* Before (문제) */}
        <div className="relative h-[42%] border-2 border-red-500/30 rounded-2xl bg-red-950/20 overflow-hidden">
          <CoordinateBeforeAnimation />
          
          {/* 라벨 */}
          <motion.div
            className="absolute top-4 left-4 px-4 py-2 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-red-400 font-mono text-sm">Before: 좌표계 혼동</p>
          </motion.div>

          {/* 실패 표시 */}
          <motion.div
            className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none"
            animate={{
              opacity: [0, 0, 1, 1, 0],
            }}
            transition={{
              duration: 8,
              times: [0, 0.3, 0.35, 0.45, 1],
              repeat: Infinity,
            }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-lg">
              <span className="text-2xl">❌</span>
              <span className="text-red-400 font-mono text-sm font-bold">검출 실패</span>
            </div>
          </motion.div>
        </div>

        {/* 변환 표시 */}
        <div className="relative flex items-center justify-center py-3">
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-lg">
              <code className="text-blue-400 font-mono text-xs">
                Transform.TransformPoint()
              </code>
            </div>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* After (해결) */}
        <div className="relative h-[42%] border-2 border-green-500/30 rounded-2xl bg-green-950/20 overflow-hidden">
          <CoordinateAfterAnimation />
          
          {/* 라벨 */}
          <motion.div
            className="absolute top-4 left-4 px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-green-400 font-mono text-sm">After: 좌표계 통일</p>
          </motion.div>

          {/* 성공 표시 */}
          <motion.div
            className="absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none"
            animate={{
              opacity: [0, 0, 1, 1, 0],
            }}
            transition={{
              duration: 8,
              times: [0, 0.6, 0.65, 0.75, 1],
              repeat: Infinity,
            }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 backdrop-blur-sm border border-green-500/50 rounded-lg">
              <span className="text-2xl">✓</span>
              <span className="text-green-400 font-mono text-sm font-bold">정확한 검출</span>
            </div>
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
          <h2 className="flex text-5xl font-bold text-blue-400 font-mono mb-3">
            Attempt #4
            <div className="text-xl text-blue-300 font-mono ml-4 mt-3">
              Coordinate System Unification
            </div>
          </h2>
        </motion.div>

        {/* 문제 인식 */}
        <motion.div
          className="p-4 bg-red-950/30 border border-red-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🔍</div>
            <div>
              <h3 className="text-base font-bold text-red-400 font-mono mb-2">
                발견된 문제
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 칼날: <span className="text-cyan-400">Transform.position</span> (World)</li>
                <li>• 메쉬 정점: <span className="text-purple-400">mesh.vertices</span> (Local)</li>
                <li>• 서로 다른 기준점으로 계산</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 해결 방법 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-blue-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🔧</div>
            <div>
              <h3 className="text-base font-bold text-blue-400 font-mono mb-2">
                솔루션
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• <span className="text-blue-400">Transform.TransformPoint()</span> 활용</li>
                <li>• 모든 정점을 World 좌표로 변환</li>
                <li>• 통일된 좌표계에서 교차 검사</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 코드 예시 */}
        <motion.div
          className="p-4 bg-gray-900/80 border border-purple-500/30 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="space-y-3">
            <div>
              <p className="text-red-400 font-mono text-xs mb-2">❌ Before (잘못됨)</p>
              <pre className="bg-black/50 p-3 rounded text-xs overflow-x-auto">
                <code className="text-gray-300 font-mono">
{`Vector3 vertex = mesh.vertices[i];
// Local 좌표 그대로 사용`}
                </code>
              </pre>
            </div>
            
            <div>
              <p className="text-green-400 font-mono text-xs mb-2">✓ After (올바름)</p>
              <pre className="bg-black/50 p-3 rounded text-xs overflow-x-auto">
                <code className="text-gray-300 font-mono">
{`Vector3 vertex = transform.TransformPoint(
    mesh.vertices[i]
);
// World 좌표로 변환`}
                </code>
              </pre>
            </div>
          </div>
        </motion.div>

        {/* 개선 결과 */}
        <motion.div
          className="p-4 bg-green-950/30 border-2 border-green-500/70 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">✓✓</div>
            <div>
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">
                완벽 해결!
              </h3>
              <ul className="space-y-1.5 text-gray-300 font-mono text-xs">
                <li>• 교차 검사 정확도: <span className="text-green-400 font-bold">100%</span></li>
                <li>• 엉뚱한 삼각형 선택 문제 해결</li>
                <li>• 안정적인 분리 가능</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 남은 과제 */}
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
                아직 남은 문제
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 단순 교차 검사만으로는 부족</li>
                <li>• 연결된 삼각형 그룹 찾기 필요</li>
                <li>• → <span className="text-orange-400 font-bold">Flood-fill 알고리즘으로!</span></li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 결론 */}
        <motion.div
          className="p-4 bg-blue-950/30 border-l-4 border-blue-500 rounded-r-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <h3 className="text-sm font-bold text-blue-400 font-mono mb-2">
                중요한 교훈
              </h3>
              <p className="text-gray-300 font-mono text-xs leading-relaxed">
                "Unity 기본 개념의 중요성<br />
                Transform 함수만 제대로 써도 해결<br />
                → <span className="text-blue-400 font-bold">이제 진짜 알고리즘 구현 시작!</span>"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Before 애니메이션 (문제 상황)
function CoordinateBeforeAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 메쉬 (Local 좌표 - 어긋남) */}
      <motion.div
        className="absolute w-32 h-32 bg-purple-500 rounded-full"
        animate={{
          x: [20, 20, 20],
          y: [10, 10, 10],
        }}
      >
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-purple-400 font-mono text-xs whitespace-nowrap">
          Local
        </div>
      </motion.div>

      {/* 칼날 (World 좌표 - 어긋남) */}
      <motion.div
        className="absolute w-2 h-32 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full"
        style={{ boxShadow: '0 0 15px rgba(255,255,255,0.5)' }}
        animate={{
          x: [-60, -60, 20, 20, -60],
          y: [-10, -10, -10, -10, -10],
          rotate: [0, 0, 90, 90, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.15, 0.3, 0.4, 1],
          repeat: Infinity,
        }}
      >
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-cyan-400 font-mono text-xs whitespace-nowrap">
          World
        </div>
      </motion.div>

      {/* 엉뚱한 교차점 표시 */}
      <motion.div
        className="absolute text-red-500 text-3xl font-bold"
        animate={{
          x: [-20, -20, -20, -20, -20],
          y: [30, 30, 30, 30, 30],
          opacity: [0, 0, 1, 1, 0],
          scale: [0, 0, 1.2, 1, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.25, 0.3, 0.4, 1],
          repeat: Infinity,
        }}
      >
        ✗
      </motion.div>
    </div>
  );
}

// After 애니메이션 (해결)
function CoordinateAfterAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* 메쉬 (World 좌표로 통일) */}
      <motion.div
        className="absolute w-32 h-32 bg-purple-500 rounded-full"
        animate={{
          x: [0, 0, 0],
          y: [0, 0, 0],
        }}
      >
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-green-400 font-mono text-xs whitespace-nowrap">
          World
        </div>
      </motion.div>

      {/* 칼날 (World 좌표) */}
      <motion.div
        className="absolute w-2 h-32 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full"
        style={{ boxShadow: '0 0 15px rgba(255,255,255,0.5)' }}
        animate={{
          x: [-80, -80, 80, 80, -80],
          y: [0, 0, 0, 0, 0],
          rotate: [0, 0, 90, 90, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.15, 0.6, 0.7, 1],
          repeat: Infinity,
        }}
      >
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-green-400 font-mono text-xs whitespace-nowrap">
          World
        </div>
      </motion.div>

      {/* 정확한 교차점 표시 */}
      <motion.div
        className="absolute text-green-500 text-3xl font-bold"
        animate={{
          x: [0, 0, 0, 0, 0],
          y: [0, 0, 0, 0, 0],
          opacity: [0, 0, 1, 1, 0],
          scale: [0, 0, 1.2, 1, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.55, 0.6, 0.7, 1],
          repeat: Infinity,
        }}
      >
        ✓
      </motion.div>

      {/* 교차 라인 */}
      <motion.div
        className="absolute w-1 h-32 bg-green-400 rounded-full"
        style={{ boxShadow: '0 0 10px rgba(74,222,128,0.6)' }}
        animate={{
          opacity: [0, 0, 1, 1, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.58, 0.62, 0.68, 1],
          repeat: Infinity,
        }}
      />
    </div>
  );
}