'use client';

import { motion } from 'framer-motion';

export default function Slide08Repository() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16">
      {/* 왼쪽: Repository 패턴 다이어그램 */}
      <div className="w-1/2 h-full flex items-center justify-center">
        <RepositoryDiagram />
      </div>

      {/* 오른쪽: 설명 */}
      <div className="w-1/2 flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-green-400 font-mono mb-3">Repository</h2>
          <p className="text-xl text-green-300 font-mono">
            Pattern for Data Access
          </p>
        </motion.div>

        {/* 장점 */}
        <motion.div
          className="p-4 bg-gradient-to-br from-green-950/40 to-green-900/20 border-2 border-green-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">✓</div>
            <div>
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">
                장점
              </h3>
              <ul className="space-y-1 text-gray-400 font-mono text-xs">
                <li>• 테스트 용이 (Mock 가능)</li>
                <li>• DB 교체 쉬움</li>
                <li>• 비즈니스 로직 분리</li>
                <li>• 재사용성 향상</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Interface */}
        <motion.div
          className="p-4 bg-gradient-to-br from-blue-950/40 to-blue-900/20 border-2 border-blue-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">📋</div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-blue-400 font-mono mb-2">
                IUserRepository
              </h3>
              <div className="bg-black/50 p-3 rounded font-mono text-[10px] text-gray-300 leading-relaxed">
                Task&lt;IEnumerable&lt;User&gt;&gt; GetAllAsync()<br />
                Task&lt;User&gt; GetByIdAsync(Guid id)<br />
                Task&lt;User&gt; GetByUserNameAsync(string)<br />
                Task InsertAsync(User user)<br />
                Task UpdateAsync(User user)<br />
                Task DeleteAsync(Guid id)<br />
                Task SaveAsync()
              </div>
            </div>
          </div>
        </motion.div>

        {/* DI */}
        <motion.div
          className="p-4 bg-gradient-to-br from-purple-950/40 to-purple-900/20 border-2 border-purple-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">💉</div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-purple-400 font-mono mb-2">
                Dependency Injection
              </h3>
              <div className="bg-black/50 p-3 rounded font-mono text-[10px] text-gray-300 leading-relaxed">
                builder.Services.AddScoped&lt;<br />
                &nbsp;&nbsp;IUserRepository,<br />
                &nbsp;&nbsp;UserRepository<br />
                &gt;();
              </div>
            </div>
          </div>
        </motion.div>

        {/* InMemory Repository */}
        <motion.div
          className="p-4 bg-gradient-to-br from-yellow-950/40 to-yellow-900/20 border-2 border-yellow-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🧪</div>
            <div>
              <h3 className="text-base font-bold text-yellow-400 font-mono mb-2">
                InMemoryRepository (주석 처리)
              </h3>
              <ul className="space-y-1 text-gray-400 font-mono text-xs">
                <li>• 초기 테스트용</li>
                <li>• DB 없이 개발 가능</li>
                <li>• Dictionary 기반</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function RepositoryDiagram() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-8">
      {/* Interface */}
      <motion.div
        className="w-72 px-6 py-4 bg-blue-500/20 border-2 border-blue-400 rounded-xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="text-center">
          <div className="text-2xl mb-2">📋</div>
          <div className="text-blue-400 font-mono text-sm font-bold">IUserRepository</div>
          <div className="text-gray-400 font-mono text-xs">(Interface)</div>
        </div>
      </motion.div>

      {/* Arrow */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ delay: 0.4 }}
      >
        <svg className="w-6 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
        <div className="text-cyan-400 font-mono text-xs">implements</div>
      </motion.div>

      {/* Implementations */}
      <div className="flex gap-6">
        {/* UserRepository */}
        <motion.div
          className="w-56 px-6 py-4 bg-green-500/20 border-2 border-green-400 rounded-xl"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-center">
            <div className="text-2xl mb-2">💾</div>
            <div className="text-green-400 font-mono text-sm font-bold">UserRepository</div>
            <div className="text-gray-400 font-mono text-[10px]">EF Core + PostgreSQL</div>
          </div>
        </motion.div>

        {/* InMemoryRepository */}
        <motion.div
          className="w-56 px-6 py-4 bg-yellow-500/20 border-2 border-yellow-400 rounded-xl opacity-50"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-center">
            <div className="text-2xl mb-2">🧪</div>
            <div className="text-yellow-400 font-mono text-sm font-bold">InMemoryRepository</div>
            <div className="text-gray-400 font-mono text-[10px]">(주석 처리 - 테스트용)</div>
          </div>
        </motion.div>
      </div>

      {/* Arrow */}
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ delay: 0.8 }}
      >
        <svg className="w-6 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
        <div className="text-cyan-400 font-mono text-xs">injected into</div>
      </motion.div>

      {/* Controller */}
      <motion.div
        className="w-72 px-6 py-4 bg-purple-500/20 border-2 border-purple-400 rounded-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
      >
        <div className="text-center">
          <div className="text-2xl mb-2">🎯</div>
          <div className="text-purple-400 font-mono text-sm font-bold">AuthController</div>
          <div className="text-gray-400 font-mono text-xs">uses IUserRepository</div>
        </div>
      </motion.div>
    </div>
  );
}
