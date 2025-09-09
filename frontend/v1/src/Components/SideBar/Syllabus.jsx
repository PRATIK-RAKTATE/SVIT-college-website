import React from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import HomeSideBar from "../department/Sidebar.jsx";
import AccordionItem from "./AccordionItem"; // adjust path as needed

// Import syllabus data files
import { csSyllabus } from "../Sidebar-Constants/csDept.js";
import { itSyllabus } from "../Sidebar-Constants/itDept.js";
import { eceSyllabus } from "../Sidebar-Constants/eceDept.js";
import { mbaSyllabus } from "../Sidebar-Constants/mbaDept.js";
import { chemSyllabus } from "../Sidebar-Constants/chemDept.js";
import { feSyllabus } from "../Sidebar-Constants/feDept.js";

export default function Syllabus() {
  const { deptId } = useParams();

  let syllabusData = [];
  let deptName = "";

  switch (deptId) {
    case "computerEngineering":
      syllabusData = csSyllabus;
      deptName = "Computer Engineering";
      break;
    case "information-technology":
      syllabusData = itSyllabus;
      deptName = "Information Technology";
      break;
    case "chemical-engineering":
      syllabusData = chemSyllabus;
      deptName = "Chemical Engineering";
      break;
    case "electronics-and-computer-engineering":
      syllabusData = eceSyllabus;
      deptName = "Electronics And Computer Engineering";
      break;
    case "first-year":
      syllabusData = feSyllabus;
      deptName = "First Year";
      break;
    case "mba":
      syllabusData = mbaSyllabus;
      deptName = "M.B.A";
      break;
    default:
      syllabusData = [];
      deptName = "";
      break;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex flex-col md:flex-row">
        <HomeSideBar deptId={deptId} />

        <main className="flex-1 p-4 md:p-8 mt-20 md:mt-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-8"
          >
            {deptName} Syllabus
          </motion.h1>

          <div className="space-y-4 md:mt-0">
            {syllabusData.map((item, idx) => (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: idx * 0.08,
                  type: "spring",
                  stiffness: 120,
                }}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <AccordionItem item={item} deptId={deptId} />
              </motion.div>
            ))}
          </div>
        </main>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
