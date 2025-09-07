import React from "react";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";      // npm i framer-motion
import ViewCounter from "./viewCounter/viewCounter";

export default function Footer() {
  const iconVariants = {
    hover: { scale: 1.25, rotate: 15, transition: { type: "spring", stiffness: 300 } },
  };

  const linkBlock = [
    {
      title: "Explore",
      links: [
        { name: "Home", to: "/" },
        { name: "About us", to: "/about" },
        { name: "Glimpses", to: "/glimpses" },
        { name: "Contact us", to: "/contact" },
        { name: "Site Map", to: "/sitemap" },
      ],
    },
    {
      title: "Institute",
      links: [
        { name: "Mission & Vision", to: "/mission-vision" },
        { name: "Principal's Desk", to: "/principal-desk" },
        { name: "Admission", to: "/admission" },
        { name: "Curriculum", to: "/curriculum" },
        { name: "Infrastructure", to: "/infrastructure" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "News & Events", to: "/news" },
        { name: "Academic Calendar", to:"/calendar" },
        { name: "E-Brochure", to: "/e-brochure" },
        { name: "Placement Brochure", to: "/placement-brochure" },
        { name: "Group Linkages", to: "/linkages" },
      ],
    },
    {
      title: "Departments",
      links: [
        { name: "Computer Engineering", to: "/comp" },
        { name: "Chemical Engineering", to: "/chem" },
        { name: "E&TC Engineering", to: "/entc" },
        { name: "IT Engineering", to: "/it" },
        { name: "MBA", to: "/mba" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* animated background orbs */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-400 rounded-full opacity-10 blur-3xl animate-pulse [animation-delay:2s]" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* top section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {linkBlock.map((block, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="col-span-1 md:col-span-1"
            >
              <h3 className="mb-4 text-sm font-semibold tracking-widest uppercase text-cyan-300">
                {block.title}
              </h3>
              <ul className="space-y-2">
                {block.links.map((l, i) => (
                  <li key={i}>
                    <Link
                      to={l.to}
                      className="relative text-slate-300 hover:text-white transition-colors
                                 before:absolute before:left-0 before:bottom-0 before:h-px before:w-0
                                 before:bg-cyan-300 before:transition-all before:hover:w-full"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* contact / social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="col-span-2 md:col-span-1"
          >
            <h3 className="mb-4 text-sm font-semibold tracking-widest uppercase text-cyan-300">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-cyan-400" />
                <span className="text-sm">Chincholi, Sinnar, Nashik – 422102</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-cyan-400" />
                <a href="tel:+912551271278" className="hover:text-white">+91 2551 271278</a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-400" />
                <a href="mailto:principal.svitnashik@pravara.in" className="hover:text-white">principal.svitnashik@pravara.in</a>
              </li>
            </ul>

            {/* social */}
            <div className="mt-6">
              <h4 className="mb-3 text-xs uppercase tracking-wider text-slate-400">Follow Us</h4>
              <div className="flex gap-4">
                <motion.a
                  variants={iconVariants}
                  whileHover="hover"
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="text-2xl text-slate-300 hover:text-red-500"
                >
                  <FaYoutube />
                </motion.a>
                <motion.a
                  variants={iconVariants}
                  whileHover="hover"
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  className="text-2xl text-slate-300 hover:text-blue-400"
                >
                  <FaTwitter />
                </motion.a>
                <motion.a
                  variants={iconVariants}
                  whileHover="hover"
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="text-2xl text-slate-300 hover:text-pink-500"
                >
                  <FaInstagram />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} SVIT. All rights reserved.
          </p>
          <ViewCounter />
        </div>
      </div>

      {/* decorative wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-blue-500"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-blue-500"
          />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-blue-600" />
        </svg>
      </div>
    </footer>
  );
}