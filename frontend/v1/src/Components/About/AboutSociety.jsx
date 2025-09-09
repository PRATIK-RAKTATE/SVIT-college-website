import React from "react";

export default function RectangleContainer() {
  return (
    <div className=" max-w-242 w-full mt-13 h-[910px] md:max-h-126 bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
      {/* Heading */}
      <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6 relative">
        About the Society
        <span className="absolute left-1/2 -bottom-2 w-24 h-1 bg-red-500 rounded-full transform -translate-x-1/2"></span>
      </h1>

      {/* Content */}
      <p className="text-gray-700 text-lg leading-relaxed text-justify">
        The Pravara Rural Education Society grew, fostered and evolved during
        the lifetime of Padmashri Dr. Vitthalrao Vikhe Patil. After him, all the
        multifarious and multifaceted activities initiated by him were continued
        and, in fact, taken to greater heights by his illustrious son, Hon'ble
        Shri. E.V. alias Balasaheb Vikhe Patil, a veteran in Public Enterprises,
        Govt. of India.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mt-4 text-justify">
        The seed laid by Padmashriji is blossoming into a sylvan symphony with a
        large chain of educational institutions through the meticulous planning
        and dynamic leadership of Shri Balasaheb Vikhe Patil, the worthy son of
        a worthy father. He has taken a keen interest in the progress of various
        institutions of Pravara Rural Education Society and has undertaken the
        herculean task of modernizing the system and processes.
      </p>

      <p className="text-gray-700 text-lg leading-relaxed mt-4 text-justify">
        Blending new knowledge with Indian culture, he is working tirelessly to
        impart programmatic dimensions to the Pravara Rural Education Society
        and the institutions under its umbrella.
      </p>
    </div>
  );
}
