import React from "react";
import "./App.css";
import Home from "./Pages/Main/Home";
import FoodMenu from "./Main/FooterMenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./Components/Index";
import ColorProp from "./ColorApp/ColorProp";
import HookFrom from "./ReactHookFrom/HookFrom";

const App = () => {
  return (
    <>
      {/* Table page component  */}

      {/* website template here  */}
      <Router>
        <Routes>
          <Route path="/" element={<FoodMenu />} />
          <Route path="/formpage" element={<Index />} />
          <Route path="/colorapp" element={<ColorProp />} />
          <Route path="/foodapp" element={<Home />} />
          <Route path="/reacthookfrom" element={<HookFrom />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
