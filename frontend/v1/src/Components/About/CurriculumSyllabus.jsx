import React from "react";

export default function CurriculumInfo() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-14 max-h-125 bg-white rounded-2xl shadow-2xl overflow-hidden">
      <h2 className="text-2xl font-extrabold text-center py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white tracking-wide">
        Curriculum
      </h2>

      <div className="p-6 text-gray-800 space-y-4">
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>Undergraduate Engineering, Post-graduate Engineering and MBA Curriculum of University of Pune.</li>
          <li>Semester Pattern, Total 8 Semesters.</li>
          <li>Semester-wise Examination Scheme.</li>
          <li>Continuous Assessment System for Term Work and Practical.</li>
          <li>Seminar at Pre-Final Semester and Project at Final Semester.</li>
          <li>Minimum 75 % Attendance in each head of passing for Grant of Term.</li>
          <li>Online Examination at F.E. and S.E. for 50 marks in each subject during the semesters and 50 marks offline examination at end of both semesters.</li>
          <li>Offline Examination of 30 marks during the semester for T.E. and 70 marks examination at the end of both semesters.</li>
        </ul>

        <div className="pt-4 border-t border-gray-200 text-sm">
          <p className="font-semibold text-indigo-700 mb-2">For further details visit:</p>
          <a
            href="https://www.unipune.ac.in" // replace with actual syllabus link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
          >
            Syllabus – Click here
          </a>
        </div>
      </div>
    </div>
  );
}