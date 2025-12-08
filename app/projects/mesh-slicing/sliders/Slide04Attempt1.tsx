'use client';

import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Slide04Attempt1() {
  const code = `// Point Cloud Reconstruction 시도
List<Vector3> points = ExtractVertices(cutMesh);
DelaunayTriangulation dt = new DelaunayTriangulation(points);
Mesh reconstructed = dt.GenerateMesh();`;

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
            <p className="text-red-400 font-mono text-sm">Attempt 1</p>
            <h2 className="text-5xl font-bold text-red-400 font-mono">
              Point Cloud Reconstruction
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
            기존 메쉬를 점 구름으로 보고 재생성
          </p>
        </motion.div>

        {/* 기술 */}
        <motion.div
          className="p-6 border-2 border-blue-500/50 rounded-lg bg-blue-950/30"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-blue-400 font-mono font-bold mb-3">🔧 시도한 기술</p>
          <div className="flex gap-3">
            <span className="px-4 py-2 bg-blue-500/20 border border-blue-500 rounded-lg text-blue-300 font-mono text-sm">
              Delaunay Triangulation
            </span>
            <span className="px-4 py-2 bg-blue-500/20 border border-blue-500 rounded-lg text-blue-300 font-mono text-sm">
              Poisson Surface
            </span>
          </div>
        </motion.div>

        {/* 코드 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <SyntaxHighlighter
            language="csharp"
            style={vscDarkPlus}
            customStyle={{
              padding: '1.5rem',
              borderRadius: '0.5rem',
              border: '2px solid rgba(99, 102, 241, 0.3)',
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
          transition={{ delay: 0.9 }}
        >
          <p className="text-red-400 font-mono font-bold mb-2">❌ 결과: 실패</p>
          <p className="text-red-200 font-mono mb-4">
            너무 복잡하고 실시간에 부적합
          </p>
          <div className="border-t border-red-500/30 pt-4 mt-4">
            <p className="text-red-300 font-mono text-sm">
              📝 배운 점: 학술적으로 완벽한 방법이 실무에서 항상 좋은 건 아님
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}