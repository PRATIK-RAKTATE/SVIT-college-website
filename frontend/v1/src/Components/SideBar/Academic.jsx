import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import HomeSideBar from "../department/Sidebar.jsx";

// ---- import all department book objects ----
import { csBooks } from "../Sidebar-Constants/csDept.js";
import { itBooks } from "../Sidebar-Constants/itDept.js";
import { chemicalBooks } from "../Sidebar-Constants/chemDept.js";
import { eceBooks } from "../Sidebar-Constants/eceDept.js";
import { feBooks } from "../Sidebar-Constants/feDept.js";
import { mbaBooks } from "../Sidebar-Constants/mbaDept.js";

export default function AcademicBooks() {
  const { deptId } = useParams();

  /*  map department → books + name  */
  const deptMap = {
    "computer-engineering": { data: csBooks, name: "Computer Engineering" },
    informationTechnology: { data: itBooks, name: "Information Technology" },
    "chemical-engineering": { data: chemicalBooks, name: "Chemical Engineering" },
    "electronics-and-computer-engineering": {
      data: eceBooks,
      name: "Electronics & Computer Engineering",
    },
    "first-year": { data: feBooks, name: "First Year" },
    mba: { data: mbaBooks, name: "M.B.A" },
  };

  const { data: bookData, name: deptName } = deptMap[deptId] || {
    data: {},
    name: "Department",
  };
  const semesters = Object.keys(bookData)
    .map(Number)
    .sort((a, b) => a - b);

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
            Academic Books - {deptName}
          </motion.h1>

          {/*  responsive table  */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-100 text-gray-700 uppercase text-sm tracking-wide">
                <tr>
                  <th className="px-6 py-4">Sr. No.</th>
                  <th className="px-6 py-4">Semester 1</th>
                  <th className="px-6 py-4">Semester 2</th>
                </tr>
              </thead>
              <tbody>
                {semesters.map((sem, idx) => (
                  <motion.tr
                    key={sem}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="border-b border-gray-200 last:border-0 hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 font-semibold">{sem}</td>
                    <td className="px-6 py-4">
                      {bookData[sem].sem1.map((b, i) => (
                        <a
                          key={i}
                          href={b.link}
                          target="_blank"
                          rel="noreferrer"
                          className="block text-indigo-600 hover:underline mb-1"
                        >
                          {b.name}
                        </a>
                      ))}
                    </td>
                    <td className="px-6 py-4">
                      {bookData[sem].sem2.map((b, i) => (
                        <a
                          key={i}
                          href={b.link}
                          target="_blank"
                          rel="noreferrer"
                          className="block text-indigo-600 hover:underline mb-1"
                        >
                          {b.name}
                        </a>
                      ))}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap");
      `}</style>
    </div>
  );
}
