'use client';

import { motion } from 'framer-motion';
import ThreeScene from '@/components/ThreeScene';

export default function Slide03Problem1() {
  return (
    <div className="w-full h-full flex items-center justify-between px-20">
      {/* 왼쪽: 3D 오브젝트 */}
      <motion.div
        className="w-1/2 h-full"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <ThreeScene type="sphere" color="#8B5CF6" />
      </motion.div>

      {/* 오른쪽: 콘텐츠 */}
      <div className="w-1/2 flex flex-col items-start gap-8">
        <motion.div
          className="text-6xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
        >
          🕳️
        </motion.div>

        <motion.h2
          className="text-6xl font-bold text-purple-400 font-mono"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Problem 1
        </motion.h2>

        <motion.h3
          className="text-4xl font-bold text-purple-300 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Cap Mesh 생성
        </motion.h3>

        <motion.p
          className="text-xl text-purple-200 font-mono leading-relaxed max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          절단된 메쉬의 빈 공간을 어떻게 메울 것인가?
        </motion.p>

        <motion.div
          className="mt-8 p-6 border-2 border-purple-500/50 rounded-lg bg-purple-950/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <p className="text-purple-300 font-mono text-sm leading-relaxed">
            메쉬를 자르면 <span className="text-purple-400 font-bold">구멍</span>이 생긴다.<br/>
            단순히 삭제만 하면 내부가 보이는 문제 발생.<br/>
            → 빈틈없이 채워야 함!
          </p>
        </motion.div>
      </div>
    </div>
  );
}