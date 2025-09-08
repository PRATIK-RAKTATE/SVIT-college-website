// OutcomeComponent.jsx  –  heading in row with sidebar, all blocks under it
import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import HomeSideBar from "../department/Sidebar.jsx";
import AnimatedList from "./AnimatedList"; // reusable animated <li>

/*  department-wise data  */
import { csOutcomes } from "../Side Bar Constants/csDept.js";
import { itOutcomes } from "../Side Bar Constants/itDept.js";
import { chemicalOutcomes } from "../Side Bar Constants/chemDept.js";
import { eceOutcomes } from "../Side Bar Constants/eceDept.js";
import { feOutcomes } from "../Side Bar Constants/feDept.js";
import { mbaOutcomes } from "../Side Bar Constants/mbaDept.js";

const deptMap = {
  computerEngineering: { data: csOutcomes, name: "Computer Engineering" },
  informationTechnology: { data: itOutcomes, name: "Information Technology" },
  chemicalEngineering: { data: chemicalOutcomes, name: "Chemical Engineering" },
  electronicsAndComputerEngineering: { data: eceOutcomes, name: "Electronics & Computer Engineering" },
  firstYear: { data: feOutcomes, name: "First Year" },
  mba: { data: mbaOutcomes, name: "M.B.A" }
};

export default function OutcomeComponent() {
  const { deptId } = useParams();
  const { data: outcomeData, name: deptName } = deptMap[deptId] || { data: null, name: "Department" };

  if (!outcomeData)
    return <div className="min-h-screen flex items-center justify-center text-gray-600">Outcomes not available.</div>;

  /*  card spring animation  */
  const card = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } } };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/*  HEADING : sidebar + title (same row)  */}
      <div className="flex flex-col md:flex-row">
        <HomeSideBar deptId={deptId} />
        <section className="flex-1 p-6 md:mt-25 md:p-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-8 text-center md:text-left"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {deptName} Programme Outcomes
          </motion.h1>
        </section>
      </div>

      {/*  ALL BLOCKS : full width under sidebar  */}
      <div className="flex flex-col md:flex-row">
        <div className="md:w-14 flex-shrink-0" />
        <main className="flex-1 px-4 md:px-8 pb-12 space-y-8">
          {/*  PEOs  */}
          <motion.div
            variants={card}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Programme Educational Objectives (PEOs)</h3>
            <AnimatedList items={outcomeData.peos} />
          </motion.div>

          {/*  POs  */}
          <motion.div
            variants={card}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Program Outcomes (POs)</h3>
            <AnimatedList items={outcomeData.pos} />
          </motion.div>

          {/*  PSOs  */}
          <motion.div
            variants={card}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Programme Specific Outcomes (PSOs)</h3>
            <AnimatedList items={outcomeData.psos} />
          </motion.div>
        </main>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap");
      `}</style>
    </div>
  );
}