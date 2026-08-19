function ProjectCard({ title, description }) {
  return (
    <div className="rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg hover:border-b-blue-600">
      <h3 className="text-xl font-bold">{title}</h3>

      <p className="mt-3 text-gray-600">{description}</p>
    </div>
  );
}

export default ProjectCard;
