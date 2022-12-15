import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Home/Menu";
import IndexHome from "./components/Home/IndexHome";

const App = () => {
  return (
    <div className="">
      <Menu />
      <Routes>
        <Route path="/" element={<IndexHome />} />
        {/* <Route path="*" element={<Erro404 />} />
        <Route path="/Crew" element={<Crew_Route />} />
        <Route path="/Technology" element={<Technology_Route />} />
        <Route path="/Destination" element={<Destination_Route />} /> */}
      </Routes>
    </div>
  );
};

export default App;
