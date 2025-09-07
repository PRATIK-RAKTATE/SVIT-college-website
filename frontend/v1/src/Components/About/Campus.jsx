import React from "react";

const Campus = () => {
  return (
    <div className="w-[1300px] h-[400px] ml-28 mt-12 mb-10 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-row">
      {/* Left - Girls Hostel */}
      <img
        src="https://svitnashik.in/Images/Profile%20Images/Infrastructure/indoor_stadium.jpg"
        alt="Girls Hostel"
        className="w-1/3 h-full object-cover"
      />

      {/* Center - Text */}
      <div className="w-1/3 flex flex-col items-center justify-center p-6 text-center">
        <h3 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text mb-4">
          Campus
        </h3>
        <p className="text-base text-gray-700 leading-relaxed">
          Spacious playground of 3000 sq. m area, indoor gymnasium
        </p>
      </div>

      {/* Right - Boys Hostel */}
      <img
        src="https://svitnashik.in/Images/Profile%20Images/Infrastructure/indoor_stadium1.jpg"
        alt="Boys Hostel"
        className="w-1/3 h-full object-cover"
      />
    </div>
  );
};

export default Campus;
