import React from "react";
import AboutSidebar from "./AboutSisebar.jsx";
import AboutSociety from "./AboutSociety.jsx";
import StylishTable from "./AbouteSocietyTable.jsx";

const WholeSociety = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-6">
        <AboutSidebar />
        <AboutSociety />
      </div>
      <div className="mt-6">
        <StylishTable />
      </div>
    </>
  );
};

export default WholeSociety;
