import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import HomeSideBar from "../department/Sidebar.jsx";
import { csPlacement } from "../Side Bar Constants/csDept.js";
import { itPlacement } from "../Side Bar Constants/itDept.js";
import { chemicalPlacement } from "../Side Bar Constants/chemDept.js";
import { ecePlacement } from "../Side Bar Constants/eceDept.js";
import { fePlacement } from "../Side Bar Constants/feDept.js";
import { mbaPlacement } from "../Side Bar Constants/mbaDept.js";

export default function Placement() {
  const { deptId } = useParams();
  
  // Map department IDs to their placement data
  const deptMap = {
    computerEngineering: { data: csPlacement, name: "Computer Engineering" },
    informationTechnology: { data: itPlacement, name: "Information Technology" },
    chemicalEngineering: { data: chemicalPlacement, name: "Chemical Engineering" },
    electronicsAndComputerEngineering: { data: ecePlacement, name: "Electronics & Computer Engineering" },
    firstYear: { data: fePlacement, name: "First Year" },
    mba: { data: mbaPlacement, name: "M.B.A" },
  };

  const dept = deptMap[deptId] || { data: {}, name: "Department" };
  const placementData = dept.data;
  const deptName = dept.name;

  const [year, setYear] = useState("2024");
  const data = placementData[year] || {
    total: 0,
    placed: 0,
    highest: "-",
    average: "-",
    companies: [],
    toppers: [],
  };

  /*  auto-cycle year every 5s  */
  useEffect(() => {
    const yrs = Object.keys(placementData);
    if (!yrs.length) return;
    let idx = yrs.indexOf(year);
    const id = setInterval(() => {
      idx = (idx + 1) % yrs.length;
      setYear(yrs[idx]);
    }, 5000);
    return () => clearInterval(id);
  }, [placementData, year]);

  /*  sidebar height lock  */
  const [sbHeight, setSbHeight] = useState(null);
  useEffect(() => {
    const sb = document.getElementById("sidebar");
    if (sb) setSbHeight(sb.clientHeight);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/*  row-1 : sidebar + summary table (height = sidebar)  */}
      <div className="flex flex-col md:flex-row">
        <HomeSideBar deptId={deptId} />

        <section
          className="flex-1 p-4 md:p-8 md:mt-30"
          style={{ maxHeight: sbHeight || "auto" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {deptName} Placements
          </motion.h1>

          {/*  year pills  */}
          <div className="flex flex-wrap gap-3 mb-6">
            {Object.keys(placementData).map((y) => (
              <button
                key={y}
                onClick={() => setYear(y)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  y === year
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-indigo-50"
                }`}
              >
                {y}
              </button>
            ))}
          </div>

          {/*  stats cards  */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Total Students", val: data.total },
              { label: "Placed", val: data.placed },
              { label: "Highest", val: data.highest },
              { label: "Average", val: data.average },
            ].map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
                className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl"
              >
                <p className="text-xs uppercase tracking-wide text-gray-500">{c.label}</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{c.val}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/*  row-2 : companies & toppers (full width)  */}
      <div className="flex flex-col md:flex-row">
        <div className="md:w-14 flex-shrink-0" />
        <section className="flex-1 px-4 md:px-8 pb-12 grid md:grid-cols-2 gap-8">
          {/*  companies  */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recruiters</h2>
            <div className="flex flex-wrap gap-3">
              {data.companies.map((c, i) => (
                <motion.span
                  key={c}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium shadow"
                >
                  {c}
                </motion.span>
              ))}
            </div>
          </div>

          {/*  toppers  */}
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Toppers</h2>
            <div className="space-y-3">
              {data.toppers.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center justify-between bg-white rounded-xl p-4 shadow"
                >
                  <span className="text-gray-700">{t.split("  ")[0]}</span>
                  <span className="font-bold text-indigo-600">{t.split("  ")[1]}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap");
      `}</style>
    </div>
  );
}