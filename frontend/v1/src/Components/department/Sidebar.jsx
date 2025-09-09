import React from "react";
import { Link, NavLink } from "react-router-dom";

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
    <div className="mt-28 md:mt-14 mr-10 mb-10 md:ml-15 ml-10 w-fit">
      <ul className="h-auto w-72 flex flex-col gap-2 pl-5">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="border-l-4 border-[#4F39F6] hover:bg-black hover:text-white p-1 pl-2 shadow text-sm"
          >
            {item.external ? (
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            ) : (
              <NavLink to={`/department/${deptId}/${item.path}`}>
                {item.name}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
