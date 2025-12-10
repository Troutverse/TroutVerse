'use client';

import { motion } from 'framer-motion';

export default function Slide08Solution() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16 pb-32">
      {/* 왼쪽: 시스템 아키텍처 다이어그램 */}
      <div className="w-[45%] h-full flex items-center justify-center">
        <div className="relative w-full h-[85%]">
          <SystemArchitectureDiagram />
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
          <h2 className="text-5xl font-bold text-cyan-400 font-mono mb-3">
            Final Solution
          </h2>
          <p className="text-xl text-cyan-300 font-mono">
            SliceManager Architecture
          </p>
        </motion.div>

        {/* 시스템 구조 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-cyan-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🏗️</div>
            <div>
              <h3 className="text-base font-bold text-cyan-400 font-mono mb-2">
                핵심 컴포넌트
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• <span className="text-cyan-400">SliceManager</span>: 중앙 제어</li>
                <li>• <span className="text-purple-400">CoordinateConverter</span>: 좌표 변환</li>
                <li>• <span className="text-green-400">TriangleDetector</span>: 교차 검사</li>
                <li>• <span className="text-yellow-400">FloodFillGrouper</span>: 그룹화</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 처리 파이프라인 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-purple-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">⚙️</div>
            <div>
              <h3 className="text-base font-bold text-purple-400 font-mono mb-2">
                처리 파이프라인
              </h3>
              <ol className="space-y-2 text-gray-400 font-mono text-xs list-decimal list-inside">
                <li><span className="text-cyan-400">입력</span>: 칼날 위치 (World)</li>
                <li><span className="text-purple-400">변환</span>: 메쉬 정점 → World 좌표</li>
                <li><span className="text-green-400">검출</span>: 교차 삼각형 찾기</li>
                <li><span className="text-yellow-400">그룹화</span>: Flood-fill 실행</li>
                <li><span className="text-blue-400">분리</span>: 새 메쉬 생성</li>
              </ol>
            </div>
          </div>
        </motion.div>

        {/* 핵심 기능 */}
        <motion.div
          className="p-4 bg-green-950/30 border border-green-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">✨</div>
            <div>
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">
                주요 특징
              </h3>
              <ul className="space-y-1.5 text-gray-300 font-mono text-xs">
                <li>• <span className="text-green-400 font-bold">완전 자동화</span>: 한 번 호출로 모든 처리</li>
                <li>• <span className="text-green-400 font-bold">재사용 가능</span>: 모듈화된 구조</li>
                <li>• <span className="text-green-400 font-bold">확장 가능</span>: 새 기능 추가 용이</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 검증 로직 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-orange-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🔍</div>
            <div>
              <h3 className="text-base font-bold text-orange-400 font-mono mb-2">
                검증 시스템
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 그룹 균형 체크 (Group A ≈ Group B)</li>
                <li>• 연결성 검증 (모든 삼각형 도달 가능)</li>
                <li>• 경계 완전성 검사</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 에러 처리 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-red-700/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🛡️</div>
            <div>
              <h3 className="text-base font-bold text-red-400 font-mono mb-2">
                안전 장치
              </h3>
              <ul className="space-y-1.5 text-gray-400 font-mono text-xs">
                <li>• 불균형 감지 → 슬라이스 취소</li>
                <li>• 연결 끊김 감지 → 재시도</li>
                <li>• 예외 처리 및 로깅</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 코드 예시 */}
        <motion.div
          className="p-4 bg-gray-900/80 border border-blue-500/30 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <p className="text-blue-400 font-mono text-xs mb-3">사용 예시</p>
          <pre className="bg-black/50 p-3 rounded text-[10px] overflow-x-auto">
            <code className="text-gray-300 font-mono">
{`// 간단한 호출
SliceManager.Instance.SliceMesh(
    targetMesh,
    knifePosition,
    knifeDirection
);

// 결과: 두 개의 새로운 메쉬 생성
// - 자동 좌표 변환
// - 자동 그룹화
// - 자동 검증`}
            </code>
          </pre>
        </motion.div>

        {/* 결론 */}
        <motion.div
          className="p-4 bg-cyan-950/30 border-l-4 border-cyan-500 rounded-r-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🎯</div>
            <div>
              <h3 className="text-sm font-bold text-cyan-400 font-mono mb-2">
                완성된 시스템
              </h3>
              <p className="text-gray-300 font-mono text-xs leading-relaxed">
                "모든 시행착오가 하나의 시스템으로<br />
                깔끔하고 확장 가능한 아키텍처<br />
                → <span className="text-cyan-400 font-bold">Production Ready!</span>"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// 시스템 아키텍처 다이어그램
function SystemArchitectureDiagram() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-8">
      {/* SliceManager (최상위) */}
      <motion.div
        className="relative px-6 py-4 bg-cyan-500/20 border-2 border-cyan-400 rounded-xl backdrop-blur-sm"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="text-cyan-400 font-mono text-sm font-bold">SliceManager</div>
        <div className="text-cyan-300 font-mono text-xs mt-1">중앙 제어</div>
      </motion.div>

      {/* 화살표 */}
      <motion.div
        className="flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <svg className="w-6 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>

      {/* 중간 계층 */}
      <div className="flex gap-4">
        <motion.div
          className="px-4 py-3 bg-purple-500/20 border border-purple-400 rounded-lg backdrop-blur-sm"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-purple-400 font-mono text-xs font-bold">Coordinate</div>
          <div className="text-purple-300 font-mono text-[10px]">Converter</div>
        </motion.div>

        <motion.div
          className="px-4 py-3 bg-green-500/20 border border-green-400 rounded-lg backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="text-green-400 font-mono text-xs font-bold">Triangle</div>
          <div className="text-green-300 font-mono text-[10px]">Detector</div>
        </motion.div>

        <motion.div
          className="px-4 py-3 bg-yellow-500/20 border border-yellow-400 rounded-lg backdrop-blur-sm"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-yellow-400 font-mono text-xs font-bold">FloodFill</div>
          <div className="text-yellow-300 font-mono text-[10px]">Grouper</div>
        </motion.div>
      </div>

      {/* 화살표 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
      >
        <svg className="w-6 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>

      {/* 출력 */}
      <div className="flex gap-4">
        <motion.div
          className="px-5 py-3 bg-blue-500/20 border border-blue-400 rounded-lg backdrop-blur-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="text-blue-400 font-mono text-xs font-bold">Mesh A</div>
        </motion.div>

        <motion.div
          className="px-5 py-3 bg-blue-500/20 border border-blue-400 rounded-lg backdrop-blur-sm"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3 }}
        >
          <div className="text-blue-400 font-mono text-xs font-bold">Mesh B</div>
        </motion.div>
      </div>

      {/* 데이터 흐름 애니메이션 */}
      <motion.div
        className="absolute top-32 w-1 bg-cyan-400 rounded-full"
        style={{ boxShadow: '0 0 10px rgba(34, 211, 238, 0.6)' }}
        animate={{
          height: [0, 80, 80],
          opacity: [1, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </div>
  );
}