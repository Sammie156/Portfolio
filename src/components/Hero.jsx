const Hero = () => {
    return (
        <section className="py-20 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1">
                <h1 className="text-7xl font-black leading-none mb-4">
                    Hello! <br /> I'm Sammie!
                </h1>
                <p className="text-xl font-medium max-w-md border-l-4 border-black pl-4">
                    B. Tech Student and Developer, currently dabbling in low level systems.
                </p>
            </div>

            <div className="w-64 h-64 border-2 border-black bg-white shadow-hard-lg flex items-center justify-center p-4">
                <div className="w-full h-full border-2 border-black flex flex-col">
                    <div className="flex-1 flex items-center justify-center border-b-2 border-black">
                        <span className="text-6xl text-black">🍿</span>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;