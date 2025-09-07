import React from "react";
import { useParams } from "react-router-dom";
import HomeSideBar from "../department/Sidebar.jsx";

// Import course data for each department
import { csCourse } from "../Side Bar Constants/csDept.js";
import { itCourse } from "../Side Bar Constants/itDept";
import { mbaCourse } from "../Side Bar Constants/mbaDept.js";
import { firstYearCourse } from "../Side Bar Constants/feDept.js";
import { chemCourse } from "../Side Bar Constants/chemDept.js";
import { eceCourse } from "../Side Bar Constants/eceDept.js";
// import other courses as needed

export default function Course() {
  const { deptId } = useParams();

  // Select course data based on deptId
  let courseData;
  switch (deptId) {
    case "computerEngineering":
      courseData = csCourse;
      break;
    case "electronicsAndComputerEngineering":
      courseData = eceCourse;
      break;
    case "informationTechnology":
      courseData = itCourse;
      break;
    case "mba":
      courseData = mbaCourse;
      break;
    case "firstYear":
      courseData = firstYearCourse;
      break;
    case "chemicalEngineering":
      courseData = chemCourse;
      break;
    // add other departments
    default:
      courseData = null;
  }

  if (!courseData)
    return (
      <p className="text-center mt-10">Course information not available.</p>
    );

  return (
    <div className="md:flex w-auto mt-5  gap-9  ">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4">
        <HomeSideBar deptId={deptId} />
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          {deptId} - Course Details
        </h1>

        {/* Introduction */}
        <div className="space-y-4 text-gray-700">
          {courseData.introduction?.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
          {courseData.overview?.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Facilities */}
        <div className="space-y-4 text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800">Facilities</h2>
          {courseData.facilities?.map((fac, idx) => (
            <p key={idx}>{fac}</p>
          ))}
        </div>

        {/* Projects */}
        <div className="space-y-4 text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800">
            Student Projects & Research
          </h2>
          <ul className="list-disc list-inside space-y-1 ml-4">
            {courseData.projects?.map((proj, idx) => (
              <li key={idx}>{proj}</li>
            ))}
          </ul>
        </div>

        {/* Association */}
        <div className="space-y-4 text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800">
            Student Association
          </h2>
          <ul className="list-disc list-inside space-y-1 ml-4">
            {courseData.association?.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Major Facilities */}
        <div className="space-y-4 text-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800">
            Major Facilities Provided
          </h2>
          <ul className="list-disc list-inside space-y-1 ml-4">
            {courseData.majorFacilities?.map((fac, idx) => (
              <li key={idx}>{fac}</li>
            ))}
          </ul>
        </div>

        {/* Course Info Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gray-300">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3 border border-gray-300">Branch Name</th>
                <th className="p-3 border border-gray-300">Course Name</th>
                <th className="p-3 border border-gray-300">Intake</th>
                <th className="p-3 border border-gray-300">
                  Establishment Year
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-50 hover:bg-gray-100 transition">
                <td className="p-3 border border-gray-300">
                  {courseData.courseInfo.branch}
                </td>
                <td className="p-3 border border-gray-300">
                  {courseData.courseInfo.courseName}
                </td>
                <td className="p-3 border border-gray-300">
                  {courseData.courseInfo.intake}
                </td>
                <td className="p-3 border border-gray-300">
                  {courseData.courseInfo.establishmentYear}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
