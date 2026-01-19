'use client';

import { motion } from 'framer-motion';

export default function Slide09Demo() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16">
      {/* 왼쪽: API 엔드포인트 목록 */}
      <div className="w-[55%] h-full flex flex-col justify-center gap-4 overflow-y-auto pr-2 pb-8 custom-scrollbar">
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
          <h2 className="text-5xl font-bold text-cyan-400 font-mono mb-3">API Demo</h2>
          <p className="text-xl text-cyan-300 font-mono">
            RESTful API Endpoints
          </p>
        </motion.div>

        {/* Auth 엔드포인트 */}
        <motion.div
          className="p-4 bg-gradient-to-br from-purple-950/40 to-purple-900/20 border-2 border-purple-500/50 rounded-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="text-2xl">🔐</div>
            <h3 className="text-lg font-bold text-purple-400 font-mono">Auth</h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 p-2 bg-black/30 rounded font-mono text-xs">
              <span className="px-2 py-1 bg-green-500 text-black rounded font-bold">POST</span>
              <span className="text-gray-300">/auth/login</span>
            </div>
            <div className="ml-8 text-gray-400 font-mono text-[10px]">
              → {'{'} jwt, userId, nickname {'}'}
            </div>
            <div className="ml-8 text-orange-400 font-mono text-[10px]">
              409 Conflict: 이미 로그인 중
            </div>

            <div className="flex items-center gap-2 p-2 bg-black/30 rounded font-mono text-xs mt-3">
              <span className="px-2 py-1 bg-green-500 text-black rounded font-bold">POST</span>
              <span className="text-gray-300">/auth/logout</span>
            </div>
            <div className="ml-8 text-gray-400 font-mono text-[10px]">
              → 200 OK
            </div>
          </div>
        </motion.div>

        {/* User 엔드포인트 */}
        <motion.div
          className="p-4 bg-gradient-to-br from-blue-950/40 to-blue-900/20 border-2 border-blue-500/50 rounded-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="text-2xl">👤</div>
            <h3 className="text-lg font-bold text-blue-400 font-mono">User</h3>
          </div>
          <div className="space-y-2 font-mono text-xs">
            <div className="flex items-center gap-2 p-2 bg-black/30 rounded">
              <span className="px-2 py-1 bg-blue-500 text-white rounded font-bold">GET</span>
              <span className="text-gray-300">/user/getall</span>
            </div>

            <div className="flex items-center gap-2 p-2 bg-black/30 rounded">
              <span className="px-2 py-1 bg-blue-500 text-white rounded font-bold">GET</span>
              <span className="text-gray-300">/user/{'{id}'}</span>
            </div>

            <div className="flex items-center gap-2 p-2 bg-black/30 rounded">
              <span className="px-2 py-1 bg-green-500 text-black rounded font-bold">POST</span>
              <span className="text-gray-300">/user/create</span>
            </div>

            <div className="flex items-center gap-2 p-2 bg-black/30 rounded">
              <span className="px-2 py-1 bg-yellow-500 text-black rounded font-bold">PATCH</span>
              <span className="text-gray-300">/user/{'{id}'}/nickname</span>
            </div>

            <div className="flex items-center gap-2 p-2 bg-black/30 rounded">
              <span className="px-2 py-1 bg-red-500 text-white rounded font-bold">DELETE</span>
              <span className="text-gray-300">/user/{'{id}'}</span>
            </div>
          </div>
        </motion.div>

        {/* 응답 시간 */}
        <motion.div
          className="p-4 bg-gradient-to-br from-green-950/40 to-green-900/20 border-2 border-green-500/50 rounded-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="text-2xl">⚡</div>
            <h3 className="text-base font-bold text-green-400 font-mono">Performance</h3>
          </div>
          <div className="grid grid-cols-3 gap-2 font-mono text-xs">
            <div className="p-2 bg-black/30 rounded text-center">
              <div className="text-gray-400">Login</div>
              <div className="text-green-400 font-bold">~30ms</div>
            </div>
            <div className="p-2 bg-black/30 rounded text-center">
              <div className="text-gray-400">GetAll</div>
              <div className="text-green-400 font-bold">~15ms</div>
            </div>
            <div className="p-2 bg-black/30 rounded text-center">
              <div className="text-gray-400">Create</div>
              <div className="text-green-400 font-bold">~40ms</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 오른쪽: Swagger UI 시뮬레이션 */}
      <div className="w-[45%] h-full flex flex-col justify-center gap-4">
        <SwaggerSimulation />
      </div>
    </div>
  );
}

function SwaggerSimulation() {
  return (
    <div className="relative w-full">
      {/* Swagger 헤더 */}
      <motion.div
        className="w-full p-4 bg-gradient-to-r from-green-600 to-green-500 rounded-t-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center gap-3">
          <div className="text-3xl">📄</div>
          <div>
            <div className="text-white font-mono text-lg font-bold">Swagger UI</div>
            <div className="text-green-100 font-mono text-xs">API Documentation</div>
          </div>
        </div>
      </motion.div>

      {/* API 엔드포인트 예시 */}
      <motion.div
        className="w-full p-4 bg-gray-900 border-2 border-gray-700 rounded-b-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {/* POST /auth/login */}
        <motion.div
          className="mb-4 p-3 bg-green-500/10 border-l-4 border-green-500 rounded"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-green-500 text-black rounded font-mono text-xs font-bold">POST</span>
            <span className="text-green-400 font-mono text-sm">/auth/login</span>
          </div>
          <div className="text-gray-400 font-mono text-xs">User authentication endpoint</div>
        </motion.div>

        {/* GET /user/getall */}
        <motion.div
          className="mb-4 p-3 bg-blue-500/10 border-l-4 border-blue-500 rounded"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-blue-500 text-white rounded font-mono text-xs font-bold">GET</span>
            <span className="text-blue-400 font-mono text-sm">/user/getall</span>
          </div>
          <div className="text-gray-400 font-mono text-xs">Get all users</div>
        </motion.div>

        {/* GitHub 버튼 */}
        <motion.a
          href="https://github.com/yourusername/login-service"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group mt-4 block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-mono font-bold flex items-center justify-center gap-3 border-2 border-blue-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View Source Code
          </div>
        </motion.a>
      </motion.div>
    </div>
  );
}
