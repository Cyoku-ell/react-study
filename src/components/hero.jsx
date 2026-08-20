import Button from "@mui/material/Button";

function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-73px)] items-center justify-center"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-20 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
          Hello, I'm
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
          Rafael.
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-slate-300 sm:text-3xl">
          Software Engineer
        </h2>

        <p className="mx-auto mt-6 max-w text-lg leading-relaxed text-slate-400">
          I build websites and web applications with modern technologies.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button variant="contained" href="#projects">
            View Projects
          </Button>

          <Button variant="outlined" href="#about">
            About Me
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
