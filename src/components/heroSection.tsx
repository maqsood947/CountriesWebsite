export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#0f172a] to-[#020617] text-white px-8 py-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="block">ONLINE</span>
            <span className="block text-blue-400">SHOPPING</span>
          </h1>
          <p className="text-gray-300 max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition">
            SEE MORE
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 bg-red-500">
          <img
            src={Globe}
            alt="Shopping illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
