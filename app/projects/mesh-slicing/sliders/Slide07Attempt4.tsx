'use client';

import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Slide07Attempt4() {
  const code = `float bProgress = (float)bIdx / boundaryChain.Count;
float hProgress = (float)hIdx / hitPoints.Count;

if (bProgress < hProgress - 0.15f) {
    advanceBoundary = true;
} else if (hProgress < bProgress - 0.15f) {
    advanceHit = true;
}`;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-20">
      <div className="max-w-5xl w-full space-y-8">
        {/* 헤더 */}
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-6xl">❌</div>
          <div>
            <p className="text-red-400 font-mono text-sm">Attempt 4</p>
            <h2 className="text-5xl font-bold text-red-400 font-mono">
              Index-based Strip Triangulation
            </h2>
          </div>
        </motion.div>

        {/* 아이디어 */}
        <motion.div
          className="p-6 border-2 border-yellow-500/50 rounded-lg bg-yellow-950/30"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-yellow-400 font-mono font-bold mb-2">💡 아이디어</p>
          <p className="text-yellow-200 font-mono text-lg">
            Boundary chain과 Hit points를 index 비율로 동시 진행
          </p>
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
              border: '2px solid rgba(239, 68, 68, 0.3)',
              fontSize: '0.9rem',
            }}
          >
            {code}
          </SyntaxHighlighter>
        </motion.div>

        {/* 결과 */}
        <motion.div
          className="p-6 border-2 border-red-500 rounded-lg bg-red-950/30"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-red-400 font-mono font-bold mb-2">❌ 결과: 실패</p>
          <p className="text-red-200 font-mono mb-4">
            불규칙한 삼각형 생성, 구멍 발생
          </p>
          <div className="border-t border-red-500/30 pt-4 mt-4">
            <p className="text-red-300 font-mono text-sm">
              📝 배운 점: Index 개수가 아닌 실제 기하학적 거리가 중요
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}