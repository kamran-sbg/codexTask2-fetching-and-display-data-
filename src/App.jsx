import React from "react";
import Footer from "./Footer";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

import About from "./components/Counter";
import Movies from "./components/Movies";
import Sinup from "./components/Sinup";
import Mcu from "./components/Mcu";
import { IoGitMergeSharp } from "react-icons/io5";
import Photos from "./components/Photos";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="home" element={<Photos />} />
        <Route path="about" element={<About />} />
        <Route path="contect" element={<Movies />} />
        <Route path="sinup" element={<Sinup />} />
        <Route path="contect/mcu" element={<Mcu />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
