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
import Faculty from "./Components/SideBar/faculty.jsx";
import Course from "./Components/SideBar/Course.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/about" element={<WholeSociety />} />
        <Route path="/about/AbouttheSociety" element={<WholeSociety />} />

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
          <Route path="/Department/:deptId/faculty" element={<Faculty/>}></Route>
          <Route path="/Department/:deptId/courses" element={<Course/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
