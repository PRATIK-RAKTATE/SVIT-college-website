import React, { useMemo, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StylishTable() {
  const rows = [
    [1, "Arts, Science and Commerce College Satral.", 1998, "http://www.pravarasatralcollege.org"],
    [2, "College of Agriculture and Biotechnology", 2003, "http://www.pravaraagribiotech.org.in"],
    [3, "English Medium School Loni.", 1975, "http://www.pravarapvpcollege.org.in"],
    [4, "HAL-Pravara Aviation Academy", 2008, "http://www.hpai.in"],
    [5, "Home Science college for Women.", 1997, "http://www.pravarahomescience.org.in"],
    [6, "Industrial Training Institute. (for boys)", 1984, "http://www.pravaraiti.org.in"],
    [7, "Industrial Training Institute. (for Women)", 1990, "http://www.pravarapharmacy.org.in"],
    [8, "Kreeda Prabodhini.", 1997, "http://www.pravarakridaprabodhini.org.in"],
    [9, "Padhmashri Dr. Vitthalrao Vikhe Patil Arts, Science and Commerce College.", 1971, "http://www.pravarakvm.org.in"],
    [10, "Padhmashri Dr. Vitthalrao Vikhe Patil Institute of Technology and Engineering. (Polytechnic)", 1981, "http://www.pravaraems.org"],
    [11, "Padmashri Dr. Vitthalrao Vikhe Patil Sainik School.", 1999, "http://www.pravarasainiksch.org.in"],
    [12, "Pandit Jawaharlal Nehru Academy of Finance.", 1983, "http://www.pravarakalaacadamy.org.in"],
    [13, "Pravara Kanya Vidya Mandir", 1969, "http://www.pravarapps.org.in"],
    [14, "Pravara Public School", 1964, "https://www.pravarapublicschool.org"],
    [15, "Pravara Rural College of Architecture.", 1996, "http://www.pravaraarchitecture.org.in"],
    [16, "Pravara Rural College of Education.", 1990, "http://www.pravarabed.org.in"],
    [17, "Pravara Rural College of Pharmacy.", 1987, "http://www.pravarapharmacy.org.in"],
    [18, "Pravara Rural College of Physical Education.", 1992, "http://www.pravarabped.org.in"],
    [19, "Pravara Rural Engineering College.", 1983, "http://www.pravaraengg.org.in"],
    [20, "Shri Sai Baba Institute of Engineering Research and Allied Sciences", 1997, "http://www.pravarassri.org.in"],
    [21, "Sir Visvesvaraya Institute of Technology, Nashik", 1998, "http://www.svitnashik.in"],
    [22, "Women College of Pharmacy Chincholi.", 2006, "http://www.pravaracopc.org.in"],
  ];

  // detect reduced motion
  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const spring = prefersReducedMotion
    ? { type: "tween", duration: 0 }
    : { type: "spring", stiffness: 120 };

  const shimmer = {
    initial: { x: "-100%" },
    animate: { x: "100%" },
    transition: { repeat: Infinity, duration: 2.5, ease: "linear" },
  };

  const particleVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: (i) => ({
      opacity: [0, 0.6, 0],
      scale: [0, 1.2, 0],
      y: [-20, -80],
      transition: {
        delay: i * 0.2,
        duration: 3,
        repeat: Infinity,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 relative overflow-hidden">
      {/* Floating particles */}
      {!prefersReducedMotion &&
        [...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-purple-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={particleVariants}
            initial="initial"
            animate="animate"
            custom={i}
          />
        ))}

      <motion.div
        className="relative z-10 flex items-center justify-center p-4 md:p-10"
        style={mounted ? { y: yRange } : {}}
      >
        <motion.div
          className="w-full max-w-7xl backdrop-blur-lg bg-white/70 rounded-3xl shadow-2xl overflow-hidden border border-white/30"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 1, ease: "easeOut" }}
        >
          {/* Shimmer sweep title */}
          <div className="relative py-6 overflow-hidden">
            <motion.h2
              className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text tracking-wide"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.8 }}
            >
              Pravara Institutions
            </motion.h2>
            {!prefersReducedMotion && (
              <motion.div
                className="absolute inset-0 w-full h-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)",
                }}
                {...shimmer}
              />
            )}
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Sr. No</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Institution</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Year</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase">Website</th>
                </tr>
              </thead>
              <motion.tbody
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
                }}
              >
                {rows.map(([sr, name, year, link], i) => (
                  <motion.tr
                    key={sr}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={
                      prefersReducedMotion
                        ? {}
                        : {
                            scale: 1.02,
                            backgroundColor: "rgba(199, 210, 254, 0.5)",
                            boxShadow: "0 0 0 2px rgba(129, 140, 248, 0.8)",
                          }
                    }
                    transition={spring}
                    className={`cursor-pointer relative ${
                      i % 2 === 0 ? "bg-white/80" : "bg-gray-100/80"
                    }`}
                  >
                    <td className="px-6 py-4 font-bold text-indigo-700">{sr}</td>
                    <td className="px-6 py-4 text-gray-900">{name}</td>
                    <td className="px-6 py-4 text-gray-700">{year}</td>
                    <td className="px-6 py-4">
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visit ${name}`}
                        className="block text-indigo-600 hover:text-pink-600 underline transition-colors"
                      >
                        Visit
                      </a>
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="grid grid-cols-1 gap-4 p-4 md:hidden">
            {rows.map(([sr, name, year, link]) => (
              <motion.div
                key={sr}
                className="bg-white/80 rounded-2xl shadow-md border border-gray-200 p-4 cursor-pointer group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : {
                        scale: 1.05,
                        rotateY: 5,
                        boxShadow: "0 0 0 2px rgba(129, 140, 248, 0.8)",
                      }
                }
              >
                <p className="text-sm font-bold text-indigo-600">#{sr}</p>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition">
                  {name}
                </h3>
                <p className="text-sm text-gray-700">Year: {year}</p>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit ${name}`}
                  className="inline-block mt-2 text-indigo-600 group-hover:text-pink-600 underline font-medium transition"
                >
                  Visit Website →
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
