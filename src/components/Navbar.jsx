const Navbar = () => {
  const navItems = ["Projects", "Blog", "Creations", "Contact Me"];

  return (
    <nav className="sticky top-0 z-[100] w-full bg-[#c4c4c4] border-black px-4 py-3 flex items-center justify-between shadow-[0_4px_0_0_rgba(0,0,0,1)]">
      <div className="flex items-center gap-2 group cursor-pointer">
        <span className="font-black text-lg hidden sm:block uppercase tracking-tighter">
          Sammie156's Portfolio
        </span>
      </div>

      {/* Right: Menu Items */}
      <div className="flex items-center">
        {navItems.map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className={`px-4 py-1 font-bold text-md hover:underline decoration-2 underline-offset-4 
              ${index !== navItems.length - 1 ? "border-black" : ""}
              hidden md:block`}
          >
            {item}
          </a>
        ))}

        {/* Mobile Menu Icon (Simple version) */}
        <button className="md:hidden w-8 h-8 flex flex-col justify-around p-1 border-2 border-black">
          <div className="w-full h-1 bg-black"></div>
          <div className="w-full h-1 bg-black"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
