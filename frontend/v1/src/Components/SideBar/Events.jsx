// Events.jsx  –  everything inside the component block
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import HomeSideBar from "../department/Sidebar.jsx";
import { csEvents } from "../Side Bar Constants/csDept.js";
import { itEvents } from "../Side Bar Constants/itDept.js";
import { chemicalEvents } from "../Side Bar Constants/chemDept.js";
import { eceEvents } from "../Side Bar Constants/eceDept.js";
import { feEvents } from "../Side Bar Constants/feDept.js";
import { mbaEvents } from "../Side Bar Constants/mbaDept.js";

export default function Events() {
  const { deptId } = useParams();

  /* ----------  data & name  ---------- */
  let eventData = [];
  let deptName = "";
  switch (deptId) {
    case "computerEngineering":
      eventData = csEvents;
      deptName = "Computer Engineering";
      break;
      case "informationTechnology":
            eventData = itEvents;
            deptName = "Information Engineering";
            break;
          case "chemicalEngineering":
            eventData = chemicalEvents;
            deptName = "Chemical Engineering";
            break;
          case "electronicsAndComputerEngineering":
            eventData = eceEvents;
            deptName = "Electronics And Computer Engineering";
            break;
          case "firstYear":
            eventData = feEvents;
            deptName = "First Year";
            break;
          case "mba":
            eventData = mbaEvents;
            deptName = "M.B.A";
            break;
    default:
      eventData = [];
  }

  /* ----------  measure sidebar height  ---------- */
  const [sbHeight, setSbHeight] = useState(null);
  useEffect(() => {
    const sb = document.getElementById("sidebar");
    if (sb) setSbHeight(sb.clientHeight);
  }, []);

  /* ----------  slider state per event  ---------- */
  const [current, setCurrent] = useState(
    eventData.reduce((acc, ev) => ({ ...acc, [ev.id]: 0 }), {})
  );
  const next = (id, len) =>
    setCurrent((c) => ({ ...c, [id]: (c[id] + 1) % len }));
  const prev = (id, len) =>
    setCurrent((c) => ({ ...c, [id]: (c[id] - 1 + len) % len }));

  /* ----------  unique : auto-slide every 4s  ---------- */
  useEffect(() => {
    if (!eventData.length) return;
    const intervals = eventData.map((ev) =>
      setInterval(() => next(ev.id, ev.images.length), 4000)
    );
    return () => intervals.forEach(clearInterval);
  }, [eventData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/*  row-1 : sidebar + department event name (same height as sidebar)  */}
      <div className="flex flex-col md:flex-row">
        <HomeSideBar deptId={deptId} />

        <section
          className="flex-1 border-2  m-18 rounded-3xl md:p-8 flex items-center justify-center"
          style={{ maxHeight: sbHeight || "auto" }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3"
          >
           
            <h1
              className="text-4xl md:text-6xl font-extrabold text-gray-800"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {deptName} Events
            </h1>
            
          </motion.div>
        </section>
      </div>

      {/*  row-2 : image slider section (starts below sidebar)  */}
      <div className="flex flex-col md:flex-row ">
        <div className="md:w-10 flex-shrink-0" />
        <section className="flex-1 px-4 md:px-8 pb-12">
          <div className="space-y-12">
            {eventData.map((ev) => {
              const len = ev.images.length;
              const idx = current[ev.id] || 0;
              return (
                <div key={ev.id} className="relative md:ml-50 md:mb-20 w-250">
                  {/*  image slider  */}
                  <div
                    className="relative rounded-3xl overflow-hidden bg-black shadow-2xl
                               hover:shadow-purple-500/40 group"
                    style={{ aspectRatio: "21/9" }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={idx}
                        src={ev.images[idx]}
                        alt={ev.title}
                        className="absolute inset-0 h-full w-full object-cover"
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -200 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/*  arrows  */}
                    <button
                      onClick={() => prev(ev.id, len)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full
                                 bg-white/20 backdrop-blur text-white hover:bg-white/40"
                    >
                      <ChevronLeft />
                    </button>
                    <button
                      onClick={() => next(ev.id, len)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full
                                 bg-white/20 backdrop-blur text-white hover:bg-white/40"
                    >
                      <ChevronRight />
                    </button>

                    {/*  text  */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <p className="text-sm uppercase tracking-widest text-gray-300 mb-2">
                        {ev.date}
                      </p>
                      <h3 className="text-2xl md:text-4xl font-bold drop-shadow-2xl">
                        {ev.title}
                      </h3>
                    </div>

                    {/*  glow edge  */}
                    <div className="absolute inset-0 rounded-3xl ring-2 ring-white/0 group-hover:ring-white/60 transition-all duration-700 pointer-events-none" />
                  </div>

                  {/*  dot indicators  */}
                  <div className="flex justify-center mt-4 gap-2">
                    {ev.images.map((_, dot) => (
                      <button
                        key={dot}
                        onClick={() => setCurrent((c) => ({ ...c, [ev.id]: dot }))}
                        className={`h-2 rounded-full transition-all ${
                          dot === idx ? "w-6 bg-indigo-600" : "w-2 bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap");
      `}</style>
    </div>
  );
}