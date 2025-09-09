import "./App.css";
import Department from "./Components/department/department.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import WholeSociety from "./Components/About/wholeSociety.jsx";
import { Routes, Route } from "react-router-dom";
import DEPARTMENTS from "./Constants/department.config.js";
import Faculty from "./Components/SideBar/faculty.jsx";
import Course from "./Components/SideBar/Course.jsx";
import Outcome from "./Components/SideBar/Outcome.jsx";
import Labs from "./Components/SideBar/Labs.jsx";
import Syllabus from "./Components/SideBar/Syllabus.jsx";
import Events from "./Components/SideBar/Events.jsx";
import MissionVissionAO from "./Components/About/MissionVissionAO.jsx";
import PrincipleDesk from "./Components/About/PrincipleDesk.jsx";
import AboutAdmission from "./Components/About/AboutAdmission.jsx";
import AboutInception from "./Components/About/AboutInception.jsx";
import AboutCurriculumSyllabus from "./Components/About/AboutCurriculumSyllabus.jsx";
import AboutInfrastructure from "./Components/About/AboutInfrastructure.jsx";
import AboutLinkages from "./Components/About/AboutLinkages.jsx";
import Examination from "./Components/Examination/Examination.jsx";
import Library from "./Components/Library/Library.jsx";
import LibraryAdvisoryComitee from "./Components/Library/LibraryAdvisoryComitee.jsx";
import LibraryObjectives from "./Components/Library/LibraryObjectives.jsx";
import LibraryFacilities from "./Components/Library/LibraryFacilities.jsx";
import LibrarySection from "./Components/Library/LibrarySection.jsx";
import Home from "./Components/Home/Home.jsx";
import Result from "./Components/SideBar/Result.jsx";
import Placement from "./Components/SideBar/Placement.jsx";
import AcademicBooks from "./Components/SideBar/Academic.jsx";
import EResources from "./Components/SideBar/E-resources.jsx";
import MainContactUs from "./Components/ContactUs/MainContactUs.jsx"
import MainAdmission from "./Components/Admission/MainAdmission.jsx";
import home from './Constants/home.js'



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home 
         slides={home.carousel}/>} />
        <Route path="/about" element={<WholeSociety />} />
        <Route path="/about/AbouttheSociety" element={<WholeSociety />} />
        <Route path="/about/VissionMission" element={<MissionVissionAO />} />
        <Route path="/about/principleDesk" element={<PrincipleDesk />} />
        <Route path="/about/Admission" element={<AboutAdmission />} />
        <Route path="/about/Inception" element={<AboutInception />} />
        <Route
          path="/about/Curriculum&Syllabus"
          element={<AboutCurriculumSyllabus />}
        />
        <Route path="/about/Infrastructure" element={<AboutInfrastructure />} />
        <Route path="/about/Linkages" element={<AboutLinkages />} />
        <Route path="/Examination" element={<Examination />} />
        <Route path="/Library" element={<Library />} />
        <Route
          path="/Library/AdvisoryCommittee"
          element={<LibraryAdvisoryComitee />}
        />
        <Route path="/Library/Faculty" element={<Faculty />} />
        <Route path="/Library/Objectives" element={<LibraryObjectives />} />
        <Route path="/Library/Facilities" element={<LibraryFacilities />} />
        <Route path="/Library/Section" element={<LibrarySection />} />
        <Route path="/Library/OPAC" />
        <Route path="/ContactUs" element={<MainContactUs/>} />
        <Route path="/admission/Admissiondetails" element={<MainAdmission/>} />
        

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
        <Route path="/Department/:deptId/Outcome" element={<Outcome />}></Route>
        <Route path="/Department/:deptId/faculty" element={<Faculty />}></Route>
        <Route path="/Department/:deptId/courses" element={<Course />}></Route>
        <Route path="/Department/:deptId/labs" element={<Labs />}></Route>

        <Route path="/Department/:deptId/syllabus" element={<Syllabus />}></Route>
        <Route path="/Department/:deptId/events" element={<Events />}></Route>
        <Route path="/Department/:deptId/results" element={<Result />}></Route>
        <Route path="/Department/:deptId/placement"element={<Placement />}></Route>
        <Route path="/Department/:deptId/academic-book"element={<AcademicBooks />}></Route>
        <Route path="/Department/:deptId/e-resources"element={<EResources />}></Route>

      </Routes>
      <Footer />
    </>
  );
}

export default App;
