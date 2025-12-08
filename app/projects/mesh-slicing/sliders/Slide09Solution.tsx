'use client';

import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Slide09Solution() {
  const code = `// 1. 누적 arc length 계산
List<float> boundaryArcLength = CalculateArcLength(boundaryChain);
List<float> hitArcLength = CalculateArcLength(hitPoints);

float totalBoundaryLength = boundaryArcLength.Last();
float totalHitLength = hitArcLength.Last();

// 2. 정규화된 progress로 진행
float bProgress = boundaryArcLength[bIdx] / totalBoundaryLength;
float hProgress = hitArcLength[hIdx] / totalHitLength;

// 3. Progress 차이가 작은 쪽 선택
float bNextProgress = boundaryArcLength[bIdx + 1] / totalBoundaryLength;
float hNextProgress = hitArcLength[hIdx + 1] / totalHitLength;

if (Abs(bNextProgress - hProgress) < Abs(bProgress - hNextProgress)) {
    advanceBoundary = true;
} else {
    advanceHit = true;
}`;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-20">
      <div className="max-w-6xl w-full space-y-8">
        {/* 헤더 */}
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-6xl">✅</div>
          <div>
            <p className="text-green-400 font-mono text-sm">Final Solution</p>
            <h2 className="text-5xl font-bold text-green-400 font-mono">
              Arc-Length Based Strip Triangulation
            </h2>
          </div>
        </motion.div>

        {/* 핵심 개념 */}
        <motion.div
          className="grid grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="p-4 border-2 border-green-500/50 rounded-lg bg-green-950/30">
            <p className="text-green-400 font-mono font-bold mb-2">1. Arc Length</p>
            <p className="text-green-200 font-mono text-sm">
              정점 간 실제 거리 계산
            </p>
          </div>
          <div className="p-4 border-2 border-green-500/50 rounded-lg bg-green-950/30">
            <p className="text-green-400 font-mono font-bold mb-2">2. Normalize</p>
            <p className="text-green-200 font-mono text-sm">
              0~1 사이로 정규화
            </p>
          </div>
          <div className="p-4 border-2 border-green-500/50 rounded-lg bg-green-950/30">
            <p className="text-green-400 font-mono font-bold mb-2">3. Progress</p>
            <p className="text-green-200 font-mono text-sm">
              차이 최소화 방향 선택
            </p>
          </div>
        </motion.div>

        {/* 코드 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <SyntaxHighlighter
            language="csharp"
            style={vscDarkPlus}
            customStyle={{
              padding: '1.5rem',
              borderRadius: '0.5rem',
              border: '2px solid rgba(34, 197, 94, 0.5)',
              fontSize: '0.85rem',
              maxHeight: '400px',
            }}
          >
            {code}
          </SyntaxHighlighter>
        </motion.div>

        {/* 결과 */}
        <motion.div
          className="p-6 border-2 border-green-500 rounded-lg bg-green-950/30"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-green-400 font-mono font-bold mb-2">✅ 결과: 성공!</p>
          <p className="text-green-200 font-mono text-lg">
            균일하고 자연스러운 삼각형 생성
          </p>
        </motion.div>
      </div>
    </div>
  );
}