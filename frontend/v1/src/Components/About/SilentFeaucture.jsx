// SalientFeatures.jsx
import React from "react";

const SalientFeatures = () => {
  const features = [
    "The academic vigilance Committee headed by the Head of Departments.",
    "Disciplinary Committee to look into the in disciplinary Acts & Ragging.",
    "Power backup given on the campus.",
    "The student NSS wing is active in order to imbibe strong Social values in our students.",
    "Round the clock internet connectivity through dedicated 10 mbps Lease Line.",
    "Various Social events carried out for enrichment of students.",
  ];

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
          Salient Features
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <figure className="flex flex-col items-center">
            <img
              src="https://picsum.photos/400/300"
              alt="Library Reading Hall"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <figcaption className="mt-3 text-sm text-gray-600">
              Library Reading Hall
            </figcaption>
          </figure>

          <figure className="flex flex-col items-center">
            <img
              src="https://etimg.etb2bimg.com/photo/107150394.cms"
              alt="College buses"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <figcaption className="mt-3 text-sm text-gray-600">
              College buses
            </figcaption>
          </figure>
        </div>

        <ul className="space-y-4">
          {features.map((f, i) => (
            <li
              key={i}
              className="flex items-start text-gray-700 text-base leading-relaxed"
            >
              <span className="mr-3 text-indigo-600 font-bold">•</span>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SalientFeatures;
