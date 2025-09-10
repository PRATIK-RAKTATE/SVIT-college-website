import WT from "./WT";
import PreDesk from "./PreDesk";
import SideLink from "./Useful";
import ImagText from "./ImgText";
import Imp from "./News";
import MinorMajor from "./Minor&Major";
import HoverRow from "./HoverRow";
import { motion } from "framer-motion";
import Archivement from "./Archivement";
import StudentDiversity from "./StudentDiversity";
import HomeSideBar from "../About/AboutSisebar";


const scrollReveal = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

import Carousel from "../department/HeroCarousel";


export default function Home({slides}) {
  return (
    <>

    <Carousel slides={slides}/>
    <div className="m-3">
      {/* 1  Hero text – no scroll trigger (already top) */}
      <WT />

      {/* 2  Three-column layout */}
      <motion.div
        className="md:flex md:justify-between mt-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollReveal}
      >
        {/* Left  */}
        <motion.div className="flex flex-col ml-" variants={scrollReveal}>
          <HomeSideBar/>
          <MinorMajor />
        </motion.div>

        {/* Center  */}
        <motion.div variants={scrollReveal}>
          <PreDesk />
          <ImagText />
        </motion.div>

        {/* Right  */}
        <motion.div className="flex flex-col gap-6" variants={scrollReveal}>
          <Imp />
          <SideLink />
        </motion.div>
      </motion.div>

      {/* 3  Full-width hover row */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollReveal}
      >
        <HoverRow />
        <Archivement />
        <StudentDiversity />
      </motion.div>
    </div>
    </>
  );
}
