import React from "react";
import "./Navigation.css";

const Navigation = () => (
  <nav className="navbar">
    <a href="/" className="navbar-brand">
      Music Melody
    </a>
    <ul className="navbar-nav">
      <li className="nav-item">
        <a href="/search" className="nav-link">
          <i className="fas fa-search"></i> Search
        </a>
      </li>
      <li className="nav-item">
        <a href="/upload" className="nav-link">
          <i className="fas fa-upload"></i> Upload
        </a>
      </li>
      <li className="nav-item">
        <a href="/recommendations" className="nav-link">
          <i className="fas fa-music"></i> Recommendations
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
