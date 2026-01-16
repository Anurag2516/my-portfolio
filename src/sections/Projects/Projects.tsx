import { projectsData, type ProjectConfig } from "./Projects.data";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const featuredProjects: ProjectConfig[] = projectsData.filter(
    (project) => project.featured === true
  );

  return (
    <section className="max-w-6xl w-full mx-auto mt-16 sm:mt-20 pb-20 sm:pb-28 px-4 sm:px-6">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-2xl sm:text-3xl">Featured Projects</h1>
        <p className="font-normal text-base sm:text-lg text-gray-400">
          A few projects showcasing my approach to modern front-end development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-none md:grid-rows-2 gap-4 pt-8 sm:pt-12">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className={
              project.bentoVertical === true ? "md:row-span-2" : "md:row-span-1"
            }
          >
            <ProjectsCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
