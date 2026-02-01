const Navbar = () => {
  const navItems = [
    { name: "Projects", path: "#projects" },
    { name: "Blog", path: "/blogs" }, // Change this to your new route
    { name: "Creations", path: "#creations" },
    { name: "Contact Me", path: "#contact-me" },
  ];

  return (
    <nav className="sticky top-0 z-[100] w-full bg-[#c4c4c4] border-b-4 border-black px-4 py-3 flex items-center justify-between shadow-[0_4px_0_0_rgba(0,0,0,1)]">
      <div className="flex items-center gap-2 group cursor-pointer">
        <span className="font-black text-lg hidden sm:block uppercase tracking-tighter">
          <a href="/">
            Sammie156's Portfolio
          </a>
        </span>
      </div>

      {/* Right: Menu Items */}
      <div className="flex items-center">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.path}
            className={`px-4 py-1 font-bold text-md hover:underline decoration-2 underline-offset-4 
              hidden md:block text-black`}
          >
            {item.name}
          </a>
        ))}

        {/* Mobile Menu Icon */}
        <button className="md:hidden w-8 h-8 flex flex-col justify-around p-1 border-2 border-black bg-white">
          <div className="w-full h-1 bg-black"></div>
          <div className="w-full h-1 bg-black"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;