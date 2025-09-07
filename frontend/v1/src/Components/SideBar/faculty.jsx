import React from "react";
import { useParams } from "react-router-dom";
import HomeSideBar from "../department/Sidebar.jsx";

// Import data constants for each department
import { csFaculty } from "../Side Bar Constants/csDept.js";
import { itFaculty } from "../Side Bar Constants/itDept.js";
import { chemFaculty } from "../Side Bar Constants/chemDept.js";
import { eceFaculty } from "../Side Bar Constants/eceDept.js";
import { firstYearFaculty } from "../Side Bar Constants/feDept.js";
import { mbaFaculty } from "../Side Bar Constants/mbaDept.js";

export default function Faculty() {
  // Get department from URL params
  const { deptId } = useParams();

  // Select data based on department
  let facultyData;
  let deptName;


  switch (deptId) {
    case "computerEngineering":
      facultyData = csFaculty;
      deptName = "Computer Engineering";
      break;
    case "informationTechnology":
      facultyData = itFaculty;
      deptName = "Information Engineering";
      break;
    case "chemicalEngineering":
      facultyData = chemFaculty;
      deptName = "Chemical Engineering";
      break;
    case "electronicsAndComputerEngineering":
      facultyData = eceFaculty;
      deptName = "Electronics And Computer Engineering";
      break;
    case "firstYear":
      facultyData = firstYearFaculty;
      deptName = "First Year";
      break;
    case "mba":
      facultyData = mbaFaculty;
      deptName = "M.B.A";
      break;
    default:
      facultyData = [];
  }

  return (
    <div className="md:flex ">
      <HomeSideBar deptId={deptId} />

      <section className="w-auto mx-auto md:p-5 p-1">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          {deptName} Department Faculty
        </h2>

        <div className="overflow-x-auto bg-white shadow-lg rounded-2xl">
          <table className="w-full border-collapse">
            <thead>
              <tr className=" text-white bg-black text-left text-sm md:text-base">
                <th className="p-4">Sr. No</th>
                <th className="p-4">Name of Faculty</th>
                <th className="p-4">Designation</th>
                <th className="p-4">Qualification</th>
                <th className="p-4">Total Experience</th>
              </tr>
            </thead>
            <tbody>
              {facultyData.map((faculty, index) => (
                <tr
                  key={faculty.sr}
                  className={`border-b last:border-none ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-blue-50 transition`}
                >
                  <td className="p-4 text-gray-700 font-medium">{faculty.sr}</td>
                  <td className="p-4 text-gray-800">{faculty.name}</td>
                  <td className="p-4 text-gray-700">{faculty.designation}</td>
                  <td className="p-4 text-gray-600">{faculty.qualification}</td>
                  <td className="p-4 text-gray-700 font-semibold">{faculty.experience}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
