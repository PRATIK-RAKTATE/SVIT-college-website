import computerEngineering from "./computerEngineering";
import chemicalDept from "./chemicalDept";
import etcDept from "./ece";
import itDept from "./InformationTech";
import mbaDept from "./Mbadept";
import feDept from "./first-year";

const DEPARTMENTS = {
  "first-year": feDept,
  computerEngineering,
  ChemicalDept: chemicalDept,
  ece: etcDept,
  InformationTechDept: itDept,
  MBA: mbaDept,
};

export default DEPARTMENTS;
