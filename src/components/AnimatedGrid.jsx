import { motion } from "framer-motion";

const AnimatedGrid = () => {
  // Define how many lines to show (adjust based on screen size)
  const horizontalLines = Array.from({ length: 20 });
  const verticalLines = Array.from({ length: 30 });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-white">
      {/* Horizontal Lines */}
      {horizontalLines.map((_, i) => (
        <motion.div
          key={`h-${i}`}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.1 }}
          transition={{
            delay: i * 0.05, // Staggers the appearance
            duration: 0.8,
            ease: "easeOut",
          }}
          className="absolute w-full h-[1px] bg-black origin-left"
          style={{ top: `${(i + 1) * 5}%` }}
        />
      ))}

      {/* Vertical Lines */}
      {verticalLines.map((_, i) => (
        <motion.div
          key={`v-${i}`}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 0.1 }}
          transition={{
            delay: i * 0.05,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="absolute h-full w-[1px] bg-black origin-top"
          style={{ left: `${(i + 1) * 4}%` }}
        />
      ))}
    </div>
  );
};

export default AnimatedGrid;
