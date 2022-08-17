import React from 'react'
import './mainComp.css'
import { Routes, Route } from "react-router-dom";

import AddScenarios from "../Pages/addScenarios";
import AddVehicles from "../Pages/addVehicles";
import AllScenarios from "../Pages/allScenarios";
import Home from "../Pages/home";

function MainComp() {
  return (
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/scenario/add" element={<AddScenarios />} />
          <Route path="/scenario" element={<AllScenarios />} />
          <Route path="/vehicle/add" element={<AddVehicles />} />
      </Routes>
  )
}

export default MainComp