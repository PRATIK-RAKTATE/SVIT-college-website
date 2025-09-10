import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About the Society", to: "/about/AbouttheSociety" },
  { label: "Mission & Vision", to: "/about/VissionMission" },
  { label: "Principal's Desk", to: "/about/principleDesk" },
  { label: "Admission", to: "/about/Admission" },
  { label: "Inception", to: "/about/Inception" },
  { label: "Curriculum & Syllabus", to: "/about/Curriculum&Syllabus" },
  { label: "Infrastructure", to: "/about/Infrastructure" },
  { label: "Success Stories", to: "#" },
  { label: "Placement Brochure", to: "#" },
  { label: "E-Brochure", to: "#" },
  { label: "Linkages", to: "/about/Linkages" },
  { label: "Code Of Conduct", href: "https://svitnashik.in/Documents/CodeOfConduct.pdf" },
  { label: "IIQA", to: "/about/IIQA" },
  { label: "AICTE Online Skill Test for FE to BE Students", href: "https://www.youth4work.com/onlinetalenttest" },
];

export default function HomeSideBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  /* ---------- Desktop Sidebar ---------- */
  const Desktop = () => (
    <div className="hidden md:block mt-28 md:mt-14 mr-10 mb-10 md:ml-25 ml-10 w-fit">
      <ul className="h-auto w-72 flex flex-col gap-2 pl-5">
        {links.map((l, i) => (
          <li
            key={i}
            className="border-l-4 border-[#4F39F6] hover:bg-black hover:text-white p-2 pl-3 shadow rounded transition-all duration-200 text-sm"
          >
            {l.href ? (
              <a href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label}
              </a>
            ) : (
              <Link to={l.to}>{l.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );

  /* ---------- Mobile Sidebar with Animated About Button ---------- */
  const Mobile = () => (
    <div className="md:hidden flex justify-center mt-6 relative">
      {/* Animated About Button */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium rounded-xl shadow-lg relative overflow-hidden"
        whileHover={{ scale: 1.07, boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulsating Glow */}
        <motion.span
          className="absolute inset-0 bg-white opacity-10 rounded-xl"
          animate={{ opacity: [0.05, 0.2, 0.05] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <span className="relative z-10">About</span>

        {/* Rotating Hamburger / Close Icon */}
        <motion.svg
          className="w-6 h-6 text-white relative z-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </motion.svg>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="absolute top-16 left-1/2 -translate-x-1/2 z-50"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
              }}
              className="bg-white rounded-xl shadow-2xl p-6 w-80 max-h-[80vh] overflow-y-auto"
            >
              {links.map((l, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="mb-3 last:mb-0 border-l-4 border-[#4F39F6] hover:bg-black hover:text-white p-2 pl-3 rounded-r-lg shadow text-base transition-all duration-200"
                >
                  {l.href ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                      {l.label}
                    </a>
                  ) : (
                    <Link to={l.to} onClick={() => setOpen(false)}>
                      {l.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
}
