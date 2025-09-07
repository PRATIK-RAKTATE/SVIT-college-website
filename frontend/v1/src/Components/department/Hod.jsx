import React from "react";
<<<<<<< HEAD
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
=======

const Hod = ({ Hodimg, Hodname, hodQ }) => {
  return (
    <section className="w-full p-4 max-w-5xl md:mt-12 items-center mx-auto">
      <figure className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto">
        <img
          src={Hodimg}
          alt="Head of Department"
          className="w-full h-60 sm:h-72 md:h-96 lg:h-auto rounded-md shadow-xl object-contain"
        />
        <figcaption className="mt-4 text-center">
          <p className="text-lg sm:text-xl font-semibold text-slate-800">
>>>>>>> 463ea8d29b1846ee6d61d4f414e7560ee01a686a
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
