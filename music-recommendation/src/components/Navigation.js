// src/components/Navigation.js
import React from "react";
import "./Navigation.css";

const Navigation = () => (
  <nav className="navbar">
    <a href="/" className="navbar-brand">
      MusicApp
    </a>
    <ul className="navbar-nav">
      <li className="nav-item">
        <a href="/search" className="nav-link">
          Search
        </a>
      </li>
      <li className="nav-item">
        <a href="/upload" className="nav-link">
          Upload
        </a>
      </li>
      <li className="nav-item">
        <a href="/recommendations" className="nav-link">
          Recommendations
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
