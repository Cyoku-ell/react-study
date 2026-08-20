import ProjectCard from "./projectcard";
import plnImage from "../assets/logo-pln-removebg-preview.png";
import comtImage from "../assets/comtelindo.png";
import pitaImage from "../assets/pita.png";

function Projects() {
  const projects = [
    {
      title: "PLN Certificate Website",
      description: "Certificate management system.",
      image: plnImage, 
      tech: ["Laravel", "JavaScript", "MySQL", "Tailwind"],
    },

    {
      title: "Comtelindo provider Website",
      description: "Tracking and validation system.",
      image: comtImage,
      tech: ["Laravel", "JavaScript", "MySQL", "Tailwind"],
    },

    {
      title: "More >>",
      description: "My personal portfolio.",
      image: pitaImage,
      tech: ["React", "Tailwind"],
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
              image={project.image}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
