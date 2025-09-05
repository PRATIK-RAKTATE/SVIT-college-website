import "./App.css";
import Department from "./Components/department/department.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import DEPARTMENTS from "./Constants/department.config.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
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
