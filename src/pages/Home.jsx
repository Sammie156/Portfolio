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
import AnimatedDivider from "../components/AnimatedDivider";

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
    <main className="w-full pb-20 no-scrollbar">
      <section className="relative w-full border-black bg-[#F7CB46]">
        {/* <PulseDots bg_color="F7CB46"/> */}
        <div className="max-w-6xl mx-auto px-6 relative">
          <Hero />
          {/* <InfoCard className="absolute top-[80%] z-20 mt-5" /> */}
        </div>
      </section>

      <AnimatedDivider top_color="#F7CB46" bottom_color="#FE90E8"/>

      <section className="relative w-full border-black bg-[#FE90E8]">
        <div className="max-w-6xl mx-auto px-6 relative">
          <h1 className="text-5xl font-black uppercase mb-12 pt-10 underline decoration-8">
            PROJECTS
          </h1>
          <ProjectExplorer />
        </div>
      </section>

      <AnimatedDivider bottom_color="#7DF9FF" top_color="#FE90E8"/>

      <section className="relative w-full border-black bg-[#7DF9FF]">
        <div className="max-w-6xl mx-auto px-6 relative">
          <h1 className="text-5xl font-black uppercase mb-12 underline decoration-8">
            BLOGS
          </h1>
          <BlogContainer />
        </div>
      </section>

      <AnimatedDivider top_color="#7DF9FF" bottom_color="#2FFF2F"/>

      <section className="relative w-full border-black bg-[#2FFF2F]">
        <div className="max-w-6xl mx-auto px-6 relative">
          <h1 className="text-5xl font-black uppercase mb-12 underline decoration-8">
            CREATIONS[placeholder for now]
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 min-h-[500px]">
            {/* Creation 1: Systems / Go Focus */}
            <WindowCard
              filename="terminal_dash.go"
              windowClass="bg-[#D9F99D]"
              className="relative h-64 w-full md:w-80"
            >
              <div className="p-4 font-mono text-sm">
                <p className="text-green-600 animate-pulse font-bold mb-2">● System Active</p>
                <p className="text-gray-600 italic">
                  Developing a TUI dashboard using Bubble Tea for real-time
                  monitoring...
                </p>
                <div className="mt-4 bg-black text-white p-2 border-2 border-black">
                  $ go run main.go
                </div>
              </div>
            </WindowCard>

            {/* Creation 2: Design / Neobrutalism Focus */}
            <WindowCard
              filename="portfolio_v2.exe"
              windowClass="bg-[#A6FAFF]"
              className="relative h-64 w-full md:w-80 md:mt-12"
            >
              <div className="p-4">
                <div className="w-full h-24 bg-[#FFDC8B] border-2 border-black mb-2 flex items-center justify-center font-black">
                  UI_PREVIEW.JPG
                </div>
                <p className="font-bold uppercase text-xs">
                  A deep dive into Neobrutalist web architecture and Framer
                  Motion.
                </p>
              </div>
            </WindowCard>

            {/* Creation 3: Networking Focus */}
            <WindowCard
              filename="packet_sniffer.c"
              windowClass="bg-[#FF90E8]"
              className="relative h-64 w-full md:w-80"
            >
              <div className="p-4 font-mono text-xs space-y-1">
                <p>TCP [192.168.1.1] [8.8.8.8]</p>
                <p>HTTP/1.1 GET /index.html</p>
                <p className="bg-yellow-200 border border-black px-1 mt-4 inline-block">
                  IN_PROGRESS
                </p>
              </div>
            </WindowCard>
          </div>
        </div>
      </section>

      <AnimatedDivider top_color="#2FFF2F" bottom_color="#FFFFFF00"/>

      <h1 className="text-4xl">UNDER CONSTRUCTION</h1>

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
