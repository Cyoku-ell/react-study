function About() {
  return (
    <section id="about" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
          About Me
        </p>

        <h2 className="mt-3 text-4xl font-bold">A little bit about me.</h2>

        <p className="mx-auto mt-6 max-w leading-relaxed text-slate-400 justify-center">
          I'm a vocational high school student who likes web development and
          building things with code.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            PHP
          </span>

          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            JavaScript
          </span>

          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            Laravel
          </span>

          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            React
          </span>

          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            Tailwind CSS
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;
