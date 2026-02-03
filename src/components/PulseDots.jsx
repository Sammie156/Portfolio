const PulseDots = ({bg_color}) => {
  const dots = Array.from({ length: 900 });

  return (
    <div className={`absolute inset-0 z-0 pointer-events-none p-2 overflow-hidden bg-[#${bg_color}]`}>
      <div
        className="grid w-full h-full"
        style={{
          gridTemplateColumns: "repeat(45, 1fr)",
          gridTemplateRows: "repeat(20, 1fr)",
          gap: "2px",
        }}
      >
        {dots.map((_, i) => {
          const row = Math.floor(i / 45);
          const col = i % 45;
          // Using a slightly longer delay spread for a more fluid "liquid" wave
          const delay = (row + col) * 0.1;

          return (
            <div key={i} className="flex items-center justify-center">
              <div
                className="w-[1px] h-[1px] bg-black rounded-full"
                style={{
                  animation: "smooth-wave 3s infinite ease-in-out",
                  animationDelay: `${delay}s`,
                  willChange: "transform, opacity", // GPU optimization
                }}
              />
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes smooth-wave {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.15;
          }
          45%,
          55% {
            transform: scale(3.5); /* Soft peak */
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};

export default PulseDots;
