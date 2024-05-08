import {   Route, Routes } from "react-router-dom";

import Login from "./Login";
import App from "../App";
import ChooseBranch from "../ChooseBranch";

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/branches" element={<ChooseBranch/>} />


    </Routes>
    
  )
}

export default AppRouter