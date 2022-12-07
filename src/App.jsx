import React from "react";
import { Routes, Route } from "react-router-dom";
import Home_Route from "./routes/Home_Route";
import Destination_Route from "./routes/Destination_Route";
import Crew_Route from "./routes/Crew_Route";
import Technology_Route from "./routes/Technology_Route";
import Erro404 from "./routes/Erro404";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home_Route />} />
        <Route path="*" element={<Erro404 />} />
        <Route path="/Crew" element={<Crew_Route />} />
        <Route path="/Technology" element={<Technology_Route />} />
        <Route path="/Destination" element={<Destination_Route />} />
      </Routes>
    </div>
  );
};

export default App;
