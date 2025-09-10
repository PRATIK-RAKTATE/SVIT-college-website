// Faculty.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Users, GraduationCap, Briefcase, Calendar } from "lucide-react";
import HomeSideBar from "../department/Sidebar.jsx";

/* ---------- department data ---------- */
import { csFaculty } from "../Sidebar-Constants/csDept.js";
import { itFaculty } from "../Sidebar-Constants/itDept.js";
import { chemFaculty } from "../Sidebar-Constants/chemDept.js";
import { eceFaculty } from "../Sidebar-Constants/eceDept.js";
import { firstYearFaculty } from "../Sidebar-Constants/feDept.js";
import { mbaFaculty } from "../Sidebar-Constants/mbaDept.js";

const deptMap = {
  "computer-engineering": {
    data: csFaculty,
    name: "Computer Engineering",
    color: "from-blue-900 to-blue-500"
  },
  "information-technology": {
    data: itFaculty,
    name: "Information Technology",
    color: "from-green-900 to-green-500"
  },
  "chemical-engineering": {
    data: chemFaculty,
    name: "Chemical Engineering",
    color: "from-yellow-900 to-yellow-500"
  },
  "electronics-and-computer-engineering": {
    data: eceFaculty,
    name: "Electronics & Computer Engineering",
    color: "from-red-900 to-red-500"
  },
  "first-year": {
    data: firstYearFaculty,
    name: "First Year",
    color: "from-gray-800 to-gray-500"
  },
  "mba": {
    data: mbaFaculty,
    name: "M.B.A",
    color: "from-orange-900 to-orange-500"
  }
};

export default function Faculty() {
  const { deptId } = useParams();
  const dept = deptMap[deptId] || {
    data: [],
    name: "Department",
    color: "from-gray-500 to-gray-600"
  };
  const [animated, setAnimated] = useState([]);
  const [sbHeight, setSbHeight] = useState(null);

  useEffect(() => {
    const sb = document.getElementById("sidebar");
    if (sb) setSbHeight(sb.clientHeight);

    dept.data.forEach((_, i) => {
      setTimeout(() => setAnimated((a) => [...a, i]), i * 150);
    });

    return () => setAnimated([]);
  }, [deptId]);

  const avgExp =
    dept.data.length &&
    (
      dept.data.reduce(
        (sum, f) => sum + Number(f.experience.match(/\d+/)[0]),
        0
      ) / dept.data.length
    ).toFixed(1);

  const card = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } }
  };

  const InfoRow = ({ icon, label, value }) => (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 text-gray-400 group-hover:text-gray-600 transition-colors">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors">{label}</p>
        <p className="text-sm font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">{value}</p>
      </div>
    </div>
  );

  if (!dept.data.length) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Faculty information not available.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sidebar + Heading */}
      <div className="flex flex-col md:flex-row">
        <HomeSideBar deptId={deptId} />
        <section
          className="flex-1 p-6 md:mt-25 md:p-10 flex flex-col justify-center"
          style={{ maxHeight: sbHeight || "auto" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4 text-center md:text-left"
          >
            {dept.name} Faculty
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg text-gray-600 text-center md:text-left"
          >
            Department – SVIT
          </motion.p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mt-4 rounded-full mx-auto md:mx-0" />
        </section>
      </div>

      {/* Faculty Cards */}
      <div className="flex flex-col md:flex-row">
        <div className="md:w-14 flex-shrink-0" />
        <main className="flex-1 px-4 md:px-8 pb-12 space-y-8">
          <motion.div
            variants={card}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Faculty Members
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dept.data.map((f, idx) => (
                <motion.div
                  key={f.sr}
                  variants={card}
                  className="group relative bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-xl`} />

                  <div className="relative z-10 space-y-3">
                    {/* IMAGE */}
                    {f.image && (
                      <div className="flex justify-center mb-4 relative">
                        <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${dept.color} p-1`}>
                          <img
                            src={f.image}
                            alt={f.name}
                            className="w-full h-full object-cover rounded-full border-2 border-white"
                          />
                        </div>
                        {(f.designation.toLowerCase().includes("head") ||
                          f.designation.toLowerCase().includes("hod")) && (
                          <span className="absolute bottom-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md border border-white">
                            HOD
                          </span>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all">
                          <span className="text-lg font-bold text-gray-700 group-hover:text-gray-800">{f.sr}</span>
                        </div>
                        <User className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors">{f.name}</h4>
                    <InfoRow icon={<Briefcase />} label="Designation" value={f.designation} />
                    <InfoRow icon={<GraduationCap />} label="Qualification" value={f.qualification} />
                    <InfoRow icon={<Calendar />} label="Experience" value={f.experience} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Footer Statistics */}
          <motion.div
            variants={card}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 text-center"
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/80 backdrop-blur rounded-full shadow-lg border border-gray-200 mx-auto">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 font-medium">
                Total <span className="font-bold text-blue-600">{dept.data.length}</span> faculty
              </span>
              <div className="w-px h-6 bg-gray-300" />
              <span className="text-gray-600">
                Avg. Experience: <span className="font-semibold">{avgExp} Years</span>
              </span>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
