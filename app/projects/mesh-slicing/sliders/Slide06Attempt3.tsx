'use client';

import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Slide06Attempt3() {
  const code = `Vector3 center = Vector3.zero;
foreach (var v in boundaryLoop)
    center += v;
center /= boundaryLoop.Count;

for (int i = 0; i < boundaryLoop.Count; i++) {
    int next = (i + 1) % boundaryLoop.Count;
    AddTriangle(center, boundaryLoop[i], boundaryLoop[next]);
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
          <div className="text-6xl">⚠️</div>
          <div>
            <p className="text-yellow-400 font-mono text-sm">Attempt 3</p>
            <h2 className="text-5xl font-bold text-yellow-400 font-mono">
              Fan Triangulation
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
            중심점에서 방사형으로 삼각형 생성
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
              border: '2px solid rgba(234, 179, 8, 0.3)',
              fontSize: '0.9rem',
            }}
          >
            {code}
          </SyntaxHighlighter>
        </motion.div>

        {/* 결과 */}
        <motion.div
          className="p-6 border-2 border-yellow-500 rounded-lg bg-yellow-950/30"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-yellow-400 font-mono font-bold mb-2">⚠️ 결과: 부분 성공</p>
          <p className="text-yellow-200 font-mono mb-4">
            안정적으로 작동하지만 부자연스러운 방사형 패턴
          </p>
          <div className="border-t border-yellow-500/30 pt-4 mt-4">
            <p className="text-yellow-300 font-mono text-sm">
              📝 배운 점: 간단한 해결책도 때로는 유효함
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}