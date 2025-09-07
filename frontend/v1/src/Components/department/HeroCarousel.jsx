import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Carousel({ slides, interval = 4500 }) {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Progress bar effect
  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min((elapsed / interval) * 100, 100));
    }, 50);
    return () => clearInterval(timer);
  }, [index, interval]);

  // Auto-slide effect
  useEffect(() => {
    const slideTimer = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      interval,
    );
    return () => clearInterval(slideTimer);
  }, [slides.length, interval]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* Gradient overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 z-10"
      />

      {/* Slides with fade + zoom */}
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, i) =>
            i === index && (
              <motion.div
                key={i}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
              >
                <motion.img
                  src={slide.img}
                  alt={`Slide ${i}`}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.1 }}
                  transition={{ duration: 8, ease: "easeOut" }}
                />
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Text + animated loader */}
      <div className="absolute bottom-28 sm:bottom-32 left-4 right-4 md:left-12 z-20 space-y-6">
        <AnimatePresence mode="wait">
          <motion.h1
            key={index} // ensures animation triggers on change
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-sans font-extrabold text-white drop-shadow-2xl
                       text-2xl sm:text-3xl md:text-4xl lg:text-6xl"
          >
            {slides[index].text}
          </motion.h1>
        </AnimatePresence>

        {/* Smooth horizontal loader */}
        <div className="w-80 h-2 bg-white/20 rounded-full overflow-hidden shadow-lg">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 shadow-[0_0_10px_#0ff]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          />
        </div>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, i) => (
          <motion.button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index
                ? "bg-cyan-400 scale-125 shadow-[0_0_8px_#0ff]"
                : "bg-white/40"
            }`}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      {/* Cinematic vignette */}
      <div className="absolute inset-0 pointer-events-none z-20 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
    </div>
  );
}
