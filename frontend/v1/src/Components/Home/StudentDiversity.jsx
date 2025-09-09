// StudentDiversity.jsx
import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ----------  static data  ---------- */
const stats = {
  total: 8124,
  gender: { male: 68, female: 32 },
  states: 23,
  clubs: 42,
  hostel: 58, // % living on campus
};

const Count = ({ end, duration = 1800 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const tick = () => {
      start += step;
      if (start >= end) {
        setCount(end);
        return;
      }
      setCount(Math.floor(start));
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

/* ----------  circular progress  ---------- */
function Ring({ percent, color, label }) {
  const r = 45;
  const circ = 2 * Math.PI * r;
  const stroke = circ - (circ * percent) / 100;

  return (
    <div className="relative w-32 h-32">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={r}
          stroke="#e5e7eb"
          strokeWidth="10"
          fill="transparent"
        />
        <motion.circle
          cx="50"
          cy="50"
          r={r}
          stroke={color}
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          whileInView={{ strokeDashoffset: stroke }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-gray-800">{percent}%</span>
        <span className="text-xs text-gray-600">{label}</span>
      </div>
    </div>
  );
}

/* ----------  main component  ---------- */
export default function StudentDiversity() {
  return (
    <section className="py-16 px-6 rounded-2xl shadow-lg border border-gray-200 mt-5 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Student Community <span className="text-[#4F39F6]">Diversity</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          SVIT Nashik is home to students from every corner of India, creating a
          vibrant, inclusive learning ecosystem.
        </p>

        {/* total strength */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200 }}
          className="mb-12"
        >
          <div className="text-5xl md:text-7xl font-bold text-gray-800">
            <Count end={stats.total} />
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Total Students (2024-25)
          </div>
        </motion.div>

        {/* rings row */}
        <div className="flex flex-wrap justify-center items-center gap-10 mb-12">
          <Ring percent={stats.gender.male} color="#0891b2" label="Male" />
          <Ring percent={stats.gender.female} color="#ec4899" label="Female" />
          <Ring percent={stats.hostel} color="#10b981" label="Hostellers" />
        </div>

        {/* quick pills */}
        <div className="flex flex-wrap justify-center gap-4 text-gray-700">
          {[
            { emoji: "📍", text: `${stats.states} States & UTs` },
            { emoji: "🎭", text: `${stats.clubs} Student Clubs` },
            { emoji: "🌍", text: "10+ Countries (International Students)" },
            { emoji: "♿", text: "Inclusive Campus for Differently-Abled" },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-100 rounded-full px-4 py-2 text-sm font-medium"
            >
              {p.emoji} {p.text}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
