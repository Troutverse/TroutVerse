'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Slide04Flow() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 6);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      id: 1,
      title: '1. Connect',
      description: 'SignalR 서버 연결',
      icon: '🔌',
      color: 'green',
      detail: 'HubConnectionBuilder를 통한 WebSocket 연결'
    },
    {
      id: 2,
      title: '2. Find/Create Lobby',
      description: '로비 찾기 또는 생성',
      icon: '🔍',
      color: 'green',
      detail: 'FindLobby() → 없으면 CreateLobby()'
    },
    {
      id: 3,
      title: '3. Join Queue',
      description: '매칭 큐 입장',
      icon: '⏳',
      color: 'green',
      detail: 'AddMember() + SignalR Groups 추가'
    },
    {
      id: 4,
      title: '4. Waiting',
      description: '플레이어 대기중',
      icon: '👥',
      color: 'yellow',
      detail: '실시간 로비 상태 업데이트 수신'
    },
    {
      id: 5,
      title: '5. Match Found',
      description: '매칭 완료!',
      icon: '✨',
      color: 'green',
      detail: 'IsFull == true → OnMatchFound 이벤트'
    },
    {
      id: 6,
      title: '6. Game Start',
      description: '게임 씬 로드',
      icon: '🎮',
      color: 'green',
      detail: 'SceneManager.LoadScene("InGame")'
    }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-12 pt-16 pb-24 overflow-hidden relative">
      {/* 배경 애니메이션 */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, #22c55e 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px']
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {/* 헤더 */}
      <motion.div
        className="text-center mb-16 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-6xl font-bold text-green-400 font-mono mb-3">
          Matchmaking Flow
        </h2>
        <p className="text-xl text-green-300 font-mono">
          실시간 매칭 프로세스
        </p>
      </motion.div>

      {/* 플로우 스텝 카드들 */}
      <div className="relative w-full max-w-6xl h-96 flex items-center justify-center z-10">
        <div className="flex items-center gap-6 w-full justify-center">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <StepCard
                step={step}
                isActive={currentStep === index}
                isPast={currentStep > index}
                index={index}
              />

              {/* 화살표 (마지막 제외) */}
              {index < steps.length - 1 && (
                <motion.div
                  className="mx-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    className={`${
                      currentStep > index ? 'text-green-400' : 'text-gray-600'
                    } transition-colors duration-500`}
                  >
                    <motion.path
                      d="M5 20 L25 20 M18 13 L25 20 L18 27"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      animate={currentStep > index ? {
                        pathLength: [0, 1],
                        opacity: [0, 1]
                      } : {}}
                      transition={{ duration: 0.5 }}
                    />
                  </svg>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 하단 상세 설명 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-3xl z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className={`p-6 bg-green-950/30 backdrop-blur-md border-2 border-green-400/50 rounded-2xl`}>
            <div className="flex items-center gap-4 mb-3">
              <div className="text-5xl">{steps[currentStep].icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-green-400 font-mono">
                  {steps[currentStep].title}
                </h3>
                <p className="text-gray-300 font-mono text-sm">
                  {steps[currentStep].description}
                </p>
              </div>
            </div>
            <div className="p-4 bg-green-950/50 border border-green-400/30 rounded-lg">
              <code className="text-green-300 font-mono text-sm">
                {steps[currentStep].detail}
              </code>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* 프로그레스 바 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-96 h-2 bg-gray-800 rounded-full overflow-hidden z-10">
        <motion.div
          className="h-full bg-gradient-to-r from-green-400 to-green-500"
          initial={{ width: '0%' }}
          animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* 단계 인디케이터 */}
      <div className="absolute top-8 right-8 flex gap-2 z-10">
        {steps.map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentStep === index
                ? 'bg-green-400'
                : currentStep > index
                ? 'bg-green-500'
                : 'bg-gray-600'
            }`}
            animate={currentStep === index ? {
              scale: [1, 1.5, 1],
              boxShadow: [
                '0 0 0px rgba(34, 197, 94, 0)',
                '0 0 15px rgba(34, 197, 94, 0.8)',
                '0 0 0px rgba(34, 197, 94, 0)'
              ]
            } : {}}
            transition={{ duration: 1, repeat: Infinity }}
          />
        ))}
      </div>
    </div>
  );
}

// Step Card
function StepCard({ step, isActive, isPast, index }: {
  step: { id: number; title: string; icon: string; color: string };
  isActive: boolean;
  isPast: boolean;
  index: number;
}) {
  return (
    <motion.div
      className={`relative w-32 h-40 border-2 rounded-xl flex flex-col items-center justify-center backdrop-blur-md transition-all duration-500 ${
        isActive
          ? 'border-green-400 bg-green-500/20 text-green-400 shadow-2xl scale-110'
          : isPast
          ? 'border-green-400/50 bg-green-500/10 scale-95 opacity-70'
          : 'border-gray-600 bg-gray-800/20 scale-90 opacity-50'
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
      whileHover={{ scale: isActive ? 1.15 : 1.05 }}
    >
      {/* 아이콘 */}
      <motion.div
        className="text-5xl mb-2"
        animate={isActive ? {
          scale: [1, 1.2, 1],
          rotate: [0, 5, -5, 0]
        } : {}}
        transition={{ duration: 1, repeat: Infinity }}
      >
        {step.icon}
      </motion.div>

      {/* 스텝 번호 */}
      <div className={`text-xl font-bold font-mono mb-1 ${
        isActive ? 'text-green-400' : isPast ? 'text-green-400' : 'text-gray-500'
      }`}>
        Step {step.id}
      </div>

      {/* 완료 체크 */}
      {isPast && !isActive && (
        <motion.div
          className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring' }}
        >
          <span className="text-white text-xs">✓</span>
        </motion.div>
      )}

      {/* 활성 글로우 */}
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-xl bg-green-500/30 blur-xl -z-10"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}

      {/* 펄스 링 */}
      {isActive && (
        <motion.div
          className="absolute inset-0 border-2 border-green-400 rounded-xl"
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 1.2, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
}
