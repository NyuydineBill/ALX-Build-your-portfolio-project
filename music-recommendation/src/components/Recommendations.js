// src/components/Recommendations.js
import React from "react";

const Recommendations = () => {
  // Replace with actual recommendation logic
  const recommendedTracks = [
    { id: 1, name: "Track 1" },
    { id: 2, name: "Track 2" },
    { id: 3, name: "Track 3" },
  ];

  return (
    <div>
      <h2>Recommended Music</h2>
      <ul>
        {recommendedTracks.map((track) => (
          <li key={track.id}>{track.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
