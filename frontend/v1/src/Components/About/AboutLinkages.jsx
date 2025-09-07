import React from "react";
import AboutSidebar from "./AboutSisebar";
import CompanyLogoTable from "./Linkages";
import PlacementCounter from "./Placement";

const AboutLinkages = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-6">
        <AboutSidebar />
        <PlacementCounter />
      </div>
      <div>
        <CompanyLogoTable />
      </div>
    </>
  );
};

export default AboutLinkages;
