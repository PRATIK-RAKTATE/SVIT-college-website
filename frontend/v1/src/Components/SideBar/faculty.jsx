// Faculty.jsx  –  heading in row with sidebar, animated table below
import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import HomeSideBar from "../department/Sidebar.jsx";

import { csFaculty } from "../Sidebar-Constants/csDept.js";
import { itFaculty } from "../Sidebar-Constants/itDept.js";
import { chemFaculty } from "../Sidebar-Constants/chemDept.js";
import { eceFaculty } from "../Sidebar-Constants/eceDept.js";
import { firstYearFaculty } from "../Sidebar-Constants/feDept.js";
import { mbaFaculty } from "../Sidebar-Constants/mbaDept.js";

const deptMap = {
  computerEngineering: { data: csFaculty, name: "Computer Engineering" },
  "information-technology": { data: itFaculty, name: "Information Technology" },
  "chemical-engineering": { data: chemFaculty, name: "Chemical Engineering" },
  "electronics-and-computer-engineering": {
    data: eceFaculty,
    name: "Electronics & Computer Engineering",
  },
  "first-year": { data: firstYearFaculty, name: "First Year" },
  mba: { data: mbaFaculty, name: "M.B.A" },
};

export default function Faculty() {
  const { deptId } = useParams();
  const { data: facultyData, name: deptName } = deptMap[deptId] || {
    data: [],
    name: "Department",
  };

  /*  table row animation  */
  const row = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/*  HEADING BLOCK : sidebar + animated title (same row)  */}
      <div className="flex flex-col md:flex-row">
        <HomeSideBar deptId={deptId} />
        <section className="flex-1 p-6 md:mt-28 md:p-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-8 text-center md:text-left"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {deptName} Department Faculty
          </motion.h1>
        </section>
      </div>

      {/*  TABLE : full width under sidebar  */}
      <div className="flex flex-col md:flex-row">
        <div className="md:w-10 flex-shrink-0" />
        <main className="flex-1 px-4 md:px-8 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
          >
            <table className="w-full border-collapse text-sm md:text-base">
              <thead className="bg-[#4F39F6] text-white">
                <tr>
                  <th className="p-4 text-left">Sr. No</th>
                  <th className="p-4 text-left">Name of Faculty</th>
                  <th className="p-4 text-left">Designation</th>
                  <th className="p-4 text-left">Qualification</th>
                  <th className="p-4 text-left">Total Experience</th>
                </tr>
              </thead>
              <tbody>
                {facultyData.map((faculty, index) => (
                  <motion.tr
                    key={faculty.sr}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className={`border-b last:border-none ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50 transition`}
                  >
                    <td className="p-4 text-gray-700 font-medium">
                      {faculty.sr}
                    </td>
                    <td className="p-4 text-gray-800">{faculty.name}</td>
                    <td className="p-4 text-gray-700">{faculty.designation}</td>
                    <td className="p-4 text-gray-600">
                      {faculty.qualification}
                    </td>
                    <td className="p-4 text-gray-700 font-semibold">
                      {faculty.experience}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </main>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap");
      `}</style>
    </div>
  );
}
