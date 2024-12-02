import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Schedule from "./Schedule";
import Menu from "./Menu";
import GPS from "./GPS";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gps" element={<GPS />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
