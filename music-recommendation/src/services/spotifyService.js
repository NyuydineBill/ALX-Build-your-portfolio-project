import axios from "axios";

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRE;
const AUTH_URL = "https://accounts.spotify.com/api/token";
const BASE_URL = "https://api.spotify.com/v1";

const getAccessToken = async () => {
  const response = await axios.post(
    AUTH_URL,
    new URLSearchParams({
      grant_type: "client_credentials",
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  return response.data.access_token;
};

export const searchTracks = async (query, accessToken) => {
  const response = await axios.get(`${BASE_URL}/search`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      q: query,
      type: "track",
    },
  });
  return response.data.tracks.items;
};

export const getRecommendations = async () => {
  const token = await getAccessToken();
  const response = await axios.get(`${BASE_URL}/recommendations`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      seed_genres: "pop", // You can customize the seed genres
      limit: 10, // Number of recommendations to fetch
    },
  });
  return response.data.tracks;
};