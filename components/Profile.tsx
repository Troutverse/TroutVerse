"use client"

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Profile() {
  return (
    <motion.div
      className="flex flex-col items-center mt-8"
      initial={{ rotate: 0, scale: 1 }}
      whileInView={{ rotate: 360, scale: 1.2 }}
      whileHover={{ scale: 1.3 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      <div className="w-40 h-40 rounded-full overflow-hidden shadow-xl border-4 border-white">
        <Image
          src="/Profile.jpg" // public 폴더에 넣은 이미지 경로
          alt="Profile Picture"
          width={160}
          height={160}
          className="object-cover w-full h-full"
        />
      </div>
      <h2 className="text-2xl font-semibold mt-4">Trout</h2>
      <p className="text-gray-500">Frontend Developer</p>
    </motion.div>
  );
}