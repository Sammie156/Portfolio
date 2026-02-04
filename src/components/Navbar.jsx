import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  // TODO: Time to make these functional
  const navItems = [
    { name: "Projects", path: "#projects" },
    { name: "Blog", path: "#blogs" },
    { name: "Creations", path: "#creations" },
    { name: "Contact", path: "#contact-me" },
  ];

  const handleDownload = () => {
    window.open("/SamanwayaDatta_Resume.pdf", "_blank");
    setIsCVModalOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-[100] w-full bg-[#D9F99D] border-b-[5px] border-black shadow-[0_4px_0_0_rgba(0,0,0,1)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            className="font-mega text-2xl uppercase tracking-tighter border-[3px] border-black px-4 py-1 bg-black text-white shadow-[4px_4px_0px_#FFDC8B] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#FFDC8B] transition-all"
          >
            Sammie156
          </a>

          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="px-5 py-2 font-black uppercase text-xs tracking-widest border-[3px] border-black bg-white shadow-[4px_4px_0px_#000] hover:bg-[#FFDC8B] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setIsCVModalOpen(true)}
              className="w-12 h-10 border-[3px] border-black bg-white shadow-[3px_3px_0px_#000] flex items-center justify-center font-black text-sm hover:bg-[#A6FAFF] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all"
            >
              CV
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isCVModalOpen && (
          <div className="fixed inset-0 z-[200] grid place-content-center bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="w-[90vw] max-w-md px-8 py-10 bg-white border-4 border-black shadow-[12px_12px_0px_rgba(0,0,0,1)] relative"
            >
              <button
                onClick={() => setIsCVModalOpen(false)}
                className="absolute top-3 right-3 w-8 h-8 border-2 border-black bg-white hover:bg-red-500 hover:text-white transition-colors flex items-center justify-center font-black"
              >
                ✕
              </button>

              <div className="text-center">
                <h2 className="font-mega text-2xl mb-2 uppercase leading-tight">
                  System Request
                </h2>
                <p className="font-mono text-xs mb-8 text-gray-600">
                  FILE: RESUME_SAMMIE_2026.PDF
                </p>

                <div className="flex items-center justify-center gap-8">
                  <button
                    onClick={() => setIsCVModalOpen(false)}
                    className="font-black text-sm uppercase hover:underline decoration-4 underline-offset-4"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleDownload}
                    className="h-14 border-4 border-black px-8 bg-[#A6FAFF] font-black uppercase text-xs shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all rounded-full"
                  >
                    Download Now
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
