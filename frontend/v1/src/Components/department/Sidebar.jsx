import React from "react";
import { Link } from "react-router-dom";

export default function HomeSideBar({ deptId }) {
  const menuItems = [
    { name: "Department Profile", path: "profile", external: true, url: "https://www.kimi.com/chat/d2s5sk2f7calm5dv4l70" },
    { name: "Course Details", path: "courses" },
    { name: "PEOs,POs & PSOs", path: "peo-ppo" },
    { name: "Faculty", path: "faculty" },
    { name: "Labs", path: "labs" },
    { name: "Syllabus", path: "syllabus" },
    { name: "Events", path: "events" },
    { name: "Results", path: "results" },
    { name: "Placement", path: "placement" },
    { name: "Extra-curricular & Co-curricular Activities", path: "activities" },
    { name: "Placement Brochure", path: "placement-brochure" },
    { name: "Academic Book", path: "academic-book" },
    { name: "E-resources", path: "e-resources" }
  ];

  return (
    <div className="mt-28 md:mt-14 mr-10 mb-10 md:ml-25 ml-10 w-fit">
      <ul className="h-auto w-72 flex flex-col gap-2 pl-5">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="border-l-4 border-black hover:bg-black hover:text-white p-1 pl-2 shadow text-sm"
          >
            {item.external ? (
              <a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>
            ) : (
              <Link to={`/Department/${deptId}/${item.path}`}>{item.name}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
