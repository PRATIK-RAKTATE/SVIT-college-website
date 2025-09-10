import { LazyMotion, m } from "framer-motion";
import { Suspense, lazy } from "react";

// Lazy-load components to reduce initial bundle
const WT = lazy(() => import("./WT"));
const HomeSideBar = lazy(() => import("./HomeSideBar"));
const PreDesk = lazy(() => import("./PreDesk"));
const SideLink = lazy(() => import("./Useful"));
const ImagText = lazy(() => import("./ImgText"));
const Imp = lazy(() => import("./News"));
const MinorMajor = lazy(() => import("./Minor&Major"));
const HoverRow = lazy(() => import("./HoverRow"));
const Archivement = lazy(() => import("./Archivement"));
const StudentDiversity = lazy(() => import("./StudentDiversity"));
const Carousel = lazy(() => import("../department/HeroCarousel"));

// Load only DOM animations
const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

// Animation container
const container = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
  },
};

// Child animation
const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home({ slides }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyMotion features={loadFeatures}>
        <Carousel slides={slides} />
        <div className="m-3">
          <WT />

          {/* Three-column layout */}
          <m.div
            className="md:flex md:justify-between mt-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
          >
            <m.div className="flex flex-col ml-5" variants={item}>
              <HomeSideBar />
              <MinorMajor />
            </m.div>

            <m.div variants={item}>
              <PreDesk />
              <ImagText />
            </m.div>

            <m.div className="flex flex-col gap-6" variants={item}>
              <Imp />
              <SideLink />
            </m.div>
          </m.div>

          {/* Full-width section */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="mt-10"
          >
            <m.div variants={item}>
              <HoverRow />
            </m.div>
            <m.div variants={item}>
              <Archivement />
            </m.div>
            <m.div variants={item}>
              <StudentDiversity />
            </m.div>
          </m.div>
        </div>
      </LazyMotion>
    </Suspense>
  );
}
