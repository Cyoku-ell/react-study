import ProjectCard from "./projectcard";

function Projects() {
  const projects = [
    {
      title: "PLN Certificate Website",
      description: "Certificate management system.",
    },
    {
      title: "Tracking Website",
      description: "Tracking and validation system.",
    },
    {
      title: "Portfolio",
      description: "My personal portfolio.",
    },
  ];

  return (
    <section id="projects" className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-10">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-blue-400">
            My Work
          </p>

          <h2 className="mt-3 text-4xl font-bold">Featured Projects</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
