// VisionMissionHOD.jsx
import React from "react";
import {
  FaQuoteLeft,
  FaRocket,
  FaEye,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { motion } from "framer-motion";

const TimelineItem = ({ icon, title, description, gradient }) => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative flex items-start gap-6"
    >
      {/* Icon Bubble */}
      <div
        className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg ${gradient}`}
      >
        {icon}
      </div>

      {/* Content */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        
      </div>
    </motion.div>
    <div>
      <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
    </div>
    </>
  );
};

const HodSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative rounded-3xl w-[390px] md:w-[1200px] bg-white shadow-lg  p-8 md:p-12"
    >
      <div className="flex items-center gap-3  mb-6">
        <span className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white p-3 rounded-xl shadow-md">
          <FaChalkboardTeacher className="text-xl" />
        </span>
        <span className="text-sm font-bold uppercase tracking-widest text-purple-600">
          HOD Desk
        </span>
      </div>

      <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
        Message from the Head of Department
      </h3>

      <div className="relative">
        {/* <FaQuoteLeft className="absolute -top-4 -left-4 text-5xl text-purple-200" /> */}
        <p className="text-gray-700 leading-relaxed text-lg italic ">
          The department of Computer Engineering, established in 1999, is one of
          the oldest and most reputed departments of the institute.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg text-justify mt-4">
          We offer UG programs in Computer Engineering with an intake of 60,
          along with a postgraduate program (M.E.) with an intake of 24,
          affiliated to Savitribai Phule Pune University.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg text-justify mt-4">
          Our aim is to nurture young professionals by building strong cognitive
          skills and exposing them to the latest technological trends. The
          curriculum is designed to impart both theory and practice, making our
          graduates industry-ready.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg text-justify mt-4">
          With modern laboratories, experienced faculty, and motivated students,
          the department continues to excel in research, innovation, and
          academic excellence.
        </p>
      </div>
    </motion.div>
  );
};

const VisionMissionHOD = ({ vision, mission }) => {
  return (
    <section className="py-20  max-w-6xl mx-auto space-y-20">
      {/* Intro */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4"
        >
          Vision, Mission & Leadership
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Discover our vision, mission, and leadership commitment to educational
          excellence.
        </motion.p>
      </div>

      {/* HOD Section */}
      <HodSection />

      {/* Timeline for Vision & Mission */}
      <div className="relative space-y-12 border-l-4 border-gray-200 pl-8 mt-16">
        <TimelineItem
          icon={<FaEye className="text-2xl" />}
          title="Our Vision"
          description={vision}
          gradient="bg-gradient-to-br from-blue-600 to-cyan-500"
        />
        <TimelineItem
          icon={<FaRocket className="text-2xl" />}
          title="Our Mission"
          description={mission}
          gradient="bg-gradient-to-br from-green-600 to-emerald-500"
        />
      </div>
    </section>
  );
};

export default VisionMissionHOD;