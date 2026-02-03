import React, { useState } from "react";

const Navbar = () => {

  const navItems = [
    { name: "Projects", path: "#projects" },
    { name: "Blog", path: "/blogs" },
    { name: "Creations", path: "#creations" },
    { name: "Contact", path: "#contact-me" },
  ];

  // Function to simulate a system download (CV)
  const handleDownload = () => {
    alert("SYSTEM: Downloading Resume.pdf...");
    // window.open('/path-to-your-cv.pdf', '_blank');
  };

  return (
    <nav className="sticky top-0 z-[100] w-full bg-[#D9F99D] border-b-[5px] border-black shadow-[0_4px_0_0_rgba(0,0,0,1)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LEFT — BRAND */}
        <a
          href="/"
          className="font-black text-2xl uppercase tracking-tighter border-[3px] border-black px-4 py-1 bg-black text-white shadow-[4px_4px_0px_#FFDC8B] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#FFDC8B] transition-all duration-75"
        >
          Sammie156
        </a>

        {/* CENTER — NAV */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="px-5 py-2 font-black uppercase text-xs tracking-widest border-[3px] border-black bg-white shadow-[4px_4px_0px_#000] hover:bg-[#FFDC8B] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[7px_7px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all duration-75"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* RIGHT — FUNCTIONAL BUTTONS */}
        <div className="flex gap-3">
          {/* ACTION 1: CV DOWNLOAD */}
          <button
            onClick={handleDownload}
            title="Download Resume"
            className="hidden sm:flex w-10 h-10 border-[3px] border-black bg-white shadow-[3px_3px_0px_#000] items-center justify-center hover:bg-blue-400 active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all"
          >
            <span className="font-bold">CV</span>
          </button>

          {/* MOBILE MENU */}
          <button className="md:hidden w-10 h-10 border-[3px] border-black bg-white flex flex-col justify-center items-center gap-1 shadow-[3px_3px_0px_#000] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]">
            <div className="w-5 h-1 bg-black" />
            <div className="w-5 h-1 bg-black" />
            <div className="w-5 h-1 bg-black" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
