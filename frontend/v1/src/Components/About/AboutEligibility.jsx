import React from "react";

export default function EligibilityCriteria() {
  return (
    <div className=" w-[390px] mb-4 ml-5 md:w-full max-w-7xl md:ml-0 lg:ml-26 mt-5 bg-white rounded-2xl shadow-2xl overflow-hidden">
      <h3 className="text-2xl font-extrabold text-center py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white tracking-wide">
        Eligibility Criteria
      </h3>
      <div className="p-6 text-gray-800 space-y-4">
        <ul className="list-disc list-inside space-y-2">
          <li>
            Student should pass HSC (12<sup>th</sup> Science) examination with
            English as one of the subjects and Physics, Mathematics{" "}
            <strong>compulsory</strong>, and one subject from Chemistry /
            Biology / Biotechnology / Technical Vocational, together scoring
            above <strong>45 %</strong> marks.
          </li>
          <li>
            <strong>40 %</strong> marks for students under reserved category.
          </li>
          <li>
            Candidates are required to qualify in <strong>JEE (Main)</strong>{" "}
            examination.
          </li>
          <li>
            For further details, please refer to the eligibility criteria in the
            admission brochure published by <strong>D.T.E., Mumbai</strong> on
            their website.
          </li>
        </ul>
        <p className="font-semibold text-indigo-700">
          Eligibility Criteria for First Year Engineering Admission – For
          Further Details
        </p>
      </div>
    </div>
  );
}
