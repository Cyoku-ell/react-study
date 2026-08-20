function ProjectCard({ title, description, image, tech }) {
  return (
    <article className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:bg-white/10">
      <div className="mb-6 flex h-40 items-center justify-center rounded-xl bg-slate-900">
        <img src={image} alt={title} className="h-48 w-full object-cover" />
      </div>

      <h3 className="text-xl font-bold transition group-hover:text-blue-400">
        {title}
      </h3>

      <p className="mt-3 leading-relaxed text-slate-400">{description}</p>
      {tech.map((item) => (
        <span
          key={item}
          className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400"
        >
          {item}
        </span>
      ))}

      <br></br>

      <button className="mt-6 text-sm font-medium text-blue-400 transition hover:text-blue-300 hover:bg-blue-900 hover:rounded-3xl hover:-translate-y-1">
        View Project →
      </button>
    </article>
  );
}

export default ProjectCard;
