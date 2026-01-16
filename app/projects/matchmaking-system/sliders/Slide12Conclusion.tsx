'use client';

import { motion } from 'framer-motion';

export default function Slide12Conclusion() {
  return (
    <div className="w-full h-full flex flex-col items-center overflow-y-auto px-20 pt-12 pb-32 custom-scrollbar">
      {/* 사이버펑크 스크롤바 */}
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
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, #22c55e 2px, transparent 2px)`,
            backgroundSize: '100px 100px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px']
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      <div className="max-w-5xl w-full space-y-12 z-10">

        {/* 헤더 */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-7xl font-bold text-green-400 font-mono mb-4">
            Conclusion
          </h2>
          <p className="text-2xl text-green-300 font-mono">
            개발 여정과 다음 도전
          </p>
        </motion.div>

        {/* 개발 여정 타임라인 */}
        <motion.div
          className="p-8 bg-green-950/30 border-2 border-green-500/50 rounded-2xl backdrop-blur-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-green-400 font-mono mb-6 flex items-center gap-3">
            <span className="text-3xl">🗺️</span>
            Development Journey
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <JourneyStep
              phase="Week 1"
              title="Architecture"
              description="설계 및 기술 스택 선정"
              color="green"
              delay={0.5}
            />
            <JourneyStep
              phase="Week 2"
              title="Implementation"
              description="핵심 기능 개발 및 테스트"
              color="green"
              delay={0.6}
            />
            <JourneyStep
              phase="Week 3"
              title="Polish"
              description="최적화 및 배포"
              color="green"
              delay={0.7}
            />
          </div>
        </motion.div>

        {/* 핵심 성과 */}
        <motion.div
          className="p-8 bg-green-950/30 border-2 border-green-400/50 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-green-400 font-mono mb-6 flex items-center gap-3">
            <span className="text-3xl">🏆</span>
            Key Achievements
          </h3>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-green-400 font-mono text-5xl font-bold mb-2">3주</p>
              <p className="text-gray-400 font-mono text-sm">개발 기간</p>
            </div>
            <div>
              <p className="text-green-400 font-mono text-5xl font-bold mb-2">100%</p>
              <p className="text-gray-400 font-mono text-sm">안정성</p>
            </div>
            <div>
              <p className="text-green-400 font-mono text-5xl font-bold mb-2">99.8%</p>
              <p className="text-gray-400 font-mono text-sm">성공률</p>
            </div>
          </div>
        </motion.div>

        {/* 핵심 배움 */}
        <motion.div
          className="p-8 bg-green-950/30 border border-green-500/50 rounded-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-green-400 font-mono mb-6 flex items-center gap-3">
            <span className="text-3xl">📚</span>
            Core Learnings
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <LearningItem
              title="실시간 통신 아키텍처"
              description="SignalR을 활용한 WebSocket 기반 시스템 설계"
              delay={1.2}
            />
            <LearningItem
              title="동시성 제어 패턴"
              description="Lock과 ConcurrentDictionary를 통한 Thread-safe 구현"
              delay={1.3}
            />
            <LearningItem
              title="클라우드 배포 경험"
              description="Docker와 Render.com을 활용한 프로덕션 배포"
              delay={1.4}
            />
            <LearningItem
              title="Unity ↔ Server 통신"
              description="크로스 플랫폼 실시간 통신 구현"
              delay={1.5}
            />
          </div>
        </motion.div>

        {/* 기술 스택 요약 */}
        <motion.div
          className="p-8 bg-green-950/30 border border-green-500/50 rounded-2xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-green-400 font-mono mb-6 flex items-center gap-3">
            <span className="text-3xl">🛠️</span>
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Unity 2022.3',
              'C# 12',
              'SignalR',
              'ASP.NET Core 8.0',
              'WebSocket',
              'Render.com',
              'Docker',
              'GitHub Actions'
            ].map((tech, i) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 font-mono text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + i * 0.05 }}
                whileHover={{ scale: 1.1, borderColor: 'rgba(74, 222, 128, 0.8)' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* 다음 단계 */}
        <motion.div
          className="p-8 bg-yellow-950/30 border border-yellow-500/50 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-yellow-400 font-mono mb-6 flex items-center gap-3">
            <span className="text-3xl">🚀</span>
            Next Steps
          </h3>
          <ul className="space-y-4">
            {[
              { icon: '🎯', text: 'ELO 기반 스킬 매칭 시스템' },
              { icon: '💾', text: 'Redis 캐싱 레이어 추가' },
              { icon: '📊', text: '매칭 히스토리 및 분석 대시보드' },
              { icon: '🌍', text: '글로벌 리전 지원 확장' }
            ].map((item, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-4 text-gray-300 font-mono text-lg"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 + i * 0.1 }}
              >
                <span className="text-3xl">{item.icon}</span>
                <span>{item.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* 마무리 메시지 */}
        <motion.div
          className="text-center p-10 bg-green-950/40 border-2 border-green-500/50 rounded-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.p
            className="text-3xl text-green-400 font-mono font-bold mb-4"
            animate={{
              textShadow: [
                '0 0 0px rgba(34, 197, 94, 0)',
                '0 0 20px rgba(34, 197, 94, 0.8)',
                '0 0 0px rgba(34, 197, 94, 0)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          >
            "From Zero to Production-Ready"
          </motion.p>
          <p className="text-xl text-gray-300 font-mono leading-relaxed">
            3주 만에 완성한 엔터프라이즈급 실시간 매칭 시스템<br />
            설계부터 배포까지 전체 개발 사이클 경험
          </p>

          {/* 애니메이션 아이콘 */}
          <motion.div
            className="mt-8 text-6xl"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 360, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            🎉
          </motion.div>
        </motion.div>

        {/* 감사 메시지 */}
        <motion.div
          className="text-center pb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 0.8 }}
        >
          <p className="text-gray-500 font-mono text-lg mb-2">
            Thank you for watching!
          </p>
          <div className="flex items-center justify-center gap-4 text-green-400 font-mono text-sm">
            {/* TODO: 실제 GitHub 링크와 이메일로 변경 */}
            <a href="#" className="hover:text-green-300 transition-colors">
              GitHub
            </a>
            <span>•</span>
            <a href="#" className="hover:text-green-300 transition-colors">
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Journey Step
function JourneyStep({ phase, title, description, color, delay }: {
  phase: string;
  title: string;
  description: string;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      className="p-5 bg-green-950/40 border-2 border-green-400/50 rounded-xl backdrop-blur-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.05 }}
    >
      <p className="text-green-400 font-mono text-sm font-bold mb-2">
        {phase}
      </p>
      <h4 className="text-white font-mono text-xl font-bold mb-2">
        {title}
      </h4>
      <p className="text-gray-400 font-mono text-xs">
        {description}
      </p>
    </motion.div>
  );
}

// Learning Item
function LearningItem({ title, description, delay }: {
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      className="p-5 bg-green-950/40 border border-green-400/30 rounded-xl hover:border-green-400/60 transition-all"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <h4 className="text-green-400 font-mono text-base font-bold mb-2">
        {title}
      </h4>
      <p className="text-gray-400 font-mono text-sm">
        {description}
      </p>
    </motion.div>
  );
}
