'use client';

import { motion } from 'framer-motion';

export default function Slide11TechnicalStack() {
  return (
    <div className="w-full h-full flex flex-col items-center overflow-y-auto px-12 pt-20 pb-32 custom-scrollbar relative">
      {/* Green Scrollbar */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(34, 197, 94, 0.1);
          border-radius: 10px;
          margin: 8px 0;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #22c55e 0%, #16a34a 100%);
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #4ade80 0%, #22c55e 100%);
          box-shadow: 0 0 15px rgba(74, 222, 128, 0.8);
        }
      `}</style>
      {/* 배경 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(45deg, #22c55e 1px, transparent 1px),
            linear-gradient(-45deg, #22c55e 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* 헤더 */}
      <motion.div
        className="text-center mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-6xl font-bold text-green-400 font-mono mb-3">
          Technical Stack
        </h2>
        <p className="text-xl text-green-300 font-mono">
          계층별 기술 스택 및 선택 이유
        </p>
      </motion.div>

      {/* 스택 레이어들 */}
      <div className="w-full max-w-5xl space-y-8 z-10">

        {/* Frontend Layer */}
        <StackLayer
          title="Frontend"
          subtitle="Unity Client"
          color="green"
          delay={0.2}
          technologies={[
            { name: 'Unity 2022.3', description: 'LTS 버전 사용' },
            { name: 'Unity Netcode for GO', description: '네트워크 레이어' },
            { name: 'SignalR Client', description: '실시간 통신' },
            { name: 'C# 10', description: '언어 기반' }
          ]}
        />

        {/* 연결선 */}
        <ConnectionLine delay={0.4} />

        {/* Backend Layer */}
        <StackLayer
          title="Backend"
          subtitle="ASP.NET Core Server"
          color="green"
          delay={0.6}
          technologies={[
            { name: 'ASP.NET Core 8.0', description: 'Web Framework' },
            { name: 'SignalR Hub', description: 'WebSocket 서버' },
            { name: 'C# 12', description: '최신 언어 기능' },
            { name: 'Async/Await', description: '비동기 패턴' }
          ]}
        />

        {/* 연결선 */}
        <ConnectionLine delay={0.8} />

        {/* Infrastructure Layer */}
        <StackLayer
          title="Infrastructure"
          subtitle="Cloud & Deployment"
          color="green"
          delay={1.0}
          technologies={[
            { name: 'Render.com', description: '배포 플랫폼' },
            { name: 'Docker', description: '컨테이너화' },
            { name: 'WebSocket Protocol', description: '통신 프로토콜' },
            { name: 'GitHub Actions', description: 'CI/CD' }
          ]}
        />
      </div>

      {/* 하단 선택 이유 */}
      <motion.div
        className="w-full max-w-5xl mt-8 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
      >
        <div className="grid grid-cols-3 gap-6">
          <ReasonCard
            icon="💡"
            title="Why SignalR?"
            reasons={[
              '실시간 양방향 통신',
              '자동 재연결 기능',
              'Groups 기반 메시징'
            ]}
            color="green"
          />
          <ReasonCard
            icon="⚡"
            title="Why ASP.NET Core?"
            reasons={[
              '고성능 서버',
              '크로스 플랫폼',
              '풍부한 생태계'
            ]}
            color="green"
          />
          <ReasonCard
            icon="🚀"
            title="Why Render.com?"
            reasons={[
              '간편한 배포',
              '자동 스케일링',
              '무료 SSL'
            ]}
            color="green"
          />
        </div>
      </motion.div>
    </div>
  );
}

// Stack Layer
function StackLayer({ title, subtitle, color, delay, technologies }: {
  title: string;
  subtitle: string;
  color: string;
  delay: number;
  technologies: Array<{ name: string; description: string }>;
}) {
  return (
    <motion.div
      className="relative p-8 bg-green-950/30 border-2 border-green-400/50 rounded-2xl backdrop-blur-md"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(34, 197, 94, 0.2)' }}
    >
      {/* 헤더 */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-3xl font-bold text-green-400 font-mono mb-1">
            {title}
          </h3>
          <p className="text-gray-400 font-mono text-sm">
            {subtitle}
          </p>
        </div>

        {/* 레이어 뱃지 */}
        <div className="px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-lg font-mono text-xs font-bold text-green-300">
          LAYER {delay === 0.2 ? '3' : delay === 0.6 ? '2' : '1'}
        </div>
      </div>

      {/* 기술 목록 */}
      <div className="grid grid-cols-2 gap-4">
        {technologies.map((tech, i) => (
          <motion.div
            key={i}
            className="flex items-start gap-3 p-4 bg-green-950/40 border border-green-400/30 rounded-lg hover:border-green-500/50 transition-all"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.2 + i * 0.1 }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
            <div>
              <h4 className="text-green-400 font-mono text-sm font-bold mb-1">
                {tech.name}
              </h4>
              <p className="text-gray-400 font-mono text-xs">
                {tech.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 글로우 효과 */}
      <div className="absolute inset-0 bg-green-950/30 rounded-2xl blur-2xl opacity-0 hover:opacity-20 transition-opacity -z-10" />
    </motion.div>
  );
}

// Connection Line
function ConnectionLine({ delay }: { delay: number }) {
  return (
    <motion.div
      className="relative h-16 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      {/* 세로선 */}
      <motion.div
        className="w-px h-full bg-gradient-to-b from-green-500 via-green-400 to-green-500"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: delay + 0.2, duration: 0.6 }}
      />

      {/* 중앙 노드 */}
      <motion.div
        className="absolute w-6 h-6 bg-gradient-to-r from-green-500 to-green-400 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: delay + 0.4, type: 'spring' }}
      >
        {/* 펄스 링 */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-green-400"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
        />
      </motion.div>

      {/* 데이터 패킷 */}
      <motion.div
        className="absolute w-3 h-3 bg-green-400 rounded-full"
        animate={{
          y: [-32, 32, -32],
          opacity: [0, 1, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
    </motion.div>
  );
}

// Reason Card
function ReasonCard({ icon, title, reasons, color }: {
  icon: string;
  title: string;
  reasons: string[];
  color: string;
}) {
  return (
    <motion.div
      className="p-5 bg-green-950/30 border border-green-400/50 rounded-xl backdrop-blur-md"
      whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(34, 197, 94, 0.2)' }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-3xl">{icon}</div>
        <h4 className="text-green-400 font-mono text-sm font-bold">
          {title}
        </h4>
      </div>
      <ul className="space-y-2">
        {reasons.map((reason, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-300 font-mono text-xs">
            <span className="text-green-400 mt-0.5">→</span>
            <span>{reason}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
