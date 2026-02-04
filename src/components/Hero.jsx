import heroImage from "../assets/Sam_Pic.jpeg";

const Hero = () => {
  return (
    <section className="py-20 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="flex-1">
        <h1 className="text-7xl font-black sora text-black leading-none mb-4">
          Hello. <br /> I'm Sammie!
        </h1>
        <p className="text-2xl sora-sub font-medium max-w-md border-l-4 font-mono text-black border-black pl-4">
          B. Tech Student and Developer, currently dabbling in low level
          systems.
        </p>
      </div>

      <div
        className="w-64 bg-[#fefefe] border-[5px] border-black shadow-[10px_10px_0px_#000] transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1
                  hover:shadow-[14px_14px_0px_#000] rotate-[-1deg]"
      >
        <div className="p-3 bg-white border-b-[4px] border-black">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full object-contain border-[4px] border-black bg-white contrast-125 brightness-95"
          />
        </div>

        <div className="p-2 text-center border-t-[4px] border-black">
          <span className="font-mono text-xs tracking-wide uppercase">
            Sammie.jpeg
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
