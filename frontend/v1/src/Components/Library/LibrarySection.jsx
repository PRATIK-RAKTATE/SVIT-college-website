import React from "react";
import LibrarySideBar from "./LibrarySydebar";
import Section from "./Section";
import WelcomeLibrary from "./WelcomeLibrary";

const LibrarySection = () => {
  return (
    <>
      <div className="flex flex-row">
        <LibrarySideBar />
        <WelcomeLibrary />
      </div>
      <div>
        <Section />
      </div>
    </>
  );
};

export default LibrarySection;
