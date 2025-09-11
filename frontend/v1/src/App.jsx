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
import LibraryFaculty from './Components/Library/Faculty.jsx'
import MainGalary from "./Components/galary/MainGalary.jsx";
import Criteria_7_Table from "./Components/NAAC/Criteria_7.jsx";
import Criteria_1_Table from "./Components/NAAC/Criteria_1.jsx";
import Criteria_6_Table from "./Components/NAAC/Criteria_6.jsx";




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
        <Route path="/examination" element={<Examination />} />
        <Route path="/library" element={<Library />} />
        <Route
          path="/library/advisory-committee"
          element={<LibraryAdvisoryComitee />}
        />
        <Route path="/library/faculty" element={<LibraryFaculty />} />
        <Route path="/library/objectives" element={<LibraryObjectives />} />
        <Route path="/library/facilities" element={<LibraryFacilities />} />
        <Route path="/library/section" element={<LibrarySection />} />
        <Route path="/library/OPAC" />
        <Route path="/Contact-us" element={<MainContactUs/>} />
        <Route path="/admission/Admissiondetails" element={<MainAdmission/>} />
        <Route path="/gallery" element={<MainGalary/>} />
        <Route path="/naac/criteria_7" element={<Criteria_7_Table/>} />
        <Route path="/naac/Criteria_1" element={<Criteria_1_Table/>} />
        <Route path="/naac/Criteria_6" element={<Criteria_6_Table/>} />

        {Object.entries(DEPARTMENTS).map(([key, data]) => (
          <Route
            key={key}
            path={`/department/:deptId`}
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
        <Route path="/department/:deptId/Outcome" element={<Outcome />}></Route>
        <Route path="/department/:deptId/faculty" element={<Faculty />}></Route>
        <Route path="/department/:deptId/courses" element={<Course />}></Route>
        <Route path="/department/:deptId/labs" element={<Labs />}></Route>

        <Route path="/department/:deptId/syllabus" element={<Syllabus />}></Route>
        <Route path="/department/:deptId/events" element={<Events />}></Route>
        <Route path="/department/:deptId/results" element={<Result />}></Route>
        <Route path="/department/:deptId/placement"element={<Placement />}></Route>
        <Route path="/department/:deptId/academic-book"element={<AcademicBooks />}></Route>
        <Route path="/department/:deptId/e-resources"element={<EResources />}></Route>

      </Routes>
      <Footer />
    </>
  );
}

export default App;
