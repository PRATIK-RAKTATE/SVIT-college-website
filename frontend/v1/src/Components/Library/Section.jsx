// LibraryGallery.jsx
import React, { useState, useEffect } from "react";

const Section = () => {
  const images = [
    {
      id: 1,
      src: "https://svitnashik.in/Images/Events/department/Library/Book_Bank_Schme.jpg",
      alt: "Book Bank Scheme",
      caption: "Book Bank Scheme",
    },
    {
      id: 2,
      src: "https://svitnashik.in/Images/Events/department/Library/Digital_Library_Section.jpg",
      alt: "Digital Library Section",
      caption: "Digital Library Section",
    },
    {
      id: 3,
      src: "https://svitnashik.in/Images/Events/department/Library/Individual_Study_Room.jpg",
      alt: "Individual Study Room",
      caption: "Individual Study Room",
    },
    {
      id: 4,
      src: "https://svitnashik.in/Images/Events/department/Library/Issuing_Section.jpg",
      alt: "Issuing Section",
      caption: "Issuing Section",
    },
    {
      id: 5,
      src: "https://svitnashik.in/Images/Events/department/Library/Reading_Room.jpg",
      alt: "Reading Room",
      caption: "Reading Room",
    },
    {
      id: 6,
      src: "https://svitnashik.in/Images/Events/department/Library/Stacking_Section.jpg",
      alt: "Stacking Section",
      caption: "Stacking Section",
    },
  ];

  const [selected, setSelected] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Auto play effect
  useEffect(() => {
    if (!autoPlay) return;
    setProgress(0);
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const percent = Math.min((elapsed / 4000) * 100, 100);
      setProgress(percent);
      if (percent >= 100) {
        setSelected((p) => (p + 1) % images.length);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [autoPlay, selected, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft")
        setSelected((p) => (p - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setSelected((p) => (p + 1) % images.length);
      if (e.key === "Escape") setIsFullscreen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [images.length]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 text-gray-800 p-4 sm:p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 animate-fadeIn">
            Library Sections
          </h1>

          {/* MAIN DISPLAY */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl mb-6 group animate-zoomIn"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            <img
              key={images[selected].id}
              src={images[selected].src}
              alt={images[selected].alt}
              className="w-full h-96 md:h-[28rem] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-2xl md:text-3xl font-bold drop-shadow-lg">
                {images[selected].caption}
              </h2>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30">
              <div
                style={{ width: `${progress}%` }}
                className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all"
              />
            </div>

            {/* NAV ARROWS */}
            <button
              onClick={() =>
                setSelected((p) => (p - 1 + images.length) % images.length)
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => setSelected((p) => (p + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* FULLSCREEN ICON */}
            <button
              onClick={() => setIsFullscreen(true)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
            </button>
          </div>

          {/* THUMBNAIL STRIP */}
          <div className="flex gap-3 justify-center flex-wrap px-2">
            {images.map((img, idx) => (
              <button
                key={img.id}
                onClick={() => setSelected(idx)}
                className={`relative rounded-xl overflow-hidden w-20 h-20 md:w-24 md:h-24 transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${selected === idx ? "ring-4 ring-purple-500 scale-110 shadow-xl" : "opacity-70 hover:opacity-100"}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-1 left-1 text-[10px] md:text-xs text-white font-semibold">
                  {img.caption}
                </span>
              </button>
            ))}
          </div>

          {/* ANIMATED DOTS */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSelected(idx)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${selected === idx ? "bg-gradient-to-r from-purple-500 to-indigo-500 scale-125" : "bg-gray-300 hover:bg-gray-400"}`}
              />
            ))}
          </div>

          {/* HINT */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Use ← → keys to navigate | Click image for fullscreen
          </p>
        </div>
      </div>

      {/* FULLSCREEN MODAL */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center animate-fadeIn"
          onClick={() => setIsFullscreen(false)}
        >
          <img
            src={images[selected].src}
            alt={images[selected].alt}
            className="max-w-full max-h-full rounded-2xl shadow-2xl animate-zoomIn"
          />
          <button
            className="absolute top-6 right-6 text-white bg-black/50 p-3 rounded-full hover:bg-black/70 transition"
            onClick={() => setIsFullscreen(false)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="absolute bottom-6 left-6 text-white bg-black/50 px-4 py-2 rounded-lg">
            {images[selected].caption}
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .animate-zoomIn {
          animation: zoomIn 0.4s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Section;
