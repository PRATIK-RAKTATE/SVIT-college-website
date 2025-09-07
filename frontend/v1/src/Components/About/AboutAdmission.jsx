import React from "react";
import AboutcourseOffered from "./AboutcourseOffered";
import AboutSidebar from "./AboutSisebar";
import EligibilityCriteria from "./AboutEligibility";
import FeesDetails from "./AboutFeesDetail";

const AboutAdmission = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-6">
        <AboutSidebar />
        <AboutcourseOffered />
      </div>
      <div className="mt-6">
        <EligibilityCriteria />
        <FeesDetails />
      </div>
    </>
  );
};

export default AboutAdmission;
