// src/components/LandingPage.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import coverImage from "../assets/cover.jpeg";
import featureImage from "../assets/wallpaper.jpeg";

const LandingPage = () => {
  return (
    <div className={styles.landingContainer}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <ul className={styles.navLinks}>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className={styles.introSection}>
        <img src={coverImage} alt="Cover" className={styles.coverImage} />
        <div className={styles.introText}>
          <h1>Music Recommender</h1>
          <p className={styles.tagline}>Discover your next favorite song</p>
          <Link to="/search" className={styles.ctaButton}>
            Try the App
          </Link>
        </div>
      </section>
      <section id="features" className={styles.featuresSection}>
        <h2>Features</h2>
        <div className={styles.featureGrid}>
          <div className={styles.feature}>
            <img src={featureImage} alt="Feature 1" />
            <h3>Personalized Recommendations</h3>
            <p>Discover new music based on your taste</p>
          </div>
          <div className={styles.feature}>
            <img src={featureImage} alt="Feature 2" />
            <h3>Instant Streaming</h3>
            <p>Stream your favorite songs instantly</p>
          </div>
          <div className={styles.feature}>
            <img src={featureImage} alt="Feature 3" />
            <h3>Custom Playlists</h3>
            <p>Create and share playlists with friends</p>
          </div>
        </div>
      </section>
      <section id="about" className={styles.aboutSection}>
        <h2>About</h2>
        <div className={styles.aboutContent}>
          <p>
            Music Recommender was inspired by my passion for discovering new
            music. The idea came from my desire to create a tool that simplifies
            the process of finding songs that match personal tastes. This
            project showcases my journey in front-end development, particularly
            using React and integrating with third-party APIs.
          </p>
          <p>
            The project started in [Start Date] and has evolved through
            iterative development, incorporating feedback and new ideas along
            the way. It's a part of the Holberton School's Portfolio Project
            series, demonstrating my skills and growth as a developer.
          </p>
          <p>
            <strong>Connect with me:</strong>
            <br />
            <a
              href="https://linkedin.com/in/nyuydine-bill"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            |
            <a
              href="https://github.com/NyuydineBill"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            |
            <a
              href="https://twitter.com/BillNyuydine"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </p>
          <p>
            <a
              href="https://github.com/NyuydineBill"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
