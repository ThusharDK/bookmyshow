import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import DarkModeToggle from "./components/DarkModeToggle";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <div className="container mt-3">
        <DarkModeToggle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
