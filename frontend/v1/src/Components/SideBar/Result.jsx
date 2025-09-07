// Results.jsx  –  sidebar + highest-score table (2019-24)  +  toppers table below
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Medal } from "lucide-react";
import HomeSideBar from "../department/Sidebar.jsx";

import { csResults } from "../Side Bar Constants/csDept.js";
import { itResults } from "../Side Bar Constants/itDept.js";
import { chemicalResults } from "../Side Bar Constants/chemDept.js";
import { eceResults } from "../Side Bar Constants/eceDept.js";
import { feResults } from "../Side Bar Constants/feDept.js";
import { mbaResults } from "../Side Bar Constants/mbaDept.js";

/*  department map  */
const DEPT_MAP = {
  computerEngineering: { data: csResults, name: "Computer Engineering" },
  informationTechnology: { data: itResults, name: "Information Technology" },
  chemicalEngineering: { data: chemicalResults, name: "Chemical Engineering" },
  electronicsAndComputerEngineering: { data: eceResults, name: "Electronics & Computer Engineering" },
  firstYear: { data: feResults, name: "First Year" },
  mba :{data :mbaResults, name:"M.B.A"}
};

/*  ------------  MAIN COMPONENT  ------------  */
export default function Results() {
  const { deptId } = useParams();
  const dept = DEPT_MAP[deptId] || { data: {}, name: "Department" };

  /*  sidebar height for alignment  */
  const [sbHeight, setSbHeight] = useState(null);
  useEffect(() => {
    const sb = document.getElementById("sidebar");
    if (sb) setSbHeight(sb.clientHeight);
  }, []);

  /*  helpers  */
  const parseResult = (str) => {
    const parts = str.replace(/%/g, "").split(/\s+/);
    const percent = parseFloat(parts.pop());
    const name = parts.join(" ");
    return { name, percent };
  };

  /*  highest % per year  */
  const highestPerYear = Object.fromEntries(
    Object.keys(dept.data).map((yr) => {
      const top = dept.data[yr].reduce((max, curr) => {
        const p = parseResult(curr).percent;
        return p > max.percent ? { percent: p, raw: curr } : max;
      }, { percent: 0, raw: "" });
      return [yr, top];
    })
  );

  /*  toppers for selected year  */
  const [selectedYear, setSelectedYear] = useState("2024");
  const toppers = dept.data[selectedYear] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/*  row-1 : sidebar + highest results table (same height as sidebar)  */}
      <div className="flex flex-col md:flex-row">
        <HomeSideBar deptId={deptId} />

        <section
          className="flex-1 p-4 md:mt-10 md:p-8"
          style={{ maxHeight: sbHeight || "auto" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {dept.name} Results
          </motion.h1>

          {/*  highest % table  */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-100 text-gray-700 uppercase text-sm tracking-wide">
                <tr>
                  <th className="px-4 py-3">Year</th>
                  <th className="px-4 py-3">Topper</th>
                  <th className="px-4 py-3">%</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(highestPerYear).map(([yr, { raw }], idx) => {
                  const { name, percent } = parseResult(raw);
                  return (
                    <motion.tr
                      key={yr}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08, type: "spring", stiffness: 120 }}
                      className="border-b border-gray-200 last:border-0 hover:bg-gray-50"
                    >
                      <td className="px-4 py-3 font-semibold">{yr}</td>
                      <td className="px-4 py-3">{name}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-indigo-600">{percent}%</span>
                          {idx === 0 && <Medal className="w-4 h-4 text-yellow-500" />}
                        </div>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/*  row-2 : toppers table (full width under sidebar)  */}
      <div className="flex flex-col md:flex-row">
        <div className="md:w-14 flex-shrink-0" />
        <section className="flex-1 px-4 md:px-8 pb-12">
          {/*  year selector  */}
          <div className="flex flex-wrap gap-3 mb-6">
            {["2019", "2020", "2021", "2022", "2023", "2024"].map((y) => (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
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

          {/*  toppers table  */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-100 text-gray-700 uppercase text-sm tracking-wide">
                <tr>
                  <th className="px-4 py-3">Rank</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">%</th>
                </tr>
              </thead>
              <tbody>
                {toppers.map((item, idx) => {
                  const { name, percent } = parseResult(item);
                  return (
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="border-b border-gray-200 last:border-0 hover:bg-gray-50"
                    >
                      <td className="px-4 py-3 flex items-center gap-2">
                        <span className="font-bold text-gray-700">#{idx + 1}</span>
                        {idx < 3 && (
                          <span className="text-lg">
                            {idx === 0 ? "🥇" : idx === 1 ? "🥈" : "🥉"}
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-gray-800 font-medium">{name}</td>
                      <td className="px-4 py-3">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <motion.div
                            className={`h-2.5 rounded-full ${
                              idx < 3 ? "bg-yellow-400" : "bg-indigo-500"
                            }`}
                            initial={{ width: 0 }}
                            animate={{ width: `${percent}%` }}
                            transition={{ duration: 1, ease: "easeOut", delay: idx * 0.1 }}
                          />
                        </div>
                        <span className="text-xs text-gray-600 mt-1">{percent}%</span>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap");
      `}</style>
    </div>
  );
}