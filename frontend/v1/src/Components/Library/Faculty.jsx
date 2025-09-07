import React from "react";
import LibrarySideBar from "./LibrarySydebar";
import LibraryFaculty from "./LibraryFaculty";
import WelcomeLibrary from "./WelcomeLibrary";

const Faculty = () => {
  return (
    <>
      <div className="flex flex-row">
        <LibrarySideBar />
        <WelcomeLibrary />
      </div>
      <div>
        <LibraryFaculty />
      </div>
    </>
  );
};

export default Faculty;
