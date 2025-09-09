// CourseDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import HomeSideBar from "../department/Sidebar.jsx";
import AnimatedList from "./AnimatedList"; // ← imported sub-component

/*  department-wise data  */
import { csCourse } from "../Sidebar-Constants/csDept.js";
import { itCourse } from "../Sidebar-Constants/itDept.js";
import { mbaCourse } from "../Sidebar-Constants/mbaDept.js";
import { feCourse } from "../Sidebar-Constants/feDept.js";
import { chemCourse } from "../Sidebar-Constants/chemDept.js";
import { eceCourse } from "../Sidebar-Constants/eceDept.js";
import { FireExtinguisher } from "lucide-react";

const deptMap = {
  computerEngineering: { data: csCourse, name: "Computer Engineering" },
  informationTechnology: { data: itCourse, name: "Information Technology" },
  mba: { data: mbaCourse, name: "M.B.A" },
  "first-year": { data: feCourse, name: "First Year" },
  "chemical-engineering": { data: chemCourse, name: "Chemical Engineering" },
  electronicsAndComputerEngineering: {
    data: eceCourse,
    name: "Electronics & Computer Engineering",
  },
};

export default function CourseDetails() {
  const { deptId } = useParams();
  const { data: courseData, name: deptName } = deptMap[deptId] || {
    data: null,
    name: "Department",
  };

  /*  sidebar height for hero section only  */
  const [sbHeight, setSbHeight] = useState(null);
  useEffect(() => {
    const sb = document.getElementById("sidebar");
    if (sb) setSbHeight(sb.clientHeight);
  }, []);

  if (!courseData)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Course information not available.
      </div>
    );

  /*  animated counter  */
  const AnimatedStat = ({ value }) => {
    const [current, setCurrent] = useState(0);
    useEffect(() => {
      if (typeof value !== "number") return;
      let start = 0;
      const dur = 1200;
      const step = (t) => {
        if (!t) t = performance.now();
        const progress = Math.min((t - start) / dur, 1);
        setCurrent(Math.floor(progress * value));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame((t) => ((start = t), step));
    }, [value]);
    return <>{current}</>;
  };

  /*  unique stagger + spring animation  */
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };
  const item = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/*  HERO SECTION : sidebar + paragraph (height = sidebar)  */}
      <div className="flex flex-col md:flex-row">
        <HomeSideBar deptId={deptId} />
        <section
          className="flex-1 p-6 md:p-10 flex items-center justify-center"
          style={{ maxHeight: sbHeight || "auto" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="max-w-4xl text-center md:text-left"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {deptName}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              {courseData.introduction?.join(" ")}
            </motion.p>
          </motion.div>
        </section>
      </div>

      {/*  FULL-WIDTH CONTENT UNDER SIDEBAR  */}
      <div className="flex flex-col md:flex-row">
        <div className="md:w-34 flex-shrink-0" />
        <main className="flex-1 px-4 md:px-8 pb-12">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/*  Major Activities  */}
            <motion.div
              variants={item}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Major Activities
              </h3>
              <AnimatedList items={courseData.majorActivities} />
            </motion.div>

            {/*  Major Facilities  */}
            <motion.div
              variants={item}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Major Facilities
              </h3>
              <AnimatedList items={courseData.majorFacilities} />
            </motion.div>

            {/*  Student Association  */}
            <motion.div
              variants={item}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Student Association
              </h3>
              <AnimatedList
                items={courseData.associationInfo}
                className="space-y-2"
              />
            </motion.div>
          </motion.div>

          {/*  Course Info Table  */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120 }}
            className="mt-10 overflow-x-auto"
          >
            <table className="w-full text-left border-collapse border border-gray-300 bg-white rounded-2xl shadow-md overflow-hidden">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="p-4 border border-gray-300">Branch</th>
                  <th className="p-4 border border-gray-300">Course</th>
                  <th className="p-4 border border-gray-300">Intake</th>
                  <th className="p-4 border border-gray-300">Since</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50 hover:bg-gray-100 transition">
                  <td className="p-4 border border-gray-300">
                    {courseData.courseInfo.branch}
                  </td>
                  <td className="p-4 border border-gray-300">
                    {courseData.courseInfo.courseName}
                  </td>
                  <td className="p-4 border border-gray-300">
                    <AnimatedStat value={courseData.courseInfo.intake} />
                  </td>
                  <td className="p-4 border border-gray-300">
                    {courseData.courseInfo.establishmentYear}
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </main>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap");
      `}</style>
      {/* Course Info Table */}
    </div>
  );
}
