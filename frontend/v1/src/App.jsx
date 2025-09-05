import "./App.css";
import Department from "./Components/department/department.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import computerDept from "./Constants/computerDept";
import chemicalDept from "./Constants/chemicalDept.js";
import etcDept from "./Constants/ece.js";
import itDept from "./Constants/InformationTech.js";
import mbaDept from "./Constants/Mbadept.js";
import feDept from "./Constants/first-year.js";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home.jsx"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route
        path="/"
        element={<Home />}
        />
        <Route
          path="/Department/first-year"
          element={<Department slides={feDept.carousel} vision={feDept.vision} mission={feDept.mission}  hodDesk={feDept.HODDesk} Hodimg={feDept.img} Hodname={feDept.hodname} hodQ={feDept.hodqualification} Department={feDept.Department} />}
        />
        <Route
          path="/Department/computerDept"
          element={<Department slides={computerDept.carousel} vision={computerDept.vision} mission={computerDept.mission}  hodDesk={computerDept.HODDesk} Hodimg={computerDept.img} Hodname={computerDept.hodname} hodQ={computerDept.hodqualification} Department={computerDept.Department} />}
        />
        <Route path="/Department/ChemicalDept"
         element={<Department slides={chemicalDept.carousel} vision={chemicalDept.vision} mission={chemicalDept.mission}  hodDesk={chemicalDept.HODDesk} Hodimg={chemicalDept.img} Hodname={chemicalDept.hodname} hodQ={chemicalDept.hodqualification} Department={chemicalDept.Department}/>}
          />
        <Route path="/Department/ece"
         element={<Department slides={etcDept.carousel} vision={etcDept.vision} mission={etcDept.mission}  hodDesk={etcDept.HODDesk} Hodimg={etcDept.img} Hodname={etcDept.hodname} hodQ={etcDept.hodqualification} Department={etcDept.Department}/>}
          />
          <Route path="/Department/InformationTechDept"
         element={<Department slides={itDept.carousel} vision={itDept.vision} mission={itDept.mission}  hodDesk={itDept.HODDesk} Hodimg={itDept.img} Hodname={itDept.hodname} hodQ={itDept.hodqualification} Department={itDept.Department}/>}
          />
          <Route path="/Department/MBA"
         element={<Department slides={mbaDept.carousel} vision={mbaDept.vision} mission={mbaDept.mission}  hodDesk={mbaDept.HODDesk} Hodimg={mbaDept.img} Hodname={mbaDept.hodname} hodQ={mbaDept.hodqualification} Department={mbaDept.Department}/>}
          />
      </Routes>
      {/* <Department /> */}
      <Footer />
    </>
  );
}

export default App;
