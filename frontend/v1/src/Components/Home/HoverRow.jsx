import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { label: "Total Offers", end: 1274, color: "text-cyan-600" },
  { label: "Companies", end: 218, color: "text-emerald-600" },
  {
    label: "Highest CTC (LPA)",
    end: 44,
    color: "text-violet-600",
    suffix: " L",
  },
  { label: "Avg. CTC (LPA)", end: 7.2, color: "text-rose-600", decimals: 1 },
];

const Count = ({ end, decimals = 0, duration = 1.8, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const stepTime = Math.abs(Math.floor((duration * 1000) / (end * 10)));
    const timer = setInterval(() => {
      start += (end - start) / 10;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(+start.toFixed(decimals));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, end, decimals, duration]);

  return (
    <span
      ref={ref}
      className="text-4xl md:text-6xl font-extrabold text-gray-800"
    >
      {count}
      {suffix}
    </span>
  );
};

export default function HoverRow() {
  return (
    <section className="py-16 px-6 rounded-2xl shadow-lg border border-gray-200 mt-5 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12 text-[#4F39F6]">
          Placement Highlights
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 200 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <Count end={s.end} decimals={s.decimals} suffix={s.suffix} />
              <p className={`mt-3 text-sm font-medium ${s.color}`}>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
