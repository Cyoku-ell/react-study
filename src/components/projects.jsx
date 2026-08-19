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
    <section className="px-10 py-20">git 
      <h2 className="mb-10 text-4xl font-bold">My Projects</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
