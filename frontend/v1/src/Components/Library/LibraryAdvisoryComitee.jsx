import React from "react";
import LibrarySideBar from "./LibrarySydebar";
import AdvisoryCommittee from "./AdvisoryCommittee";
import WelcomeLibrary from "./WelcomeLibrary";

const LibraryAdvisoryComitee = () => {
  return (
    <>
      <div className="md:flex md:flex-row felx flex-col m-1">
        <LibrarySideBar />
        <WelcomeLibrary />
      </div>
      <div>
        <AdvisoryCommittee />
      </div>
    </>
  );
};

export default LibraryAdvisoryComitee;
