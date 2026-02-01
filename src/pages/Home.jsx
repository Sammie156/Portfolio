import { useState, useEffect } from "react";

import AnimatedGrid from "../components/AnimatedGrid";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import WindowCard from "../components/WindowCard";
import SpotifyCard from "../components/SpotifyCard";
import InfoCard from "../components/InfoCard";
import ProjectExplorer from "../components/ProjectExplorer";
import BlogArchive from "./BlogArchive";
import BlogContainer from "../components/BlogContainer";

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
      <section className="relative w-full border-black pb-40">
        <div className="max-w-6xl mx-auto px-6 relative">
          <Hero />
          <InfoCard className="absolute top-[80%] z-20 mt-5" />
        </div>
      </section>

      <section className="relative w-full border-black">
        <div className="max-w-6xl mx-auto px-6 relative">
          <h1 className="text-5xl font-black uppercase mb-12 underline decoration-8">
            PROJECTS
          </h1>
          <ProjectExplorer />
          <h1 className="text-5xl font-black uppercase mb-12 underline decoration-8">
            BLOGS
          </h1>
          <BlogContainer />
        </div>
      </section>

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
