// PlacementCounter.jsx
import React, { useEffect, useState } from "react";

export default function PlacementCounter() {
  const target = 90; // 🎯 Final placement percentage
  const [level, setLevel] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setLevel((l) => (l >= target ? target : l + 1));
    }, 25);
    return () => clearInterval(t);
  }, []);

  const waveY = 180 - (level / 100) * 160; // water level height

  // Recruiter logos (transparent PNG/SVG from official sources/CDNs)
  const recruiters = [
    {
      name: "TCS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tata_Consultancy_Services_old_logo.svg/768px-Tata_Consultancy_Services_old_logo.svg.png?20210617123944",
    },
    {
      name: "Infosys",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/600px-Infosys_logo.svg.png?20100302211036",
    },
    {
      name: "Wipro",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Wipro_new_logo.svg/768px-Wipro_new_logo.svg.png?20250425120007",
    },
    {
      name: "Cognizant",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cognizant_logo_2022.svg/768px-Cognizant_logo_2022.svg.png?20220319083105",
    },
    {
      name: "Accenture",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/245px-Accenture.svg.png?20241209170218",
    },
  ];

  return (
    <div className="min-h-[85vh] bg-white flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Top Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-sky-700 mb-2 tracking-wide text-center">
        Our Strong Placement Record
      </h2>

      {/* Animated number above tank */}
      <p className="text-5xl font-bold text-sky-500 mb-6 animate-pulse drop-shadow-md">
        {level}%
      </p>

      {/* Wider Counter */}
      <div className="relative w-full max-w-[1000px] h-[250px]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            {/* liquid gradient */}
            <linearGradient id="liquidGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>

            {/* gradient for shiny text */}
            <linearGradient id="shinyGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#06b6d4">
                <animate
                  attributeName="offset"
                  values="0;1;0"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>

            {/* tank shape */}
            <clipPath id="tankMask">
              <path d="M20 40 Q20 20 40 20 h120 q20 0 20 20 v120 q0 20 -20 20 H40 q-20 0 -20 -20Z" />
            </clipPath>

            {/* text mask */}
            <mask id="textMask">
              <rect width="100%" height="100%" fill="black" />
              <rect x="0" y={waveY} width="200" height="200" fill="white" />
              <g fill="white">
                <path
                  d={`M0 ${waveY} Q 50 ${waveY - 8} 100 ${waveY} T 200 ${waveY} V 200 H 0 Z`}
                >
                  <animate
                    attributeName="d"
                    values={`M0 ${waveY} Q 50 ${waveY - 8} 100 ${waveY} T 200 ${waveY} V 200 H 0 Z;
                             M0 ${waveY} Q 50 ${waveY + 8} 100 ${waveY} T 200 ${waveY} V 200 H 0 Z;
                             M0 ${waveY} Q 50 ${waveY - 8} 100 ${waveY} T 200 ${waveY} V 200 H 0 Z`}
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            </mask>
          </defs>

          {/* water inside tank */}
          <g clipPath="url(#tankMask)">
            <rect x="0" y={waveY} width="200" height="200" fill="url(#liquidGrad)" />
            <path
              d={`M0 ${waveY} Q 50 ${waveY - 8} 100 ${waveY} T 200 ${waveY} V 200 H 0 Z`}
              fill="url(#liquidGrad)"
            >
              <animate
                attributeName="d"
                values={`M0 ${waveY} Q 50 ${waveY - 8} 100 ${waveY} T 200 ${waveY} V 200 H 0 Z;
                         M0 ${waveY} Q 50 ${waveY + 8} 100 ${waveY} T 200 ${waveY} V 200 H 0 Z;
                         M0 ${waveY} Q 50 ${waveY - 8} 100 ${waveY} T 200 ${waveY} V 200 H 0 Z`}
                dur="3s"
                repeatCount="indefinite"
              />
            </path>

            {/* floating bubbles */}
            {Array.from({ length: 6 }).map((_, i) => (
              <circle
                key={i}
                r={Math.random() * 2 + 1}
                cx={Math.random() * 180 + 10}
                cy={waveY + 10}
                fill="#fff"
                fillOpacity="0.5"
              >
                <animate
                  attributeName="cy"
                  values={`${waveY + 10};30`}
                  dur={`${Math.random() * 2 + 2}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.5;0"
                  dur={`${Math.random() * 2 + 2}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </g>

          {/* percentage number */}
          <g mask="url(#textMask)">
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontSize="70"
              fontWeight="900"
              fill="url(#shinyGrad)"
              style={{ filter: "drop-shadow(0 0 6px rgba(6,182,212,0.5))" }}
            >
              {level}%
            </text>
          </g>

          {/* tank outline */}
          <path
            d="M20 40 Q20 20 40 20 h120 q20 0 20 20 v120 q0 20 -20 20 H40 q-20 0 -20 -20Z"
            fill="none"
            stroke="#0ea5e9"
            strokeOpacity="0.4"
            strokeWidth="3"
          />
        </svg>
      </div>

      {/* Below Text */}
      <p className="mt-8 text-gray-700 text-lg text-center max-w-3xl leading-relaxed">
        With strong industry linkages and consistent performance, our institute
        has achieved an outstanding{" "}
        <span className="font-bold text-sky-600">{target}% placement rate</span>.
        This reflects our commitment to preparing students for successful
        careers in top companies.
      </p>

      {/* Logos Marquee (Scrolling Recruiters) */}
      <div className="w-full overflow-hidden mt-12">
        <div className="flex gap-16 animate-[scroll_20s_linear_infinite]">
          {recruiters.map((r, i) => (
            <img
              key={i}
              src={r.logo}
              alt={r.name}
              className="h-12 object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>

      {/* Keyframe for marquee animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </div>
  );
}
