// GalleryHeading.jsx
import React from "react";
import { motion } from "framer-motion";

const sentence = "Welcome to SVIT Gallery";
const letters = sentence.split("");

export default function GalleryHeading() {
  return (
    <header className="relative w-full text-center py-14 overflow-hidden
                       bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      {/* ===== animated background spotlight ===== */}
      <motion.div
        className="absolute inset-0 opacity-30 bg-gradient-to-r from-transparent via-white to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
      />

      {/* ===== main heading ===== */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
      >
        {letters.map((char, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: -60, rotate: -25 },
              visible: { opacity: 1, y: 0, rotate: 0 },
            }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}

        {/* glowing SVIT word */}
        <motion.span
          className="ml-3 text-yellow-300"
          animate={{ color: ["#fde047", "#facc15", "#fef08a", "#facc15", "#fde047"] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          SVIT
        </motion.span>
      </motion.h1>

      {/* ===== floating subtitle ===== */}
      <motion.p
        className="mt-4 text-lg md:text-xl text-gray-200"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: [0, -8, 0] }}
        transition={{
          opacity: { delay: 0.8, duration: 0.6 },
          y: { delay: 0.8, duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        Explore the best moments captured at SVIT
      </motion.p>
    </header>
  );
}