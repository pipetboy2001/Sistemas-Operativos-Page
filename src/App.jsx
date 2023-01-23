import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./Components/About";
import Home from "./Components/Home";
import Navbar from "./Components/NavBar";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}
export default App;
