import WT from "./WT";
import HomeSideBar from "./HomeSideBar";
import PreDesk from "./PreDesk";
import SideLink from "./Useful";
import ImagText from "./ImgText";
import Imp from "./News";
import MinorMajor from "./Minor&Major";
import Carousel from "../department/HeroCarousel";

export default function Home({slides}) {
  return (
    <>

    <Carousel slides={slides}/>
    <div className="m-3">
      <WT />
      <div className="md:flex md:justify-between mt-5">
        <div className="flex flex-col ml-5">
          <HomeSideBar />
          <MinorMajor />
        </div>
        <div>
          <PreDesk />
          <ImagText />
        </div>
        <div className="flex flex-col gap-6">
          <Imp />
          <SideLink />
        </div>
      </div>
    </div>
    </>
  );
}
