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
import PulseDots from "../components/PulseDots";

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
      <section className="relative w-full border-black bg-[#F7CB46] pb-20">
        <PulseDots bg_color="F7CB46"/>
        <div className="max-w-6xl mx-auto px-6 relative">
          <Hero />
          {/* <InfoCard className="absolute top-[80%] z-20 mt-5" /> */}
        </div>
      </section>

      <div className="w-full leading-[0] bg-[#99E885]">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            /* Modified path: More frequent oscillations (60 units per curve instead of 120) */
            d="M0 60 
         C60 20 120 20 180 60 C240 100 300 100 360 60
         C420 20 480 20 540 60 C600 100 660 100 720 60
         C780 20 840 20 900 60 C960 100 1020 100 1080 60
         C1140 20 1200 20 1260 60 C1320 100 1380 100 1440 60
         V0H0V60Z"
            fill="#F7CB46"
          />
          {/* Bold Stroke Path */}
          <path
            d="M0 60 
         C60 20 120 20 180 60 C240 100 300 100 360 60
         C420 20 480 20 540 60 C600 100 660 100 720 60
         C780 20 840 20 900 60 C960 100 1020 100 1080 60
         C1140 20 1200 20 1260 60 C1320 100 1380 100 1440 60"
            stroke="black"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <section className="relative w-full border-black bg-[#99E885]">
        <div className="max-w-6xl mx-auto px-6 relative">
          <h1 className="text-5xl font-black uppercase mb-12 pt-10 underline decoration-8">
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
