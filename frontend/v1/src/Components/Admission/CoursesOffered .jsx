// CoursesOffered.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CoursesOffered = () => {
  const courses = [
    { id: 1, name: 'Computer Engineering', intake: 60, icon: '💻', color: 'from-blue-500 to-cyan-400', description: 'Learn cutting-edge technologies, AI, ML, and software development' },
    { id: 2, name: 'Chemical Engineering', intake: 60, icon: '🧪', color: 'from-green-500 to-emerald-400', description: 'Master process engineering, petrochemicals, and sustainable technologies' },
    { id: 3, name: 'Electronics and Computer Engineering', intake: 60, icon: '🔌', color: 'from-purple-500 to-pink-400', description: 'Combine electronics hardware with computer software expertise' },
    { id: 4, name: 'Information Technology', intake: 60, icon: '🌐', color: 'from-indigo-500 to-purple-400', description: 'Specialize in networking, cybersecurity, and cloud computing' },
    { id: 5, name: 'MBA (PG Course)', intake: 60, icon: '📊', color: 'from-orange-500 to-red-400', description: 'Develop leadership skills and business management expertise' }
  ];

  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-4 overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            SVIT Nashik Engineering Courses Offered
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discover our industry-focused engineering and management programs designed for your success
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedCourse(selectedCourse === course.id ? null : course.id)}
            >
              {/* Card */}
              <div className={`relative bg-gradient-to-br ${course.color} p-8 rounded-3xl shadow-2xl overflow-hidden transform-gpu`}>
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -skew-x-12 group-hover:animate-pulse" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{course.icon}</span>
                    <motion.div
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="bg-white/20 backdrop-blur rounded-full p-3"
                    >
                      <span className="text-2xl font-bold text-white">{course.intake}</span>
                    </motion.div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{course.name}</h3>
                  <p className="text-white/80 text-sm">{course.description}</p>
                  
                  {/* Animated intake counter */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                    className="mt-4 flex items-center gap-2"
                  >
                    <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-white text-sm">
                      Intake: {course.intake} Seats
                    </span>
                  </motion.div>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"
                />
              </div>

              {/* Expanded details */}
              <AnimatePresence>
                {selectedCourse === course.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
                  >
                    <h4 className="text-white font-semibold mb-3">Course Highlights:</h4>
                    <ul className="space-y-2 text-white/80 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        Industry-aligned curriculum
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        Experienced faculty with industry exposure
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        Modern labs and research facilities
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        Excellent placement opportunities
                      </li>
                    </ul>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                    >
                      Apply Now
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-8">Total Intake Capacity</h3>
            <div className="flex justify-center items-center gap-8">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  300
                </div>
                <p className="text-slate-300 mt-2">Total Seats</p>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  5
                </div>
                <p className="text-slate-300 mt-2">Courses</p>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                  60
                </div>
                <p className="text-slate-300 mt-2">Seats per Course</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CoursesOffered;