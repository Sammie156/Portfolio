import AnimatedGrid from "../components/AnimatedGrid";
import Hero from "../components/Hero";
import WindowCard from "../components/WindowCard";

function Home() {
  return (
    <main className="min-h-screen w-full pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <Hero />
      </div>

      <div className="flex border-l-2 border-t-2 border-black mb-16 bg-white shadow-hard">
        {["Projects", "Blog", "Skills", "Contact"].map((item) => (
          <button
            key={item}
            className="flex-1 p-4 border-r-2 border-b-2 border-black font-bold hover:bg-black hover:text-white transition-all group flex justify-between items-center"
          >
            {item}
            <span className="group-hover:rotate-45 transition-transform">
              ↗
            </span>
          </button>
        ))}
      </div>
    </main>
  );
}

export default Home;
