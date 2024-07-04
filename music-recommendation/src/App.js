// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import MusicSearch from "./components/MusicSearch";
import MusicUpload from "./components/MusicUpload";
import Recommendations from "./components/Recommendations";
import Navigation from "./components/Navigation";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="appContainer">
        <Navigation />
        <main className="mainContent">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/search" element={<MusicSearch />} />
            <Route path="/upload" element={<MusicUpload />} />
            <Route path="/recommendations" element={<Recommendations />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
