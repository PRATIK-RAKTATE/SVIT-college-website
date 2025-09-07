import React, { useState, useEffect } from "react";
import { Users, GraduationCap, UserCircle } from "lucide-react";

const AdvisoryCommittee = () => {
  const [animatedMembers, setAnimatedMembers] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const committee = [
    {
      sr: 1,
      name: "Prof. R. P. Sabale",
      dept: "Computer Dept",
      role: "Chairman",
      color: "from-blue-500 to-blue-600",
    },
    {
      sr: 2,
      name: "Prof. V. L. Kadlag",
      dept: "HOD Mechanical Engg",
      role: "Member",
      color: "from-green-500 to-green-600",
    },
    {
      sr: 3,
      name: "Prof. A. A. Hatkar",
      dept: "HOD E&TC",
      role: "Member",
      color: "from-purple-500 to-purple-600",
    },
    {
      sr: 4,
      name: "Dr. D. K. Chandre",
      dept: "HOD Chemical Engg",
      role: "Member",
      color: "from-orange-500 to-orange-600",
    },
    {
      sr: 5,
      name: "Prof. S. M. Rokade",
      dept: "HOD Computer",
      role: "Member",
      color: "from-pink-500 to-pink-600",
    },
    {
      sr: 6,
      name: "Prof. R. S. Bhalerao",
      dept: "HOD IT",
      role: "Member",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      sr: 7,
      name: "Prof. N. B. Shaikh",
      dept: "HOD Electrical Engg",
      role: "Member",
      color: "from-teal-500 to-teal-600",
    },
    {
      sr: 8,
      name: "Prof. K. P. Tambe",
      dept: "FE Dean",
      role: "Member",
      color: "from-red-500 to-red-600",
    },
    {
      sr: 9,
      name: "Prof. A. P. Kare",
      dept: "HOD M.B.A",
      role: "Member",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      sr: 10,
      name: "Dr. P. S. Bodake",
      dept: "Librarian, K.K. Wagh Engg, Nashik",
      role: "Member",
      color: "from-gray-500 to-gray-600",
    },
    {
      sr: 11,
      name: "Dr. Rajendra Kumbhar",
      dept: "HOD & Librarian, University of Pune",
      role: "Member",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      sr: 12,
      name: "Prof. P. E. Avhad",
      dept: "Librarian & Secretary",
      role: "Member",
      color: "from-emerald-500 to-emerald-600",
    },
  ];

  useEffect(() => {
    // Staggered entrance animation
    committee.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedMembers((prev) => [...prev, committee[index]]);
      }, index * 150);
    });
  }, []);

  return (
    <section className="relative w-full bg-gradient-to-br from-white via-blue-50 to-white py-16">
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
            Library Advisory Committee
          </h2>
          <p className="text-lg text-gray-600">
            SVIT - Pravara Institute of Technology
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </header>

        {/* Enhanced Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {animatedMembers.map((member, index) => (
            <div
              key={member.sr}
              className="group relative bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-300 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                transform:
                  hoveredIndex === index ? "translateY(-8px) scale(1.02)" : "",
                boxShadow:
                  hoveredIndex === index
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.8) inset"
                    : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
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
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center group-hover:from-white/20 group-hover:to-white/20 transition-all duration-300">
                      <span className="text-sm font-bold text-gray-700 group-hover:text-white transition-colors duration-300">
                        {member.sr}
                      </span>
                    </div>
                    <UserCircle className="w-6 h-6 text-gray-400 group-hover:text-white/80 transition-colors duration-300" />
                  </div>
                  {member.role === "Chairman" && (
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-md">
                      CHAIRMAN
                    </span>
                  )}
                  {member.role === "Member" &&
                    member.dept.includes("Librarian") && (
                      <span className="px-3 py-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold rounded-full shadow-md">
                        LIBRARIAN
                      </span>
                    )}
                </div>

                {/* Member Details */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-white transition-colors duration-300 leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 group-hover:text-white/90 transition-colors duration-300 font-medium">
                    {member.dept}
                  </p>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-gray-400 group-hover:text-white/70 transition-colors duration-300" />
                    <span className="text-xs text-gray-500 group-hover:text-white/70 transition-colors duration-300 font-medium">
                      {member.role}
                    </span>
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
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-gray-200">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700 font-medium">
              Total{" "}
              <span className="font-bold text-blue-600">
                {committee.length}
              </span>{" "}
              members including external experts
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

export default AdvisoryCommittee;
