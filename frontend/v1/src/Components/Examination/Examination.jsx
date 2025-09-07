import React from "react";
import ExaminationDepartment from "./ExaminationDepartment";
import ExaminationCommitteeTable from "./ExaminationFaculty";
import ExamLinks from "./ExaminationLink";

const Examination = () => {
  return (
    <>
      <ExaminationDepartment />
      <ExaminationCommitteeTable />
      <ExamLinks />
    </>
  );
};

export default Examination;
