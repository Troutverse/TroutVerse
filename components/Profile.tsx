//components/Profile.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <motion.section
      className="flex flex-col items-center max-w-sm w-full glass-card p-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
      transition={{ duration: 1, ease: "easeOut", repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
    >
      <motion.div
        className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-2 mt-2"
        initial={{ rotate: 0, scale: 1 }}
        whileHover={{ rotate: 360, scale: 1.1, transition: { duration: 1, ease: "easeInOut" } }}
      >
        <Image
          src="/Profile.png"
          alt="Profile Picture"
          width={128}
          height={128}
          className="object-cover w-full h-full"
        />
      </motion.div>

      <motion.div className="p-4 text-center">
        <motion.h1
          className="text-2xl font-bold text-white mb-1" 
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Trout
        </motion.h1>

        <motion.p
          className="text-sm text-gray-200 mb-1" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Age: 27
        </motion.p>

        <motion.p
          className="text-gray-300 mb-2" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Metaverse + VR + XR
        </motion.p>

        <motion.p
          className="text-xs text-gray-400 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          "☀ おはよう"
        </motion.p>
      </motion.div>

      <div className="bg-blue-600 w-full py-2 text-center text-white text-xs font-semibold rounded-b-xl">
        troutverse@gmail.com
      </div>
    </motion.section>
  );
}