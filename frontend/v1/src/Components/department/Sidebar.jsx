// HomeSideBar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function HomeSideBar({ deptId }) {
  const menuItems = [
    { name: "Department Profile", path: "" },
    { name: "Course Details", path: "courses" },
    { name: "PEOs,POs & PSOs", path: "Outcome" },
    { name: "Faculty", path: "faculty" },
    { name: "Labs", path: "labs" },
    { name: "Syllabus", path: "syllabus" },
    { name: "Events", path: "events" },
    { name: "Results", path: "results" },
    { name: "Placement", path: "placement" },
    { name: "Academic Book", path: "academic-book" },
    { name: "E-resources", path: "e-resources" },
  ];

  return (
    <aside className="mt-10 md:mt-14 mr-10 mb-10 md:ml-15 ml-10 w-fit">
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.07 },
          },
        }}
        className="relative h-auto w-72 flex flex-col gap-2 pl-5"
      >
        {/* sliding highlight */}
        <li className="absolute left-0 top-0 h-10 w-full pointer-events-none">
          <motion.div
            layoutId="highlight"
            className="absolute left-0 h-full w-1 bg-indigo-600 rounded-r-full"
            transition={{ type: "spring", stiffness: 400, damping: 40 }}
          />
        </li>

        {menuItems.map((item, index) => (
          <motion.li
            key={item.path + index}
            variants={{
              hidden: { x: -30, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative z-10"
          >
            <NavLink
              to={`/Department/${deptId}/${item.path}`}
              className={({ isActive }) =>
                `flex items-center h-10 pl-4 rounded-lg text-sm font-medium transition-colors
                ${
                  isActive
                    ? "text-indigo-700 bg-indigo-50"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {item.name}
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>
    </aside>
  );
}