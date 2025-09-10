import WT from "./WT";
import HomeSideBar from "./HomeSideBar";
import PreDesk from "./PreDesk";
import SideLink from "./Useful";
import ImagText from "./ImgText";
import Imp from "./News";
import MinorMajor from "./Minor&Major";
import HoverRow from "./HoverRow";
import { motion } from "framer-motion";
import Archivement from "./Archivement";
import StudentDiversity from "./StudentDiversity";
import Carousel from "../department/HeroCarousel";

// Animation container with stagger effect
const container = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2, // Stagger to avoid simultaneous reflows
    },
  },
};

// Child animation (only opacity + transform → GPU accelerated)
const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home({ slides }) {
  return (
    <>
      <Carousel slides={slides} />
      <div className="m-3">
        {/* 1. Hero text */}
        <WT />

        {/* 2. Three-column layout */}
        <motion.div
          className="md:flex md:justify-between mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          {/* Left */}
          <motion.div className="flex flex-col ml-5" variants={item}>
            <HomeSideBar />
            <MinorMajor />
          </motion.div>

          {/* Center */}
          <motion.div variants={item}>
            <PreDesk />
            <ImagText />
          </motion.div>

          {/* Right */}
          <motion.div className="flex flex-col gap-6" variants={item}>
            <Imp />
            <SideLink />
          </motion.div>
        </motion.div>

        {/* 3. Full-width section (grouped animations) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="mt-10"
        >
          <motion.div variants={item}>
            <HoverRow />
          </motion.div>
          <motion.div variants={item}>
            <Archivement />
          </motion.div>
          <motion.div variants={item}>
            <StudentDiversity />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
