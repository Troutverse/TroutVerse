'use client';

import { motion } from 'framer-motion';

export default function Slide07Database() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16">
      {/* 왼쪽: DB 스키마 */}
      <div className="w-1/2 h-full flex items-center justify-center">
        <DatabaseSchema />
      </div>

      {/* 오른쪽: 설명 */}
      <div className="w-1/2 flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-blue-400 font-mono mb-3">Database</h2>
          <p className="text-xl text-blue-300 font-mono">
            PostgreSQL + Entity Framework Core
          </p>
        </motion.div>

        {/* Entity Configuration */}
        <motion.div
          className="p-4 bg-gradient-to-br from-purple-950/40 to-purple-900/20 border-2 border-purple-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">📊</div>
            <div>
              <h3 className="text-base font-bold text-purple-400 font-mono mb-2">
                Entity Configuration
              </h3>
              <ul className="space-y-1 text-gray-400 font-mono text-xs">
                <li>• Fluent API로 제약 조건 정의</li>
                <li>• Username/Nickname 유니크 인덱스</li>
                <li>• CreatedAt 자동 생성 (DB 기본값)</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Migration */}
        <motion.div
          className="p-4 bg-gradient-to-br from-green-950/40 to-green-900/20 border-2 border-green-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🔄</div>
            <div>
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">
                Migration
              </h3>
              <ul className="space-y-1 text-gray-400 font-mono text-xs">
                <li>• Code First 방식</li>
                <li>• EF Core Migrations</li>
                <li>• 자동 스키마 동기화</li>
                <li>• 실행 시마다 자동 적용</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 환경별 연결 */}
        <motion.div
          className="p-4 bg-gradient-to-br from-cyan-950/40 to-cyan-900/20 border-2 border-cyan-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🌐</div>
            <div>
              <h3 className="text-base font-bold text-cyan-400 font-mono mb-2">
                환경별 연결
              </h3>
              <ul className="space-y-1 text-gray-400 font-mono text-xs">
                <li>• Local: 127.0.0.1:5432</li>
                <li>• Render: postgresql:// URL 파싱</li>
                <li>• SSL Mode: Require (프로덕션)</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Repository 패턴 */}
        <motion.div
          className="p-4 bg-gradient-to-br from-yellow-950/40 to-yellow-900/20 border-2 border-yellow-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">📦</div>
            <div>
              <h3 className="text-base font-bold text-yellow-400 font-mono mb-2">
                Repository 패턴
              </h3>
              <ul className="space-y-1 text-gray-400 font-mono text-xs">
                <li>• IUserRepository 인터페이스</li>
                <li>• 비동기 메서드 (async/await)</li>
                <li>• CancellationToken 지원</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function DatabaseSchema() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="w-96 border-2 border-blue-500 rounded-xl bg-blue-950/30 p-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        {/* 테이블 헤더 */}
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-blue-500/50">
          <div className="text-3xl">🗄️</div>
          <div>
            <div className="text-blue-400 font-mono text-lg font-bold">Users Table</div>
            <div className="text-gray-400 font-mono text-xs">PostgreSQL 15</div>
          </div>
        </div>

        {/* 컬럼들 */}
        <div className="space-y-3">
          {/* Id */}
          <motion.div
            className="flex items-center justify-between p-2 bg-blue-500/10 rounded"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
              </svg>
              <span className="text-blue-300 font-mono text-sm">Id</span>
            </div>
            <span className="text-gray-400 font-mono text-xs">uuid (PK)</span>
          </motion.div>

          {/* Username */}
          <motion.div
            className="flex items-center justify-between p-2 bg-blue-500/10 rounded"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
              </svg>
              <span className="text-blue-300 font-mono text-sm">Username</span>
            </div>
            <span className="text-gray-400 font-mono text-xs">text (unique)</span>
          </motion.div>

          {/* Password */}
          <motion.div
            className="flex items-center justify-between p-2 bg-blue-500/10 rounded"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-blue-300 font-mono text-sm">Password</span>
            </div>
            <span className="text-gray-400 font-mono text-xs">text</span>
          </motion.div>

          {/* Nickname */}
          <motion.div
            className="flex items-center justify-between p-2 bg-blue-500/10 rounded"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <span className="text-blue-300 font-mono text-sm">Nickname</span>
            </div>
            <span className="text-gray-400 font-mono text-xs">varchar(12)?</span>
          </motion.div>

          {/* CreatedAt */}
          <motion.div
            className="flex items-center justify-between p-2 bg-blue-500/10 rounded"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-blue-300 font-mono text-sm">CreatedAt</span>
            </div>
            <span className="text-gray-400 font-mono text-xs">timestamp</span>
          </motion.div>

          {/* LastConnected */}
          <motion.div
            className="flex items-center justify-between p-2 bg-blue-500/10 rounded"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-blue-300 font-mono text-sm">LastConnected</span>
            </div>
            <span className="text-gray-400 font-mono text-xs">timestamp?</span>
          </motion.div>

          {/* SkinIndex */}
          <motion.div
            className="flex items-center justify-between p-2 bg-blue-500/10 rounded"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
              <span className="text-blue-300 font-mono text-sm">SkinIndex</span>
            </div>
            <span className="text-gray-400 font-mono text-xs">int</span>
          </motion.div>
        </div>

        {/* Indexes */}
        <motion.div
          className="mt-4 pt-3 border-t border-blue-500/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="text-blue-400 font-mono text-xs mb-2">Indexes:</div>
          <div className="space-y-1 text-gray-400 font-mono text-[10px]">
            <div>• Username (unique)</div>
            <div>• Nickname (unique)</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
