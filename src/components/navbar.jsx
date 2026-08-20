function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">
          Portofl<span className="text-blue-500">.</span>
        </h1>

        <div className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#home" className="transition hover:text-blue-400">
            Home
          </a>

          <a href="#about" className="transition hover:text-blue-400">
            About
          </a>

          <a href="#projects" className="transition hover:text-blue-400">
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
