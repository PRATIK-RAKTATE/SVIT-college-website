import React from "react";
import LibrarySideBar from "./LibrarySydebar";
import LibraryReport from "./CentralLibrary";
import BranchLibraryReport from "./DepartmentWiseReport";
import LibraryFinancialReport from "./TotalReport";
import WelcomeLibrary from "./WelcomeLibrary";

const Library = () => {
  return (
    <>
      <div className="flex flex-col md:flex md:flex-row lg:flex lg:flex-row ">
        <LibrarySideBar />
        <WelcomeLibrary />
      </div>
      <LibraryReport />
      <BranchLibraryReport />
      <LibraryFinancialReport />
    </>
  );
};

export default Library;
