import { motion } from "framer-motion";

const WindowCard = ({
  filename,
  children,
  className = "",
  windowClass = "bg-gray-100",
  onClose,
}) => {
  return (
    <motion.div
      drag
      dragMomentum={false}
      transition={{duration: 0}}
      // Use whileHover instead of CSS transitions to avoid conflicts
      whileHover={{
        translateX: 4,
        translateY: -4,
        boxShadow: "8px 8px 0px rgba(0,0,0,1)",
      }}
      whileDrag={{
        scale: 1.02,
        zIndex: 50,
        // Disable transitions during drag
        transition: { duration: 0 },
      }}
      // REMOVE 'transition-all' and hover classes from here
      className={`absolute bg-white border-2 border-b-4 border-r-3 border-black shadow-hard ${className}`}
    >
      <div
        className={`flex items-center justify-between border-b-2 border-black ${windowClass} p-2`}
      >
        {/* ... (rest of your header code) */}
        <span className="text-xs font-mono font-bold select-none px-4">
          {filename || "untitled.exe"}
        </span>
        <div className="flex gap-1.5 ml-2">
          <div className="w-3 h-3 rounded-full border-2 border-black bg-white hover:bg-black transition-all cursor-pointer" />
          <div className="w-3 h-3 rounded-full border-2 border-black bg-white hover:bg-black transition-all cursor-pointer" />
          <div
            onClick={onClose}
            className="w-3 h-3 rounded-full border-2 border-black bg-white hover:bg-red-500 transition-all cursor-pointer"
          />
        </div>
      </div>

      <div className="relative">{children}</div>
    </motion.div>
  );
};

export default WindowCard;
