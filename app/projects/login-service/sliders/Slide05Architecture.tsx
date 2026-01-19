'use client';

import { motion } from 'framer-motion';

export default function Slide05Architecture() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16">
      {/* 왼쪽: 아키텍처 다이어그램 */}
      <div className="w-1/2 h-full flex items-center justify-center">
        <div className="relative w-full h-[90%]">
          <ArchitectureDiagram />
        </div>
      </div>

      {/* 오른쪽: 레이어 설명 */}
      <div className="w-1/2 flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-cyan-400 font-mono mb-3">Architecture</h2>
          <p className="text-xl text-cyan-300 font-mono">
            Layered Architecture Pattern
          </p>
        </motion.div>

        {/* Presentation Layer */}
        <motion.div
          className="p-4 bg-gradient-to-br from-blue-950/40 to-blue-900/20 border-2 border-blue-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">📱</div>
            <div>
              <h3 className="text-base font-bold text-blue-400 font-mono mb-2">
                Presentation Layer
              </h3>
              <ul className="space-y-1 text-gray-400 font-mono text-xs">
                <li>• AuthController: Login/Logout</li>
                <li>• UserController: CRUD</li>
                <li>• DTO: Data Transfer Objects</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Security Layer */}
        <motion.div
          className="p-4 bg-gradient-to-br from-purple-950/40 to-purple-900/20 border-2 border-purple-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🔐</div>
            <div>
              <h3 className="text-base font-bold text-purple-400 font-mono mb-2">
                Security Layer
              </h3>
              <ul className="space-y-1 text-gray-400 font-mono text-xs">
                <li>• JwtUtils: 토큰 생성/검증</li>
                <li>• Memory Session: 중복 로그인 차단</li>
                <li>• Authentication Middleware</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Business Layer */}
        <motion.div
          className="p-4 bg-gradient-to-br from-green-950/40 to-green-900/20 border-2 border-green-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">💼</div>
            <div>
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">
                Business Layer
              </h3>
              <ul className="space-y-1 text-gray-400 font-mono text-xs">
                <li>• IUserRepository: Interface</li>
                <li>• Validation Logic</li>
                <li>• Business Rules</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Data Layer */}
        <motion.div
          className="p-4 bg-gradient-to-br from-yellow-950/40 to-yellow-900/20 border-2 border-yellow-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">💾</div>
            <div>
              <h3 className="text-base font-bold text-yellow-400 font-mono mb-2">
                Data Layer
              </h3>
              <ul className="space-y-1 text-gray-400 font-mono text-xs">
                <li>• UserRepository: Implementation</li>
                <li>• GameDbContext: EF Core</li>
                <li>• PostgreSQL Database</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 기술 스택 */}
        <motion.div
          className="p-4 bg-gray-900/50 backdrop-blur-sm border border-cyan-500/50 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <h3 className="text-sm font-bold text-cyan-400 font-mono mb-2">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {['ASP.NET Core 8.0', 'EF Core', 'PostgreSQL', 'JWT', 'Npgsql'].map((tech, i) => (
              <motion.span
                key={tech}
                className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded text-cyan-300 font-mono text-xs"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + i * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ArchitectureDiagram() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-6">
      {/* Unity Client */}
      <motion.div
        className="w-56 px-6 py-4 bg-blue-500/20 border-2 border-blue-400 rounded-xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="text-center">
          <div className="text-3xl mb-2">🎮</div>
          <div className="text-blue-400 font-mono text-sm font-bold">Unity Client</div>
        </div>
      </motion.div>

      {/* Arrow */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ delay: 0.4 }}
      >
        <svg className="w-6 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
        <div className="text-cyan-400 font-mono text-xs text-center">HTTPS</div>
      </motion.div>

      {/* Controllers */}
      <motion.div
        className="w-56 px-6 py-4 bg-purple-500/20 border-2 border-purple-400 rounded-xl"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="text-center">
          <div className="text-2xl mb-2">🎯</div>
          <div className="text-purple-400 font-mono text-xs font-bold">Controllers</div>
          <div className="text-gray-400 font-mono text-[10px]">Auth + User</div>
        </div>
      </motion.div>

      {/* Arrow */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ delay: 0.8 }}
      >
        <svg className="w-6 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>

      {/* JWT + Repository */}
      <div className="flex gap-4">
        <motion.div
          className="w-28 px-4 py-3 bg-green-500/20 border-2 border-green-400 rounded-xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0 }}
        >
          <div className="text-center">
            <div className="text-xl mb-1">🔐</div>
            <div className="text-green-400 font-mono text-[10px] font-bold">JWT</div>
          </div>
        </motion.div>

        <motion.div
          className="w-28 px-4 py-3 bg-green-500/20 border-2 border-green-400 rounded-xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0 }}
        >
          <div className="text-center">
            <div className="text-xl mb-1">📦</div>
            <div className="text-green-400 font-mono text-[10px] font-bold">Repository</div>
          </div>
        </motion.div>
      </div>

      {/* Arrow */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ delay: 1.2 }}
      >
        <svg className="w-6 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>

      {/* DbContext */}
      <motion.div
        className="w-56 px-6 py-4 bg-yellow-500/20 border-2 border-yellow-400 rounded-xl"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4 }}
      >
        <div className="text-center">
          <div className="text-2xl mb-2">🗄️</div>
          <div className="text-yellow-400 font-mono text-xs font-bold">GameDbContext</div>
          <div className="text-gray-400 font-mono text-[10px]">EF Core</div>
        </div>
      </motion.div>

      {/* Arrow */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ delay: 1.6 }}
      >
        <svg className="w-6 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>

      {/* PostgreSQL */}
      <motion.div
        className="w-56 px-6 py-4 bg-red-500/20 border-2 border-red-400 rounded-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8 }}
      >
        <div className="text-center">
          <div className="text-3xl mb-2">🐘</div>
          <div className="text-red-400 font-mono text-sm font-bold">PostgreSQL</div>
        </div>
      </motion.div>
    </div>
  );
}
