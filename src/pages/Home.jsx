import { useState, useEffect } from "react";

import AnimatedGrid from "../components/AnimatedGrid";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import WindowCard from "../components/WindowCard";
import SpotifyCard from "../components/SpotifyCard";

function Home() {
  const API_KEY = "01a351a110f85aa93236b65f1a3bbf5b";
  const USERNAME = "Sammie156";

  const useMusic = () => {
    const [track, setTrack] = useState(null);

    useEffect(() => {
      const fetchTrack = async () => {
        try {
          const res = await fetch(
            `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json&limit=1`
          );
          const data = await res.json();
          const latestTrack = data.recenttracks.track[0];

          const imageUrl =
            latestTrack.image.find((img) => img.size === "extralarge")[
              "#text"
            ] ||
            latestTrack.image.find((img) => img.size === "large")["#text"] ||
            ""; // Fallback to empty string

          setTrack({
            title: latestTrack.name,
            artist: latestTrack.artist["#text"],
            albumArt: imageUrl,
            // Last.fm uses a specific attribute to check if currently playing
            isPlaying: latestTrack["@attr"]?.nowplaying === "true",
          });
        } catch (err) {
          console.error("Music fetch failed", err);
        }
      };

      fetchTrack();
      const timer = setInterval(fetchTrack, 10000);
      return () => clearInterval(timer);
    }, []);

    return track;
  };

  const music = useMusic();

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
        isPlaying={music?.isPlaying}
        songTitle={music?.title || "Not Listening"}
        artist={music?.artist || "Spotify"}
        albumArt={music?.albumArt}
      />
    </main>
  );
}

export default Home;
