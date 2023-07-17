import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Header/Footer";
import Index from "./Index";
import Menu from "../Header/Menu/Menu";

const Home = () => {
  return (
    <>
      {/* <Router> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/productmenu" element={<Menu />} />
      </Routes>
      <Footer />
      {/* </Router> */}
    </>
  );
};

export default Home;
