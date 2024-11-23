import React from "react";
import Camera from "./Components/Camera";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Styles/init.css";
import Book from "./Components/Book";
import Result from "./Components/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/book" element={<Book />} />
        <Route path="/result" element={<Result/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
