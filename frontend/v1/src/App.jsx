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
import WholeSociety from "./Components/About/wholeSociety.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
       
        <Route path="/about" element={<WholeSociety />} />
        <Route path="/about/AbouttheSociety" element={<WholeSociety />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
