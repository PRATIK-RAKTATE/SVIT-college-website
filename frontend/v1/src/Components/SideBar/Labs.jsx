import React from "react";
import { useParams } from "react-router-dom";
import { csLabs } from "../Side Bar Constants/csDept";
import HomeSideBar from "../department/Sidebar";
import { itLabs } from "../Side Bar Constants/itDept";
import { chemicalLabs } from "../Side Bar Constants/chemDept";
import { eceLabs } from "../Side Bar Constants/eceDept";
import { feLabs } from "../Side Bar Constants/feDept";
import { mbaLabs } from "../Side Bar Constants/mbaDept";

export default function Lab() {
  const { deptId } = useParams();

  let labData = [];
  let deptName;
  switch (deptId) {
    case "computerEngineering":
      labData = csLabs;
      deptName = "Computer Engineering";
      break;
     case "informationTechnology":
          labData = itLabs;
          deptName = "Information Engineering";
          break;
        case "chemicalEngineering":
          labData = chemicalLabs;
          deptName = "Chemical Engineering";
          break;
        case "electronicsAndComputerEngineering":
          labData = eceLabs;
          deptName = "Electronics And Computer Engineering";
          break;
        case "firstYear":
          labData = feLabs;
          deptName = "First Year";
          break;
        case "mba":
          labData = mbaLabs;
          deptName = "M.B.A";
          break;
    default:
      labData = [];
      break;
  }

  const [firstLab, ...rest] = labData;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ----------------  TOP ROW : sidebar + hero  ---------------- */}
     
      <div className="flex flex-col md:flex-row">
        <HomeSideBar deptId={deptId} />

        {firstLab && (
          <div className="flex-1 p-4 pt-14 md:pt-13 md:pl-8 md:pr-8">
            <div className="relative overflow-hidden rounded-2xl bg-black shadow-xl animate-fade-up">
              {/* 16:9 hero image */}
              <div className="w-full" style={{ aspectRatio: "16/7" }}>
                <img
                  className="h-full w-full object-cover opacity-60"
                  src={firstLab.img}
                  alt={firstLab.name}
                />
              </div>

              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-center text-white">
                <h1 className="text-2xl md:text-4xl font-extrabold mb-3 drop-shadow-lg">
                  {firstLab.name}
                </h1>
                <p className="text-sm md:text-base max-w-3xl drop-shadow-md">
                  {firstLab.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ----------------  BOTTOM ROW : sidebar + Other Labs  ---------------- */}
      {rest.length > 0 && (
        <div className="flex flex-col md:flex-row">
          {/* empty cell under sidebar (keeps alignment) */}
          <div className="md:w-auto md:ml-50  flex-shrink-0" />

          <section className="flex-1 px-4 pb-8 md:px-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
              Other Labs
            </h2>

            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {rest.map((lab) => (
                <article
                  key={lab.name}
                  className="group relative shrink-0 w-72 md:w-80
                           overflow-hidden rounded-xl bg-black shadow-lg
                           transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]
                           hover:!grow hover:!shrink-0"
                >
                  <div style={{ aspectRatio: "4/3" }} className="w-full">
                    <img
                      className="absolute inset-0 h-full w-full object-cover
                               transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]
                               group-hover:scale-110"
                      src={lab.img}
                      alt={lab.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="text-lg font-bold">{lab.name}</h3>
                    <p
                      className="mt-1 text-sm opacity-0 max-h-0
                              group-hover:opacity-100 group-hover:max-h-40
                              transition-all duration-500"
                    >
                      {lab.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes fade-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>
    </div>
  );
}
