// Campus.jsx – Enhanced version with animations, hover effects & CTA
import React from "react";
import { motion } from "framer-motion";

const Campus = () => {
  const stats = [
    { label: "Acres", value: "93", color: "text-emerald-500" },
    { label: "Km from Station", value: "12", color: "text-sky-500" },
    { label: "Highways", value: "2", color: "text-amber-500" },
  ];

  const sentence =
    "Spread across 93 acres surrounded by hills on the Nashik-Pune / Mumbai-Shirdi highway, 12 km from Nashik Road station — pollution-free, hill-station-like serenity.";

  const words = sentence.split(" ");

  return (
    <section className="px-4  md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* LEFT: image with hover tilt + shine */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.02, rotate: 1 }}
          className="relative group overflow-hidden rounded-3xl shadow-2xl"
        >
          <img
            src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg"
            alt="Campus"
            className="w-full h-96 md:h-[30rem] object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* shine effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/40 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </motion.div>

        {/* RIGHT: content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="text-slate-800"
        >
          {/* heading */}
          <motion.h2
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-sky-600"
          >
            Our Campus
          </motion.h2>

          {/* animated stats cards */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.15 } },
            }}
            className="flex flex-wrap gap-4 mb-8"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  show: { y: 0, opacity: 1 },
                }}
                whileHover={{ y: -6, scale: 1.08 }}
                className="px-5 py-3 rounded-2xl bg-white shadow-lg border border-slate-200 hover:shadow-xl hover:shadow-emerald-100 transition"
              >
                <div className={`text-2xl md:text-3xl font-extrabold ${s.color}`}>
                  {s.value}
                </div>
                <div className="text-sm text-slate-500">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* animated description */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.025 } },
            }}
            className="text-base md:text-lg leading-relaxed mb-8"
          >
            {words.map((w, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  show: { y: 0, opacity: 1 },
                }}
                className="inline-block"
              >
                {w}{" "}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-semibold shadow-lg hover:shadow-xl transition"
          >
            Explore More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Campus;
