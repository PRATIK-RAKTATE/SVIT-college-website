// TrainingPlacement.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

const objectives = [
  {
    icon: AcademicCapIcon,
    title: "Build Core Competencies",
    desc: "Prerequisite training that makes students industry-ready from day one.",
    color: "sky",
    bgGradient: "from-sky-400 to-cyan-300",
    glow: "shadow-sky-400/50",
  },
  {
    icon: BriefcaseIcon,
    title: "100 % Placement Support",
    desc: "Enable placement for every single student through dedicated drives.",
    color: "emerald",
    bgGradient: "from-emerald-400 to-green-300",
    glow: "shadow-emerald-400/50",
  },
  {
    icon: UserGroupIcon,
    title: "Industry Relations",
    desc: "Maintain relations with recruiters for student placements and requirements of industry.",
    color: "violet",
    bgGradient: "from-violet-400 to-purple-300",
    glow: "shadow-violet-400/50",
  },
  {
    icon: RocketLaunchIcon,
    title: "Career Development",
    desc: "Provide career development services to students with respect to higher Education, opportunities for growth etc.",
    color: "rose",
    bgGradient: "from-rose-400 to-pink-300",
    glow: "shadow-rose-400/50",
  },
];

const TrainingPlacement = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  /* ------------- fancy text writer ------------- */
  const writer = {
    hidden: { opacity: 0 },
    show: (i = 0) => ({
      opacity: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
      },
    }),
  };

  const Write = ({ text, delay = 0 }) => (
    <span aria-label={text}>
      {text.split("").map((ch, idx) => (
        <motion.span
          key={idx}
          variants={writer}
          initial="hidden"
          animate="show"
          custom={delay + idx}
          className="inline-block"
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );

  /* ------------- component ------------- */
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-black text-white overflow-hidden">
      {/* animated background orbs */}
      <div className="fixed inset-0 -z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 opacity-20 blur-3xl"
            style={{
              width: `${150 + i * 60}px`,
              height: `${150 + i * 60}px`,
            }}
            animate={{
              x: [0, 800, -400, 0],
              y: [0, -300, 500, 0],
            }}
            transition={{
              duration: 25 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        {/* -------------- heading -------------- */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
            animate={{ backgroundPosition: ["0%", "200%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            <Write text="Training & Placement Cell" />
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-4 text-lg text-indigo-200"
          >
            <Write text="Bridging Academia → Industry → Success" delay={1} />
          </motion.p>
        </motion.div>

        {/* -------------- objectives -------------- */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {objectives.map((o, i) => {
            const Icon = o.icon;
            const isHovered = hoveredIndex === i;
            return (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, rotateX: -90 }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.7,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  z: 50,
                }}
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                className={`relative p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl ${o.glow} overflow-hidden`}>
                {/* gradient overlay on hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.4 }}
                      exit={{ opacity: 0 }}
                      className={`absolute inset-0 bg-gradient-to-br ${o.bgGradient}`}
                    />
                  )}
                </AnimatePresence>

                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.2, type: "spring", stiffness: 150 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${o.bgGradient} grid place-items-center mb-4 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2 text-white">{o.title}</h3>
                  <p className="text-indigo-100">{o.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* -------------- contact -------------- */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl shadow-indigo-500/30">
          <motion.h2
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="text-3xl font-bold mb-6 text-white"
          >
            Get in Touch
          </motion.h2>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <motion.p
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="font-semibold text-xl text-white"
              >
                Mr. Rushikesh S. Bhalerao
              </motion.p>
              <motion.p
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="text-indigo-200"
              >
                M.E. (Computer Engg.)
              </motion.p>
              <motion.p
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-indigo-200"
              >
                Training & Placement Officer
              </motion.p>
            </div>
            <div className="space-y-4">
              <motion.a
                href="tel:+919561508626"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 text-indigo-100 hover:text-white transition"
              >
                <PhoneIcon className="w-6 h-6" />
                <span>+91 95615 08626</span>
              </motion.a>
              <motion.a
                href="mailto:rushikesh.bhalerao@pravara.in"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 text-indigo-100 hover:text-white transition"
              >
                <EnvelopeIcon className="w-6 h-6" />
                <span>rushikesh.bhalerao@pravara.in</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TrainingPlacement;