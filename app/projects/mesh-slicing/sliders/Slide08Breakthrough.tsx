'use client';

import { motion } from 'framer-motion';
import ThreeScene from '@/components/ThreeScene';

export default function Slide08Breakthrough() {
  return (
    <div className="w-full h-full flex items-center justify-center px-20">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* 왼쪽: 3D 전구 */}
          <motion.div
            className="h-96"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <ThreeScene type="sphere" color="#FBBF24" />
          </motion.div>

          {/* 오른쪽: 콘텐츠 */}
          <div className="space-y-8">
            <motion.div
              className="text-8xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
            >
              💡
            </motion.div>

            <motion.h2
              className="text-6xl font-bold text-yellow-400 font-mono"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Breakthrough!
            </motion.h2>

            <motion.div
              className="p-8 border-2 border-yellow-400 rounded-lg bg-yellow-950/30"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <p className="text-3xl text-yellow-200 font-mono font-bold mb-6">
                "문제는 Index가 아니라<br/>
                실제 거리였다!"
              </p>
              <div className="border-t-2 border-yellow-400/30 pt-6">
                <p className="text-yellow-300 font-mono text-lg leading-relaxed">
                  Boundary chain의 10개 정점이 1m에 걸쳐 있고,<br/>
                  Hit points의 5개 점이 같은 1m에 걸쳐 있다면<br/>
                  <br/>
                  → Index 비율 (10:5) ❌<br/>
                  → 거리 비율 (1m:1m) ✅
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <div className="px-6 py-3 bg-yellow-500/20 border border-yellow-500 rounded-lg">
                <p className="text-yellow-300 font-mono text-sm">Arc-Length</p>
              </div>
              <div className="px-6 py-3 bg-yellow-500/20 border border-yellow-500 rounded-lg">
                <p className="text-yellow-300 font-mono text-sm">Normalized Progress</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}