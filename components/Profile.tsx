"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <motion.section
      className="flex flex-col items-center mt-10 max-w-sm mx-auto bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="w-40 h-40 rounded-full overflow-hidden shadow-lg border-2 mt-6"
        initial={{ rotate: 0, scale: 1 }}
        whileHover={{ rotate: 360, scale: 1.1, transition: { duration: 1, ease: "easeInOut" } }}
      >
        <Image
          src="/Profile.png"
          alt="Profile Picture"
          width={160}
          height={160}
          className="object-cover w-full h-full"
        />
      </motion.div>

      <motion.div className="p-6 text-center">
        <motion.h1
          className="text-3xl font-bold text-gray-800 mb-2"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Trout
        </motion.h1>

        <motion.p
          className="text-sm text-gray-500 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Age: 26
        </motion.p>

        <motion.p
          className="text-gray-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Metaverse + VR + XR
        </motion.p>

        <motion.p
          className="text-sm text-gray-700 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          "☀ おはよう"
        </motion.p>
      </motion.div>

      <div className="bg-blue-500 w-full py-3 text-center text-white text-sm font-semibold">
        troutverse@gmail.com
      </div>
    </motion.section>
  );
}
