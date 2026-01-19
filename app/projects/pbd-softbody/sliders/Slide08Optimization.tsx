'use client';

import { motion } from 'framer-motion';

export default function Slide08Optimization() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 pt-20 pb-28">
      {/* 왼쪽: 애니메이션 */}
      <div className="w-[45%] h-full flex items-center justify-center">
        <div className="relative w-full h-[80%] border-2 border-cyan-500/30 rounded-2xl bg-cyan-950/20 overflow-hidden">
          <OptimizationAnimation />
        </div>
      </div>

      {/* 오른쪽: 설명 */}
      <div className="w-[55%] h-full flex flex-col gap-5 overflow-y-auto pr-2 custom-scrollbar">
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
          <h2 className="text-5xl font-bold text-cyan-400 font-mono mb-3">Optimization</h2>
          <p className="text-xl text-gray-300 font-mono">Job System + Burst Compiler</p>
        </motion.div>

        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚡</div>
            <div>
              <h3 className="text-base font-bold text-blue-400 font-mono mb-2">왜 최적화가 필수였나?</h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• Surface Mesh여도 500개 파티클</li>
                <li>• 5-10회 Substep 반복</li>
                <li>• <span className="text-red-400 font-bold">최적화 없으면 30fps 이하</span></li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-4 bg-cyan-950/30 border-2 border-cyan-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🚀</div>
            <div>
              <h3 className="text-base font-bold text-cyan-400 font-mono mb-2">1. Unity Job System</h3>
              <div className="space-y-2 text-gray-300 font-mono text-xs">
                <div className="bg-black/30 p-2 rounded">
                  <div className="text-red-400 mb-1">// 단일 스레드 (기존)</div>
                  <code className="text-gray-400">for (int i = 0; i &lt; 500; i++) {"{"}</code><br/>
                  <code className="text-gray-400 ml-4">Calculate(i);</code><br/>
                  <code className="text-gray-400">{"}"}</code><br/>
                  <div className="text-red-400 text-[10px] mt-1">→ 16ms (60fps 불가)</div>
                </div>
                <div className="bg-black/30 p-2 rounded">
                  <div className="text-green-400 mb-1">// 멀티 스레드 (Job System)</div>
                  <code className="text-gray-400">IJobParallelFor job = new();</code><br/>
                  <code className="text-gray-400">job.Schedule(500, 64).Complete();</code><br/>
                  <div className="text-green-400 text-[10px] mt-1">→ 2ms (72fps 가능!)</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-4 bg-purple-950/30 border-2 border-purple-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚡</div>
            <div>
              <h3 className="text-base font-bold text-purple-400 font-mono mb-2">2. Burst Compiler</h3>
              <div className="space-y-2 text-gray-300 font-mono text-xs">
                <div className="bg-black/30 p-2 rounded">
                  <code className="text-purple-400">[BurstCompile]</code><br/>
                  <code className="text-gray-400">struct PredictPositionsJob : IJobParallelFor</code><br/>
                  <code className="text-gray-400">{"{"}</code><br/>
                  <code className="text-gray-400 ml-4">// SIMD 자동 최적화</code><br/>
                  <code className="text-gray-400 ml-4">// 4개 파티클 동시 처리</code><br/>
                  <code className="text-gray-400">{"}"}</code>
                </div>
                <ul className="space-y-1.5 mt-2">
                  <li>• CPU SIMD 명령어 사용</li>
                  <li>• 최대 <span className="text-purple-400 font-bold">10배 성능 향상</span></li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-4 bg-green-950/30 border-2 border-green-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">💾</div>
            <div>
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">3. NativeArray (GC-Free)</h3>
              <div className="space-y-2 text-gray-300 font-mono text-xs">
                <div className="bg-black/30 p-2 rounded">
                  <div className="text-red-400 mb-1">// 일반 배열 (GC 발생)</div>
                  <code className="text-gray-400">Vector3[] positions;</code><br/>
                  <div className="text-red-400 text-[10px] mt-1">✗ 매 프레임 GC → 프레임 드랍</div>
                </div>
                <div className="bg-black/30 p-2 rounded">
                  <div className="text-green-400 mb-1">// NativeArray (GC 없음)</div>
                  <code className="text-gray-400">NativeArray&lt;float3&gt; Positions;</code><br/>
                  <div className="text-green-400 text-[10px] mt-1">✅ Zero GC → 안정적</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-cyan-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">📊</div>
            <div>
              <h3 className="text-base font-bold text-cyan-400 font-mono mb-2">성능 비교</h3>
              <div className="space-y-2 text-gray-300 font-mono text-xs">
                <div className="flex justify-between items-center p-2 bg-red-500/10 rounded">
                  <span>단일 스레드 (일반 C#)</span>
                  <span className="text-red-400 font-bold">16ms → 60fps 불가</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-yellow-500/10 rounded">
                  <span>Job System</span>
                  <span className="text-yellow-400 font-bold">4ms → 250fps</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-green-500/10 rounded">
                  <span>Job + Burst</span>
                  <span className="text-green-400 font-bold">2ms → 500fps</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-4 bg-yellow-950/30 border-l-4 border-yellow-500 rounded-r-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <p className="text-gray-300 font-mono text-xs italic leading-relaxed">
            "알고리즘도 중요하지만 구현 최적화가 더 중요 → <span className="text-yellow-400 font-bold">8배 성능 향상!</span>"
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function OptimizationAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg className="absolute inset-0" viewBox="0 0 400 400">
        {/* Single Thread Bar */}
        <g>
          <text x="50" y="100" fill="#ef4444" fontSize="12" fontFamily="monospace">Single Thread</text>
          <rect x="50" y="110" width="300" height="20" fill="#ef4444" fillOpacity="0.2" stroke="#ef4444" strokeWidth="1" rx="4" />
          <motion.rect
            x="50"
            y="110"
            height="20"
            fill="#ef4444"
            rx="4"
            animate={{
              width: [0, 300, 300],
            }}
            transition={{
              duration: 3,
              times: [0, 0.8, 1],
              repeat: Infinity,
            }}
          />
          <motion.text
            x="360"
            y="125"
            fill="#ef4444"
            fontSize="11"
            fontFamily="monospace"
            animate={{
              opacity: [0, 0, 1],
            }}
            transition={{
              duration: 3,
              times: [0, 0.75, 1],
              repeat: Infinity,
            }}
          >
            16ms
          </motion.text>
        </g>

        {/* Job System Bar */}
        <g>
          <text x="50" y="180" fill="#eab308" fontSize="12" fontFamily="monospace">Job System</text>
          <rect x="50" y="190" width="300" height="20" fill="#eab308" fillOpacity="0.2" stroke="#eab308" strokeWidth="1" rx="4" />
          <motion.rect
            x="50"
            y="190"
            height="20"
            fill="#eab308"
            rx="4"
            animate={{
              width: [0, 75, 75],
            }}
            transition={{
              duration: 3,
              times: [0, 0.2, 1],
              repeat: Infinity,
              delay: 0.3,
            }}
          />
          <motion.text
            x="135"
            y="205"
            fill="#eab308"
            fontSize="11"
            fontFamily="monospace"
            animate={{
              opacity: [0, 0, 1],
            }}
            transition={{
              duration: 3,
              times: [0, 0.15, 1],
              repeat: Infinity,
              delay: 0.3,
            }}
          >
            4ms
          </motion.text>
        </g>

        {/* Burst Bar */}
        <g>
          <text x="50" y="260" fill="#22c55e" fontSize="12" fontFamily="monospace">Job + Burst</text>
          <rect x="50" y="270" width="300" height="20" fill="#22c55e" fillOpacity="0.2" stroke="#22c55e" strokeWidth="1" rx="4" />
          <motion.rect
            x="50"
            y="270"
            height="20"
            fill="#22c55e"
            rx="4"
            animate={{
              width: [0, 37.5, 37.5],
            }}
            transition={{
              duration: 3,
              times: [0, 0.1, 1],
              repeat: Infinity,
              delay: 0.6,
            }}
          />
          <motion.text
            x="97"
            y="285"
            fill="#22c55e"
            fontSize="11"
            fontFamily="monospace"
            animate={{
              opacity: [0, 0, 1],
            }}
            transition={{
              duration: 3,
              times: [0, 0.08, 1],
              repeat: Infinity,
              delay: 0.6,
            }}
          >
            2ms
          </motion.text>
        </g>

        {/* Result */}
        <motion.text
          x="200"
          y="340"
          textAnchor="middle"
          fill="#06b6d4"
          fontSize="16"
          fontFamily="monospace"
          fontWeight="bold"
          animate={{
            opacity: [0, 0, 0, 1],
            scale: [0, 0, 0, 1.2, 1],
          }}
          transition={{
            duration: 3,
            times: [0, 0.7, 0.8, 0.85, 1],
            repeat: Infinity,
          }}
          style={{ transformOrigin: '200px 340px' }}
        >
          8x Faster! 🚀
        </motion.text>
      </svg>
    </div>
  );
}
