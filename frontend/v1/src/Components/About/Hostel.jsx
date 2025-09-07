import React from "react";

export default function HostelInfo() {
  return (
    <div className="w-[1300px] h-[400px] ml-28 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-row">
      {/* Left - Girls Hostel */}
      <img
        src="https://svitnashik.in/Images/Profile%20Images/Infrastructure/Girls%20hostel.jpg"
        alt="Girls Hostel"
        className="w-1/3 h-full object-cover"
      />

      {/* Center - Text */}
      <div className="w-1/3 flex flex-col items-center justify-center p-6 text-center">
        <h3 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text mb-4">
          Hostel
        </h3>
        <p className="text-base text-gray-700 leading-relaxed">
          The institute has well-furnished hostels for boys & girls with intake
          of 250 & for girls with an intake of 100 with well-equipped kitchen &
          dining hall mess, solar water system, telephone facility, recreational
          hall, reading hall etc.
        </p>
      </div>

      {/* Right - Boys Hostel */}
      <img
        src="https://svitnashik.in/Images/Profile%20Images/Infrastructure/Boys%20Hostel.jpg"
        alt="Boys Hostel"
        className="w-1/3 h-full object-cover"
      />
    </div>
  );
}
