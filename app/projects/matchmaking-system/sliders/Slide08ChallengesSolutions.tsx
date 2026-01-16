'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Slide08ChallengesSolutions() {
  const [selectedChallenge, setSelectedChallenge] = useState(0);

  const challenges = [
    {
      id: 1,
      title: 'Challenge #1: 로비 정리 누락',
      problem: '플레이어가 나갔는데 로비에 남아있음',
      icon: '🔴',
      color: 'red',
      before: {
        title: '문제 상황',
        description: '클라이언트가 갑자기 종료되거나 네트워크가 끊겼을 때',
        code: '// 플레이어가 로비에 그대로 남음\n// → 다른 플레이어들은 계속 대기\n// → 절대 매칭이 완료되지 않음',
        issue: '메모리 누수 + 무한 대기'
      },
      after: {
        title: '해결 방법',
        description: 'OnDisconnectedAsync 오버라이드',
        code: `public override async Task OnDisconnectedAsync(Exception? ex)
{
    var lobby = _lobbiesManager
        .RemovePlayerFromAllLobbies(connectionId);

    if (lobby != null) {
        await NotifyLobbyUpdated(lobby);
    }
}`,
        result: '자동 정리 + 다른 플레이어들에게 즉시 알림'
      }
    },
    {
      id: 2,
      title: 'Challenge #2: SignalR 콜백 스레드 이슈',
      problem: 'Unity API를 다른 스레드에서 호출',
      icon: '🟡',
      color: 'yellow',
      before: {
        title: '문제 상황',
        description: 'SignalR 콜백이 백그라운드 스레드에서 실행됨',
        code: `_connection.On<LobbyStatus>("LobbyUpdated", (status) => {
    // ❌ UnityException: Unity API는
    // 메인 스레드에서만 호출 가능!
    statusText.text = "Updated";
});`,
        issue: 'UnityException 발생'
      },
      after: {
        title: '해결 방법',
        description: 'UnityMainThreadDispatcher 구현',
        code: `_connection.On<LobbyStatus>("LobbyUpdated", (status) => {
    UnityMainThreadDispatcher.Enqueue(() => {
        // ✓ 메인 스레드에서 안전하게 실행
        statusText.text = "Updated";
        OnLobbyUpdated?.Invoke(status);
    });
});`,
        result: 'Thread-safe Unity API 호출'
      }
    },
    {
      id: 3,
      title: 'Challenge #3: 동시 접근 경합',
      problem: '여러 클라이언트가 동시에 같은 로비 수정',
      icon: '🟢',
      color: 'green',
      before: {
        title: '문제 상황',
        description: 'Race Condition 발생',
        code: `// Thread 1: _members.Count == 3
// Thread 2: _members.Count == 3 (동시)
// → 둘 다 추가 시도
// → 5명이 4인 로비에 들어감!`,
        issue: 'Data Corruption'
      },
      after: {
        title: '해결 방법',
        description: 'Lock + ConcurrentDictionary',
        code: `public bool AddMember(string connectionId) {
    lock (_gate) {
        if (_members.Count >= MaxPlayers)
            return false;

        return _members.Add(connectionId);
    }
}`,
        result: 'Thread-safe 보장 + 데이터 무결성'
      }
    }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-12 py-16 overflow-hidden relative">
      {/* 배경 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* 헤더 */}
      <motion.div
        className="text-center mb-12 z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 font-mono mb-3">
          Challenges & Solutions
        </h2>
        <p className="text-xl text-green-300 font-mono">
          개발 과정에서 마주한 기술적 도전과 해결
        </p>
      </motion.div>

      {/* 챌린지 선택 버튼 */}
      <div className="flex gap-4 mb-8 z-10">
        {challenges.map((challenge, index) => (
          <motion.button
            key={challenge.id}
            onClick={() => setSelectedChallenge(index)}
            className={`px-6 py-3 border-2 rounded-xl font-mono text-sm font-bold transition-all ${
              selectedChallenge === index
                ? challenge.color === 'red'
                  ? 'border-red-400 bg-red-950/50 text-red-400 shadow-lg shadow-red-500/30'
                  : challenge.color === 'yellow'
                  ? 'border-yellow-400 bg-yellow-950/50 text-yellow-400 shadow-lg shadow-yellow-500/30'
                  : 'border-green-400 bg-green-950/50 text-green-400 shadow-lg shadow-green-500/30'
                : 'border-gray-600 bg-gray-900/50 text-gray-400 hover:border-gray-500'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-2xl mr-2">{challenge.icon}</span>
            Challenge #{challenge.id}
          </motion.button>
        ))}
      </div>

      {/* 메인 콘텐츠 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedChallenge}
          className="w-full max-w-6xl z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5 }}
        >
          {/* 타이틀 */}
          <div className="text-center mb-8">
            <h3 className={`text-3xl font-bold ${
              challenges[selectedChallenge].color === 'red' ? 'text-red-400' :
              challenges[selectedChallenge].color === 'yellow' ? 'text-yellow-400' : 'text-green-400'
            } font-mono mb-2`}>
              {challenges[selectedChallenge].title}
            </h3>
            <p className="text-xl text-gray-300 font-mono">
              {challenges[selectedChallenge].problem}
            </p>
          </div>

          {/* Before & After */}
          <div className="grid grid-cols-2 gap-8">

            {/* Before (문제) */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">❌</div>
                <div>
                  <h4 className="text-2xl font-bold text-red-400 font-mono">Before</h4>
                  <p className="text-sm text-gray-400 font-mono">
                    {challenges[selectedChallenge].before.title}
                  </p>
                </div>
              </div>

              <div className="p-5 bg-red-950/30 border-2 border-red-400/50 rounded-xl">
                <p className="text-gray-300 font-mono text-sm mb-4">
                  {challenges[selectedChallenge].before.description}
                </p>

                <div className="p-4 bg-black/40 border border-red-400/30 rounded-lg overflow-x-auto">
                  <pre className="text-red-300 font-mono text-xs whitespace-pre-wrap">
                    {challenges[selectedChallenge].before.code}
                  </pre>
                </div>

                <div className="mt-4 p-3 bg-red-900/30 border border-red-500/50 rounded-lg">
                  <p className="text-red-400 font-mono text-sm">
                    ⚠️ {challenges[selectedChallenge].before.issue}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* After (해결) */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl">✅</div>
                <div>
                  <h4 className="text-2xl font-bold text-green-400 font-mono">After</h4>
                  <p className="text-sm text-gray-400 font-mono">
                    {challenges[selectedChallenge].after.title}
                  </p>
                </div>
              </div>

              <div className="p-5 bg-green-950/30 border-2 border-green-400/50 rounded-xl">
                <p className="text-gray-300 font-mono text-sm mb-4">
                  {challenges[selectedChallenge].after.description}
                </p>

                <div className="p-4 bg-black/40 border border-green-400/30 rounded-lg overflow-x-auto">
                  <pre className="text-green-300 font-mono text-xs whitespace-pre-wrap">
                    {challenges[selectedChallenge].after.code}
                  </pre>
                </div>

                <div className="mt-4 p-3 bg-green-900/30 border border-green-500/50 rounded-lg">
                  <p className="text-green-400 font-mono text-sm">
                    ✓ {challenges[selectedChallenge].after.result}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 화살표 (중앙) */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <div className="w-16 h-16 bg-green-500/20 border-2 border-green-400 rounded-full flex items-center justify-center backdrop-blur-md">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* 하단 요약 */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-6 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="px-6 py-3 bg-gradient-to-r from-red-950/50 via-yellow-950/50 to-green-950/50 border border-green-400/50 rounded-xl backdrop-blur-md">
          <p className="text-green-400 font-mono text-sm text-center">
            3개의 주요 이슈 → 완벽한 해결 → 안정적인 프로덕션
          </p>
        </div>
      </motion.div>
    </div>
  );
}
