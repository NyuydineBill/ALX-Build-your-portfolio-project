// src/components/MusicSearch.js

import React, { useState, useEffect } from "react";
import { searchTracks } from "../services/spotifyService";
import styles from "./MusicSearch.module.css";

const MusicSearch = () => {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    // Fetch or set access token here (e.g., from local storage)
    const token = localStorage.getItem("spotifyAccessToken");
    if (token) {
      setAccessToken(token);
    } else {
      // Implement token retrieval (e.g., OAuth flow)
      console.error("No access token available.");
    }
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setError("Please enter a search query.");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const results = await searchTracks(query, accessToken);
      setTracks(results);
    } catch (error) {
      setError("Error fetching data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <h2>Music Search</h2>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for songs, artists..."
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
      <ul className={styles.trackList}>
        {tracks.map((track) => (
          <li key={track.id} className={styles.trackItem}>
            <strong>{track.name}</strong> by {track.artists[0].name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MusicSearch;
