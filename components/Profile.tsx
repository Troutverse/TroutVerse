"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <motion.section
      className="flex flex-col items-center mt-8"
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

      <motion.div
        className="w-40 h-40 rounded-full overflow-hidden shadow-xl border-4 border-white"
        initial={{ rotate: 0, scale: 1 }}
        whileInView={{ rotate: 360, scale: 1.2 }}
        whileHover={{
          scale: 1.3,
          transition: { duration: 0.3, ease: "easeInOut" }, // hover 진입·해제용
        }}
        transition={{
          rotate: { duration: 1.5, ease: "easeInOut" }, // rotate만 1.5초, scale은 X
        }}
      >
        <Image
          src="/Profile.jpg"
          alt="Profile Picture"
          width={160}
          height={160}
          className="object-cover w-full h-full"
        />
      </motion.div>

      <motion.h2
        className="text-2xl font-semibold mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Trout
      </motion.h2>

      <motion.p
        className="text-gray-500 mb-4 mt-2"
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
