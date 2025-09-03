// DeptInfo.jsx
import React from "react";

const DeptInfo = () => {
  return (
    <div className="w-full p-4 sm:p-6 lg:p-8">
      {/* ---------- KEYFRAMES ---------- */}
      <style>{`
        @keyframes circleGlow {
          0%   { box-shadow: 0 0 0 0px   rgba(160,70,75,0.6); }
          50%  { box-shadow: 0 0 0 12px  rgba(160,70,75,0);  }
          100% { box-shadow: 0 0 0 0px   rgba(160,70,75,0);  }
        }
        .glow-wrapper {
          border-radius: 0.75rem;          /* same as rounded-xl */
          animation: circleGlow 2s infinite;
        }
      `}</style>

      {/* ---------- CARDS ---------- */}
      <div className="flex flex-col space-y-4 sm:space-y-6">
        {/* Vision */}
        <div className="glow-wrapper">
          <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 transition-colors duration-300 hover:bg-[#a0464b] hover:text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Vision</h2>
            <p className="text-sm sm:text-base leading-relaxed">
              To nurture excellence in education, research and innovation in
              Computer Science & Engineering.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="glow-wrapper">
          <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 transition-colors duration-300 hover:bg-[#a0464b] hover:text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Mission</h2>
            <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
              <li>Provide quality education through modern pedagogy.</li>
              <li>Foster research culture and industry collaboration.</li>
              <li>Develop professionals with ethical values.</li>
            </ul>
          </div>
        </div>

        {/* HOD Desk */}
        <div className="glow-wrapper">
          <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 transition-colors duration-300 hover:bg-[#a0464b] hover:text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">HOD Desk</h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Our department is committed to producing globally competent
              engineers who can lead technological advancements and serve
              society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeptInfo;