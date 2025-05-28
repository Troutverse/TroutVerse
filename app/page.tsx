'use client';

import Profile from '@/components/Profile';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <motion.section
      className="text-center mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hi, I&apos;m Trout
      </motion.h1>

      <Profile />

      <motion.p
        className="mb-4 mt-4"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Frontend Developer | React | Next.js | TypeScript
      </motion.p>

      <motion.p
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        Welcome to my portfolio website!
      </motion.p>
    </motion.section>
  );
}