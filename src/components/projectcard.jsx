function ProjectCard({ title, description }) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-white/10">
      <div className="mb-6 flex h-40 items-center justify-center rounded-xl bg-slate-900">
        <span className="text-sm text-slate-500">Project Image</span>
      </div>

      <h3 className="text-xl font-bold transition group-hover:text-blue-400">
        {title}
      </h3>

      <p className="mt-3 leading-relaxed text-slate-400">{description}</p>

      <button className="mt-6 text-sm font-medium text-blue-400 transition hover:text-blue-300">
        View Project →
      </button>
    </article>
  );
}

export default ProjectCard;
