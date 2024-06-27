// src/services/spotifyService.js

const searchTracks = async (query) => {
  const accessToken = await getSpotifyAccessToken();
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(
      query
    )}&type=track`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok.");
  }

  const data = await response.json();
  return data.tracks.items;
};

const getSpotifyAccessToken = async () => {
  // Implement your code to get the access token here
  // This could involve fetching from a token endpoint, using client credentials grant, etc.
  // Remember to handle authentication securely based on your Spotify API setup.
  return "your_access_token_here"; // Replace with actual access token logic
};

export { searchTracks };
