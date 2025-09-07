// OutcomeComponent.jsx
import React from "react";
import HomeSideBar from "../department/Sidebar.jsx";

import { csOutcomes } from "../Side Bar Constants/csDept.js";
import { useParams } from "react-router-dom";
import { itOutcomes } from "../Side Bar Constants/itDept.js";
import { chemicalOutcomes } from "../Side Bar Constants/chemDept.js";
import { eceOutcomes } from "../Side Bar Constants/eceDept.js";
import { feOutcomes } from "../Side Bar Constants/feDept.js";
import { mbaOutcomes } from "../Side Bar Constants/mbaDept.js";

export default function OutcomeComponent() {
  const { deptId } = useParams();

  let outcomeData;
  let deptName;

  switch (deptId) {
    case "computerEngineering":
      outcomeData = csOutcomes;
      deptName = "Computer Engineering";
      break;
    case "informationTechnology":
      outcomeData = itOutcomes;
      deptName = "Information Engineering";
      break;
    case "chemicalEngineering":
      outcomeData = chemicalOutcomes;
      deptName = "Chemical Engineering";
      break;
    case "electronicsAndComputerEngineering":
      outcomeData = eceOutcomes;
      deptName = "Electronics And Computer Engineering";
      break;
    case "firstYear":
      outcomeData = feOutcomes;
      deptName = "First Year";
      break;
    case "mba":
      outcomeData = mbaOutcomes;
      deptName = "M.B.A";
      break;

    default:
      break;
  }

  return (
    <div className=" mb-10">
      <div className=" md:flex ">
        <HomeSideBar deptId={deptId} />
        <div className="mt-20 md:pr-10 md:pl-10">
          <h1 className="text-2xl font-sans md:text-4xl font-bold text-center mb-8">
            {deptName} Programme Outcomes
          </h1>

          <section className=" md:p-0 p-6 md:mt-15  w-auto">
            <h2 className="text-xl font-semibold mb-4">
              Programme Educational Objectives (PEOs)
            </h2>
            <ul className="list-disc list-inside space-y-2">
              {outcomeData.peos.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      <div className="md:p-10 md:ml-10 p-6">
        <section className="mb-8 w-auto">
          <h2 className="text-xl font-semibold mb-4">Program Outcomes (POs)</h2>
          <ul className="list-disc list-inside space-y-2">
            {outcomeData.pos.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="w-auto">
          <h2 className="text-xl font-semibold mb-4">
            Programme Specific Outcomes (PSOs)
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {outcomeData.psos.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
