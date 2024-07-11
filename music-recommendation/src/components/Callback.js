// src/components/Callback.js

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Callback = () => {
  const navigate = useNavigate();

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

    navigate("/"); // Redirect to home or desired route after handling the token
  }, [navigate]);

  return <div>Loading...</div>;
};

export default Callback;
