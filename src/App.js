import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";
import Body from "./Components/Body";
import Hotel01 from "./Components/Hotels/Hotel01";
import Hotel02 from "./Components/Hotels/Hotel02";
import Hotel03 from "./Components/Hotels/Hotel03";
import Home from "./Components/Body";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/Hotel01" element={<Hotel01 />} />
        <Route path="/Hotel02" element={<Hotel02 />} />
        <Route path="/Hotel03" element={<Hotel03 />} />
      </Routes>
    </div>
  );
}

export default App;
