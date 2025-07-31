function Header() {
  return (
    <header className="bg-[#1a1a1a] text-[#f5f5f5] p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold hover:text-[#ff0000]">SD</h1>
      <nav>
        <a href="#about" className="mx-2 hover:text-[#ff0000]">About</a>
        <a href="#projects" className="mx-2 hover:text-[#ff0000]">Projects</a>
        <a href="#blog" className="mx-2 hover:text-[#ff0000] transition-colors duration-150">Kind-A-Blog</a>
      </nav>
    </header>
  );
}
export default Header;