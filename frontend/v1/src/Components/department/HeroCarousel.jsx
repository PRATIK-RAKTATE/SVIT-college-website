import React, { useEffect, useState } from "react";

export default function Carousel({ slides, interval = 4500 }) {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Progress bar effect
  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min((elapsed / interval) * 100, 100));
    }, 50);
    return () => clearInterval(timer);
  }, [index, interval]);

  // Auto-slide effect
  useEffect(() => {
    const slideTimer = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      interval
    );
    return () => clearInterval(slideTimer);
  }, [slides.length, interval]);

  return (
    <div className="relative inset-0 w-[1500px] m-5 h-[530px] overflow-hidden bg-black">
      {/* Images */}
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.img}
          alt={`Slide ${i}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0"
          }`}
        />
      ))}

      {/* Text + loader */}
      <div className="absolute bottom-28 sm:bottom-32 left-4 right-4 md:left-12 z-20 space-y-3">
        <h1
          className="font-sans font-semibold text-white drop-shadow-2xl
                     text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {slides[index].text}
        </h1>

        {/* Progress loader */}
        <div className="w-80 h-2 bg-white/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-[width] duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full cursor-pointer transition ${
              i === index ? "bg-white scale-125" : "bg-white/40"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
