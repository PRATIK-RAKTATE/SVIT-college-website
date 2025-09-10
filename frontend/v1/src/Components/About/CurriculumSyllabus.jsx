// CurriculumInfo.jsx – full-tailwind, responsive, animated
import React from "react";
import { motion } from "framer-motion";

const CurriculumInfo = () => {
  const points = [
    "Undergraduate Engineering, Post-graduate Engineering and MBA Curriculum of University of Pune.",
    "Semester Pattern, Total 8 Semesters.",
    "Semester-wise Examination Scheme.",
    "Continuous Assessment System for Term Work and Practical.",
    "Seminar at Pre-Final Semester and Project at Final Semester.",
    "Minimum 75 % Attendance in each head of passing for Grant of Term.",
    "Online Examination at F.E. and S.E. for 50 marks in each subject during the semesters and 50 marks offline examination at end of both semesters.",
    "Offline Examination of 30 marks during the semester for T.E. and 70 marks examination at the end of both semesters.",
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  };

  const headerVariants = {
    hidden: { y: -30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="px-4 py-10 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
        className="w-full max-w-4xl mx-auto"
      >
        {/* Animated header */}
        <motion.div variants={headerVariants}>
          <h2 className="text-2xl md:text-4xl font-extrabold text-center py-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Curriculum
          </h2>
        </motion.div>

        {/* Glass card */}
        <motion.div
          variants={item}
          className="bg-white/60 backdrop-blur-xl rounded-2xl shadow-2xl p-6 md:p-8 text-gray-800 space-y-4 border border-white/30"
        >
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            className="list-disc list-inside space-y-3 text-sm md:text-base"
          >
            {points.map((text, idx) => (
              <motion.li key={idx} variants={item}>
                {text}
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA */}
          <motion.div variants={item} className="pt-4 border-t border-gray-200 text-sm md:text-base">
            <p className="font-semibold text-indigo-700 mb-2">For further details visit:</p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.unipune.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              Syllabus – Click here
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CurriculumInfo;