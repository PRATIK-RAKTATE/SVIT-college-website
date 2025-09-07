import React, { useState, useEffect } from "react";
import { User, Users, GraduationCap, Briefcase, Calendar } from "lucide-react";

const LibraryFaculty = () => {
  const [animatedFaculty, setAnimatedFaculty] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const faculty = [
    {
      sr: 1,
      name: "Mr. Popat E. Avhad",
      designation: "Librarian",
      qualification:
        "M.A. B.Ed M.Lib.&I.Sc UGC-NET, SET M.Phil.(Library Science) Ph.D (Library Management)",
      experience: "15 Years",
      color: "from-blue-500 to-blue-600",
    },
    {
      sr: 2,
      name: "Mrs. Tajane G. E.",
      designation: "Assistant Librarian",
      qualification: "M.A. B. Lib. & I. Sc.",
      experience: "12 Years",
      color: "from-purple-500 to-purple-600",
    },
    {
      sr: 3,
      name: "Mr. Daware S. M.",
      designation: "Library Attendant",
      qualification: "B.A.",
      experience: "20 Years",
      color: "from-green-500 to-green-600",
    },
    {
      sr: 4,
      name: "Mrs. Sadgir V. R.",
      designation: "Library Peon",
      qualification: "S.S.C.",
      experience: "16 Years",
      color: "from-orange-500 to-orange-600",
    },
  ];

  useEffect(() => {
    faculty.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedFaculty((prev) => [...prev, faculty[index]]);
      }, index * 200);
    });
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-br from-white via-gray-50 to-white py-16">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.3) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <header className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Department Faculty
          </h2>
          <p className="text-lg text-gray-600">Library Department - SVIT</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </header>

        {/* Faculty Cards Grid - 3 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animatedFaculty.map((member, index) => (
            <div
              key={member.sr}
              className="group relative bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
                transform: hoveredIndex === index ? "translateY(-8px)" : "",
                boxShadow:
                  hoveredIndex === index
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                    : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Enhanced Header with Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`}
              ></div>

              <div className="relative z-10">
                {/* Member Number and Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center group-hover:from-white/20 group-hover:to-white/20 transition-all duration-300">
                      <span className="text-lg font-bold text-gray-700 group-hover:text-white transition-colors duration-300">
                        {member.sr}
                      </span>
                    </div>
                    <User className="w-6 h-6 text-gray-400 group-hover:text-white/80 transition-colors duration-300" />
                  </div>
                  {member.designation === "Librarian" && (
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-md">
                      HEAD
                    </span>
                  )}
                </div>

                {/* Member Details */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300 leading-tight">
                    {member.name}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-gray-400 mt-0.5 group-hover:text-white/70 transition-colors duration-300 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500 group-hover:text-white/70 transition-colors duration-300">
                          Designation
                        </p>
                        <p className="text-sm font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                          {member.designation}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-gray-400 mt-0.5 group-hover:text-white/70 transition-colors duration-300 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500 group-hover:text-white/70 transition-colors duration-300">
                          Qualification
                        </p>
                        <p className="text-sm text-gray-700 group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                          {member.qualification}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-gray-400 mt-0.5 group-hover:text-white/70 transition-colors duration-300 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500 group-hover:text-white/70 transition-colors duration-300">
                          Experience
                        </p>
                        <p className="text-sm font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                          {member.experience}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Hover Effect */}
                <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Bottom Border Animation */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-x-0 group-hover:scale-x-100"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Footer */}
        <footer className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-gray-200">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700 font-medium">
              Total{" "}
              <span className="font-bold text-blue-600">{faculty.length}</span>{" "}
              faculty members
            </span>
            <div className="w-px h-6 bg-gray-300"></div>
            <span className="text-gray-600">
              Average Experience:{" "}
              <span className="font-semibold">15.75 Years</span>
            </span>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default LibraryFaculty;
