function Footer() {
  return (
    <footer className="relative bg-black text-white border-t border-white/10">

      {/* Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-white/[0.03]" />

      <div className="relative max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-4 gap-14">

          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-4xl font-serif mb-6 tracking-wide">
              MyBlog
            </h2>

            <p className="text-gray-400 leading-relaxed max-w-md text-lg font-light">
              A premium storytelling platform where readers discover meaningful
              articles and writers share ideas with elegance and clarity.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">

              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition duration-300 cursor-pointer">
                X
              </div>

              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition duration-300 cursor-pointer">
                I
              </div>

              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition duration-300 cursor-pointer">
                F
              </div>

            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="uppercase tracking-[0.25em] text-sm text-gray-500 mb-8">
              Explore
            </h3>

            <div className="space-y-5 text-gray-300">

              <a
                href="/"
                className="block hover:text-white transition duration-300"
              >
                Home
              </a>

              <a
                href="/register"
                className="block hover:text-white transition duration-300"
              >
                Create account
              </a>

              <a
                href="/login"
                className="block hover:text-white transition duration-300"
              >
                Login
              </a>

            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="uppercase tracking-[0.25em] text-sm text-gray-500 mb-8">
              Support
            </h3>

            <div className="space-y-5 text-gray-300">
              <p>support@myblog.com</p>
              <p>Privacy policy</p>
              <p>Terms of service</p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">

          <p>© 2026 MyBlog. All rights reserved.</p>

          <p>Crafted for readers, writers, and storytellers.</p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;