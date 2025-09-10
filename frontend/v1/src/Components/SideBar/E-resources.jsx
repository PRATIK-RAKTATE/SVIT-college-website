// E-Resources.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import HomeSideBar from "../department/Sidebar.jsx";

/* ---- import all department e-resource arrays ---- */
import { csEResources } from "../Sidebar-Constants/csDept.js";
import { itEResources } from "../Sidebar-Constants/itDept.js";
import { chemicalEResources } from "../Sidebar-Constants/chemDept.js";
import { eceEResources } from "../Sidebar-Constants/eceDept.js";
import { feEResources } from "../Sidebar-Constants/feDept.js";
import { mbaEResources } from "../Sidebar-Constants/mbaDept.js";

export default function EResources() {
  const { deptId } = useParams();

  const deptMap = {
    computerEngineering: { data: csEResources, name: "Computer Engineering" },
    informationTechnology: { data: itEResources, name: "Information Technology" },
    chemicalEngineering: { data: chemicalEResources, name: "Chemical Engineering" },
    electronicsAndComputerEngineering: { data: eceEResources, name: "Electronics & Computer Engineering" },
    firstYear: { data: feEResources, name: "First Year" },
    mba: { data: mbaEResources, name: "M.B.A" },
  };

  const { data: resources, name: deptName } = deptMap[deptId] || { data: [], name: "Department" };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex flex-col md:flex-row">
        <HomeSideBar deptId={deptId} />

        <main className="flex-1 p-4 md:p-8 mt-20 md:mt-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-8"
          >
            E-Resources - {deptName}
          </motion.h1>

          {/* ---------- UNIFIED CARD LIST (desktop + mobile) ---------- */}
          <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((res, idx) => (
              <motion.div
                key={res.srNo}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.07, type: "spring", stiffness: 300 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-md p-6 flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-indigo-600">#{res.srNo}</span>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400">Faculty</span>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-4">{res.facultyName}</h3>

                <div className="mt-auto flex gap-3">
                  <a
                    href={res.blogLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2.5 rounded-lg bg-indigo-50 text-indigo-700 font-medium hover:bg-indigo-100 transition"
                  >
                    Blog
                  </a>
                  <a
                    href={res.youtubeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center py-2.5 rounded-lg bg-red-50 text-red-700 font-medium hover:bg-red-100 transition"
                  >
                    YouTube
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}