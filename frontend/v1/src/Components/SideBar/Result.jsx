// Results.jsx
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Medal } from "lucide-react";
import HomeSideBar from "../department/Sidebar.jsx";

/* ----------  department sources  ---------- */
import { itResults } from "../Sidebar-Constants/itDept.js";
import { csResults } from "../Sidebar-Constants/csDept";
import { chemicalResults } from "../Sidebar-Constants/chemDept";
import { eceResults } from "../Sidebar-Constants/eceDept";
import { feResults } from "../Sidebar-Constants/feDept";
import { mbaResults } from "../Sidebar-Constants/mbaDept";

const DEPT_MAP = {
  computerEngineering: { data: csResults, name: "Computer Engineering" },
  informationTechnology: { data: itResults, name: "Information Technology" },
  chemicalEngineering: { data: chemicalResults, name: "Chemical Engineering" },
  electronicsAndComputerEngineering: {
    data: eceResults,
    name: "Electronics & Computer Engineering",
  },
  firstYear: { data: feResults, name: "First Year" },
  mba: { data: mbaResults, name: "M.B.A" },
};

/* ----------  tiny helper  ---------- */
const parseResult = (str) => {
  if (!str) return { name: "-", cgpa: 0 };
  const parts = str.trim().split(/\s+/);
  const last = parts.pop();
  const cgpa = parseFloat(last.replace(/[^\d.]/g, "")) || 0;
  const name = parts.join(" ") || "-";
  return { name, cgpa };
};

/* ==========================================
   Component
   ========================================== */
export default function Results() {
  const { deptId } = useParams();
  const dept = DEPT_MAP[deptId] || { data: {}, name: "Department" };

  /* ----  auto-slide logic  ---- */
  const years = Object.keys(dept.data); // ["2020","2021", ...]
  const [index, setIndex] = useState(years.length - 1); // latest year
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % years.length);
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, years.length]);

  const selectedYear = years[index];
  const yrData = dept.data[selectedYear] || {};

  /* ----  decide which UI to show  ---- */
  const hasSem = !!yrData.se; // SE/TE/BE exist
  const topArr = hasSem
    ? ["se", "te", "be"].map((sec) => ({
        sec: sec.toUpperCase(),
        ...yrData[sec]?.toppers?.reduce(
          (max, raw) => {
            const p = parseResult(raw);
            return p.cgpa > max.cgpa ? { ...p, raw } : max;
          },
          { name: "-", cgpa: 0, raw: "" },
        ),
      }))
    : [
        {
          sec: "Topper",
          ...(yrData.students || []).reduce(
            (max, raw) => {
              const p = parseResult(raw);
              return p.cgpa > max.cgpa ? { ...p, raw } : max;
            },
            { name: "-", cgpa: 0, raw: "" },
          ),
        },
      ];

  /* ----  section title  ---- */
  const sectionTitle = hasSem ? "SE/TE/BE Result & Toppers" : "Result & Topper";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 md:flex">
      <HomeSideBar deptId={deptId} />

      <main className="flex-1 px-4 md:px-8 pb-12 space-y-10">
        {/*  HEADING  */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-8 text-center md:text-left"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {dept.name} Results
        </motion.h1>

        {/*  AUTO-SLIDING TABLE – highest per section OR single topper  */}
        <motion.div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Highest CGPA in {selectedYear} {hasSem ? "(SE / TE / BE)" : ""}
            </h2>
            <div className="text-sm text-gray-500">Auto-flip every 3s →</div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedYear}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ type: "spring", stiffness: 140 }}
              className="overflow-x-auto"
            >
              <table className="w-full text-left">
                <thead className="bg-gray-100 text-gray-700 uppercase text-sm tracking-wide">
                  <tr>
                    <th className="px-4 py-3">{hasSem ? "Section" : "Type"}</th>
                    <th className="px-4 py-3">Topper</th>
                    <th className="px-4 py-3">CGPA</th>
                  </tr>
                </thead>
                <tbody>
                  {topArr.map((item, idx) => (
                    <motion.tr
                      key={item.sec}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: idx * 0.08,
                        type: "spring",
                        stiffness: 120,
                      }}
                      className="border-b last:border-none hover:bg-gray-50 transition"
                    >
                      <td className="px-4 py-3 font-semibold">{item.sec}</td>
                      <td className="px-4 py-3">{item.name}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-indigo-600">
                            {item.cgpa}
                          </span>
                          <Medal className="w-4 h-4 text-yellow-500" />
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </AnimatePresence>

          {/*  tiny manual navigator  */}
          <div className="flex justify-center gap-2 mt-4">
            {years.map((y, i) => (
              <button
                key={y}
                onClick={() => {
                  setIndex(i);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 5000);
                }}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  i === index
                    ? "bg-indigo-600 text-white shadow"
                    : "bg-white text-gray-700 hover:bg-indigo-50"
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </motion.div>

        {/*  SECTION % / FY ONLY  */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 120 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-2xl transition-all duration-300"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{sectionTitle}</h2>
            <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
              {years.map((y) => (
                <button
                  key={y}
                  onClick={() => {
                    setIndex(years.indexOf(y));
                    setIsPaused(true);
                    setTimeout(() => setIsPaused(false), 5000);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    y === selectedYear
                      ? "bg-indigo-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-indigo-50"
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedYear}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/*  Overall summary  */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <p className="text-gray-700">{yrData.summary}</p>
              </div>

              {/*  SE/TE/BE cards  */}
              {hasSem && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {["se", "te", "be"].map((sem) => (
                    <motion.div
                      key={sem}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="bg-indigo-50 rounded-xl p-4 border border-indigo-200"
                    >
                      <h3 className="text-lg font-bold text-indigo-800 mb-2">
                        {sem.toUpperCase()}
                      </h3>
                      <p className="text-sm text-indigo-600 mb-3">
                        Pass: {yrData[sem]?.pass ?? "-"}
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {yrData[sem]?.toppers?.map((t, i) => (
                          <li key={i}>{t}</li>
                        )) ?? <li>-</li>}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              )}

              {/*  single student (FY / MBA)  */}
              {!hasSem && yrData.students?.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-indigo-50 rounded-xl p-4 border border-indigo-200"
                >
                  <h3 className="text-lg font-bold text-indigo-800 mb-2">
                    Topper
                  </h3>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    {yrData.students.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </main>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap");
      `}</style>
    </div>
  );
}
