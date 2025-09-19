"use client"

import Image from "next/image";
import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <motion.div
      className="relative"
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-lg blur-2xl opacity-40"
        style={{
          background: "linear-gradient(90deg, #38bdf8, #a855f7, #ec4899)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, -10, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      ></motion.div>
      <Image
        src="/yusuf-img.png"
        alt="Yusuf Usman image"
        width={400}
        height={500}
        className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] object-cover rounded-lg shadow-lg cursor-not-allowed"
        priority
      />
    </motion.div>
  );
};

export default HeroImage;
