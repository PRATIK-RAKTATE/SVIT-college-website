// HostelCampus.jsx – fresh card-stack / ribbon design
import React from "react";
import { motion } from "framer-motion";

const HostelCampus = () => {
  const blocks = [
    {
      tag: "Hostel",
      img: "https://media.istockphoto.com/id/1696781145/photo/modern-building-in-the-city-with-blue-sky.jpg?s=612x612&w=0&k=20&c=POfayTyDe06tGX4CeJgS8-fb896MUC46dl3ZbHXBqN4=",
      facts: [
        "Boys intake: 250",
        "Girls intake: 100",
        "Solar water system",
        "Recreation & reading hall",
      ],
      color: "rose",
    },
    {
      tag: "Campus",
      img: "https://media.istockphoto.com/id/479842074/photo/empty-road-at-building-exterior.jpg?s=612x612&w=0&k=20&c=SbyfZGN0i2O_QPLCdBcu9vhuzbQvTz4bGEn-lIzrN0E=",
      facts: [
        "3000 m² playground",
        "Indoor gymnasium",
        "Sports courts",
        "24×7 security",
      ],
      color: "emerald",
    },
  ];

  const variants = {
    container: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
      },
    },
    card: {
      hidden: { y: 60, opacity: 0 },
      show: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100 },
      },
    },
    fact: {
      hidden: { x: -15, opacity: 0 },
      show: { x: 0, opacity: 1, transition: { duration: 0.35 } },
    },
  };

  return (
    <section className="px-4  py-12 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={variants.container}
        className="max-w-5xl mx-auto"
      >
        {/* heading */}
        <motion.h2
          variants={variants.card}
          className="text-3xl md:text-5xl font-extrabold text-center mb-12 text-slate-800"
        >
          Hostel &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-emerald-500">
            Campus
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {blocks.map((b) => (
            <motion.div
              key={b.tag}
              variants={variants.card}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              {/* decorative ribbon (centered above card) */}
              <div
                className={`absolute -top-6 left-1/2 -translate-x-1/2 px-5 py-1.5 text-sm font-bold text-white bg-gradient-to-r ${
                  b.color === "rose"
                    ? "from-rose-500 to-pink-500"
                    : "from-emerald-500 to-teal-500"
                } rounded-full shadow-lg`}
              >
                {b.tag}
              </div>

              {/* image */}
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={b.img}
                  alt={b.tag}
                  className="w-full h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* facts list */}
              <ul className="mt-8 space-y-2 text-center">
                {b.facts.map((f, i) => (
                  <motion.li
                    key={i}
                    variants={variants.fact}
                    className="flex items-center justify-center gap-3 text-slate-700"
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        b.color === "rose" ? "bg-rose-400" : "bg-emerald-400"
                      }`}
                    />
                    {f}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HostelCampus;
