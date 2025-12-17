'use client';

import { motion } from 'framer-motion';

export default function Slide09VRIntegration() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-20 py-10 pb-30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h2 className="text-6xl font-bold text-cyan-400 font-mono mb-4">VR Integration</h2>
        <p className="text-xl text-gray-300 font-mono">Rigidbody + PBD 통합 문제 해결</p>
      </motion.div>

      <div className="grid grid-cols-2 gap-6 max-w-7xl mb-8">
        <motion.div
          className="p-5 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-bold text-yellow-400 font-mono mb-3">🗂️ 구조</h3>
          <div className="space-y-2 font-mono text-sm text-gray-300 bg-black/30 p-3 rounded-lg">
            <code className="text-cyan-400">Parent (GrabController)</code><br/>
            <code className="text-gray-400">├─ Rigidbody </code><span className="text-gray-500">(중력, 충돌)</span><br/>
            <code className="text-gray-400">├─ MeshCollider</code><br/>
            <code className="text-gray-400">└─ Child (PBDSoftBody)</code><br/>
            <code className="text-gray-400 ml-6">├─ MeshRenderer</code><br/>
            <code className="text-gray-400 ml-6">└─ PBD Script</code>
          </div>
        </motion.div>

        <motion.div
          className="p-5 bg-red-900/30 backdrop-blur-sm border border-red-500/30 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-xl font-bold text-red-400 font-mono mb-3">✗ 핵심 문제</h3>
          <ul className="space-y-2 text-gray-400 font-mono text-sm">
            <li>• PBD는 월드 좌표계에서 독립</li>
            <li>• 부모 이동이 PBD에 전달 안 됨</li>
            <li>• 중력이 이중 적용됨</li>
          </ul>
        </motion.div>
      </div>

      <div className="grid grid-cols-3 gap-5 max-w-7xl">
        <motion.div
          className="p-5 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="text-3xl mb-3">🔄</div>
          <h3 className="text-lg font-bold text-cyan-400 font-mono mb-2">Parent Motion Tracking</h3>
          <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
            <li>• 부모 위치/회전 변화 감지</li>
            <li>• 모든 파티클에 Transform 적용</li>
            <li>• deltaPos, deltaRot 계산</li>
          </ul>
          <div className="mt-3 p-2 bg-black/30 rounded text-[10px]">
            <code className="text-gray-400">Positions[i] = deltaPos +</code><br/>
            <code className="text-gray-400 ml-4">rotate(deltaRot, Positions[i])</code>
          </div>
        </motion.div>

        <motion.div
          className="p-5 bg-gray-900/50 backdrop-blur-sm border border-purple-500/30 rounded-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="text-3xl mb-3">⚖️</div>
          <h3 className="text-lg font-bold text-purple-400 font-mono mb-2">Gravity Delegation</h3>
          <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
            <li>• PBD 자체 중력 끄기</li>
            <li>• Rigidbody 중력만 사용</li>
            <li>• 이중 적용 방지</li>
          </ul>
          <div className="mt-3 p-2 bg-black/30 rounded text-[10px]">
            <code className="text-gray-400">PBD.Gravity = float3.zero;</code><br/>
            <code className="text-green-400">// Rigidbody가 중력 담당</code>
          </div>
        </motion.div>

        <motion.div
          className="p-5 bg-gray-900/50 backdrop-blur-sm border border-green-500/30 rounded-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <div className="text-3xl mb-3">💥</div>
          <h3 className="text-lg font-bold text-green-400 font-mono mb-2">Collision Integration</h3>
          <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
            <li>• 부모 Collider 충돌 감지</li>
            <li>• PBD Plane에 동적 추가</li>
            <li>• 양방향 상호작용</li>
          </ul>
          <div className="mt-3 p-2 bg-black/30 rounded text-[10px]">
            <code className="text-gray-400">OnCollisionEnter(collision)</code><br/>
            <code className="text-gray-400">→ AddCollisionPlane(...)</code>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-10 p-5 bg-green-950/30 border-l-4 border-green-500 rounded-r-xl max-w-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <p className="text-gray-300 font-mono text-lg italic text-center leading-relaxed">
          "두 물리 시스템의 완벽한 통합 → <span className="text-green-400 font-bold">VR에서 자연스러운 Grab & Physics</span>"
        </p>
      </motion.div>
    </div>
  );
}
