import React from "react";
import { motion } from "framer-motion";

const Hod = ({ Hodimg, Hodname, hodQ }) => {
  // Variants for staggered animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="max-w-5xl max-h-116 mt-13 px-6 py-14 flex justify-center items-center bg-gradient-to-br from-slate-100 to-slate-200">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl items-center"
      >
        {/* Image with slide-in */}
        <motion.div variants={fadeRight} className="flex justify-center">
          <img
            src={Hodimg}
            alt="Head of Department"
            className="w-64 h-80 md:w-72 md:h-96 object-cover rounded-xl shadow-lg border border-slate-200"
          />
        </motion.div>

        {/* Text with fade-up */}
        <motion.div variants={fadeUp} className="space-y-4 text-center md:text-left">
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-slate-900"
          >
            {Hodname}
          </motion.h2>

          {/* Animated underline */}
          <motion.div
            variants={fadeUp}
            className="w-20 h-1 bg-cyan-500 rounded-full mx-auto md:mx-0"
          />

          <motion.p
            variants={fadeUp}
            className="text-slate-700 text-base md:text-lg leading-relaxed italic"
          >
            “{hodQ}”
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hod;
