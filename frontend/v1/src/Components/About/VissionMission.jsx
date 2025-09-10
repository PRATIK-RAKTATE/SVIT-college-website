// VisionMission.jsx
import React from "react";

const VisionMission = () => {
  const data = {
    vision:
      "“To provide quality technical education in rural area to create competent human resources.”",
    mission:
      "“Committed to produce competent engineers to cater the needs of society by imparting skill based education through effective teaching learning process.”",
  };

  return (
    <div className="max-w-236 text-center h-125  w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-12">
      {/* Vision */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4">
          Our Vision
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">{data.vision}</p>
      </section>

      {/* Mission */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-600 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">{data.mission}</p>
      </section>
    </div>
  );
};

export default VisionMission;
