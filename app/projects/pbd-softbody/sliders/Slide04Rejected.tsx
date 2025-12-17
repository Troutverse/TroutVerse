'use client';

import { motion } from 'framer-motion';

export default function Slide04Rejected() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-10 pb-30">
      {/* 왼쪽: 애니메이션 */}
      <div className="w-[45%] h-full flex items-center justify-center">
        <div className="relative w-full h-[80%] border-2 border-orange-500/30 rounded-2xl bg-orange-950/20 overflow-hidden">
          <TetrahedralComparisonAnimation />
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
          <h2 className="text-5xl font-bold text-orange-400 font-mono mb-3">Rejected</h2>
          <p className="text-xl text-gray-300 font-mono">Tetrahedral Mesh (사면체 메쉬)</p>
        </motion.div>

        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🏥</div>
            <div>
              <h3 className="text-base font-bold text-blue-400 font-mono mb-2">의료 시뮬레이션 표준</h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• SOFA Framework (프랑스 표준)</li>
                <li>• 3D Slicer (의료 영상 처리)</li>
                <li>• NVIDIA Flex Medical</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-purple-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🔬</div>
            <div>
              <h3 className="text-base font-bold text-purple-400 font-mono mb-2">왜 업계 표준인가?</h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• <span className="text-purple-400">정확한 부피 보존</span>: 내부 구조 포함</li>
                <li>• <span className="text-purple-400">내부 응력 계산</span>: FEM 최적화</li>
                <li>• <span className="text-purple-400">의학적 정확도</span>: 실제 조직 표현</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-4 bg-orange-950/30 border-2 border-orange-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚠️</div>
            <div>
              <h3 className="text-base font-bold text-orange-400 font-mono mb-2">왜 포기했는가?</h3>
              <ul className="space-y-1.5 text-gray-300 font-mono text-xs">
                <li>• <span className="text-orange-400 font-bold">파티클 수 폭발</span>: 500개 → 5,000~10,000개 (10-20배)</li>
                <li>• <span className="text-orange-400 font-bold">연산량 증가</span>: Distance Constraints 10배</li>
                <li>• <span className="text-orange-400 font-bold">메모리 문제</span>: Quest 2/3 제한</li>
                <li>• <span className="text-orange-400 font-bold">렌더링 복잡</span>: 내부 숨기고 표면만 추출</li>
                <li>• VR 72fps 달성 불가능</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-4 bg-green-950/30 border border-green-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">✔</div>
            <div>
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">대신 선택한 방법</h3>
              <ul className="space-y-1.5 text-gray-300 font-mono text-xs">
                <li>• <span className="text-green-400 font-bold">Surface Mesh</span>: 껍데기만 사용</li>
                <li>• <span className="text-green-400 font-bold">Shape Matching</span>: 부피 보존 근사</li>
                <li>• <span className="text-green-400 font-bold">실시간 가능</span>: 72fps 안정적 달성</li>
                <li>• 파티클 500개로 충분</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="p-4 bg-yellow-950/30 border-l-4 border-yellow-500 rounded-r-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p className="text-gray-300 font-mono text-xs italic leading-relaxed">
            "의료 표준이 항상 VR에 최적은 아님 → <span className="text-yellow-400 font-bold">목적에 맞는 선택이 중요</span>"
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function TetrahedralComparisonAnimation() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg className="absolute inset-0" viewBox="0 0 400 400">
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <text x="100" y="50" textAnchor="middle" fill="#22c55e" fontSize="14" fontFamily="monospace" fontWeight="bold">
            Surface Mesh
          </text>
          <text x="100" y="70" textAnchor="middle" fill="#22c55e" fontSize="12" fontFamily="monospace">
            500 particles
          </text>

          {[...Array(6)].map((_, i) => {
            const angle = (i * Math.PI * 2) / 6;
            const x = 100 + Math.cos(angle) * 40;
            const y = 130 + Math.sin(angle) * 40;
            const nextI = (i + 1) % 6;
            const nextAngle = (nextI * Math.PI * 2) / 6;
            const nextX = 100 + Math.cos(nextAngle) * 40;
            const nextY = 130 + Math.sin(nextAngle) * 40;

            return (
              <g key={`surface-${i}`}>
                <line
                  x1={x}
                  y1={y}
                  x2={nextX}
                  y2={nextY}
                  stroke="#22c55e"
                  strokeWidth="2"
                />
                <circle
                  cx={x}
                  cy={y}
                  r="4"
                  fill="#22c55e"
                />
              </g>
            );
          })}
        </motion.g>

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <text x="300" y="50" textAnchor="middle" fill="#ef4444" fontSize="14" fontFamily="monospace" fontWeight="bold">
            Tetrahedral
          </text>
          <text x="300" y="70" textAnchor="middle" fill="#ef4444" fontSize="12" fontFamily="monospace">
            5000+ particles
          </text>

          {[...Array(6)].map((_, i) => {
            const angle = (i * Math.PI * 2) / 6;
            const x = 300 + Math.cos(angle) * 40;
            const y = 130 + Math.sin(angle) * 40;
            const nextI = (i + 1) % 6;
            const nextAngle = (nextI * Math.PI * 2) / 6;
            const nextX = 300 + Math.cos(nextAngle) * 40;
            const nextY = 130 + Math.sin(nextAngle) * 40;

            return (
              <g key={`tetra-outer-${i}`}>
                <line x1={x} y1={y} x2={nextX} y2={nextY} stroke="#ef4444" strokeWidth="2" />
                <line x1={x} y1={y} x2={300} y2={130} stroke="#ef4444" strokeWidth="1" opacity="0.5" />
                <circle cx={x} cy={y} r="4" fill="#ef4444" />
              </g>
            );
          })}
          
          {[...Array(3)].map((_, i) => {
            const angle = (i * Math.PI * 2) / 3;
            const x = 300 + Math.cos(angle) * 20;
            const y = 130 + Math.sin(angle) * 20;
            return (
              <circle key={`tetra-inner-${i}`} cx={x} cy={y} r="3" fill="#ef4444" opacity="0.7" />
            );
          })}
          <circle cx="300" cy="130" r="3" fill="#ef4444" opacity="0.7" />
        </motion.g>

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <rect x="50" y="220" width="120" height="80" fill="#22c55e" fillOpacity="0.1" stroke="#22c55e" strokeWidth="2" rx="8" />
          <text x="110" y="245" textAnchor="middle" fill="#22c55e" fontSize="11" fontFamily="monospace" fontWeight="bold">
            ✓ 가벼움
          </text>
          <text x="110" y="265" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace">
            ✓ 72fps 가능
          </text>
          <text x="110" y="285" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace">
            ✓ VR 최적
          </text>
        </motion.g>

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <rect x="230" y="220" width="140" height="80" fill="#ef4444" fillOpacity="0.1" stroke="#ef4444" strokeWidth="2" rx="8" />
          <text x="300" y="245" textAnchor="middle" fill="#ef4444" fontSize="11" fontFamily="monospace" fontWeight="bold">
            ✗ 무거움
          </text>
          <text x="300" y="265" textAnchor="middle" fill="#ef4444" fontSize="10" fontFamily="monospace">
            ✗ 15fps 이하
          </text>
          <text x="300" y="285" textAnchor="middle" fill="#ef4444" fontSize="10" fontFamily="monospace">
            ✗ 모바일 불가
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
