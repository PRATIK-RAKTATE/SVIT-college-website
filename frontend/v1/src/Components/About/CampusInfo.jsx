import React from "react";

export default function CampusInfo() {
  return (
    <div className="w-[900px] h-[400px] mt-20 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-row">
      {/* Image on Left */}
      <img
        src="https://svitnashik.in/Images/Profile%20Images/Infrastructure/CollegesFront.jpg"
        alt="Campus"
        className="w-1/2 h-full object-cover"
      />

      {/* Text on Right */}
      <div className="flex-1 p-6 flex flex-col justify-center">
        <h3 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text mb-4">
          Campus
        </h3>
        <p className="text-base text-gray-700 leading-relaxed">
          Spread across 93 acres surrounded by hills on the Nashik-Pune / Mumbai-Shirdi highway,
          12 km from Nashik Road station—pollution-free, hill-station-like serenity.
        </p>
      </div>
    </div>
  );
}
