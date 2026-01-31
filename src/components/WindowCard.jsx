import { motion } from "framer-motion";

const WindowCard = ({ filename, children, className = "" }) => {
  return (
    <motion.div
      drag
      dragMomentum={false} // Makes it stop exactly where you let go
      whileDrag={{ scale: 1.02, zIndex: 50 }} // Visual feedback when dragging
      className={`absolute bg-white border-2 border-black shadow-hard ${className}`}
    >
      <div className="cursor-grab active:cursor-grabbing flex items-center justify-between border-b-2 border-black bg-gray-100 p-2">
        <span className="text-xs font-mono font-bold select-none px-4">
          {filename || "untitled.exe"}
        </span>

        <div className="w-10" />

        <div className="flex gap-1.5 ml-2">
          <div className="w-3 h-3 rounded-full border-2 border-black bg-white hover:bg-black transition-all" />
          <div className="w-3 h-3 rounded-full border-2 border-black bg-white hover:bg-black transition-all" />
          <div className="w-3 h-3 rounded-full border-2 border-black bg-white hover:bg-black transition-all" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative">{children}</div>
    </motion.div>
  );
};

export default WindowCard;
