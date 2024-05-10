import {   Route, Routes } from "react-router-dom";

import Login from "./Login";
import Home from "../Home";
import ChooseBranch from "./ChooseBranch";
import Crm from "../Crm";
import Pos from "../Pos";
// import Hrm from "../Hrm";
import Report from "../Report";
import Inventory from "../Inventory";
import Finance from "../Finance";

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/branches" element={<ChooseBranch/>} />
        <Route path="/crm" element={<Crm/>} />
        <Route path="/pos" element={<Pos/>} />
        {/* <Route path="/hrm" element={<Hrm/>} /> */}
        <Route path="/report" element={<Report/>} />
        <Route path="/inventory" element={<Inventory/>} />
        <Route path="/finance" element={<Finance/>} />



    </Routes>
    
  )
}

export default AppRouter