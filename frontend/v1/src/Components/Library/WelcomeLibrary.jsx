// WelcomeLibrary.jsx
import React from "react";

const WelcomeLibrary = () => {
  return (
    <div className="relative w-[359px]  md:w-[1100px] h-64 sm:h-80 md:h-96 mt-8 mx-auto rounded-2xl overflow-hidden shadow-xl">
      {/* Background Image with soft dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoomBg"
        style={{
          backgroundImage:
            "url(https://svit.ac.th/wp-content/uploads/2021/06/bg_library-bg.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Centered Welcome Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg animate-fadeIn">
          📚 Welcome to{" "}
          <span className="text-indigo-300">SVIT Central Library</span>
        </h1>
        <p className="mt-3 text-sm sm:text-lg md:text-xl text-gray-200 max-w-2xl animate-fadeInSlow">
          Knowledge Hub for Excellence
        </p>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-xs sm:text-sm">
        <div className="flex flex-col items-center animate-fadeBounce">
          <span>Scroll to explore</span>
          <div className="w-4 h-7 border-2 border-white/60 rounded-full flex items-start justify-center mt-1 p-0.5">
            <div className="w-1 h-1 bg-white/80 rounded-full animate-scrollDot" />
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes zoomBg {
          from {
            transform: scale(1.1);
          }
          to {
            transform: scale(1);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInSlow {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeBounce {
          0%,
          100% {
            opacity: 0.8;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-4px);
          }
        }
        @keyframes scrollDot {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(10px);
            opacity: 0;
          }
        }
        .animate-zoomBg {
          animation: zoomBg 12s ease-out forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out both;
        }
        .animate-fadeInSlow {
          animation: fadeInSlow 2s ease-out both;
        }
        .animate-fadeBounce {
          animation: fadeBounce 2s infinite;
        }
        .animate-scrollDot {
          animation: scrollDot 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default WelcomeLibrary;
