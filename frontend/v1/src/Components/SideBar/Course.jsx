// CourseDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import HomeSideBar from "../department/Sidebar.jsx";

/*  department-wise data  */
import { csCourse } from "../Side Bar Constants/csDept.js";
import { itCourse } from "../Side Bar Constants/itDept.js";
import { mbaCourse } from "../Side Bar Constants/mbaDept.js";
import { feCourse } from "../Side Bar Constants/feDept.js";
import { chemCourse } from "../Side Bar Constants/chemDept.js";
import { eceCourse } from "../Side Bar Constants/eceDept.js";

const deptMap = {
  computerEngineering: { data: csCourse, name: "Computer Engineering" },
  informationTechnology: { data: itCourse, name: "Information Technology" },
  mba: { data: mbaCourse, name: "M.B.A" },
  firstYear: { data: feCourse, name: "First Year" },
  chemicalEngineering: { data: chemCourse, name: "Chemical Engineering" },
  electronicsAndComputerEngineering: { data: eceCourse, name: "Electronics & Computer Engineering" }
};

export default function CourseDetails() {
  const { deptId } = useParams();
  const { data: courseData, name: deptName } = deptMap[deptId] || { data: null, name: "Department" };

  /*  sidebar height for hero section only  */
  const [sbHeight, setSbHeight] = useState(null);
  useEffect(() => {
    const sb = document.getElementById("sidebar");
    if (sb) setSbHeight(sb.clientHeight);
  }, []);

  if (!courseData)
    return <div className="min-h-screen flex items-center justify-center text-gray-600">Course information not available.</div>;

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
      requestAnimationFrame((t) => (start = t, step));
    }, [value]);
    return <>{current}</>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/*  HERO SECTION : sidebar + paragraph (height = sidebar)  */}
      <div className="flex flex-col md:flex-row">
        <HomeSideBar deptId={deptId} />

        <section
          className="flex-1 p-6 md:p-10 flex items-center justify-center relative overflow-hidden"
          style={{ maxHeight: sbHeight || "auto" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="relative z-10 max-w-4xl text-center md:text-left"
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
        <div className="md:w-64 flex-shrink-0" />
        <main className="flex-1 px-4 md:px-8 pb-12 space-y-12">
          {/*  Major Activities  */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Major Activities of Department</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              {courseData.majorActivities?.map((act, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="text-base"
                >
                  {act}
                </motion.li>
              ))}
            </ul>
          </motion.section>

          {/*  Major Facilities  */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Major Facilities Provided by Dept.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {courseData.majorFacilities?.map((fac, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-shadow"
                >
                  <p className="text-gray-700">{fac}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/*  Student Association Info  */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Information about Student Association</h2>
            <div className="prose prose-gray max-w-none text-gray-700">
              {courseData.associationInfo?.map((para, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="mb-4"
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </motion.section>
        </main>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap");
      `}</style>
    </div>
  );
}