const DitheredWave = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#F7CB46]">
      {/* The Dither Layer */}
      <div 
        className="absolute inset-0 w-full h-full opacity-20"
        style={{
          // This creates a 2x2 pixel dither pattern
          backgroundImage: `radial-gradient(black 1px, transparent 0)`,
          backgroundSize: '4px 4px',
          maskImage: 'linear-gradient(to bottom, black, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
          animation: 'dither-sweep 4s infinite ease-in-out'
        }}
      />

      <style jsx>{`
        @keyframes dither-sweep {
          0%, 100% {
            transform: translateY(-10%) skewY(-2deg);
            opacity: 0.1;
          }
          50% {
            transform: translateY(10%) skewY(2deg);
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
};

export default DitheredWave;