// VisionMissionHOD.jsx
import React from "react";

const Section = ({ title, description, image, variant, imagePosition }) => {
  const gradientClasses = {
    vision: "bg-gradient-to-br from-blue-500 to-blue-400",
    mission: "bg-gradient-to-br from-green-500 to-green-400",
    leadership: "bg-gradient-to-br from-purple-500 to-purple-400",
  };

  const flexDirection =
    imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse";

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className={`flex flex-col ${flexDirection} h-full`}>
        {/* IMAGE */}
        <div className="md:w-1/2 relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-64 md:h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div
            className={`absolute inset-0 ${gradientClasses[variant]} opacity-20`}
          ></div>
        </div>

        {/* TEXT */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <div
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 w-fit ${gradientClasses[variant]} text-white`}
          >
            {title}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
          <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

// ✅ HOD Section (text only, styled same as Vision/Mission cards)
const HodSection = () => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="p-8 flex flex-col justify-center">
        {/* HOD DESK Header */}
        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6 bg-gradient-to-br from-purple-500 to-purple-400 text-white mx-auto">
          HOD DESK
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          About our department
        </h3>

        <p className="text-gray-600 leading-relaxed text-lg mt-6 text-justify">
          The department of Computer engineering is one of the oldest
          departments and established in the year 1999. It offers UG programs in
          Computer Engineering with the intake of 60 along with post graduate
          program in Master of Engineering with the intake of 24 affiliated to
          Savitribai Phule Pune University.
          <br />
          <br />
          The aim of the Department is to motivate young professionals in
          building cognitive characteristics and improve the rising engineers
          with latest trends in technology. The programme is designed to provide
          students theoretical knowledge and practical skills in the field of
          latest emerging technology. This curriculum is good enough for
          employment in academia, government, research, industry, engineering
          and management positions. The department is committed to continuously
          improve the quality of education by enhancing the knowledge of
          students and staff members.
          <br />
          <br />
          The department has the blend of young and experience faculty and
          technical staff. It has in all 10 state of-the-art computer
          laboratories with latest computing equipments and softwares and
          classrooms and a Seminar Hall.
          <br />
          <br />I am confident that our staff members and students would satisfy
          the responsibility and credibility of the department by showing a high
          level of professional competence in their respective domains.
        </p>
      </div>
    </div>
  );
};

const VisionMissionHOD = ({ vision, mission }) => {
  const sections = [
    {
      title: "Our Vision",
      description: vision,
      image: "https://matsuniversity.ac.in/image/vision.jpg",
      variant: "vision",
      imagePosition: "left",
    },
    {
      title: "Our Mission",
      description: mission,
      image:
        "https://static.vecteezy.com/system/resources/previews/013/030/925/non_2x/finacial-success-chart-concept-on-virtual-screen-abstract-business-background-mission-business-concept-photo.jpg",
      variant: "mission",
      imagePosition: "right",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto space-y-16">
      {/* Intro */}
      <div className="text-center mb-8">
        <p className="text-xl font-semibold text-gray-600 max-w-3xl mx-auto">
          Discover our vision, mission, and leadership commitment to educational
          excellence
        </p>
      </div>

      {/* HOD Section */}
      <HodSection />

      {/* Vision & Mission Sections */}
      <div className="space-y-12">
        {sections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </div>
    </section>
  );
};

export default VisionMissionHOD;
