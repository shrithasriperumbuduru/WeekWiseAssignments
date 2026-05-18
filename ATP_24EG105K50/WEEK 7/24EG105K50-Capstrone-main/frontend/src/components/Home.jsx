export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Cinematic Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center pt-32">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Content */}
          <div>
            <p className="uppercase tracking-[0.4em] text-sm text-gray-300 mb-6">
              A Premium Reading Experience
            </p>

            <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-8">
              Where stories,
              <br />
              ideas, and voices
              <br />
              come alive.
            </h1>

            <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mb-12 font-light">
              Explore thoughtful articles, timeless literature, and meaningful
              perspectives in a beautifully crafted modern publishing platform.
            </p>

            <div className="flex flex-wrap gap-6">
              <a
                href="/register"
                className="bg-white text-black px-10 py-4 rounded-full text-lg font-medium hover:scale-105 transition duration-300"
              >
                Start Reading
              </a>

              <a
                href="/login"
                className="border border-white/30 px-10 py-4 rounded-full text-lg hover:bg-white/10 transition duration-300"
              >
                Explore Articles
              </a>
            </div>
          </div>

          {/* Right Featured Card */}
          <div className="hidden lg:flex justify-end">
            <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-[40px] p-10 max-w-md shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1974&auto=format&fit=crop"
                alt="Books"
                className="w-full h-64 object-cover rounded-3xl mb-8"
              />

              <p className="uppercase text-sm tracking-[0.3em] text-gray-300 mb-4">
                Featured Story
              </p>

              <h2 className="text-3xl font-serif leading-snug mb-5">
                The timeless beauty of reading and thoughtful writing.
              </h2>

              <p className="text-gray-300 leading-relaxed font-light mb-8">
                Discover curated stories, elegant editorials, and meaningful
                discussions designed for modern readers.
              </p>

              <button className="w-full bg-white text-black py-4 rounded-full text-lg font-medium hover:scale-[1.02] transition duration-300">
                Read Featured Article
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}