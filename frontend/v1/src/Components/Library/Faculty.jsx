import React from "react";
import LibrarySideBar from "./LibrarySydebar";
import LibraryFaculty from "./LibraryFaculty";
import WelcomeLibrary from "./WelcomeLibrary";

const Faculty = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row m-1">
        {/* Welcome first on mobile, second on desktop */}
        <div className="order-1 md:order-2 flex-1">
          <WelcomeLibrary />
        </div>

        {/* Sidebar second on mobile, first on desktop */}
        <div className="order-2 md:order-1 w-full md:w-1/4">
          <LibrarySideBar />
        </div>
      </div>

      <div>
        <LibraryFaculty />
      </div>
    </>
  );
};

export default Faculty;
