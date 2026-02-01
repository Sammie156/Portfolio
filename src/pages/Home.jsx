import { useState, useEffect } from "react";

import AnimatedGrid from "../components/AnimatedGrid";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import WindowCard from "../components/WindowCard";
import SpotifyCard from "../components/SpotifyCard";

function Home() {
  const useSpotify = (discordID) => {
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchStatus = async () => {
        try {
          const response = await fetch(
            `https://api.lanyard.rest/v1/users/${discordID}`
          );
          const json = await response.json();
          setData(json.data);
        } catch (err) {
          console.error("Lanyard error: ", err);
        }
      };

      fetchStatus();
      const interval = setInterval(fetchStatus, 30000);
      return () => {
        clearInterval(interval);
      };
    }, [discordID]);

    return data;
  };

  const userActivity = useSpotify("712668848763043891");
  const spotify = userActivity?.spotify;

  return (
    <main className="min-h-screen w-full pb-20">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6">
        <Hero />
      </div>

      <div className="flex border-l-2 border-t-2 border-black mb-16 bg-white shadow-hard">
        {["Projects", "Blog", "Skills", "Contact"].map((item) => (
          <button
            key={item}
            className="flex-1 p-4 border-r-2 border-b-2 border-black font-bold hover:bg-black hover:text-white transition-all group flex justify-between items-center"
          >
            {item}
            <span className="group-hover:rotate-45 transition-transform">
              ↗
            </span>
          </button>
        ))}
      </div>

      <SpotifyCard
        className="fixed bottom-6 right-6 z-50"
        isPlaying={!!spotify}
        songTitle={spotify?.song || "Not Listening"}
        artist={spotify?.artist || "Spotify"}
        albumArt={spotify?.album_art_url}
      />
    </main>
  );
}

export default Home;
