import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './Styles/Index.scss';

import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";

/*Unidad 1*/

import Learning1 from "./Components/Unidad 1/Aprendisaje";
import Guiades1 from "./Components/Unidad 1/Guias";
import Exam1 from "./Components/Unidad 1/Pruebas";


/*Unidad 2*/
/*
import Learning2 from "./Components/Unidad 2/Aprendisaje";
import Guiades2 from "./Components/Unidad 2/Guias";
import Exam2 from "./Components/Unidad 2/Pruebas";
*/
/*Unidad 3*/
/*
import Learning3 from "./Components/Unidad 3/Aprendisaje";
import Guiades3 from "./Components/Unidad 3/Guias";
import Exam3 from "./Components/Unidad 3/Pruebas";
*/

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Aprender/Unidad1" element={<Learning1 />} />
        <Route path="/Guias/Unidad1" element={<Guiades1 />} />
        <Route path="/Pruebas/Unidad1" element={<Exam1 />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
