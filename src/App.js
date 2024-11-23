import React from "react";
import Camera from "./Components/Camera";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Styles/init.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/camera" element={<Camera />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
