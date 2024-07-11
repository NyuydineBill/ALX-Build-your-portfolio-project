// src/components/MusicSearch.js

import React, { useState, useEffect } from "react";
import { searchTracks } from "../services/spotifyService";
import styles from "./MusicSearch.module.css";

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

const MusicSearch = () => {
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
  
    const hash = window.location.hash;
    let token = localStorage.getItem("spotifyAccessToken");

    if (!token && hash) {
      const tokenMatch = hash.match(/access_token=([^&]*)/);
      token = tokenMatch ? tokenMatch[1] : null;

      if (token) {
        localStorage.setItem("spotifyAccessToken", token);
        window.location.hash = "";
      }
    }

    if (!token) {
      const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(
        REDIRECT_URI
      )}&scope=user-read-private%20user-read-email%20playlist-read-private%20playlist-modify-public`;
      window.location.href = AUTH_URL;
    } else {
      setAccessToken(token);
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

  const handlePlay = (track) => {
    setCurrentTrack(track.preview_url);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}></div>
      <div className={styles.rightSection}>
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
              <div className={styles.trackInfo}>
                <strong>{track.name}</strong> by {track.artists[0].name}
              </div>
              {track.preview_url && (
                <button
                  className={styles.playButton}
                  onClick={() => handlePlay(track)}
                ></button>
              )}
            </li>
          ))}
        </ul>
        {currentTrack && (
          <div className={styles.audioPlayer}>
            <audio controls autoPlay src={currentTrack}>
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </div>
    </div>
  );
};

export default MusicSearch;
