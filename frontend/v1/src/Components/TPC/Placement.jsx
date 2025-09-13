import React from "react";
import { motion } from "framer-motion";
import {
  ClipboardDocumentCheckIcon,
  MegaphoneIcon,
  UserIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  SunIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    title: "Step 1: Registration",
    description:
      "Company registers via online link or email. Confirmation mail and call follow.",
    icon: ClipboardDocumentCheckIcon,
    gradient: "from-sky-400 to-blue-500",
  },
  {
    title: "Step 2: Pre Placement Talk",
    description:
      "Company presents job profiles and organization details to students.",
    icon: MegaphoneIcon,
    gradient: "from-indigo-400 to-purple-500",
  },
  {
    title: "Step 3: Invite Applications",
    description:
      "Shortlist candidates based on eligibility, CVs, or online profiles.",
    icon: UserIcon,
    gradient: "from-fuchsia-400 to-pink-500",
  },
  {
    title: "Step 4: Scheduling Process",
    description:
      "Placement office finalizes date and slot in coordination with company.",
    icon: CalendarDaysIcon,
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    title: "Step 5: Recruitment Process",
    description:
      "Tests/interviews conducted on-campus, off-campus, or via video conferencing.",
    icon: RocketLaunchIcon,
    gradient: "from-orange-400 to-red-500",
  },
  {
    title: "Step 6: Offer Acceptance",
    description:
      "Selected candidates informed via placement office as per institute rules.",
    icon: CheckCircleIcon,
    gradient: "from-green-400 to-lime-500",
  },
];

const PlacementRoadmap = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-indigo-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Decorative Background Blobs */}
      <div className="absolute top-10 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-indigo-700 mb-12 sm:mb-16"
        >
          🚀 Placement Process Roadmap
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-2 sm:border-l-4 border-indigo-300 ml-4 sm:ml-6 md:ml-0">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                className="mb-12 sm:mb-16 ml-6 sm:ml-8 md:ml-12 relative"
              >
                {/* Connector Dot */}
                <div className="absolute -left-9 sm:-left-12 top-2 w-3 sm:w-4 h-3 sm:h-4 bg-indigo-400 rounded-full border-2 sm:border-4 border-white"></div>

                {/* Icon Circle */}
                <div
                  className={`absolute -left-14 sm:-left-20 top-0 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r ${step.gradient} text-white flex items-center justify-center shadow-xl animate-bounce`}
                >
                  <Icon className="w-5 h-5 sm:w-7 sm:h-7" />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="bg-white/70 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border border-slate-200"
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-2 flex items-center gap-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base md:text-lg">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Internships & Final Placement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10"
        >
          {/* Summer/Winter Internships */}
          <div className="bg-gradient-to-br from-amber-200 to-orange-100 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:scale-105 transition">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <SunIcon className="w-6 h-6 sm:w-7 sm:h-7 text-amber-600" />
              <h3 className="text-xl sm:text-2xl font-bold text-amber-800">
                Summer / Winter Internships
              </h3>
            </div>
            <p className="text-amber-900 text-sm sm:text-base md:text-lg">
              2–5 weeks internships in May–June and Nov–Dec. Recruiters can
              spot talent early and nurture potential candidates.
            </p>
          </div>

          {/* Final Placements */}
          <div className="bg-gradient-to-br from-indigo-200 to-purple-100 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:scale-105 transition">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <AcademicCapIcon className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600" />
              <h3 className="text-xl sm:text-2xl font-bold text-indigo-800">
                Final Placements
              </h3>
            </div>
            <p className="text-indigo-900 text-sm sm:text-base md:text-lg">
              Pre-placement offers from internships are encouraged. Final
              interviews/tests conducted as per institute rules.
            </p>
          </div>
        </motion.div>

        {/* Calendar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 sm:mt-20 bg-white/80 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 border border-slate-200"
        >
          <div className="flex items-center gap-2 sm:gap-3 mb-4">
            <BriefcaseIcon className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800">
              📅 Placement Calendar
            </h3>
          </div>
          <ul className="list-disc pl-4 sm:pl-6 text-slate-700 space-y-1 sm:space-y-2 text-sm sm:text-base md:text-lg">
            <li>
              <strong>July – Oct:</strong> Summer Internships / Placements
            </li>
            <li>
              <strong>Oct – Nov:</strong> University Exams
            </li>
            <li>
              <strong>Dec – April:</strong> Winter Placements
            </li>
            <li>
              <strong>May – Mid June:</strong> University Exams
            </li>
            <li>
              <strong>Aug:</strong> University Results Declaration
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default PlacementRoadmap;
    