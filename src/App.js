import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Schedule from "./Schedule";
import Menu from "./Menu";
import DogInfo from "./DogInfo"; 
import DogDetails from "./DogDetails"; 

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/dog-info" element={<DogInfo />} />
          <Route path="/dog-info/:id" element={<DogDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
