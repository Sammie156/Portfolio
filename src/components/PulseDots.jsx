const PulseDots = ({bg_color}) => {
  return (
    <div className={`absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#${bg_color}]`}>
      <div 
        className="absolute inset-0 w-full h-full animate-wave-shift"
        style={{
          /* Creates the dot grid pattern as a background */
          backgroundImage: 'radial-gradient(white 2px, transparent 0)',
          backgroundSize: '32px 32px',
          /* The Mask creates the "wave" visibility */
          maskImage: 'linear-gradient(45deg, rgba(0,0,0,0.2) 25%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.2) 75%)',
          WebkitMaskImage: 'linear-gradient(45deg, rgba(0,0,0,0.2) 25%, rgba(0,0,0,1) 50%, rgba(0,0,0,0.2) 75%)',
          maskSize: '400% 400%',
          WebkitMaskSize: '400% 400%',
        }}
      />

      <style jsx>{`
        @keyframes wave-shift {
          0% { mask-position: 100% 100%; -webkit-mask-position: 100% 100%; }
          100% { mask-position: 0% 0%; -webkit-mask-position: 0% 0%; }
        }
        .animate-wave-shift {
          animation: wave-shift 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PulseDots;
