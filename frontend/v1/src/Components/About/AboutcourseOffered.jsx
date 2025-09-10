import React from "react";

export default function CoursesTable() {
  const rows = [
    [1, "Computer Engineering", 60],
    [2, "Chemical Engineering", 60],
    [3, "Electronics and Computer Engineering", 60],
    [4, "Information Technology", 60],
    [5, "MBA (PG Course)", 60],
  ];

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden md:w-full md:mt-14 ml-4 w-[400px] md:max-w-236 max-h-158 mt-1">
      <h2 className="text-2xl font-extrabold text-center py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white tracking-wide">
        Courses Offered
      </h2>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
            <th className="px-4 py-2 text-left text-sm font-semibold uppercase tracking-wider">
              Sr. No
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold uppercase tracking-wider">
              Name of Course
            </th>
            <th className="px-4 py-2 text-left text-sm font-semibold uppercase tracking-wider">
              Intake
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([sr, course, intake], i) => (
            <tr
              key={sr}
              className={`transition-colors duration-200 ${
                i % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-indigo-50`}
            >
              <td className="px-4 py-6 md:py-11 text-gray-800 font-medium">{sr}</td>
              <td className="px-4 py-6 text-gray-900">{course}</td>
              <td className="px-4 py-6 text-gray-800 font-medium">{intake}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
