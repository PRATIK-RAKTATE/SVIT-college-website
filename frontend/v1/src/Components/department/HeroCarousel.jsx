import React, { useEffect, useState } from "react";

const slides = [
  { img: "https://picsum.photos/id/1018/1920/1080", text: "Welcome to the Department" },
  { img: "https://picsum.photos/id/1015/1920/1080", text: "Cutting-Edge Research" },
  { img: "https://picsum.photos/id/1019/1920/1080", text: "World-Class Faculty" },
  { img: "https://picsum.photos/id/1016/1920/1080", text: "Join Our Community" },
];

export default function Carousel({ interval = 4500 }) {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  /* Progress-bar timer */
  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min((elapsed / interval) * 100, 100));
    }, 50);
    return () => clearInterval(timer);
  }, [index, interval]);

  /* Slide timer */
  useEffect(() => {
    const slideTimer = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      interval
    );
    return () => clearInterval(slideTimer);
  }, [interval]);

  return (
    <div className=" inset-0 w-screen h-screen overflow-hidden  bg-black">
      {/* Images */}
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.img}
          alt=""
          className={` inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0"
          }`}
        />
      ))}

      {/* Content block: text + progress + button */}
      <div className="absolute bottom-28 sm:bottom-32 left-4 right-4 md:left-12 md:right-auto md:max-w-lg lg:max-w-xl xl:max-w-2xl z-20 flex flex-col items-start space-y-4">
        {/* Text */}
        <h1 className="font-serif font-bold text-white drop-shadow-2xl 
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
          whitespace-normal break-words">
          {slides[index].text}
        </h1>

        {/* Colored Button */}
        <button className="relative z-30 px-8 py-3 sm:px-10 sm:py-4 bg-rose-600 text-white font-semibold rounded-lg hover:bg-rose-700 transition text-base sm:text-lg">
          Learn More
        </button>

        {/* Progress loader */}
        <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
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
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              i === index ? "bg-white scale-125" : "bg-white/40"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
