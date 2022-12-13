import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { Home_Provider } from "./components/Home/HomeContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home_Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Home_Provider>
  </React.StrictMode>
);
