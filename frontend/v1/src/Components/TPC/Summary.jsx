import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const data = [
  { course: "Chemical", dept: "CH", pct: 65 },
  { course: "Computer", dept: "CO", pct: 58 },
  { course: "IT", dept: "IT", pct: 60 },
  { course: "ETC", dept: "ETC", pct: 65 },
  { course: "MBA", dept: "MBA", pct: 45 },
];

const total = 90;

/* ---------- Count-up hook ---------- */
const useCountUp = (end, duration = 1.2) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration * 1000 / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return { count, ref };
};

/* ---------- Bar ---------- */
const Bar = ({ pct, course, dept }) => {
  const { count, ref } = useCountUp(pct);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="flex items-center gap-4"
    >
      <div className="w-20 text-slate-700 font-medium">{course}</div>
      <div className="flex-1 h-10 bg-slate-200 rounded-full overflow-hidden relative shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${count}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-lg`}
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-sm font-semibold">
          {count}%
        </span>
      </div>
    </motion.div>
  );
};

/* ---------- Total Card ---------- */
const TotalCard = () => {
  const { count, ref } = useCountUp(total);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="mt-10 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl p-6 shadow-2xl"
    >
      <div className="text-center">
        <div className="text-5xl font-extrabold">{count}%</div>
        <div className="mt-2 text-indigo-100">Overall Placement A.Y. 2023-24</div>
      </div>
    </motion.div>
  );
};

/* ---------- Component ---------- */
export default function PlacementSummary() {
  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-10"
        >
          Placement Summary (Last 1 Year)
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="space-y-6"
        >
          {data.map((d) => (
            <Bar key={d.course} {...d} />
          ))}

          <TotalCard />
        </motion.div>
      </div>
    </section>
  );
}