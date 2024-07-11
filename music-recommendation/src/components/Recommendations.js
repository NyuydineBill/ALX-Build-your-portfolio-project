import React, { useState, useEffect } from "react";
import { getRecommendations } from "../services/spotifyService";
import "./Recommendations.module.css";

const Recommendations = () => {
  const [recommendedTracks, setRecommendedTracks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      setLoading(true);
      setError(null);
      try {
        const tracks = await getRecommendations();
        setRecommendedTracks(tracks);
      } catch (error) {
        setError("Failed to fetch recommendations");
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <div className="recommendations-container">
      <h2>Recommended Music</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {recommendedTracks.map((track) => (
            <li key={track.id}>
              {track.name} by{" "}
              {track.artists.map((artist) => artist.name).join(", ")}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Recommendations;
