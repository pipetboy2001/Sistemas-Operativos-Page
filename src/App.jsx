import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";






function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
export default App;
