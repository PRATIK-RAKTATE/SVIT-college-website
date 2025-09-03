import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menu = [
    { label: "Department Profile", path: "/department-profile" },
    { label: "Course Details", path: "/course-details" },
    { label: "PEOs, POs & PSOs", path: "/pos" },
    { label: "Faculty", path: "/faculty" },
    { label: "Labs", path: "/labs" },
    { label: "Syllabus", path: "/syllabus" },
    { label: "Events", path: "/events" },
    { label: "Results", path: "/results" },
    { label: "Placement", path: "/placement" },
    { label: "Extra-curricular & Co-curricular Activities", path: "/activities" },
    { label: "Academic Book", path: "/academic-book" },
    { label: "E-resources", path: "/e-resources" },
  ];

  const key = (str) => str.toLowerCase().replace(/\s+/g, "-");

  return (
    <aside
      className="w-full md:w-72 h-164 bg-transparent p-3 flex flex-col
                 border-rose-600 border-2 ml-4 mt-14 
                 shadow-lg rounded-xl z-50 relative"
    >
      {/* Heading */}
      <h2 className="text-slate-900 font-bold text-lg mb-3 text-center shrink-0">
        MENU
      </h2>

      {/* Single box wrapping all links */}
      <div className="bg-white/10 backdrop-blur rounded-lg p-4 flex flex-col space-y-2">
        {menu.map(({ label, path }) => (
          <NavLink
            key={key(label)}
            to={path}
            className={({ isActive }) =>
              `h-10 w-full border border-pink-600 rounded-md
               flex items-center justify-center text-xs font-semibold
               transition-all duration-300 ease-in-out
               text-pink-600 hover:bg-pink-600 hover:text-white
               hover:scale-105 hover:shadow-md
               ${isActive ? "bg-pink-700 text-white scale-105" : ""}`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
