// app/projects/mesh-creation/slides/Slide04Attempt2.tsx
'use client';

import { motion } from 'framer-motion';

export default function Slide04Attempt2() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16 pb-32">
      {/* 왼쪽: Ear Clipping 애니메이션 */}
      <div className="w-[45%] h-full flex items-center justify-center">
        <div className="relative w-full h-[80%] border-2 border-red-500/30 rounded-2xl bg-red-950/20 overflow-hidden">
          <EarClippingAnimation />

          {/* 실패 표시 */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{
              opacity: [0, 0, 0, 0, 1, 1, 0],
              scale: [0, 0, 0, 0, 1.2, 1, 0],
            }}
            transition={{
              duration: 8,
              times: [0, 0.5, 0.6, 0.65, 0.7, 0.8, 1],
              repeat: Infinity,
            }}
          >
            <div className="flex flex-col items-center gap-4">
              <span className="text-8xl">❌</span>
              <span className="text-red-400 font-mono text-3xl font-bold">FAILED</span>
            </div>
          </motion.div>

          {/* 에러 표시 */}
          <motion.div
            className="absolute top-4 right-4 px-4 py-2 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-lg"
            animate={{
              opacity: [0, 0, 1, 1, 0],
            }}
            transition={{
              duration: 8,
              times: [0, 0.45, 0.5, 0.65, 1],
              repeat: Infinity,
            }}
          >
            <span className="text-red-400 font-mono text-xs">Loop Not Closed!</span>
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
          <h2 className="text-5xl font-bold text-red-400 font-mono mb-3">Attempt #2</h2>
          <p className="text-xl text-red-300 font-mono">
            Ear Clipping Algorithm
          </p>
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
                개선된 아이디어
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• Boundary Loop을 순차적으로 추출</li>
                <li>• Ear Clipping으로 삼각형화</li>
                <li>• 표준 알고리즘으로 안정성 확보</li>
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
                Ear Clipping 프로세스
              </h3>
              <ol className="space-y-1.5 text-gray-400 font-mono text-xs list-decimal list-inside">
                <li>Boundary Loop에서 "Ear" 찾기</li>
                <li>Ear를 삼각형으로 자르기</li>
                <li>Loop에서 해당 정점 제거</li>
                <li>3개 정점 남을 때까지 반복</li>
              </ol>
            </div>
          </div>
        </motion.div>

        {/* 코드 예시 */}
        <motion.div
          className="p-4 bg-gray-900/80 border border-blue-500/30 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <p className="text-blue-400 font-mono text-xs mb-3">구현 코드</p>
          <pre className="bg-black/50 p-3 rounded text-[10px] overflow-x-auto">
            <code className="text-gray-300 font-mono">
{`private bool IsEar(int idx, List<Vector3> loop) {
    Vector3 prev = loop[(idx - 1 + loop.Count) % loop.Count];
    Vector3 curr = loop[idx];
    Vector3 next = loop[(idx + 1) % loop.Count];
    
    Vector3 cross = Vector3.Cross(next - curr, prev - curr);
    if (cross.y <= 0) return false; // ❌ Y축 고정 문제
    
    // 다른 정점이 삼각형 안에 있는지 확인
    ...
}`}
            </code>
          </pre>
        </motion.div>

        {/* 실패 원인 1 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-red-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">❌</div>
            <div>
              <h3 className="text-base font-bold text-red-400 font-mono mb-2">
                1. Boundary Loop이 닫히지 않음
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• Floating point 오차로 인한 불일치</li>
                <li>• 첫 정점 ≠ 마지막 정점 (0.0001 차이)</li>
                <li>• Loop가 완성되지 않아 알고리즘 실패</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 실패 원인 2 */}
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
                2. Vector3를 Dictionary Key로 사용
              </h3>
              <ul className="space-y-1.5 text-gray-300 font-mono text-xs">
                <li>• <span className="text-red-400 font-bold">치명적 실수</span>: Vector3는 floating point</li>
                <li>• GetHashCode()가 불안정</li>
                <li>• 같은 위치여도 다른 Key로 인식</li>
                <li>• Boundary 추출 완전 실패</li>
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
                배운 점
              </h3>
              <p className="text-gray-300 font-mono text-xs leading-relaxed">
                "Floating point 정밀도 문제의 심각성<br />
                Vector3를 Dictionary key로 절대 사용 금지<br />
                → <span className="text-yellow-400 font-bold">다른 방식의 Loop 추출 필요</span>"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Ear Clipping 애니메이션
function EarClippingAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Boundary Loop (불완전) */}
      {[...Array(10)].map((_, i) => {
        const angle = (i * Math.PI * 2) / 10;
        const radius = 70;
        const isGap = i === 9; // 마지막에 간격
        
        return (
          <motion.div
            key={`vertex-${i}`}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: `calc(50% + ${Math.cos(angle) * radius}px)`,
              top: `calc(50% + ${Math.sin(angle) * radius}px)`,
              backgroundColor: isGap ? '#ef4444' : '#06b6d4',
              boxShadow: isGap 
                ? '0 0 15px rgba(239, 68, 68, 0.8)' 
                : '0 0 10px rgba(6, 182, 212, 0.8)',
            }}
            animate={{
              scale: isGap ? [1, 1.5, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        );
      })}

      {/* 연결선 (끊어진 부분) */}
      {[...Array(10)].map((_, i) => {
        const angle1 = (i * Math.PI * 2) / 10;
        const angle2 = ((i + 1) * Math.PI * 2) / 10;
        const radius = 70;
        const isGap = i === 9;
        
        return (
          <motion.line
            key={`line-${i}`}
            x1={`calc(50% + ${Math.cos(angle1) * radius}px)`}
            y1={`calc(50% + ${Math.sin(angle1) * radius}px)`}
            x2={`calc(50% + ${Math.cos(angle2) * radius}px)`}
            y2={`calc(50% + ${Math.sin(angle2) * radius}px)`}
            stroke={isGap ? '#ef4444' : '#06b6d4'}
            strokeWidth="2"
            strokeDasharray={isGap ? "5,5" : "0"}
            style={{
              opacity: isGap ? 0.5 : 1,
            }}
          />
        );
      })}

      {/* Ear 표시 (일부만) */}
      <motion.div
        className="absolute w-0 h-0"
        style={{
          borderLeft: '20px solid transparent',
          borderRight: '20px solid transparent',
          borderBottom: '35px solid rgba(34, 197, 94, 0.3)',
          left: '45%',
          top: '30%',
        }}
        animate={{
          opacity: [0, 0, 0.8, 0.8, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.2, 0.3, 0.4, 1],
          repeat: Infinity,
        }}
      />

      {/* 에러 메시지 영역 */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{
          opacity: [0, 0, 1, 1, 0],
        }}
        transition={{
          duration: 8,
          times: [0, 0.45, 0.5, 0.65, 1],
          repeat: Infinity,
        }}
      >
        <div className="px-4 py-2 bg-red-500/20 backdrop-blur-sm border border-red-500/50 rounded-lg">
          <span className="text-red-400 font-mono text-xs">Gap: 0.0001 units</span>
        </div>
      </motion.div>
    </div>
  );
}