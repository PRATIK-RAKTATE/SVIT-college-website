// ArchivementTimeline.jsx
import React from "react";
import { motion } from "framer-motion";

const achievements = [
  {
    year: "2024",
    title: "NBA Tier-I",
    desc: "All UG programmes re-accredited for 6 years",
    icon: "🎖",
  },
  {
    year: "2023",
    title: "AI IDEA Lab",
    desc: "₹ 1 Cr grant from AICTE & Meta",
    icon: "🚀",
  },
  {
    year: "2022",
    title: "Research Day",
    desc: "450+ papers published / 38 patents filed",
    icon: "📄",
  },
  {
    year: "2021",
    title: "Start-up Hub",
    desc: "38 start-ups incubated at IEDC",
    icon: "💡",
  },
  {
    year: "2020",
    title: "Industry MoUs",
    desc: "92 collaborations signed globally",
    icon: "🌐",
  },
];

const cardVariants = {
  left: { hidden: { x: -80, opacity: 0 }, show: { x: 0, opacity: 1 } },
  right: { hidden: { x: 80, opacity: 0 }, show: { x: 0, opacity: 1 } },
};

const iconVariants = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { type: "spring", stiffness: 300 } },
};

export default function ArchivementTimeline() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b mt-5 from-gray-50 rounded-2xl shadow-lg border border-gray-200 to-white">
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center text-[#4F39F6] mb-12"
      >
        Milestones
      </motion.h2>

      <div className="relative max-w-5xl mx-auto">
        {/* centre ribbon */}
        <div className="absolute left-1/2 top-0 h-full w-1 bg-[#4F39F6] -translate-x-1/2" />

        {achievements.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div key={i} className="flex items-center mb-10 last:mb-0">
              {/* left card */}
              <motion.div
                className={`w-5/12 ${isLeft ? "pr-8 text-right" : "ml-auto pl-8"}`}
                initial={cardVariants[isLeft ? "left" : "right"].hidden}
                whileInView={cardVariants[isLeft ? "left" : "right"].show}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="bg-white rounded-2xl shadow-lg p-2 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              </motion.div>

              {/* centre icon */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={iconVariants}
                className="z-10 flex items-center justify-center w-14 h-14 rounded-full bg-cyan-400 text-2xl shadow-lg"
              >
                {item.icon}
              </motion.div>

              {/* right card (spacer) */}
              <div className={`w-5/12 ${isLeft ? "ml-auto pl-8" : ""}`} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
