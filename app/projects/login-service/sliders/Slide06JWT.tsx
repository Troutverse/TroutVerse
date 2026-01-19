'use client';

import { motion } from 'framer-motion';

export default function Slide06JWT() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20 gap-12 py-16">
      {/* 왼쪽: JWT 구조 시각화 */}
      <div className="w-1/2 h-full flex items-center justify-center">
        <JWTStructure />
      </div>

      {/* 오른쪽: 설명 */}
      <div className="w-1/2 flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-purple-400 font-mono mb-3">JWT</h2>
          <p className="text-xl text-purple-300 font-mono">
            JSON Web Token Authentication
          </p>
        </motion.div>

        {/* 토큰 생성 */}
        <motion.div
          className="p-4 bg-gradient-to-br from-blue-950/40 to-blue-900/20 border-2 border-blue-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🔑</div>
            <div>
              <h3 className="text-base font-bold text-blue-400 font-mono mb-2">
                토큰 생성
              </h3>
              <ul className="space-y-1 text-gray-400 font-mono text-xs">
                <li>• SecretKey: 256bit HMAC SHA256</li>
                <li>• Claims: userId + sessionId</li>
                <li>• Lifetime: 1시간</li>
                <li>• Issuer/Audience 검증</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 토큰 검증 */}
        <motion.div
          className="p-4 bg-gradient-to-br from-green-950/40 to-green-900/20 border-2 border-green-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">✅</div>
            <div>
              <h3 className="text-base font-bold text-green-400 font-mono mb-2">
                토큰 검증
              </h3>
              <ul className="space-y-1 text-gray-400 font-mono text-xs">
                <li>• 서명 검증 (Signature)</li>
                <li>• 만료 시간 체크</li>
                <li>• Issuer/Audience 확인</li>
                <li>• ClockSkew: 5분 (시간 오차 허용)</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 보안 장점 */}
        <motion.div
          className="p-4 bg-gradient-to-br from-purple-950/40 to-purple-900/20 border-2 border-purple-500/50 rounded-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">🛡️</div>
            <div>
              <h3 className="text-base font-bold text-purple-400 font-mono mb-2">
                보안 장점
              </h3>
              <ul className="space-y-1 text-gray-400 font-mono text-xs">
                <li>• <span className="text-purple-300">Stateless 인증</span></li>
                <li>• 서버 메모리 절약</li>
                <li>• 확장성 (여러 서버)</li>
                <li>• CSRF 공격 방어</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* 코드 예제 */}
        <motion.div
          className="p-4 bg-black/50 backdrop-blur-sm border border-cyan-500/50 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <h3 className="text-sm font-bold text-cyan-400 font-mono mb-2">Code Example</h3>
          <div className="bg-black/50 p-3 rounded font-mono text-[10px] text-gray-300 leading-relaxed">
            <span className="text-blue-400">var</span> jwt = JwtUtils.Generate(<br />
            &nbsp;&nbsp;userId.ToString(),<br />
            &nbsp;&nbsp;sessionId.ToString(),<br />
            &nbsp;&nbsp;TimeSpan.FromHours(<span className="text-yellow-400">1</span>)<br />
            );
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function JWTStructure() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center gap-6">
      {/* JWT 전체 */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="text-purple-400 font-mono text-sm mb-3">JSON Web Token</div>
        <div className="flex items-center gap-2">
          <div className="px-3 py-2 bg-red-500/20 border border-red-400 rounded text-red-400 font-mono text-xs">
            Header
          </div>
          <span className="text-gray-500">.</span>
          <div className="px-3 py-2 bg-blue-500/20 border border-blue-400 rounded text-blue-400 font-mono text-xs">
            Payload
          </div>
          <span className="text-gray-500">.</span>
          <div className="px-3 py-2 bg-green-500/20 border border-green-400 rounded text-green-400 font-mono text-xs">
            Signature
          </div>
        </div>
      </motion.div>

      {/* Header */}
      <motion.div
        className="w-80 p-4 bg-red-950/30 border-2 border-red-500/50 rounded-xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="text-red-400 font-mono text-sm font-bold mb-2">Header</div>
        <div className="bg-black/50 p-2 rounded font-mono text-[10px] text-gray-300">
          {'{'}<br />
          &nbsp;&nbsp;<span className="text-red-300">"alg"</span>: "HS256",<br />
          &nbsp;&nbsp;<span className="text-red-300">"typ"</span>: "JWT"<br />
          {'}'}
        </div>
      </motion.div>

      {/* Payload */}
      <motion.div
        className="w-80 p-4 bg-blue-950/30 border-2 border-blue-500/50 rounded-xl"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="text-blue-400 font-mono text-sm font-bold mb-2">Payload</div>
        <div className="bg-black/50 p-2 rounded font-mono text-[10px] text-gray-300">
          {'{'}<br />
          &nbsp;&nbsp;<span className="text-blue-300">"sub"</span>: "userId",<br />
          &nbsp;&nbsp;<span className="text-blue-300">"session_id"</span>: "guid",<br />
          &nbsp;&nbsp;<span className="text-blue-300">"exp"</span>: 1704067200<br />
          {'}'}
        </div>
      </motion.div>

      {/* Signature */}
      <motion.div
        className="w-80 p-4 bg-green-950/30 border-2 border-green-500/50 rounded-xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="text-green-400 font-mono text-sm font-bold mb-2">Signature</div>
        <div className="bg-black/50 p-2 rounded font-mono text-[10px] text-gray-300">
          HMACSHA256(<br />
          &nbsp;&nbsp;base64(header) + "." +<br />
          &nbsp;&nbsp;base64(payload),<br />
          &nbsp;&nbsp;<span className="text-green-300">secret</span><br />
          )
        </div>
      </motion.div>

      {/* 자물쇠 아이콘 */}
      <motion.div
        className="absolute -right-8 top-1/2 transform -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <svg className="w-20 h-20 text-purple-500/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </motion.div>
    </div>
  );
}
