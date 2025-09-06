import "./App.css";
import Department from "./Components/department/department.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import computerEngineering from "./Constants/computerEngineering";
import chemicalEngineering from "./Constants/chemicalEngineering.js";
import electronicsAndComputerEngineering from "./Constants/electronicsAndComputerEngineering.js";
import informationTechnology from "./Constants/informationTechnology.js";
import mba from "./Constants/mba.js";
import firstYear from "./Constants/firstYear.js";
import WholeSociety from "./Components/About/wholeSociety.jsx";
import { Routes, Route } from "react-router-dom";
import DEPARTMENTS from "./Constants/department.config.js";
import MissionVissionAO from "./Components/About/MissionVissionAO.jsx";
import PrincipleDesk from "./Components/About/PrincipleDesk.jsx";
import AboutAdmission from "./Components/About/AboutAdmission.jsx";
import AboutInception from './Components/About/AboutInception.jsx'
import AboutCurriculumSyllabus from "./Components/About/AboutCurriculumSyllabus.jsx";
import AboutInfrastructure from "./Components/About/AboutInfrastructure.jsx";
import AboutLinkages from "./Components/About/AboutLinkages.jsx";
import Examination from "./Components/Examination/Examination.jsx";
import Library from "./Components/Library/Library.jsx";
import LibraryAdvisoryComitee from "./Components/Library/LibraryAdvisoryComitee.jsx";
import Faculty from "./Components/Library/Faculty.jsx";
import LibraryObjectives from "./Components/Library/LibraryObjectives.jsx";
import LibraryFacilities from "./Components/Library/LibraryFacilities.jsx";
import LibrarySection from "./Components/Library/LibrarySection.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
       
        <Route path="/about" element={<WholeSociety />} />
        <Route path="/about/AbouttheSociety" element={<WholeSociety />} />
        <Route path="/about/VissionMission" element={<MissionVissionAO/>}/>
        <Route path="/about/principleDesk" element={<PrincipleDesk/>}/>
        <Route path="/about/Admission" element={<AboutAdmission/>}/>
        <Route path="/about/Inception" element={<AboutInception/>}/>
        <Route path="/about/Curriculum&Syllabus" element={<AboutCurriculumSyllabus/>}/>
        <Route path="/about/Infrastructure" element={<AboutInfrastructure/>}/>
        <Route path="/about/Linkages" element={<AboutLinkages/>}/>
        <Route path="/about/Examination" element={<Examination/>}/>
        <Route path="/Library" element={<Library/>} />
        <Route path="/Library/AdvisoryCommittee" element={<LibraryAdvisoryComitee/>}/>
        <Route path="/Library/Faculty" element={<Faculty/>} />
        <Route path="/Library/Objectives" element={<LibraryObjectives/>}/>
        <Route path="/Library/Facilities" element={<LibraryFacilities/>} />
        <Route path="/Library/Section" element={<LibrarySection/>} />
        <Route path="/Library/OPAC" />

        {Object.entries(DEPARTMENTS).map(([key, data]) => (
          <Route
            key={key}
            path={`/Department/:deptId`}
            element={
              <Department
                slides={data.carousel}
                vision={data.vision}
                mission={data.mission}
                hodDesk={data.HODDesk}
                Hodimg={data.img}
                Hodname={data.hodname}
                hodQ={data.hodqualification}
                Department={data.Department}
              />
            }
          />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
