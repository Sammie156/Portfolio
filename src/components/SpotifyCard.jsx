import React from "react";
import WindowCard from "./WindowCard";

const SpotifyCard = ({
  songTitle,
  artist,
  albumArt,
  isPlaying,
  className = "",
}) => {
  return (
    <WindowCard
      filename="now_playing.sh"
      windowClass="bg-green-400"
      className={`w-64 sm:w-72 ${className}`}
    >
      <div className="p-3 flex items-center gap-4 bg-white">
        {/* Album Art - Smaller and Square */}
        <div className="relative flex-shrink-0 w-16 h-16 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-gray-100 overflow-hidden">
          {isPlaying && albumArt ? (
            <img
              src={albumArt}
              alt="Album Art"
              className="w-full h-full object-cover grayscale"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-diagonal-lines opacity-20">
              <span className="text-[10px] font-bold">N/A</span>
            </div>
          )}
        </div>

        {/* Song Info - Stacked next to art */}
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <div
              className={`w-2 h-2 rounded-full border border-black ${
                isPlaying ? "bg-green-400 animate-pulse" : "bg-gray-300"
              }`}
            />
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gray-500">
              {isPlaying ? "Live" : "Offline"}
            </span>
          </div>

          <h4 className="font-black text-sm truncate uppercase tracking-tighter leading-tight">
            {isPlaying ? songTitle : "Silence"}
          </h4>
          <p className="text-xs font-bold text-gray-600 truncate italic">
            {isPlaying ? artist : "No active stream"}
          </p>
        </div>
      </div>
    </WindowCard>
  );
};

export default SpotifyCard;